import type { Metadata } from "next";
import { seo } from "@content";

export const metadata: Metadata = {
  title: seo.pages.events.title,
  description: seo.pages.events.description,
};

export default function EventsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
