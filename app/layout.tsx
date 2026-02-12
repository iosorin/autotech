import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@ui/blocks/header";
import { Footer } from "@ui/blocks/footer";
import { app, seo } from "@data";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(app.siteurl),
  title: {
    default: seo.defaultTitle,
    template: seo.templateTitle,
  },
  description: seo.defaultDescription,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: app.siteurl,
    siteName: seo.siteName,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
  },
};

const jsonld = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: app.name,
  url: app.siteurl,
  logo: `${app.siteurl}/logo.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: app.phone.replace(/\s/g, "-"),
    email: app.email,
    contactType: "customer service",
    areaServed: "RU",
    availableLanguage: "Russian",
  },
  sameAs: [app.telegramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
        />

        <Header
          title={app.name}
          logo={app.logo}
          nav={app.nav}
          featured={app.featured}
          className="fixed top-6 z-50 center-x rounded-full max-w-6xl"
        />

        <main>
          {children}
        </main>

        <Footer
          title={app.name}
          nav={app.nav}
          links={app.links}
          copyright={app.copyright}
          phone={app.phone} email={app.email}
          telegram={app.telegram}
          featured={app.featured}
          company={app.company}
          className="max-w-6xl"
        />
      </body>
    </html>
  );
}
