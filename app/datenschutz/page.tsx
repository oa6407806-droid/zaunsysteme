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
                Linzer Bundesstraße 16, 5020 Salzburg
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
              angegebenen Daten zur Bearbeitung Ihrer Anfrage und für mögliche
              Anschlussfragen verarbeitet. Anfragedaten werden grundsätzlich nur so lange
              gespeichert, wie dies für die Bearbeitung erforderlich ist; längere
              Aufbewahrungsfristen können sich aus gesetzlichen oder vertraglichen Pflichten
              ergeben. Eine Weitergabe erfolgt nur, soweit sie zur Bearbeitung erforderlich
              ist, eine gesetzliche Verpflichtung besteht oder Sie eingewilligt haben.
            </p>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Cookies und externe Dienste
            </h2>

            <div className="mt-6 grid gap-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                Soweit auf dieser Website technisch notwendige Cookies oder vergleichbare
                Technologien eingesetzt werden, dienen diese ausschließlich dem sicheren
                und funktionsfähigen Betrieb der Website.
              </p>

              <p>
                Dienste, die eine Einwilligung erfordern, insbesondere Analyse-,
                Marketing- oder Tracking-Dienste, werden nur auf Grundlage Ihrer zuvor
                erteilten Einwilligung eingesetzt. Eine erteilte Einwilligung kann jederzeit
                mit Wirkung für die Zukunft widerrufen werden.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Hosting und technische Bereitstellung
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-600 sm:text-base">
              Zur sicheren und zuverlässigen Bereitstellung dieser Website werden
              technische Zugriffsdaten verarbeitet. Dazu können insbesondere IP-Adresse,
              Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browser- und
              Geräteinformationen gehören. Soweit hierfür Hosting- oder IT-Dienstleister
              eingesetzt werden, verarbeiten diese Daten ausschließlich im Rahmen der
              gesetzlichen Vorgaben und unserer Weisungen.
            </p>
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
              die jeweiligen Zwecke erforderlich ist oder gesetzliche beziehungsweise
              vertragliche Aufbewahrungspflichten bestehen. Danach werden die Daten
              gelöscht oder anonymisiert, sofern keine weitere rechtliche Grundlage für
              die Verarbeitung besteht.
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
                Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen
                Daten gegen das Datenschutzrecht verstößt, haben Sie das Recht auf
                Beschwerde bei der Österreichischen Datenschutzbehörde, Barichgasse 40–42,
                1030 Wien, E-Mail: dsb@dsb.gv.at.
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

        </div>
      </section>
    </main>
  );
}
