import type { MetadataRoute } from "next";
import { app, seo } from "@data";

const sitemap = (): MetadataRoute.Sitemap => {
  return Object.values(seo.pages).map((r) => ({
    url: `${app.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.path === "/" ? "weekly" : "monthly",
    priority: r.path === "/" ? 1 : 0.8,
  }))
}

export default sitemap;