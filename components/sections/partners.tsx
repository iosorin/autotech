"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { home } from "@content";

export function PartnersSection() {
  const p = home.partners;
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 text-balance">
            {p.heading}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="scale-up" delay={150} duration={700}>
          <div className="rounded-2xl bg-secondary p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {p.name}
              <sup className="text-xs">{p.nameSup}</sup>
            </h3>
            <p className="text-sm text-foreground mb-4 text-balance leading-relaxed">
              {p.desc}
            </p>
            <p className="text-sm text-muted-foreground text-balance leading-relaxed">
              {p.note}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
