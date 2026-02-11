import type { Metadata } from "next";
import { seo } from "@content";

export const metadata: Metadata = {
  title: seo.pages.updates.title,
  description: seo.pages.updates.description,
};

export default function UpdatesLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
