import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A&E Zaun & Torsysteme | Moderne Zäune, Tore & Montage",
  description:
    "A&E Zaun & Torsysteme – hochwertige Zaunanlagen, Sichtschutz, Schiebe- und Drehtore sowie professionelle Montage.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}