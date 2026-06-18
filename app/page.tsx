"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Fence,
  Hammer,
  Home,
  Mail,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wrench,
  X,
  Zap,
} from "lucide-react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transition-all duration-500 ease-out will-change-transform",
        visible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-4 opacity-0 blur-[1px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

const services = [
  {
    icon: Fence,
    title: "Doppelstabmattenzäune",
    text: "Stabile Zaunsysteme für Privatgrundstücke, Gewerbe und Industrieflächen.",
  },
  {
    icon: Home,
    title: "Sichtschutz & Designzäune",
    text: "Hochwertige Sichtschutzlösungen für Garten, Terrasse und Grundstück.",
  },
  {
    icon: Zap,
    title: "Schiebe- & Drehtore",
    text: "Manuelle oder elektrische Toranlagen mit sauberer Planung und Montage.",
  },
  {
    icon: Building2,
    title: "Industriezäune",
    text: "Robuste Absicherung für Firmen, Hallen, Lagerflächen und sensible Bereiche.",
  },
  {
    icon: Hammer,
    title: "Montage vom Profi",
    text: "Exakte Ausrichtung, saubere Fundamente und zuverlässige Umsetzung vor Ort.",
  },
  {
    icon: Wrench,
    title: "Reparatur & Erweiterung",
    text: "Bestehende Zaunanlagen modernisieren, erweitern oder beschädigte Elemente ersetzen.",
  },
];

const projects = [
  {
    title: "Premium Zaunanlage im Wohnbereich",
    text: "Komfortable Zufahrt mit hochwertiger Torlösung.",
    photo: "photo-1",
  },
  {
    title: "Private Outdoor-Oase",
    text: "Eleganter Sichtschutz mit natürlicher Ausstrahlung für Terrasse, Pool und Garten.",
    photo: "photo-2",
  },
  {
    title: "Schiebetor mit Elektroantrieb",
    text: "Maßgefertigte Toranlage mit laufruhigem Antrieb und zeitlosem Design.",
    photo: "photo-3",
  },
  {
    title: "Architektonischer Designzaun",
    text: "Klare Linien, moderne Akzente und ein hochwertiger Gesamteindruck.",
    photo: "photo-4",
  },
  {
    title: "Premium Objektzaun-System",
    text: "Langlebige Stahlkonstruktion für Wohn- und Gewerbeobjekte.",
    photo: "photo-5",
  },
  {
    title: "Moderne Sichtschutzanlage",
    text: "Großflächige Sichtschutzlösung mit ruhiger, moderner Linienführung.",
    photo: "photo-6",
  },
];

const steps = [
  {
    title: "Anfrage senden",
    text: "Senden Sie uns Ihre Anfrage mit groben Maßen, Standort und gewünschter Ausführung. Fotos oder Skizzen helfen bei der ersten Einschätzung.",
  },
  {
    title: "Beratung & Aufmaß",
    text: "Wir besprechen Material, Höhe, Farbe, Torlösung und technische Details. Bei Bedarf erfolgt ein genaues Aufmaß direkt vor Ort.",
  },
  {
    title: "Transparentes Angebot",
    text: "Sie erhalten ein klares Angebot mit nachvollziehbaren Leistungen, Materialien und Kosten — ohne versteckte Überraschungen.",
  },
  {
    title: "Lieferung & Montage",
    text: "Wir liefern die passenden Elemente und montieren die Anlage sauber, stabil und termingerecht bis zur fertigen Übergabe.",
  },
];

const benefits = [
  "Kostenlose Erstberatung",
  "Saubere und pünktliche Montage",
  "Moderne Materialien",
  "Zaun und Tor aus einer Hand",
  "Privat, Gewerbe und Industrie",
  "Klare Angebote ohne Überraschungen",
];

const faqs = [
  {
    q: "Wie schnell bekomme ich ein Angebot?",
    a: "Nach Ihrer Anfrage melden wir uns rasch und klären Maße, Material, gewünschte Ausführung und Montage. Danach erhalten Sie ein transparentes Angebot.",
  },
  {
    q: "Macht ihr auch elektrische Tore?",
    a: "Ja. Wir planen und montieren Schiebe- und Drehtore auf Wunsch auch mit Elektroantrieb und passender Vorbereitung vor Ort.",
  },
  {
    q: "Kann ich Zaun und Tor gemeinsam bestellen?",
    a: "Ja. Das ist ideal, weil Optik, Höhe, Farbe und Technik von Anfang an perfekt zusammenpassen.",
  },
  {
    q: "Für wen arbeitet A&E Zaun & Torsysteme?",
    a: "Wir arbeiten für Privatkunden, Hausverwaltungen, Gewerbebetriebe, Bauträger und Industriebetriebe.",
  },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showSplash, setShowSplash] = useState(false);
  const [hideSplash, setHideSplash] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("ae-logo-splash-shown");

    if (alreadyShown) {
      return;
    }

    setShowSplash(true);
    sessionStorage.setItem("ae-logo-splash-shown", "true");

    const hideTimer = window.setTimeout(() => {
      setHideSplash(true);
    }, 2300);

    const removeTimer = window.setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 antialiased">
      {showSplash && (
        <div
          className={[
            "fixed inset-0 z-[20000] flex items-center justify-center bg-white transition-all duration-700 ease-out",
            hideSplash ? "pointer-events-none opacity-0" : "opacity-100",
          ].join(" ")}
        >
          <div
            className={[
              "relative flex w-full max-w-[720px] flex-col items-center px-8 transition-all duration-700 ease-out",
              hideSplash ? "scale-95 opacity-0 blur-[2px]" : "scale-100 opacity-100 blur-0",
            ].join(" ")}
          >
            <div className="absolute inset-x-10 top-1/2 -z-10 h-36 -translate-y-1/2 rounded-full bg-slate-200/70 blur-3xl" />

            <img
              src="/images/logo.png"
              alt="A&E Zaun & Torsysteme"
              className="h-auto w-full max-w-[520px] object-contain sm:max-w-[620px]"
            />

            <div className="mt-8 w-full max-w-[280px] overflow-hidden rounded-full bg-slate-200 sm:max-w-[340px]">
              <div className="h-1.5 origin-left animate-[aeSplashLoad_2.3s_ease-in-out_forwards] rounded-full bg-slate-950" />
            </div>


          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes aeSplashLoad {
          0% {
            transform: scaleX(0);
            opacity: 0.45;
          }
          18% {
            opacity: 1;
          }
          72% {
            transform: scaleX(0.82);
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }
      `}</style>

      <header className="fixed left-0 right-0 top-0 z-[9999] border-b border-slate-200/80 bg-white/95 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 lg:px-8 lg:py-4">
          <a href="#" onClick={closeMenu} className="flex min-w-0 items-center">
            <img
              src="/images/logo.png"
              alt="A&E Zaun & Torsysteme"
              className="h-11 max-w-[170px] object-contain sm:h-14 sm:max-w-[210px]"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 lg:flex">
            <a className="transition hover:text-slate-950" href="#leistungen">
              Leistungen
            </a>
            <a className="transition hover:text-slate-950" href="#projekte">
              Projekte
            </a>
            <a className="transition hover:text-slate-950" href="#ablauf">
              Ablauf
            </a>
            <a className="transition hover:text-slate-950" href="#kontakt">
              Kontakt
            </a>
          </nav>

          <a
            href="tel:+436769752166"
            className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800 md:inline-flex"
          >
            Sofort anrufen
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            className="relative z-[10002] flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-950 text-white shadow-lg shadow-slate-300/40 transition active:scale-95 lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden">
            <button
              type="button"
              aria-label="Menü schließen"
              onClick={closeMenu}
              className="fixed inset-0 z-[10000] cursor-default bg-slate-950/25 backdrop-blur-[2px]"
            />

            <div className="fixed left-5 right-5 top-[78px] z-[10001] overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-2xl shadow-slate-950/10 backdrop-blur-xl">
              <nav className="p-2">
                {[
                  ["Leistungen", "#leistungen"],
                  ["Projekte", "#projekte"],
                  ["Ablauf", "#ablauf"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    onClick={closeMenu}
                    href={href}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-black text-slate-950 transition active:scale-[0.99] active:bg-slate-100"
                  >
                    {label}
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </a>
                ))}

                <a
                  onClick={closeMenu}
                  href="#kontakt"
                  className="mt-1 flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3.5 text-[15px] font-black text-white shadow-lg shadow-slate-950/15 transition active:scale-[0.99]"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="h-4 w-4 text-white/80" />
                </a>
              </nav>

              <div className="border-t border-slate-100 px-4 py-3">
                <a
                  onClick={closeMenu}
                  href="tel:+436769752166"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-950"
                >
                  <Phone className="h-4 w-4 text-slate-600" />
                  Sofort anrufen
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="relative isolate overflow-hidden pt-28 sm:pt-36 lg:pt-40">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-70 md:hidden"
          style={{ backgroundImage: 'url("/images/salzburg-hero-mobile.jpeg")' }}
        />
        <div
          className="absolute inset-0 z-0 hidden bg-cover bg-center opacity-65 md:block"
          style={{ backgroundImage: 'url("/images/salzburg-hero-desktop.jpeg")' }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/62 via-slate-50/76 to-slate-50" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.50),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(226,232,240,0.30),transparent_32%)]" />
        <div className="absolute left-1/2 top-0 z-[3] h-[520px] w-[850px] -translate-x-1/2 rounded-full bg-white/35 blur-3xl sm:h-[720px] sm:w-[1000px]" />
        <div className="absolute right-0 top-80 z-[3] h-[260px] w-[260px] rounded-full bg-slate-200/45 blur-3xl sm:h-[360px] sm:w-[360px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1fr_1fr] lg:px-8 lg:pb-28">
          <Reveal>
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-2 text-[12px] font-black text-slate-700 shadow-sm sm:mb-6 sm:px-4 sm:text-sm">
                <Sparkles className="h-4 w-4" />
                Salzburg & Österreich
              </div>

              <h1 className="max-w-4xl text-[clamp(2.8rem,12vw,4.8rem)] font-black leading-[0.92] tracking-[-0.07em] text-slate-950 lg:text-7xl">
                Perfekte Zäune. Perfekt montiert.
              </h1>

              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-600 sm:mt-7 sm:text-xl sm:leading-9">
                A&E Zaun & Torsysteme plant und montiert hochwertige Zäune,
                Sichtschutz, Einfahrtstore und Sicherheitslösungen für Privat,
                Gewerbe und Industrie. Regional verwurzelt. Österreichweit im Einsatz.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
                <a
                  href="#kontakt"
                  className="group inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-[15px] font-black text-white shadow-2xl shadow-slate-400/20 transition hover:bg-slate-800 sm:px-7 sm:text-base"
                >
                  Kostenloses Angebot anfordern
                  <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#projekte"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-[15px] font-black text-slate-950 shadow-sm transition hover:border-slate-300 hover:text-slate-700 sm:px-7 sm:text-base"
                >
                  Projekte ansehen
                </a>
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-3 gap-2.5 sm:mt-10 sm:gap-3">
                {[
                  ["A-Z", "Betreuung"],
                  ["Sauber", "Montage"],
                  ["Regional", "Service"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:rounded-3xl sm:p-4"
                  >
                    <div className="text-xl font-black text-slate-950 sm:text-2xl">{number}</div>
                    <div className="mt-1 text-[11px] font-bold text-slate-500 sm:text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mt-2 lg:mt-0">
              <div className="absolute -inset-4 rounded-[2.3rem] bg-gradient-to-br from-slate-200 to-white blur-2xl sm:-inset-5 sm:rounded-[3rem]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl shadow-slate-200 sm:rounded-[2.5rem] sm:p-3">
                <div
                  className="relative min-h-[390px] overflow-hidden rounded-[1.6rem] bg-cover bg-center sm:min-h-[520px] sm:rounded-[2.2rem]"
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg, rgba(15, 23, 42, 0.04), rgba(15, 23, 42, 0.18)), url("/images/hero-zaun.jpg")',
                  }}
                />
              </div>

              <div className="relative mx-3 -mt-7 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-300/60 sm:mx-8 sm:-mt-8 sm:p-5">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-sm font-black text-slate-950 sm:text-base">Stabil</div>
                    <div className="mt-1 text-[11px] font-bold text-slate-500 sm:text-xs">Montage</div>
                  </div>
                  <div className="border-x border-slate-200">
                    <div className="text-sm font-black text-slate-950 sm:text-base">Modern</div>
                    <div className="mt-1 text-[11px] font-bold text-slate-500 sm:text-xs">Design</div>
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-950 sm:text-base">Wertig</div>
                    <div className="mt-1 text-[11px] font-bold text-slate-500 sm:text-xs">Qualität</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-3 px-5 py-6 sm:grid-cols-2 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8">
            {[
              [BadgeCheck, "Qualitätsmaterial"],
              [Clock3, "Zuverlässige Termine"],
              [Truck, "Lieferung & Montage"],
              [ShieldCheck, "Sichere Systeme"],
            ].map(([Icon, text]) => {
              const I = Icon as typeof BadgeCheck;
              return (
                <div
                  key={text as string}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <I className="h-5 w-5 text-slate-600 sm:h-6 sm:w-6" />
                  <span className="text-sm font-black text-slate-900 sm:text-base">{text as string}</span>
                </div>
              );
            })}
          </div>
        </section>
      </Reveal>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2.5rem] sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="section-badge">
                  <MapPin className="h-4 w-4" />
                  Region & Einsatzgebiet
                </div>

                <h2 className="mt-5 text-[clamp(2rem,7vw,3.6rem)] font-black leading-[1.02] tracking-[-0.05em] text-slate-950">
                  Regional verwurzelt. Österreichweit im Einsatz.
                </h2>

                <p className="mt-5 max-w-2xl text-[16px] leading-8 text-slate-600 sm:text-lg">
                  Von Salzburg aus realisieren wir hochwertige Zaun- und Torlösungen
                  für private Grundstücke, Wohnanlagen, Gewerbeobjekte und Industrieflächen.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Privat", "Garten, Einfahrt & Sichtschutz"],
                  ["Gewerbe", "Objekte, Zufahrten & Lagerflächen"],
                  ["Industrie", "Sicherheit, Stabilität & Funktion"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="text-lg font-black text-slate-950">{title}</div>
                    <div className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="leistungen" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <div className="section-badge">
              <CheckCircle2 className="h-4 w-4" />
              Leistungen
            </div>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.15rem,9vw,4.4rem)] font-black leading-[0.96] tracking-[-0.06em] text-slate-950">
              Alles für Zaun, Tor und Sicherheit aus einer Hand.
            </h2>
            <p className="mt-5 max-w-2xl text-[16px] leading-8 text-slate-600 sm:mt-6 sm:text-lg">
              Von der ersten Beratung bis zur fertigen Montage: klare Planung,
              moderne Materialien und ein Ergebnis, das hochwertig aussieht.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 70}>
                <article className="group rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200 sm:rounded-[2rem] sm:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 sm:mb-7 sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600 sm:mt-4 sm:text-base">{item.text}</p>
                  <div className="mt-5 inline-flex items-center text-sm font-black text-slate-600 sm:mt-7">
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-8">
          <Reveal>
            <div>
              <div className="section-badge">
                <ShieldCheck className="h-4 w-4" />
                Warum A&E
              </div>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.05rem,8vw,4.25rem)] font-black leading-[0.98] tracking-[-0.055em] text-slate-950">
                Der Zaun soll nicht billig wirken. Er soll dein Zuhause aufwerten.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit} delay={index * 60}>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:rounded-3xl sm:p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-600" />
                  <div className="text-[15px] font-black leading-6 text-slate-900 sm:text-base">{benefit}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projekte" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <div className="section-badge">
              <Star className="h-4 w-4" />
              Referenzen
            </div>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.05rem,8vw,4.25rem)] font-black leading-[0.98] tracking-[-0.055em] text-slate-950">
              Moderne Projekte, die sofort Vertrauen schaffen.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 70}>
              <article className="rounded-[1.6rem] border border-slate-200 bg-white p-2.5 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200 sm:rounded-[2rem] sm:p-3">
                <div className={`project-photo ${project.photo}`} />
                <div className="px-2 pb-3 pt-4 sm:p-4">
                  <h3 className="text-lg font-black tracking-tight text-slate-950 sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-slate-600">{project.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center sm:mt-12">
            <a
              href="/referenzen"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-7 py-4 text-[15px] font-black text-white shadow-lg transition hover:bg-slate-800 sm:w-auto sm:px-8 sm:text-base"
            >
              Alle Referenzen ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </section>

      <section id="ablauf" className="bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-8">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/30 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-200">
                <Clock3 className="h-4 w-4" />
                Ablauf
              </div>
              <h2 className="mt-5 text-[clamp(2.25rem,9vw,4.3rem)] font-black leading-[0.98] tracking-[-0.06em]">
                Von der Anfrage bis zur fertigen Anlage.
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-slate-300 sm:mt-6 sm:text-lg">
                Kein Chaos, keine unklaren Kosten: Sie bekommen Beratung, Planung,
                Angebot und Montage sauber aus einer Hand.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:gap-4">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <div className="grid grid-cols-[auto_1fr] gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-4 sm:gap-5 sm:rounded-[2rem] sm:p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-slate-950 sm:h-14 sm:w-14 sm:text-xl">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-black sm:text-2xl">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-400 sm:text-base">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="overflow-hidden rounded-[2rem] bg-slate-800 p-6 text-white shadow-2xl shadow-slate-400/20 sm:rounded-[2.5rem] sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <h2 className="text-[clamp(2rem,8vw,3.7rem)] font-black leading-[1.02] tracking-[-0.045em]">
                Du brauchst einen Zaun, der wirklich hochwertig aussieht?
              </h2>
              <p className="mt-5 text-[16px] font-semibold leading-8 text-slate-100 sm:mt-6 sm:text-lg">
                Dann hol dir ein klares Angebot von A&E Zaun & Torsysteme.
                Für Einfahrt, Garten, Sichtschutz, Gewerbe oder komplette
                Objektabsicherung.
              </p>
              <a
                href="#kontakt"
                className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-white px-7 py-4 text-[15px] font-black text-slate-950 transition hover:bg-slate-100 sm:mt-8 sm:w-auto sm:text-base"
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-8">
          <Reveal>
            <div>
              <div className="section-badge">
                <CheckCircle2 className="h-4 w-4" />
                FAQ
              </div>
              <h2 className="mt-5 text-[clamp(2.05rem,8vw,4.25rem)] font-black leading-[0.98] tracking-[-0.055em] text-slate-950">
                Häufige Fragen.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <Reveal key={faq.q} delay={index * 70}>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:rounded-3xl">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-white sm:px-6"
                    >
                      <span className="text-[17px] font-black leading-6 text-slate-950 sm:text-lg">
                        {faq.q}
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 shadow-sm">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>

                    <div
                      className={[
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-[15px] leading-7 text-slate-600 sm:px-6 sm:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal>
            <div>
              <div className="section-badge">
                <Mail className="h-4 w-4" />
                Kontakt
              </div>
              <h2 className="mt-5 text-[clamp(2.05rem,8vw,4.25rem)] font-black leading-[0.98] tracking-[-0.055em] text-slate-950">
                Anfrage senden und Angebot erhalten.
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-slate-600 sm:mt-6 sm:text-lg">
                Senden Sie uns die wichtigsten Eckdaten zu Ihrem Projekt.
                Wir melden uns schnellstmöglich zur persönlichen Abstimmung.
              </p>

              <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4">
                <a
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 font-black text-slate-900 shadow-sm sm:rounded-3xl sm:p-5"
                  href="tel:+436769752166"
                >
                  <Phone className="h-5 w-5 text-slate-600" />
                  +43 676 9752166
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 font-black text-slate-900 shadow-sm sm:rounded-3xl sm:p-5"
                  href="mailto:info@ae-zaun.at"
                >
                  <Mail className="h-5 w-5 text-slate-600" />
                  info@ae-zaun.at
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 font-black text-slate-900 shadow-sm sm:rounded-3xl sm:p-5">
                  <MapPin className="h-5 w-5 text-slate-600" />
                  Linzer Bundesstraße 16, 5020 Salzburg
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200 sm:rounded-[2.5rem] sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <input className="input" placeholder="Name" />
                <input className="input" placeholder="Telefon" />
              </div>

              <input className="input mt-3 sm:mt-4" placeholder="E-Mail" />

              <select className="input mt-3 sm:mt-4" defaultValue="">
                <option value="" disabled>
                  Welche Leistung?
                </option>
                <option>Doppelstabmattenzaun</option>
                <option>Sichtschutz</option>
                <option>Schiebetor / Drehtor</option>
                <option>Industriezaun</option>
                <option>Reparatur / Erweiterung</option>
              </select>

              <textarea
                className="input mt-3 min-h-32 resize-none sm:mt-4 sm:min-h-36"
                placeholder="Kurz beschreiben: Länge, Höhe, Ort, gewünschtes Tor ..."
              />

              <button
                type="button"
                className="mt-4 w-full rounded-2xl bg-slate-950 px-6 py-4 font-black text-white shadow-lg shadow-slate-400/20 transition hover:bg-slate-800 sm:mt-5"
              >
                Anfrage absenden
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Wir melden uns schnellstmöglich zur weiteren Abstimmung.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 text-sm text-slate-500">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/images/logo.png"
              alt="A&E Zaun & Torsysteme"
              className="h-14 max-w-[210px] object-contain"
            />
            <p className="mt-4 max-w-xs leading-6">
              Zaunbau, Torsysteme, Sichtschutz und professionelle Montage für
              Privat, Gewerbe und Industrie.
            </p>
          </div>

          <div>
            <div className="font-black text-slate-950">Kontakt</div>
            <div className="mt-3 grid gap-2">
              <a href="tel:+436769752166" className="hover:text-slate-950">
                +43 676 9752166
              </a>
              <a href="mailto:info@ae-zaun.at" className="hover:text-slate-950">
                info@ae-zaun.at
              </a>
            </div>
          </div>

          <div>
            <div className="font-black text-slate-950">Einsatzgebiet</div>
            <p className="mt-3 leading-6">
              Salzburg, Umgebung und österreichweite Projekte nach Abstimmung.
            </p>
          </div>

          <div>
            <div className="font-black text-slate-950">Rechtliches</div>
            <div className="mt-3 grid gap-2">
              <a href="/impressum" className="hover:text-slate-950">
                Impressum
              </a>
              <a href="/datenschutz" className="hover:text-slate-950">
                Datenschutz
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 pt-6 text-center">
          © 2026 A&E Zaun & Torsysteme — Regional verwurzelt. Österreichweit im Einsatz.
        </div>
      </footer>
    </main>
  );
}
