import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Sichtschutz Salzburg | Moderne Sichtschutzzäune",
  description:
    "Sichtschutz in Salzburg: moderne Sichtschutzzäune und Zaunlösungen für Garten, Terrasse und Grundstück. Planung und Montage durch A&E Zaun & Torsysteme.",
  alternates: {
    canonical: "/sichtschutz-salzburg",
  },
  openGraph: {
    title: "Sichtschutz Salzburg | Moderne Sichtschutzzäune",
    description:
      "Sichtschutz in Salzburg: moderne Sichtschutzzäune und Zaunlösungen für Garten, Terrasse und Grundstück. Planung und Montage durch A&E Zaun & Torsysteme.",
    url: "/sichtschutz-salzburg",
    type: "website",
  },
};

const faqJsonLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Welche Höhe ist für Sichtschutz sinnvoll?", "acceptedAnswer": {"@type": "Answer", "text": "Das hängt von Grundstück, gewünschter Privatsphäre und den örtlichen Rahmenbedingungen ab. Wir stimmen die passende Höhe mit Ihnen ab."}}, {"@type": "Question", "name": "Kann Sichtschutz mit einem bestehenden Zaun kombiniert werden?", "acceptedAnswer": {"@type": "Answer", "text": "Je nach Bestand ist eine Kombination oder Erweiterung möglich. Vorher sollte geprüft werden, ob Pfosten und Befestigung dafür geeignet sind."}}, {"@type": "Question", "name": "Montiert A&E Sichtschutz auch rund um Terrassen oder Pools?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Sichtschutzlösungen können für Garten, Terrasse, Poolbereich und Grundstücksgrenzen geplant werden."}}]};
const serviceJsonLd = {"@context": "https://schema.org", "@type": "Service", "name": "Sichtschutz Salzburg", "serviceType": "Sichtschutz Salzburg", "provider": {"@id": "https://ae-zaun.at/#business"}, "areaServed": {"@type": "City", "name": "Salzburg"}, "url": "https://ae-zaun.at/sichtschutz-salzburg", "description": "Sichtschutz in Salzburg: moderne Sichtschutzzäune und Zaunlösungen für Garten, Terrasse und Grundstück. Planung und Montage durch A&E Zaun & Torsysteme."};

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
            Sichtschutz Salzburg – mehr Privatsphäre mit moderner Optik.
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-slate-600 sm:text-xl">
            Sichtschutz soll abschirmen, ohne das Grundstück schwer wirken zu lassen. Wir planen Lösungen für Garten, Terrasse, Poolbereich und Grundstücksgrenzen.
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
              <div className="mt-3 font-black text-slate-950">Mehr Privatsphäre</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-slate-700" />
              <div className="mt-3 font-black text-slate-950">Moderne Optik</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-slate-700" />
              <div className="mt-3 font-black text-slate-950">Garten &amp; Terrasse</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-slate-700" />
              <div className="mt-3 font-black text-slate-950">Montage vom Profi</div>
            </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Sichtschutz passend zu Haus und Garten</h2>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Ein Sichtschutzzaun beeinflusst die Wirkung eines Grundstücks deutlich. Deshalb achten wir nicht nur auf Blickdichte, sondern auch auf Höhe, Linienführung, Farbe und die vorhandene Architektur.</p>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Je nach Situation kann eine eigenständige Sichtschutzanlage sinnvoll sein oder eine Kombination mit bestehenden beziehungsweise neuen Zaunelementen.</p>
          <ul className="mt-5 grid gap-3 text-[15px] font-semibold leading-7 text-slate-700 sm:grid-cols-2 sm:text-base">
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Sichtschutz für Grundstücksgrenzen</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Lösungen für Terrasse und Garten</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Kombination mit Doppelstabmattenzaun</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Sichtschutz rund um Poolbereiche</span></li>
          </ul>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Stabilität und Pflege von Anfang an mitdenken</h2>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Geschlossene oder weitgehend blickdichte Elemente sind stärker dem Wind ausgesetzt als offene Zaunanlagen. Eine passende Befestigung und solide Pfosten- beziehungsweise Fundamentlösung ist deshalb besonders wichtig.</p>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Wir berücksichtigen diese Punkte bereits bei Planung und Montage, damit der Sichtschutz nicht nur gut aussieht, sondern auch dauerhaft stabil ausgeführt ist.</p>
          <ul className="mt-5 grid gap-3 text-[15px] font-semibold leading-7 text-slate-700 sm:grid-cols-2 sm:text-base">
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Standort und Windlast beachten</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Solide Pfosten und Fundamente</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Passende Höhe wählen</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" /><span>Zugänge und Tore integrieren</span></li>
          </ul>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Sichtschutz in Salzburg individuell planen</h2>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Fotos vom Grundstück, ungefähre Länge und gewünschte Höhe reichen für eine erste Einschätzung. Danach können wir gemeinsam klären, welche Ausführung zum Objekt passt und ob zusätzliche Tore oder Zaunabschnitte benötigt werden.</p>
          <p className="mt-4 text-[16px] leading-8 text-slate-600 sm:text-lg">Auf unserer Referenzseite finden Sie bereits verschiedene Sichtschutz- und Zaunprojekte als Orientierung.</p>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">Häufige Fragen</h2>
          <div className="mt-7 grid gap-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-950">Welche Höhe ist für Sichtschutz sinnvoll?</h3>
            <p className="mt-3 leading-7 text-slate-600">Das hängt von Grundstück, gewünschter Privatsphäre und den örtlichen Rahmenbedingungen ab. Wir stimmen die passende Höhe mit Ihnen ab.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-950">Kann Sichtschutz mit einem bestehenden Zaun kombiniert werden?</h3>
            <p className="mt-3 leading-7 text-slate-600">Je nach Bestand ist eine Kombination oder Erweiterung möglich. Vorher sollte geprüft werden, ob Pfosten und Befestigung dafür geeignet sind.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-950">Montiert A&amp;E Sichtschutz auch rund um Terrassen oder Pools?</h3>
            <p className="mt-3 leading-7 text-slate-600">Ja. Sichtschutzlösungen können für Garten, Terrasse, Poolbereich und Grundstücksgrenzen geplant werden.</p>
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
          <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Mehr Privatsphäre für Ihr Grundstück?</h2>
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
