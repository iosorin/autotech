import type { MetadataRoute } from "next";
import { app } from "@content";

const sitemap = (): MetadataRoute.Sitemap => {
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
    url: `${app.siteurl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}

export default sitemap;