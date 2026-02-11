"use client";

import { ContactForm } from "@/components/contact-form";
import { Types } from "@/components/sections/types";

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
          <ContactForm />
        </div>
        <Types heading={responseHeading} types={responseTypes} />
      </div>
    </section>
  );
}
