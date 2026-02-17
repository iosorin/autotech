import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@ui/blocks/header";
import { Footer } from "@ui/blocks/footer";
import { Use } from "./use";
import { app, seo } from "@data";
import "./style.scss";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(app.url),
  alternates: { canonical: "/", },
  title: { default: seo.defaultTitle, template: seo.templateTitle, },
  description: seo.defaultDescription,
  keywords: seo.keywords,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: app.url,
    siteName: seo.sitename,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.ogImageAlt }],
  },
  publisher: app.company.name,
  manifest: "/site.webmanifest",
  icons: { icon: "/favicon/favicon.ico", apple: "/favicon/apple-touch-icon.png" },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [seo.ogImage],
  },
  verification: {
    google: "BOArqqCtqsRqa5JhqbSN7ZSxkLVlpPNtPoGupnwPHiY",
  },
};

// export const metadata: Metadata = {
//   metadataBase: new URL(app.url),
//   manifest: "/favicon/site.webmanifest",
//   // ... остальное
// };


const jsonld = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: app.name,
  url: app.url,
  logo: `${app.url}/logo.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: app.phone.replace(/\s/g, "-"),
    email: app.email,
    contactType: "customer service",
    areaServed: "RU",
    availableLanguage: "Russian",
  },
  sameAs: [app.telegram.href],
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
          className="fixed top-8 z-50 center-x max-w-6xl h-header"
        />

        <main className="max-w-6xl px-4 mx-auto">
          {children}
        </main>

        <Footer
          title={app.name}
          logo={app.logo}
          nav={app.nav}
          links={app.links}
          phone={app.phone} email={app.email}
          telegram={app.telegram}
          featured={app.featured}
          company={app.company}
          copyright={app.copyright}
          className="max-w-6xl"
        />
        <Use />

      </body>
    </html>
  );
}

export default Layout;