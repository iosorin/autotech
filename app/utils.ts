import { app, seo } from "@data"

export const openGraph = (title: string, description: string, url?: string) => {
    return {
        type: "website",
        locale: "ru_RU",
        title: title || seo.defaultTitle,
        description: description || seo.defaultDescription,
        url: app.siteurl + (url || ''),
        siteName: seo.siteName,
        images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.ogImageAlt }],
    }
}