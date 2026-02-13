"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { Button } from "@ui/atoms/button";

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
      <div className="flex flex-col gap-8 text-center py-8">
        <h2>
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {start && (
            <Button asChild variant="default" size="lg">
              <Link href={start.href}>
                {start.label}
                <ArrowUpRight />
              </Link>
            </Button>
          )}
          {contact && (
            <Button asChild variant="outline" size="lg">
              <Link href={contact.href}>{contact.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </Enter>
  );
};

export default Cta;