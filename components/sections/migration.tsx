"use client";

import { RefreshCw } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { home } from "@content";

export function DataMigrationSection() {
  const m = home.dataMigration;
  return (
    <section className="bg-gradient-to-b from-accent/60 to-background py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <AnimateOnScroll variant="scale-up" duration={600}>
          <RefreshCw className="w-10 h-10 mx-auto mb-6 text-primary" />
        </AnimateOnScroll>
        <AnimateOnScroll variant="fade-up" delay={100} duration={600}>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {m.titleLine1}
            <br />
            {m.titleLine2}
          </h2>
          <p className="text-muted-foreground mb-8 text-balance">{m.desc}</p>
        </AnimateOnScroll>

        <div className="flex flex-wrap justify-center gap-3">
          {m.items.map((item, i) => (
            <AnimateOnScroll key={item} variant="scale-up" delay={200 + i * 80} duration={500}>
              <span className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
                {item}
              </span>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
