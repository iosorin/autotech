"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Eye, CheckCircle2 } from "lucide-react";

type Props = {
  id?: string;
  title: string;
  items: string[];
  imageAlt: string;
};

export function FleetTransparency({ id, title, items, imageAlt }: Props) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <AnimateOnScroll variant="fade-right" duration={700} className="lg:w-1/2">
            <Image
              src="/images/app-mockup.jpg"
              alt={imageAlt}
              width={400}
              height={350}
              className="rounded-2xl bg-secondary w-auto h-auto"
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={200} duration={600} className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-7 h-7 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold text-foreground text-balance">
                {title}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {items.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{text}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
