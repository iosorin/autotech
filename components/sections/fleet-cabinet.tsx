"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CheckCircle2 } from "lucide-react";

type Props = {
  id?: string;
  heading: string;
  list: string[];
  choiceTitle: string;
  choiceTags: string[];
  filterTitle: string;
  filterTags: string[];
  imageAlt: string;
};

export function FleetCabinet({
  id,
  heading,
  list,
  choiceTitle,
  choiceTags,
  filterTitle,
  filterTags,
  imageAlt,
}: Props) {
  return (
    <section id={id} className="py-16 md:py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
            {heading}
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <AnimateOnScroll variant="fade-right" duration={600} className="lg:w-1/3">
            <div className="flex flex-col gap-6">
              {list.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{text}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="scale-up" delay={150} duration={700} className="lg:w-1/3 flex justify-center">
            <Image
              src="/images/app-mockup.jpg"
              alt={imageAlt}
              width={280}
              height={500}
              className="rounded-3xl shadow-lg w-auto h-auto"
            />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={200} duration={600} className="lg:w-1/3">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-3">{choiceTitle}</h3>
                <div className="flex flex-wrap gap-2">
                  {choiceTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-background border border-border rounded-full px-4 py-1.5 text-sm text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="font-bold text-foreground mb-3">{filterTitle}</h3>
                <div className="flex flex-wrap gap-2">
                  {filterTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent rounded-full px-4 py-1.5 text-sm text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
