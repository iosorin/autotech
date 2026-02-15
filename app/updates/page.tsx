import type { Metadata } from "next";
import { Changelog } from "@ui/blocks/changelog";
import { Lead } from "@ui/atoms/lead";
import { seo, updates } from "@data";

export const metadata: Metadata = {
  title: seo.pages.updates.title,
  description: seo.pages.updates.description,
  alternates: { canonical: "/updates" },
};

export default function UpdatesPage() {
  const p = updates;
  return (
    <section id="updates">
      <Lead label={p.subtitle} title={p.title} tag="h1" titleFirst />
      <Changelog updates={p.list} />
      <div className="gradlayer bg-gradient-blue" />
    </section>
  );
}
