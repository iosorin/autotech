"use client";

import { Enter } from "@ui/atoms/enter";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type Item = { before: string; after: string };

type Props = {
  id?: string;
  beforeLabel: string;
  afterLabel: string;
  items: Item[];
};

export function Compare({ id, beforeLabel, afterLabel, items }: Props) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <Enter variant="fade-up" duration={500}>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <span className="inline-block bg-primary text-primary-foreground rounded-full px-5 py-1.5 text-sm font-medium">
                {beforeLabel}
              </span>
            </div>
            <div>
              <span className="inline-block bg-primary text-primary-foreground rounded-full px-5 py-1.5 text-sm font-medium">
                {afterLabel}
              </span>
            </div>
          </div>
        </Enter>

        <div className="flex flex-col gap-0">
          {items.map((item, i) => (
            <Enter key={i} variant="fade-up" delay={i * 100} duration={500}>
              <div className="grid grid-cols-2 gap-4 py-5 border-t border-border">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{item.before}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground font-medium">{item.after}</p>
                </div>
              </div>
            </Enter>
          ))}
        </div>
      </div >
    </section >
  );
}
