"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

type Props = {
  id?: string;
  heading: string;
  items: string[];
  imageAlt: string;
};

export function Checklist({ id, heading, items, imageAlt }: Props) {
  return (
    <section id={id} className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-2/5 flex justify-center">
            <Image
              src="/images/app-mockup.jpg"
              alt={imageAlt}
              width={280}
              height={560}
              className="rounded-3xl shadow-lg w-auto h-auto"
            />
          </div>
          <div className="lg:w-3/5">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
              {heading}
            </h2>
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
