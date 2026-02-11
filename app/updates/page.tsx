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
      <Intro id="updates" subtitle={p.subtitle} title={p.title} labelFirst />
      <Changelog id="list" updates={p.list} />
    </>
  );
}
