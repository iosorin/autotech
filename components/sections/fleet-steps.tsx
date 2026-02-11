"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ArrowUpRight } from "lucide-react";

type Step = { title: string; desc: string };

type Props = {
  id?: string;
  heading: string;
  steps: Step[];
  cabinetCta: string;
  moreCta: string;
};

export function FleetSteps({ id, heading, steps, cabinetCta, moreCta }: Props) {
  return (
    <section id={id} className="py-16 md:py-20 bg-gradient-to-b from-[#e8f5e9] to-[#f1f8e9]">
      <div className="max-w-3xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
            {heading}
          </h2>
        </AnimateOnScroll>
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <AnimateOnScroll key={i} variant="fade-up" delay={i * 150} duration={600}>
              <div
                className={`text-center py-8 ${
                  i < steps.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="inline-block bg-foreground text-background rounded-full px-5 py-2 text-sm font-medium mb-4">
                  {`Шаг ${i + 1}`}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 text-balance">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto">{step.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll variant="fade-up" delay={600} duration={500}>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
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
        </AnimateOnScroll>
      </div>
    </section>
  );
}
