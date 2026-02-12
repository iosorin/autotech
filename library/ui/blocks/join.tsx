"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Enter } from "@ui/atoms/enter";

type Props = {
  titleLine1: string;
  titleLine2: string;
  ctaStart: string;
  ctaContact: string;
};

export const Join = ({ titleLine1, titleLine2, ctaStart, ctaContact }: Props) => {
  return (
    <Enter variant="blur-in" duration={700}>
      <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-balance">
        {titleLine1}
        <br />
        {titleLine2}
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="#"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90  transition-all duration-200"
        >
          {ctaStart}
          <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link
          href="/contacts"
          className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary  transition-all duration-200"
        >
          {ctaContact}
        </Link>
      </div>
    </Enter>
  );
};

export default Join;
