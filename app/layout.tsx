import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

const siteurl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://moykazdes.ru";

export const metadata: Metadata = {
  metadataBase: new URL(siteurl),
  title: {
    default: "Автотех - Приложение для автомойки, детейлинга и шиномонтажа",
    template: "%s | Автотех",
  },
  description:
    "Платформа Автотех - приложение для управления автомойками, детейлинг-центрами и шиномонтажами. Статистика, CRM, онлайн-запись и расчет зарплат.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteurl,
    siteName: "Автотех",
    title: "Автотех - Приложение для автомойки, детейлинга и шиномонтажа",
    description:
      "Платформа Автотех - приложение для управления автомойками, детейлинг-центрами и шиномонтажами. Статистика, CRM, онлайн-запись и расчет зарплат.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Автотех" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Автотех - Приложение для автомойки, детейлинга и шиномонтажа",
    description:
      "Платформа Автотех - приложение для управления автомойками, детейлинг-центрами и шиномонтажами.",
  },
};

const jsonld = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Автотех",
  url: siteurl,
  logo: `${siteurl}/placeholder-logo.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7-909-904-1111",
    email: "info@moykazdes.ru",
    contactType: "customer service",
    areaServed: "RU",
    availableLanguage: "Russian",
  },
  sameAs: ["https://t.me/moykazdes"],
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
        {children}
      </body>
    </html>
  );
}
