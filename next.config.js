/** @type {import('next').NextConfig} */
const nextConfig = {
  // Kein output: "export": API-Routen brauchen einen Next.js Server / Netlify Functions.
  images: { unoptimized: true },
  allowedDevOrigins: ["192.168.178.35"],
  turbopack: { root: "C:/Users/mleo0/Desktop/zaunsysteme" },
};
module.exports = nextConfig;
