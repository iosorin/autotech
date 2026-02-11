"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Heart, ArrowUpRight } from "lucide-react";

type Props = {
  id?: string;
  title: string;
  desc: string;
  cabinetCta: string;
  moreCta: string;
};

export function FleetHrd({ id, title, desc, cabinetCta, moreCta }: Props) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <AnimateOnScroll variant="blur-in" duration={700}>
          <div className="bg-gradient-to-b from-accent to-background rounded-3xl p-10 md:p-14 text-center">
            <Heart className="w-10 h-10 text-accent-foreground mx-auto mb-4 opacity-60" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">{desc}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#"
                className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                {cabinetCta}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-200"
              >
                {moreCta}
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
