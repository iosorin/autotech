"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { home } from "@content";

export function NewClientsSection() {
  const n = home.newClients;
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-primary mb-2">{n.subtitle}</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground text-balance">
              {n.titleLine1}
              <br />
              {n.titleLine2}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <AnimateOnScroll variant="fade-right" duration={700} className="lg:w-2/5 flex justify-center">
            <Image
              src="/images/app-mockup.jpg"
              alt={n.imageAlt}
              width={280}
              height={560}
              className="rounded-3xl shadow-lg w-auto h-auto"
            />
          </AnimateOnScroll>

          <div className="lg:w-3/5">
            <AnimateOnScroll variant="fade-left" delay={100} duration={600}>
              <p className="text-muted-foreground mb-6 leading-relaxed">{n.intro}</p>
            </AnimateOnScroll>
            <div className="flex flex-col gap-4">
              {n.items.map((feature, i) => (
                <AnimateOnScroll key={feature} variant="fade-left" delay={200 + i * 100} duration={500}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground leading-relaxed">{feature}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
