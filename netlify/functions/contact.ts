import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  service?: string;
  message?: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmails = (process.env.CONTACT_TO_EMAIL || "info@ae-zaun.at,jimmy091286@gmail.com")
  .split(",")
  .map((email) => email.trim())
  .filter(Boolean);

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async (request: Request) => {
  try {
    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Methode nicht erlaubt." }),
        {
          status: 405,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const body = (await request.json()) as ContactPayload;

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const location = clean(body.location);
    const service = clean(body.service);
    const message = clean(body.message);

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Bitte Name, E-Mail und Nachricht ausfüllen." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!supabaseUrl || !supabaseAnonKey) {
      return new Response(
        JSON.stringify({ error: "Supabase Umgebungsvariablen fehlen." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { error: dbError } = await supabase.from("contact_requests").insert({
      name,
      email,
      phone: phone || null,
      location: location || null,
      service: service || null,
      message,
      status: "new",
    });

    if (dbError) {
      console.error("Supabase contact insert error:", dbError);

      return new Response(
        JSON.stringify({ error: "" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({
          success: true,
          warning:
            "Anfrage gespeichert, aber RESEND_API_KEY fehlt. E-Mail wurde nicht gesendet.",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const resend = new Resend(resendApiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safeLocation = escapeHtml(location || "-");
    const safeService = escapeHtml(service || "-");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error: mailError } = await resend.emails.send({
      from: "A&E Zaun & Torsysteme <info@ae-zaun.at>",
      to: contactToEmails,
      replyTo: email,
      subject: `Neue Website-Anfrage: ${name}${service ? ` – ${service}` : ""}`,
      text: [
        "Neue Anfrage über ae-zaun.at",
        "",
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone || "-"}`,
        `Ort / PLZ: ${location || "-"}`,
        `Leistung: ${service || "-"}`,
        "",
        "Nachricht:",
        message,
      ].join("\n"),
      html: `
        <div style="margin:0;padding:32px 16px;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#0f172a">
          <div style="max-width:680px;margin:0 auto;overflow:hidden;border:1px solid #e2e8f0;border-radius:24px;background:#ffffff;box-shadow:0 14px 40px rgba(15,23,42,.08)">
            <div style="padding:28px 30px;background:#0f172a;color:#ffffff">
              <div style="font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#cbd5e1">A&E Zaun & Torsysteme</div>
              <h1 style="margin:10px 0 0;font-size:28px;line-height:1.15">Neue Website-Anfrage</h1>
              <p style="margin:10px 0 0;color:#cbd5e1;line-height:1.6">Eine neue Anfrage wurde über ae-zaun.at übermittelt.</p>
            </div>

            <div style="padding:28px 30px">
              <div style="padding:20px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:18px">
                <p style="margin:0 0 10px"><strong>Name:</strong> ${safeName}</p>
                <p style="margin:0 0 10px"><strong>E-Mail:</strong> <a href="mailto:${safeEmail}" style="color:#0f172a">${safeEmail}</a></p>
                <p style="margin:0 0 10px"><strong>Telefon:</strong> ${safePhone}</p>
                <p style="margin:0 0 10px"><strong>Ort / PLZ:</strong> ${safeLocation}</p>
                <p style="margin:0"><strong>Leistung:</strong> ${safeService}</p>
              </div>

              <div style="margin-top:20px">
                <div style="margin-bottom:8px;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#64748b">Nachricht</div>
                <div style="padding:20px;background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;line-height:1.7">${safeMessage}</div>
              </div>

              <div style="margin-top:22px;padding:16px 18px;border-radius:14px;background:#ecfdf5;color:#065f46;font-size:14px;line-height:1.6">
                Einfach auf diese E-Mail antworten – die Antwort geht direkt an ${safeName}.
              </div>

              <p style="margin:22px 0 0;color:#64748b;font-size:12px;line-height:1.6">Die Anfrage wurde zusätzlich in Supabase gespeichert.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (mailError) {
      console.error("Resend mail error:", mailError);

      return new Response(
        JSON.stringify({
          error:
            "Die Anfrage wurde gespeichert, aber die E-Mail konnte nicht gesendet werden. Bitte Resend prüfen.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { error: confirmationError } = await resend.emails.send({
      from: "A&E Zaun & Torsysteme <info@ae-zaun.at>",
      to: [email],
      replyTo: "info@ae-zaun.at",
      subject: "Wir haben Ihre Anfrage erhalten – A&E Zaun & Torsysteme",
      text: [
        `Hallo ${name},`,
        "",
        "vielen Dank für Ihre Anfrage bei A&E Zaun & Torsysteme.",
        "Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich persönlich bei Ihnen.",
        "",
        `Leistung: ${service || "-"}`,
        `Ort / PLZ: ${location || "-"}`,
        "",
        "Ihre Nachricht:",
        message,
        "",
        "Freundliche Grüße",
        "A&E Zaun & Torsysteme",
        "info@ae-zaun.at",
        "+43 676 9752166",
      ].join("\n"),
      html: `
        <div style="margin:0;padding:32px 16px;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#0f172a">
          <div style="max-width:680px;margin:0 auto;overflow:hidden;border:1px solid #e2e8f0;border-radius:24px;background:#ffffff;box-shadow:0 14px 40px rgba(15,23,42,.08)">
            <div style="padding:30px;background:#0f172a;color:#ffffff">
              <div style="font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#cbd5e1">A&E Zaun & Torsysteme</div>
              <h1 style="margin:10px 0 0;font-size:28px;line-height:1.15">Vielen Dank für Ihre Anfrage.</h1>
              <p style="margin:10px 0 0;color:#cbd5e1;line-height:1.6">Wir haben Ihre Nachricht erfolgreich erhalten.</p>
            </div>

            <div style="padding:30px">
              <p style="margin:0;font-size:17px;line-height:1.8">Hallo ${safeName},</p>
              <p style="margin:14px 0 0;font-size:16px;line-height:1.8;color:#334155">
                vielen Dank für Ihr Interesse an A&E Zaun & Torsysteme. Wir prüfen Ihre Angaben und melden uns schnellstmöglich persönlich bei Ihnen.
              </p>

              <div style="margin-top:24px;padding:20px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:18px">
                <div style="font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#64748b">Ihre Anfrage</div>
                <p style="margin:14px 0 8px"><strong>Leistung:</strong> ${safeService}</p>
                <p style="margin:0 0 14px"><strong>Ort / PLZ:</strong> ${safeLocation}</p>
                <div style="padding-top:14px;border-top:1px solid #e2e8f0;line-height:1.7;color:#334155">${safeMessage}</div>
              </div>

              <div style="margin-top:24px;padding:18px 20px;border-radius:18px;background:#0f172a;color:#ffffff">
                <div style="font-weight:800">Sie möchten noch etwas ergänzen?</div>
                <div style="margin-top:7px;color:#cbd5e1;line-height:1.6">Antworten Sie einfach auf diese E-Mail oder erreichen Sie uns unter +43 676 9752166.</div>
              </div>

              <p style="margin:26px 0 0;line-height:1.7;color:#334155">Freundliche Grüße<br><strong>A&E Zaun & Torsysteme</strong><br><a href="mailto:info@ae-zaun.at" style="color:#0f172a">info@ae-zaun.at</a></p>
            </div>
          </div>
        </div>
      `,
    });

    if (confirmationError) {
      console.error("Resend confirmation mail error:", confirmationError);

      return new Response(
        JSON.stringify({
          success: true,
          warning: "Anfrage gespeichert und intern versendet, aber die Bestätigungsmail an den Kunden konnte nicht gesendet werden.",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return new Response(
      JSON.stringify({ error: "Unerwarteter Fehler beim Senden der Anfrage." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};