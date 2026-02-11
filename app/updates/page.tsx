import { Intro } from "@ui/blocks/intro";
import { Changelog } from "@ui/blocks/changelog";
import { updates } from "@content";

export default function UpdatesPage() {
  const p = updates;
  return (
    <>
      <Intro id="updates" subtitle={p.subtitle} title={p.title} labelFirst />
      <Changelog id="list" updates={p.list} />
    </>
  );
}
