import type { Metadata } from "next";
import { Changelog } from "@ui/blocks/changelog";
import { Lead } from "@ui/atoms/lead";
import { seo, updates } from "@data";

export const metadata: Metadata = seo.pages.updates;

const Updates = () => {
  const p = updates;
  return (
    <section id="updates" className="layered">
      <Lead label={p.subtitle} title={p.title} tag="h1" titleFirst />
      <Changelog updates={p.list} />
      <div className="layer bg-gradient-blue" />
    </section>
  );
}

export default Updates;