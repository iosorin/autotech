import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Автотех - Приложение для автомойки, детейлинга и шиномонтажа",
  description:
    "Платформа Автотех - приложение для управления автомойками, детейлинг-центрами и шиномонтажами. Статистика, CRM, онлайн-запись и расчет зарплат.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
