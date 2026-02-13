"use client";

import { useState } from "react";
import { Enter } from "@ui/atoms/enter";
import { ChevronDown } from "lucide-react";

type FaqItem = { q: string; a: string };

type Props = {
  items: FaqItem[];
};

export const Accordion = ({ items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
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
  );
};

export default Accordion;
