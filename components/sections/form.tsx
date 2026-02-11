"use client";

import { ContactForm } from "@/components/contact-form";

type Props = {
  id?: string;
  heading: string;
};

export function Form({ id, heading }: Props) {
  return (
    <section id={id} className="px-4 py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        {heading}
      </h2>
      <ContactForm />
    </section>
  );
}
