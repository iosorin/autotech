"use client";

import { Layers, FileText, Settings, Zap, CheckCircle2 } from "lucide-react";

const iconMap = { Layers, FileText, Settings, Zap, CheckCircle2 };

type Item = { icon: string; title: string; desc: string };

type Props = {
  id?: string;
  heading: string;
  items: Item[];
};

export function MissionBlock({ id, heading, items }: Props) {
  return (
    <section id={id} className="bg-gradient-to-b from-[#e6fff0] to-[#f0fdf4] px-4 py-20">
      <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
        {heading}
      </h2>
      <div className="mx-auto max-w-2xl space-y-10">
        {items.map((item, i) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <div key={item.title} className="text-center">
              {i > 0 && <div className="mx-auto mb-8 h-px w-48 bg-border" />}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-card">
                {Icon ? <Icon className="h-6 w-6 text-primary" /> : null}
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
