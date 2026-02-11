import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://moykazdes.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/tariffs",
    "/updates",
    "/events",
    "/support",
    "/contacts",
    "/fleet",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}
