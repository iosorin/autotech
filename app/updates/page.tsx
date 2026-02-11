import type { Metadata } from "next";
import { Changelog } from "@ui/blocks/changelog";
import { Lead } from "@ui/atoms/lead";
import { seo, updates } from "@data";
import { openGraph } from "@/app/utils";

export const metadata: Metadata = {
  title: seo.pages.updates.title,
  description: seo.pages.updates.description,
  alternates: { canonical: "/updates" },
  openGraph: openGraph(seo.pages.updates.title, seo.pages.updates.description, '/updates'),
};

export const Updates = () => {
  const p = updates;
  return (
    <section id="updates" className="layered">
      <Lead label={p.subtitle} title={p.title} tags={{ title: 'h1', label: 'h2' }}
      // titleFirst
      />
      <Changelog updates={p.list} />
      <div className="layer bg-gradient-blue" />
    </section>
  );
}

export default Updates;