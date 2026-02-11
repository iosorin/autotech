import type { Metadata } from "next";
import { seo } from "@content";

export const metadata: Metadata = {
  title: seo.pages.contacts.title,
  description: seo.pages.contacts.description,
};

export default function ContactsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
