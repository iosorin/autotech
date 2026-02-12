"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Enter } from "@ui/atoms/enter";

type Props = {
  title: string;
  start: {
    label: string;
    href: string;
  };
  contact: {
    label: string;
    href: string;
  };
};

export const Cta = ({ title, start, contact }: Props) => {
  return (
    <Enter variant="fade-up" duration={600}>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {start && (
          <Link
            href={start.href}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity  transition-transform duration-200"
          >
            {start.label}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
        {contact && (
          <Link
            href={contact.href}
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors bg-background  transition-transform duration-200"
          >
            {contact.label}
          </Link>
        )}
      </div>
    </Enter>
  );
}

export default Cta;