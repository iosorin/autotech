"use client";

import { Layers, FileText, Settings, Zap, CheckCircle2 } from "lucide-react";

const iconMap = { Layers, FileText, Settings, Zap, CheckCircle2 };

type Item = { icon: string; title: string; desc: string };

type Props = {
  id?: string;
  heading: string;
  items: Item[];
};

export function IconCards({ id, heading, items }: Props) {
  return (
    <section id={id} className="px-4 pb-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        {heading}
      </h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {items.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                {Icon ? <Icon className="h-6 w-6 text-primary" /> : null}
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
