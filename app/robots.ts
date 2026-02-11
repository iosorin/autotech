import type { MetadataRoute } from "next";

import { app } from "@content";

const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: "*", allow: "/" },
  sitemap: `${app.siteurl}/sitemap.xml`,
});

export default robots;