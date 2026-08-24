import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ae-zaun.at/sitemap.xml",
    host: "https://ae-zaun.at",
  };
}
