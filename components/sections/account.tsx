"use client";

import { Shield, BarChart3, Building2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const iconMap = { Shield, BarChart3, Building2 };

type Props = {
  id?: string;
  titleLine1: string;
  titleLine2: string;
  descLine1: string;
  descLine2: string;
  subtitle: string;
  cards: {
    icon: string;
    title: string;
    tags: string[];
    description: string;
  }[];
};

const Account = ({ id, titleLine1, titleLine2, descLine1, descLine2, subtitle, cards }: Props) => {
  return (
    <section id={id} className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <div className="text-center mb-4">
            <p className="text-sm font-medium text-primary mb-2">{subtitle}</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground text-balance leading-tight">
              {titleLine1}
              <br />
              {titleLine2}
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-10 text-balance">
            {descLine1}
            <br />
            {descLine2}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <AnimateOnScroll key={card.title} variant="fade-up" delay={i * 120} duration={600}>
                <div className="rounded-2xl border border-border p-6 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Account;