import type { Metadata } from "next";
import { seo } from "@content";

export const metadata: Metadata = {
  title: seo.pages.tariffs.title,
  description: seo.pages.tariffs.description,
};

export default function TariffsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
