import type { Metadata } from "next";
import { Intro } from "@ui/blocks/intro";
import { Changelog } from "@ui/blocks/changelog";
import { seo, updates } from "@data";

export const metadata: Metadata = {
  title: seo.pages.updates.title,
  description: seo.pages.updates.description,
};

export default function UpdatesPage() {
  const p = updates;
  return (
    <>
      <section id="updates" className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <Intro subtitle={p.subtitle} title={p.title} labelFirst />
        </div>
      </section>

      <section id="list" className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <Changelog updates={p.list} />
        </div>
      </section>
    </>
  );
}
