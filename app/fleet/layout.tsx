import type { Metadata } from "next";
import { seo } from "@content";

export const metadata: Metadata = {
  title: seo.pages.fleet.title,
  description: seo.pages.fleet.description,
};

export default function FleetLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
