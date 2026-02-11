import { UpdatesIntro } from "@/components/sections/updates-intro";
import { UpdatesList } from "@/components/sections/updates-list";
import { updates } from "@content";

export default function UpdatesPage() {
  const p = updates;
  return (
    <>
      <UpdatesIntro id="updates" subtitle={p.subtitle} title={p.title} />
      <UpdatesList id="list" updates={p.list} />
    </>
  );
}
