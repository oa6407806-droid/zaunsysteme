import { NextResponse } from "next/server";
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
const contactToEmail = process.env.CONTACT_TO_EMAIL || "oa6407806@gmail.com";

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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const location = clean(body.location);
    const service = clean(body.service);
    const message = clean(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bitte Name, E-Mail und Nachricht ausfüllen." },
        { status: 400 }
      );
    }

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { error: "Supabase Umgebungsvariablen fehlen." },
        { status: 500 }
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

      return NextResponse.json(
        { error: "Die Anfrage konnte nicht gespeichert werden." },
        { status: 500 }
      );
    }

    if (!resendApiKey) {
      return NextResponse.json({
        success: true,
        warning:
          "Anfrage gespeichert, aber RESEND_API_KEY fehlt. E-Mail wurde nicht gesendet.",
      });
    }

    const resend = new Resend(resendApiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safeLocation = escapeHtml(location || "-");
    const safeService = escapeHtml(service || "-");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error: mailError } = await resend.emails.send({
      from: "A&E Zaun Anfrage <onboarding@resend.dev>",
      to: [contactToEmail],
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      text: [
        "Neue Anfrage über die Website",
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
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#ffffff;color:#0f172a">
          <div style="padding:24px;border:1px solid #e2e8f0;border-radius:18px">
            <h1 style="margin:0 0 16px;font-size:24px;line-height:1.2">Neue Anfrage über die Website</h1>

            <div style="margin-top:18px;padding:16px;background:#f8fafc;border-radius:14px">
              <p style="margin:0 0 8px"><strong>Name:</strong> ${safeName}</p>
              <p style="margin:0 0 8px"><strong>E-Mail:</strong> ${safeEmail}</p>
              <p style="margin:0 0 8px"><strong>Telefon:</strong> ${safePhone}</p>
              <p style="margin:0 0 8px"><strong>Ort / PLZ:</strong> ${safeLocation}</p>
              <p style="margin:0"><strong>Leistung:</strong> ${safeService}</p>
            </div>

            <div style="margin-top:18px">
              <h2 style="font-size:16px;margin:0 0 8px">Nachricht</h2>
              <div style="padding:16px;background:#f8fafc;border-radius:14px;line-height:1.6">
                ${safeMessage}
              </div>
            </div>

            <p style="margin-top:20px;color:#64748b;font-size:13px">
              Die Anfrage wurde zusätzlich in Supabase gespeichert.
            </p>
          </div>
        </div>
      `,
    });

    if (mailError) {
      console.error("Resend mail error:", mailError);

      return NextResponse.json(
        {
          error:
            "Die Anfrage wurde gespeichert, aber die E-Mail konnte nicht gesendet werden. Bitte Resend prüfen.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Unerwarteter Fehler beim Senden der Anfrage." },
      { status: 500 }
    );
  }
}