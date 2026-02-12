"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Enter } from "@ui/atoms/enter";

type Props = {
  title: string;
  start: string;
  contact: string;
};

export const Cta = ({ title, start, contact }: Props) => {
  return (
    <Enter variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
            {title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity hover:scale-105 transition-transform duration-200"
            >
              {start}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors bg-background hover:scale-105 transition-transform duration-200"
            >
              {contact}
            </Link>
          </div>
        </Enter>
  );
}

export default Cta;