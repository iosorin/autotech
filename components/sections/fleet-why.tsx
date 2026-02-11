"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import {
  MapPin,
  FileText,
  BarChart3,
  Building2,
  Settings,
  SlidersHorizontal,
  Eye,
} from "lucide-react";

const iconMap = {
  MapPin,
  FileText,
  BarChart3,
  Building2,
  Settings,
  SlidersHorizontal,
  Eye,
};

type Item = { icon: string; title: string; desc: string };

type Props = {
  id?: string;
  heading: string;
  items: Item[];
};

export function FleetWhy({ id, heading, items }: Props) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
            {heading}
          </h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <AnimateOnScroll key={item.title} variant="fade-up" delay={i * 100} duration={600}>
                <div className="bg-secondary rounded-2xl p-8 flex flex-col items-center text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="mb-4">
                    {Icon ? <Icon className="w-7 h-7 text-primary" /> : null}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 text-balance">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
