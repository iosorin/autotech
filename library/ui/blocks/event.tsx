"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { Button } from "@ui/atoms/button";

type Props = {
  date: string;
  title: string;
  line1: string;
  line2: string;
  cta: string;
  button: string;
  href?: string;
};

export const Event = ({ date, title, line1, line2, cta, button, href = "/events" }: Props) => {
  return (
    <Enter variant="scale-up" duration={700}>
      <div className="rounded-3xl border-2 border-primary px-8 py-10 text-center">
        <p className="text-sm font-medium text-primary mb-3">{date}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
          {title}
        </h2>
        <p className="text-muted-foreground text-balance">{line1}</p>
        <p className="text-muted-foreground mb-5 text-balance">{line2}</p>
        <p className="text-sm text-primary mb-5">{cta}</p>
        <Button asChild variant="default" size="lg">
          <Link href={href}>
            {button}
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Enter>
  );
};

export default Event;