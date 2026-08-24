import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Tore Salzburg | Schiebe- & Drehtore vom Profi",
  description:
    "Tore in Salzburg: A&E plant und montiert Schiebetore, Drehtore, Gartentore und elektrische Toranlagen passend zu Zaun, Einfahrt und Grundstück.",
  alternates: {
    canonical: "/tore-salzburg",
  },
  openGraph: {
    title: "Tore Salzburg | Schiebe- & Drehtore vom Profi",
    description:
      "Tore in Salzburg: A&E plant und montiert Schiebetore, Drehtore, Gartentore und elektrische Toranlagen passend zu Zaun, Einfahrt und Grundstück.",
    url: "/tore-salzburg",
    type: "website",
  },
};

const faqJsonLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Baut ihr in Salzburg auch elektrische Tore?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Schiebe- und Drehtore können je nach Anlage mit Elektroantrieb geplant beziehungsweise entsprechend vorbereitet werden."}}, {"@type": "Question", "name": "Was ist besser: Schiebetor oder Drehtor?", "acceptedAnswer": {"@type": "Answer", "text": "Das hängt vor allem von Platz, Gefälle, Einfahrtsbreite und gewünschter Nutzung ab. Wir prüfen gemeinsam, welche Lösung für das Grundstück sinnvoller ist."}}, {"@type": "Question", "name": "Kann das Tor farblich zum Zaun passen?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Eine gemeinsame Planung von Zaun und Tor ermöglicht eine stimmige Höhe, Farbe und Linienführung."}}]};
const serviceJsonLd = {"@context": "https://schema.org", "@type": "Service", "name": "Tore Salzburg", "serviceType": "Tore Salzburg", "provider": {"@id": "https://ae-zaun.at/#business"}, "areaServed": {"@type": "City", "name": "Salzburg"}, "url": "https://ae-zaun.at/tore-salzburg", "description": "Tore in Salzburg: A&E plant und montiert Schiebetore, Drehtore, Gartentore und elektrische Toranlagen passend zu Zaun, Einfahrt und Grundstück."};

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
            Tore Salzburg – Schiebe-, Dreh- und Gartentore passend zur Einfahrt.
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-slate-600 sm:text-xl">
            Von der einfachen Zugangslösung bis zur elektrischen Einfahrt: Wir planen Toranlagen so, dass Optik, Bedienung und Zaunanlage zusammenpassen.
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
              <div className="mt-3 font-black text-slate-950">Schiebetore</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-slate-700" />
              <div className="mt-3 font-black text-slate-950">Dreh- &amp; Gartentore</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-slate-700" />
              <div className="mt-3 font-black text-slate-950">Elektrische Antriebe</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-slate-700" />
              <div className="mt-3 font-black text-slate-950">Planung &amp; Montage</div>
            </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Welches Tor passt zu Ihrer Einfahrt?</h2>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Die richtige Torart hängt von Platz, Zufahrt, Öffnungsrichtung und gewünschtem Komfort ab. Bei breiten Einfahrten kann ein Schiebetor besonders praktisch sein, während Drehflügeltore bei passenden Platzverhältnissen eine klassische und robuste Lösung darstellen.</p>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Für kleinere Zugänge bieten sich Gartentore an. Auf Wunsch berücksichtigen wir bereits bei der Planung die Vorbereitung für einen elektrischen Antrieb.</p>
          <ul className="mt-5 grid gap-3 text-[15px] font-semibold leading-7 text-slate-700 sm:grid-cols-2 sm:text-base">
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Schiebetore für Einfahrten</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Ein- und zweiflügelige Drehtore</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Gartentore und Personenzugänge</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Vorbereitung für elektrische Antriebe</span></li>
          </ul>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Tor und Zaun gemeinsam planen</h2>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Besonders hochwertig wirkt eine Anlage, wenn Tor, Zaun, Höhe und Farbe von Anfang an aufeinander abgestimmt sind. Auch Pfostenpositionen, Fundamente und die spätere Nutzung der Einfahrt lassen sich so sauber lösen.</p>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">A&amp;E übernimmt deshalb auf Wunsch die komplette Kombination aus Zaun- und Toranlage – von der Beratung bis zur Montage.</p>
          <ul className="mt-5 grid gap-3 text-[15px] font-semibold leading-7 text-slate-700 sm:grid-cols-2 sm:text-base">
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Einheitliche Optik</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Passende Torbreite</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Saubere Fundamentplanung</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Abstimmung mit Sichtschutz</span></li>
          </ul>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Toranlagen für Privat, Gewerbe und Objekte</h2>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Neben privaten Einfahrten planen wir Torlösungen auch für Wohnanlagen, Gewerbeflächen und Objekte. Dort stehen neben der Optik vor allem Zuverlässigkeit, stabile Konstruktion und ein sinnvoller Zugang im Vordergrund.</p>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Senden Sie uns Fotos der Einfahrt und ungefähre Maße. Damit können wir die möglichen Varianten bereits vor einem Vor-Ort-Termin eingrenzen.</p>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">Häufige Fragen</h2>
          <div className="mt-7 grid gap-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-950">Baut ihr in Salzburg auch elektrische Tore?</h3>
            <p className="mt-3 leading-7 text-slate-600">Ja. Schiebe- und Drehtore können je nach Anlage mit Elektroantrieb geplant beziehungsweise entsprechend vorbereitet werden.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-950">Was ist besser: Schiebetor oder Drehtor?</h3>
            <p className="mt-3 leading-7 text-slate-600">Das hängt vor allem von Platz, Gefälle, Einfahrtsbreite und gewünschter Nutzung ab. Wir prüfen gemeinsam, welche Lösung für das Grundstück sinnvoller ist.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-950">Kann das Tor farblich zum Zaun passen?</h3>
            <p className="mt-3 leading-7 text-slate-600">Ja. Eine gemeinsame Planung von Zaun und Tor ermöglicht eine stimmige Höhe, Farbe und Linienführung.</p>
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
          <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Neue Toranlage für Ihre Einfahrt?</h2>
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
