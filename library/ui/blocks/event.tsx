"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Enter } from "@ui/atoms/enter";

type Props = {
  id?: string;
  date: string;
  title: string;
  line1: string;
  line2: string;
  cta: string;
  button: string;
};

export const Event = ({ id, date, title, line1, line2, cta, button }: Props) => {
  return (
    <section id={id} className="py-8">
      <div className="max-w-3xl mx-auto px-4">
        <Enter variant="scale-up" duration={700}>
          <div className="rounded-2xl border-2 border-primary p-8 text-center">
            <p className="text-sm font-medium text-primary mb-2">{date}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">
              {title}
            </h2>
            <p className="text-muted-foreground mb-1 text-balance">{line1}</p>
            <p className="text-muted-foreground mb-4 text-balance">{line2}</p>
            <p className="text-sm text-primary mb-4">{cta}</p>
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {button}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Enter>
      </div>
    </section >
  );
}

export default Event;