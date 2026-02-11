"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  id?: string;
  title: string;
  desc: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  date?: string;
  icon?: React.ReactNode;
  ctaText?: string;
};

export function Promo({
  id,
  title,
  desc,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  date,
  icon,
  ctaText,
}: Props) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-4">
      <div className="rounded-3xl bg-gradient-to-br from-accent to-[#e6fff0] p-8 text-center md:p-12">
        {date ? <p className="mb-4 text-sm font-semibold text-primary">{date}</p> : null}
        {icon ? <div className="mb-4 flex justify-center opacity-60">{icon}</div> : null}
        <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
        <p className={ctaText ? "mb-2 text-muted-foreground" : "mb-8 text-muted-foreground"}>{desc}</p>
        {ctaText ? <p className="mb-8 text-sm font-medium text-primary">{ctaText}</p> : null}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {primaryCta}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          {secondaryCta && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="inline-flex items-center rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
            >
              {secondaryCta}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
