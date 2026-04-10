import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://fe-exam.koydo.app/sitemap.xml",
    host: "https://fe-exam.koydo.app",
  };
}
