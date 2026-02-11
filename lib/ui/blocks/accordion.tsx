"use client";

import { useState } from "react";
import { Enter } from "@ui/atoms/enter";
import { ChevronDown } from "lucide-react";

type FaqItem = { q: string; a: string };

type Props = {
  id?: string;
  heading: string;
  items: FaqItem[];
};

export function Accordion({ id, heading, items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <Enter variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-10">
            {heading}
          </h2>
        </Enter>
        <Enter variant="fade-up" delay={150} duration={600}>
          <div className="flex flex-col">
            {items.map((item, i) => (
              <div key={i} className="border-t border-border">
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-bold text-foreground pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-sm text-muted-foreground pr-8">{item.a}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </Enter>
      </div >
    </section >
  );
}
