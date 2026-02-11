"use client";

import { Contact } from "@ui/blocks/contact";
import { Types } from "@ui/blocks/types";

type Type = { icon: string; title: string; desc: string; bg: string; border: string };

type Props = {
  id?: string;
  responseHeading: string;
  responseTypes: Type[];
};

export function Split({ id, responseHeading, responseTypes }: Props) {
  return (
    <section id={id} className="px-4 py-8">
      <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-2">
        <div>
          <Contact />
        </div>
        <Types heading={responseHeading} types={responseTypes} />
      </div>
    </section>
  );
}
