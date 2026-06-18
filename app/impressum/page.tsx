import { ArrowLeft, Building2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
          <a href="/" className="flex min-w-0 items-center">
            <img
              src="/images/logo.png"
              alt="A&E Zaun & Torsysteme"
              className="h-11 max-w-[170px] object-contain sm:h-14 sm:max-w-[210px]"
            />
          </a>

          <a
            href="/"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-900 shadow-sm transition hover:border-slate-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-700 shadow-sm">
          <ShieldCheck className="h-4 w-4" />
          Rechtliches
        </div>

        <h1 className="text-[clamp(2.4rem,9vw,4.8rem)] font-black leading-[0.95] tracking-[-0.06em] text-slate-950">
          Impressum
        </h1>

        <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-600 sm:text-lg">
          Angaben gemäß den gesetzlichen Informationspflichten für den Webauftritt
          von A&E Zaun & Torsysteme.
        </p>

        <div className="mt-10 grid gap-5">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <Building2 className="h-6 w-6" />
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Unternehmensangaben
            </h2>

            <div className="mt-6 grid gap-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                <strong className="text-slate-950">Firma:</strong>
                <br />
                A&E Zaun & Torsysteme
              </p>

              <p>
                <strong className="text-slate-950">Inhaber / Betreiber:</strong>
                <br />
                BITTE ECHTEN NAMEN EINTRAGEN
              </p>

              <p>
                <strong className="text-slate-950">Rechtsform:</strong>
                <br />
                BITTE ERGÄNZEN, z.B. Einzelunternehmen, GmbH, OG
              </p>

              <p>
                <strong className="text-slate-950">Sitz / Anschrift:</strong>
                <br />
                BITTE STRASSE, PLZ UND ORT EINTRAGEN
              </p>

              <p>
                <strong className="text-slate-950">Unternehmensgegenstand:</strong>
                <br />
                Zaunbau, Torsysteme, Sichtschutz, Montage und damit verbundene Dienstleistungen.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Kontakt
            </h2>

            <div className="mt-6 grid gap-4">
              <a
                href="tel:+436769752166"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-black text-slate-900"
              >
                <Phone className="h-5 w-5 text-slate-600" />
                +43 676 9752166
              </a>

              <a
                href="mailto:info@ae-zaun.at"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-black text-slate-900"
              >
                <Mail className="h-5 w-5 text-slate-600" />
                info@ae-zaun.at
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-black text-slate-900">
                <MapPin className="h-5 w-5 text-slate-600" />
                Salzburg / Österreich
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Register, Behörde und Berufsangaben
            </h2>

            <div className="mt-6 grid gap-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                <strong className="text-slate-950">Firmenbuchnummer:</strong>
                <br />
                BITTE EINTRAGEN ODER „nicht im Firmenbuch eingetragen“
              </p>

              <p>
                <strong className="text-slate-950">UID-Nummer:</strong>
                <br />
                BITTE EINTRAGEN, falls vorhanden
              </p>

              <p>
                <strong className="text-slate-950">GISA-Zahl / Gewerbeberechtigung:</strong>
                <br />
                BITTE EINTRAGEN, falls vorhanden
              </p>

              <p>
                <strong className="text-slate-950">Zuständige Aufsichtsbehörde:</strong>
                <br />
                BITTE EINTRAGEN, z.B. Bezirkshauptmannschaft / Magistrat
              </p>

              <p>
                <strong className="text-slate-950">Mitgliedschaft:</strong>
                <br />
                Wirtschaftskammer Österreich, zuständige Fachgruppe bitte ergänzen.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Haftung für Inhalte und Links
            </h2>

            <div className="mt-6 grid gap-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                übernehmen wir jedoch keine Gewähr.
              </p>

              <p>
                Diese Website kann Links zu externen Websites enthalten. Auf deren
                Inhalte haben wir keinen Einfluss. Für fremde Inhalte ist stets
                der jeweilige Anbieter oder Betreiber der verlinkten Seiten verantwortlich.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight">
              Hinweis
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-300 sm:text-base">
              Diese Impressumsseite ist technisch vorbereitet. Die rechtlich
              verpflichtenden Unternehmensdaten müssen vor Veröffentlichung
              vollständig und korrekt ergänzt werden.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
