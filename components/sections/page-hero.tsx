"use client";

import Link from "next/link";

type Props = {
  id?: string;
  title: string;
  hint: React.ReactNode;
};

export function PageHero({ id, title, hint }: Props) {
  return (
    <section id={id} className="py-16 text-center">
      <h1 className="text-4xl font-bold text-foreground md:text-5xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-lg text-muted-foreground">{hint}</p>
    </section>
  );
}
