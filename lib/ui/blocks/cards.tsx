"use client";

import { Enter } from "@ui/atoms/enter";

type Item = { num: string; title: string; desc?: string };

type Props = {
  id?: string;
  heading: string;
  items: Item[];
};

export function Cards({ id, heading, items }: Props) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Enter variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 text-balance">
            {heading}
          </h2>
        </Enter>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Enter key={item.num} variant="fade-up" delay={i * 120} duration={600}>
              <div className="bg-background border border-border rounded-2xl p-6 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="inline-block bg-foreground text-background rounded-full px-4 py-1.5 text-sm font-medium w-fit mb-5">
                  {item.num}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                {item.desc ? (
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                ) : null}
              </div>
            </Enter>
          ))}
        </div>
      </div >
    </section >
  );
}
