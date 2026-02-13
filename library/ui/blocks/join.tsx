"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { Button } from "@ui/atoms/button";

type Props = {
  titleLine1: string;
  titleLine2: string;
  ctaStart: {
    label: string;
    href: string;
  };
  ctaContact: {
    label: string;
    href: string;
  };
};

export const Join = ({ titleLine1, titleLine2, ctaStart, ctaContact }: Props) => {
  return (
    <Enter variant="blur-in" duration={700}>
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-balance">
          {titleLine1}
          <br />
          {titleLine2}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {ctaStart && (
            <Button asChild variant="default" size="lg">
              <Link href={ctaStart.href}>
                {ctaStart.label}
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          )}
          {ctaContact && (
            <Button asChild variant="outline" size="lg">
              <Link href={ctaContact.href}>{ctaContact.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </Enter>
  );
};

export default Join;
