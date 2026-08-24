import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ae-zaun.at";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Zaunbau Salzburg | Zäune, Tore & Torsysteme | A&E",
    template: "%s | A&E Zaun & Torsysteme",
  },

  description:
    "Zaunbau in Salzburg: A&E Zaun & Torsysteme plant und montiert Doppelstabmattenzäune, Sichtschutz, Schiebe- und Drehtore sowie Zaunlösungen für Privat, Gewerbe und Industrie.",

  applicationName: "A&E Zaun & Torsysteme",
  creator: "A&E Zaun & Torsysteme",
  publisher: "A&E Zaun & Torsysteme",
  category: "Zaunbau und Torsysteme",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "de_AT",
    url: siteUrl,
    siteName: "A&E Zaun & Torsysteme",
    title: "Zaunbau Salzburg | Zäune, Tore & Torsysteme | A&E",
    description:
      "Moderne Zäune, Sichtschutz, Schiebe- und Drehtore sowie professionelle Montage in Salzburg und österreichweit.",
    images: [
      {
        url: "/images/hero-zaun.jpeg",
        alt: "A&E Zaun & Torsysteme – Zaunbau und Toranlagen in Salzburg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zaunbau Salzburg | A&E Zaun & Torsysteme",
    description:
      "Zäune, Sichtschutz, Schiebe- und Drehtore sowie professionelle Montage in Salzburg.",
    images: ["/images/hero-zaun.jpeg"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteUrl}/#business`,
  name: "A&E Zaun & Torsysteme",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/hero-zaun.jpeg`,
  description:
    "A&E Zaun & Torsysteme plant und montiert Zäune, Sichtschutz, Schiebe- und Drehtore sowie Zaun- und Sicherheitslösungen in Salzburg und österreichweit.",
  telephone: "+43 676 9752166",
  email: "info@ae-zaun.at",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Linzer Bundesstraße 16",
    postalCode: "5020",
    addressLocality: "Salzburg",
    addressCountry: "AT",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Salzburg",
    },
    {
      "@type": "Country",
      name: "Österreich",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Zaun- und Torleistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Doppelstabmattenzäune",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sichtschutz und Designzäune",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Schiebe- und Drehtore",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Industriezäune",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Zaunmontage",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reparatur und Erweiterung von Zaunanlagen",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-AT">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
