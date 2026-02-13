import type { Metadata } from "next";
import { Changelog } from "@ui/blocks/changelog";
import { Lead } from "@ui/atoms/lead";
import { seo, updates } from "@data";

export const metadata: Metadata = {
  title: seo.pages.updates.title,
  description: seo.pages.updates.description,
};

export default function UpdatesPage() {
  const p = updates;
  return (
    <section id="updates" className="pt-from-header relative">
      <div className="gradlayer bg-gradient-blue" />

      <div className="mx-auto my-4">
        <Lead label={p.subtitle} title={p.title} />
        <Changelog updates={p.list} />
      </div>
    </section>
  );
}
