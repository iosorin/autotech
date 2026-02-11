"use client";

import { Enter } from "@ui/atoms/enter";
import {
  Layers,
  FileText,
  Settings,
  Zap,
  CheckCircle2,
  MapPin,
  BarChart3,
  Building2,
  SlidersHorizontal,
  Eye,
} from "lucide-react";

const iconMap = {
  Layers,
  FileText,
  Settings,
  Zap,
  CheckCircle2,
  MapPin,
  BarChart3,
  Building2,
  SlidersHorizontal,
  Eye,
};

type Item = { icon: string; title: string; desc: string };

type Props = {
  id?: string;
  heading: string;
  items: Item[];
  cols?: 2 | 3;
  variant?: "cards" | "stack" | "highlight";
};

export function Icons({ id, heading, items, cols = 3, variant = "cards" }: Props) {
  if (variant === "highlight") {
    return (
      <section id={id} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Enter variant="fade-up" duration={600}>
            <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
              {heading}
            </h2>
          </Enter>
          <div className={`grid gap-6 ${cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {items.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Enter key={item.title
                } variant="fade-up" delay={i * 100} duration={600} >
                  <div className="bg-secondary rounded-2xl p-8 flex flex-col items-center text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="mb-4">
                      {Icon ? <Icon className="w-7 h-7 text-primary" /> : null}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 text-balance">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Enter>
              );
            })}
          </div>
        </div >
      </section >
    );
  }
  if (variant === "stack") {
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
  return (
    <section id={id} className="px-4 pb-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        {heading}
      </h2>
      <div
        className={`mx-auto grid max-w-5xl gap-6 ${cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
      >
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
