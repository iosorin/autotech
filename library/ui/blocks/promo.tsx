"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@utils";
import { Button } from "../atoms/button";

type Props = {
  title: string;
  desc: string;
  date?: string;
  icon?: React.ReactNode;
  className?: string;
  cta: {
    primary: {
      label: string;
      href: string;
    };
    secondary?: {
      label: string;
      href: string;
    };
  };
};

export const Promo = ({
  title,
  desc,
  date,
  icon,
  className,
  cta,
}: Props) => {
  return (
    <div className={cn("rounded-3xl bg-primary/10 p-8 text-center md:p-12", className)}>
      {date ? <p className="mb-4 font-semibold text-primary">{date}</p> : null}
      {icon ? <div className="mb-4 flex justify-center">{icon}</div> : null}
      <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      <p className="text-lg mb-8 md:max-w-xl mx-auto">{desc}</p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild variant="default" size="lg">
          <Link href={cta.primary.href} title={cta.primary.label}>
            {cta.primary.label}
            <ArrowUpRight />
          </Link>
        </Button>
        {cta.secondary && cta.secondary.href ? (
          <Button asChild variant="outline" size="lg">
            <Link href={cta.secondary.href} title={cta.secondary.label}>
              {cta.secondary.label}
            </Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Promo;
