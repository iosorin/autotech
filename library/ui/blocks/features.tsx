"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ScanLine,
  Palette,
  Calculator,
  BarChart3,
  CalendarCheck,
  Users,
  CheckCircle2,
  Phone,
  CreditCard,
  Scissors,
} from "lucide-react";
import { Enter } from "@ui/atoms/enter";

const iconMap = {
  ScanLine,
  Palette,
  Calculator,
  BarChart3,
  CalendarCheck,
  Users,
  CheckCircle2,
  Phone,
  CreditCard,
  Scissors,
};

type Tab = { id: string; label: string };
type Feature = { icon: string; text: string };
type TabContent = { title: string; features: Feature[]; image?: string };

type Props = {
  tabs: Tab[];
  content: Record<string, TabContent>;
  imageAlt: string;
};

export const Features = ({ tabs, content, imageAlt }: Props) => {
  const [active, setActive] = useState(tabs[0]?.id ?? "orders");
  const data = content[active];

  if (!data) return null;

  const half = Math.ceil(data.features.length / 2);
  const left = data.features.slice(0, half);
  const right = data.features.slice(half);

  return (
    <>
      {/* Табы */}
      <Enter variant="fade-up" duration={500}>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                active === tab.id
                  ? "bg-foreground text-background"
                  : "border border-border text-foreground hover:bg-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </Enter>

      {/* Заголовок */}
      <Enter variant="fade" duration={500} key={active}>
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12 text-balance">
          {data.title}
        </h2>
      </Enter>

      {/* Контент: телефон + 2 колонки фич */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr] gap-8 lg:gap-12 items-start">
        {/* Телефон */}
        <Enter variant="fade-right" duration={700} className="flex justify-center lg:justify-start">
          <div className="relative w-[240px]">
            <Image
              src={data.image ?? "/images/app-mockup.png"}
              alt={imageAlt}
              width={240}
              height={490}
              className="w-full h-auto"
            />
          </div>
        </Enter>

        {/* Левая колонка фич */}
        <div className="flex flex-col gap-6">
          {left.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Enter key={feature.text} variant="fade-up" delay={i * 60} duration={500}>
                <div className="flex items-start gap-3">
                  {Icon ? <Icon className="size-5 text-primary flex-shrink-0 mt-0.5" /> : null}
                  <p className="text-sm text-foreground leading-relaxed">{feature.text}</p>
                </div>
              </Enter>
            );
          })}
        </div>

        {/* Правая колонка фич */}
        <div className="flex flex-col gap-6">
          {right.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Enter key={feature.text} variant="fade-up" delay={(half + i) * 60} duration={500}>
                <div className="flex items-start gap-3">
                  {Icon ? <Icon className="size-5 text-primary flex-shrink-0 mt-0.5" /> : null}
                  <p className="text-sm text-foreground leading-relaxed">{feature.text}</p>
                </div>
              </Enter>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Features;
