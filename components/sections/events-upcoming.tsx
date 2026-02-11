"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  id?: string;
  date: string;
  title: string;
  descLine1: string;
  descLine2: string;
  cta: string;
  button: string;
};

export function EventsUpcoming({
  id,
  date,
  title,
  descLine1,
  descLine2,
  cta,
  button,
}: Props) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-4">
      <div className="rounded-3xl bg-gradient-to-br from-accent to-[#e6fff0] p-8 text-center md:p-12">
        <p className="mb-4 text-sm font-semibold text-primary">{date}</p>
        <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
        <p className="mb-2 text-muted-foreground">{descLine1} {descLine2}</p>
        <p className="mb-8 text-sm font-medium text-primary">{cta}</p>
        <Link
          href="/contacts"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {button}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
