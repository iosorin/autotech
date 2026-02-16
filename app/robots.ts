import type { MetadataRoute } from "next";

import { app } from "@data";

const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: "*", allow: "/" },
  sitemap: `${app.url}/sitemap.xml`,
});

export default robots;