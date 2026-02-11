"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Settings, CheckCircle2 } from "lucide-react";

type Props = {
  id?: string;
  heading: string;
  list: string[];
  imageAlt: string;
};

export function FleetSeasonal({ id, heading, list, imageAlt }: Props) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <AnimateOnScroll variant="fade-right" duration={600} className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-7 h-7 text-muted-foreground" />
              <h2 className="text-xl md:text-2xl font-bold text-foreground text-balance">
                {heading}
              </h2>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              {list.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{text}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={200} duration={700} className="lg:w-1/2">
            <Image
              src="/images/tire-mechanic.jpg"
              alt={imageAlt}
              width={500}
              height={350}
              className="rounded-2xl w-auto h-auto"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
