import type { Metadata } from "next";
import { seo } from "@content";

export const metadata: Metadata = {
  title: seo.pages.support.title,
  description: seo.pages.support.description,
};

export default function SupportLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
