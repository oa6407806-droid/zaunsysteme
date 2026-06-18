import { ArrowLeft, Images, Mail } from "lucide-react";

const projects = [
  "/images/photo7.jpeg",
  "/images/photo8.jpeg",
  "/images/photo9.jpeg",
  "/images/photo10.jpeg",
  "/images/photo11.jpeg",
  "/images/photo12.jpeg",
  "/images/photo13.jpeg",
  "/images/photo14.jpeg",
  "/images/photo15.jpeg",
  "/images/photo16.jpeg",
  "/images/photo17.jpeg",
  "/images/photo18.jpeg",
  "/images/photo19.jpeg",
  "/images/photo20.jpeg",
];

export default function ReferenzenPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/images/logo.png"
              alt="A&E Zaun & Torsysteme"
              className="h-14 max-w-[210px] object-contain"
            />
          </a>

          <a
            href="/"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-950 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zur Startseite
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-black text-slate-700">
            <Images className="h-4 w-4" />
            Referenzen
          </div>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
            Unsere erfolgreich
            <br />
            umgesetzten Projekte
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Entdecken Sie weitere echte Projekte von A&E Zaun & Torsysteme:
            moderne Sichtschutzanlagen, Schiebetore, Doppelstabmattenzäune und
            individuelle Zaunlösungen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((image, index) => (
            <article
              key={image}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200"
            >
              <div
                style={{
                  backgroundImage: `url("${image}")`,
                  height: "320px",
                  borderRadius: "1.5rem",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div className="p-4">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-600">
                  Referenzprojekt
                </div>

                <h3 className="mt-2 text-xl font-black text-slate-950">
                  Projekt {index + 1}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Hochwertige Zaun- und Toranlage mit sauberer Montage,
                  langlebigen Materialien und moderner Optik.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 p-10 text-white shadow-2xl shadow-slate-500/20 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-100">
              <Mail className="h-4 w-4" />
              Kontakt
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Interesse an einem ähnlichen Projekt?
            </h2>

            <p className="mt-5 text-lg font-semibold leading-8 text-slate-100">
              Gerne beraten wir Sie persönlich und erstellen ein unverbindliches
              Angebot für Ihr Zaun- oder Torprojekt.
            </p>

            <a
              href="/#kontakt"
              className="mt-8 inline-flex rounded-2xl bg-slate-950 px-7 py-4 font-black text-white transition hover:bg-slate-800"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}