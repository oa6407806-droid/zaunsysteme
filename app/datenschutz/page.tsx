import { ArrowLeft, Database, LockKeyhole, Mail, ShieldCheck, UserCheck } from "lucide-react";

export default function DatenschutzPage() {
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
          Datenschutz
        </div>

        <h1 className="text-[clamp(2.4rem,9vw,4.8rem)] font-black leading-[0.95] tracking-[-0.06em] text-slate-950">
          Datenschutzerklärung
        </h1>

        <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-600 sm:text-lg">
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten
          personenbezogene Daten ausschließlich auf Grundlage der geltenden
          gesetzlichen Bestimmungen, insbesondere DSGVO und TKG.
        </p>

        <div className="mt-10 grid gap-5">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <UserCheck className="h-6 w-6" />
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Verantwortlicher
            </h2>

            <div className="mt-6 grid gap-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                <strong className="text-slate-950">Verantwortlich für die Datenverarbeitung:</strong>
                <br />
                A&E Zaun & Torsysteme
              </p>

              <p>
                <strong className="text-slate-950">Anschrift:</strong>
                <br />
                BITTE STRASSE, PLZ UND ORT EINTRAGEN
              </p>

              <p>
                <strong className="text-slate-950">Kontakt:</strong>
                <br />
                <a href="mailto:info@ae-zaun.at" className="font-black text-slate-950">
                  info@ae-zaun.at
                </a>
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <Database className="h-6 w-6" />
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Welche Daten verarbeitet werden
            </h2>

            <div className="mt-6 grid gap-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                Wenn Sie über diese Website Kontakt mit uns aufnehmen, können
                insbesondere folgende Daten verarbeitet werden: Name, Telefonnummer,
                E-Mail-Adresse, Projektangaben, Nachrichtentext sowie freiwillig
                übermittelte Informationen.
              </p>

              <p>
                Zusätzlich können beim Besuch der Website technisch notwendige Daten
                verarbeitet werden, zum Beispiel IP-Adresse, Browserinformationen,
                Datum und Uhrzeit des Zugriffs sowie aufgerufene Seiten.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Zweck und Rechtsgrundlage
            </h2>

            <div className="mt-6 grid gap-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage, zur
                Erstellung von Angeboten, zur Kommunikation mit Ihnen und zur
                technischen Bereitstellung dieser Website.
              </p>

              <p>
                Rechtsgrundlagen sind insbesondere die Durchführung vorvertraglicher
                Maßnahmen, die Erfüllung eines Vertrages, berechtigte Interessen
                an einem sicheren und funktionierenden Webauftritt sowie gesetzliche
                Aufbewahrungspflichten.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Kontaktformular und E-Mail-Kontakt
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-600 sm:text-base">
              Wenn Sie per Formular oder E-Mail Kontakt aufnehmen, werden Ihre
              angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall
              von Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne
              Ihre Einwilligung weiter, sofern keine gesetzliche Pflicht oder
              vertragliche Notwendigkeit besteht.
            </p>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Cookies und externe Dienste
            </h2>

            <div className="mt-6 grid gap-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                Diese Website ist als einfache Firmenwebsite vorbereitet. Sollten
                später Analyse-Tools, Tracking, Karten, Videos, Chatdienste oder
                externe Schriftarten eingebunden werden, muss diese Datenschutzerklärung
                entsprechend ergänzt werden.
              </p>

              <p>
                Falls ausschließlich technisch notwendige Cookies verwendet werden,
                dienen diese dem sicheren und funktionsfähigen Betrieb der Website.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <LockKeyhole className="h-6 w-6" />
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Speicherdauer
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-600 sm:text-base">
              Personenbezogene Daten werden nur so lange gespeichert, wie dies für
              die jeweiligen Zwecke erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen. Anfragedaten werden gelöscht, sobald
              sie für die Bearbeitung nicht mehr erforderlich sind, sofern keine
              gesetzlichen Fristen entgegenstehen.
            </p>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Ihre Rechte
            </h2>

            <div className="mt-6 grid gap-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
                Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und
                Widerspruch zu.
              </p>

              <p>
                Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
                Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche
                verletzt worden sind, können Sie sich bei der zuständigen
                Aufsichtsbehörde beschweren. In Österreich ist dies die
                Datenschutzbehörde.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Kontakt für Datenschutzfragen
            </h2>

            <p className="mt-6 flex items-center gap-3 text-[15px] leading-7 text-slate-600 sm:text-base">
              <Mail className="h-5 w-5 text-slate-600" />
              <a href="mailto:info@ae-zaun.at" className="font-black text-slate-950">
                info@ae-zaun.at
              </a>
            </p>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight">
              Wichtiger Hinweis
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-300 sm:text-base">
              Diese Datenschutzerklärung ist eine vorbereitete technische Vorlage.
              Sie muss vor Veröffentlichung an die tatsächlichen Funktionen der
              Website, verwendete Dienste, Hosting, Cookies und Unternehmensdaten
              angepasst werden.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
