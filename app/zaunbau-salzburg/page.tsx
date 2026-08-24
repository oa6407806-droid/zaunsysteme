import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Zaunbau Salzburg | Zäune planen & montieren",
  description:
    "Zaunbau in Salzburg von A&E: Planung und Montage von Doppelstabmattenzäunen, Sichtschutz, Gartenzäunen, Industrie- und Objektzäunen für Privat und Gewerbe.",
  alternates: {
    canonical: "/zaunbau-salzburg",
  },
  openGraph: {
    title: "Zaunbau Salzburg | Zäune planen & montieren",
    description:
      "Zaunbau in Salzburg von A&E: Planung und Montage von Doppelstabmattenzäunen, Sichtschutz, Gartenzäunen, Industrie- und Objektzäunen für Privat und Gewerbe.",
    url: "/zaunbau-salzburg",
    type: "website",
  },
};

const faqJsonLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Welche Zaunarten montiert A&E in Salzburg?", "acceptedAnswer": {"@type": "Answer", "text": "Unter anderem Doppelstabmattenzäune, Sichtschutz- und Designzäune sowie robuste Objekt- und Industriezäune. Die passende Ausführung wird auf Grundstück und Nutzung abgestimmt."}}, {"@type": "Question", "name": "Kann ein Tor direkt mit dem Zaun geplant werden?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Zaun und Tor gemeinsam zu planen ist sinnvoll, damit Höhe, Farbe, Pfosten, Zufahrt und Technik zusammenpassen."}}, {"@type": "Question", "name": "Arbeitet A&E nur in der Stadt Salzburg?", "acceptedAnswer": {"@type": "Answer", "text": "Der Schwerpunkt liegt auf Salzburg und Umgebung. Je nach Projektumfang sind auch österreichweite Projekte möglich."}}]};
const serviceJsonLd = {"@context": "https://schema.org", "@type": "Service", "name": "Zaunbau Salzburg", "serviceType": "Zaunbau Salzburg", "provider": {"@id": "https://ae-zaun.at/#business"}, "areaServed": {"@type": "City", "name": "Salzburg"}, "url": "https://ae-zaun.at/zaunbau-salzburg", "description": "Zaunbau in Salzburg von A&E: Planung und Montage von Doppelstabmattenzäunen, Sichtschutz, Gartenzäunen, Industrie- und Objektzäunen für Privat und Gewerbe."};

export default function SeoPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
          <a href="/" aria-label="A&E Zaun & Torsysteme Startseite">
            <img src="/images/logo.png" alt="A&E Zaun & Torsysteme" className="h-11 max-w-[180px] object-contain sm:h-14 sm:max-w-[220px]" />
          </a>
          <a href="/" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black shadow-sm transition hover:bg-slate-950 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Startseite
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(148,163,184,.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-700">
            <MapPin className="h-4 w-4" />
            Salzburg & Umgebung
          </div>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.9rem,9vw,6rem)] font-black leading-[0.92] tracking-[-0.065em] text-slate-950">
            Zaunbau Salzburg – moderne Zäune sauber geplant und montiert.
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-slate-600 sm:text-xl">
            A&E Zaun & Torsysteme realisiert Zaunanlagen in Salzburg und Umgebung – von der privaten Grundstückseinfriedung bis zur robusten Lösung für Gewerbe und Industrie.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/#kontakt" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-slate-800">
              Kostenloses Angebot anfragen
            </a>
            <a href="tel:+436769752166" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 font-black text-slate-950">
              <Phone className="mr-2 h-5 w-5" />
              +43 676 9752166
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-slate-700" />
              <div className="mt-3 font-black text-slate-950">Beratung &amp; Aufmaß</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-slate-700" />
              <div className="mt-3 font-black text-slate-950">Lieferung &amp; Montage</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-slate-700" />
              <div className="mt-3 font-black text-slate-950">Privat &amp; Gewerbe</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-slate-700" />
              <div className="mt-3 font-black text-slate-950">Salzburg &amp; Umgebung</div>
            </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Zaunlösungen passend zu Grundstück und Nutzung</h2>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Ein guter Zaun muss mehr können als nur eine Grenze markieren. Höhe, Material, Pfostenabstände, Gelände, Sichtschutz und Zugänge sollten von Anfang an zusammenpassen. Deshalb planen wir Zaunanlagen nicht nach Schema F, sondern passend zum Objekt und zur gewünschten Nutzung.</p>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">In Salzburg setzen wir unter anderem Doppelstabmattenzäune, Sichtschutzlösungen, Garten- und Objektzäune sowie robuste Einfriedungen für gewerbliche Flächen um.</p>
          <ul className="mt-5 grid gap-3 text-[15px] font-semibold leading-7 text-slate-700 sm:grid-cols-2 sm:text-base">
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Doppelstabmattenzäune</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Sichtschutz- und Designzäune</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Garten- und Grundstückszäune</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Industrie- und Objektzäune</span></li>
          </ul>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Von der Anfrage bis zur fertigen Zaunanlage</h2>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Für eine erste Einschätzung reichen meist Standort, ungefähre Länge und Höhe sowie ein paar Fotos. Danach klären wir Ausführung, Farbe, Gelände, Tore und technische Details. Bei Bedarf erfolgt ein genaues Aufmaß vor Ort.</p>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Anschließend erhalten Sie ein transparentes Angebot. Lieferung und Montage werden so geplant, dass die Anlage stabil, sauber ausgerichtet und optisch stimmig ausgeführt wird.</p>
          <ul className="mt-5 grid gap-3 text-[15px] font-semibold leading-7 text-slate-700 sm:grid-cols-2 sm:text-base">
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Klare Abstimmung vor Beginn</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Passende Fundament- und Pfostenlösung</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Saubere Ausrichtung</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Tor und Zaun aus einer Hand</span></li>
          </ul>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Zaunbau für Salzburg und österreichweite Projekte</h2>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Unser Standort ist Salzburg. Dadurch sind kurze Abstimmungen und regionale Projekte besonders gut umsetzbar. Je nach Projektumfang übernehmen wir auch Zaun- und Torprojekte in anderen Teilen Österreichs.</p>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Wenn Sie nicht sicher sind, welche Zaunart zu Ihrem Grundstück passt, beraten wir Sie zu Optik, Stabilität, Sichtschutz und sinnvollen Torlösungen.</p>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">Häufige Fragen</h2>
          <div className="mt-7 grid gap-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-950">Welche Zaunarten montiert A&amp;E in Salzburg?</h3>
            <p className="mt-3 leading-7 text-slate-600">Unter anderem Doppelstabmattenzäune, Sichtschutz- und Designzäune sowie robuste Objekt- und Industriezäune. Die passende Ausführung wird auf Grundstück und Nutzung abgestimmt.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-950">Kann ein Tor direkt mit dem Zaun geplant werden?</h3>
            <p className="mt-3 leading-7 text-slate-600">Ja. Zaun und Tor gemeinsam zu planen ist sinnvoll, damit Höhe, Farbe, Pfosten, Zufahrt und Technik zusammenpassen.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-950">Arbeitet A&amp;E nur in der Stadt Salzburg?</h3>
            <p className="mt-3 leading-7 text-slate-600">Der Schwerpunkt liegt auf Salzburg und Umgebung. Je nach Projektumfang sind auch österreichweite Projekte möglich.</p>
          </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-200">
            <Mail className="h-4 w-4" />
            Persönliche Beratung
          </div>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Zaunprojekt in Salzburg geplant?</h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            Senden Sie uns Maße, Standort und gewünschte Ausführung. Wir melden uns zur Abstimmung und erstellen ein nachvollziehbares Angebot.
          </p>
          <a href="/#kontakt" className="mt-7 inline-flex rounded-2xl bg-white px-6 py-4 font-black text-slate-950">
            Anfrage senden
          </a>
        </div>
      </section>
    </main>
  );
}
