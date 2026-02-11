import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { app, seo } from "@content";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

const siteurl = app.siteurl;

export const metadata: Metadata = {
  metadataBase: new URL(siteurl),
  title: {
    default: seo.defaultTitle,
    template: seo.templateTitle,
  },
  description: seo.defaultDescription,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteurl,
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
  url: siteurl,
  logo: `${siteurl}/placeholder-logo.svg`,
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
        <Header />
        <main className="px-4 py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
