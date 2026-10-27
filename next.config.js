/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["192.168.178.35"],

  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;