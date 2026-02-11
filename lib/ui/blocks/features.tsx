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
type TabContent = { title: string; features: { icon: string; text: string }[] };

type Props = {
  id?: string;
  tabs: Tab[];
  content: Record<string, TabContent>;
  imageAlt: string;
};

export function FeaturesSection({ id, tabs, content, imageAlt }: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "orders");
  const tabContent = content[activeTab];

  if (!tabContent) return null;

  return (
    <section id={id} className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Enter variant="fade-up" duration={500}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                  ? "bg-foreground text-background scale-105"
                  : "border border-border text-foreground hover:bg-secondary"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Enter>

        <Enter variant="fade" duration={500} key={activeTab}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 text-balance">
            {tabContent.title}
          </h2>
        </Enter>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <Enter variant="fade-right" duration={700} className="lg:w-1/3 flex justify-center">
            <div className="relative w-64">
              <Image
                src="/images/app-mockup.jpg"
                alt={imageAlt}
                width={300}
                height={600}
                className="rounded-3xl shadow-lg w-auto h-auto"
              />
            </div>
          </Enter>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {tabContent.features.map((feature, i) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <Enter key={feature.text
                } variant="fade-up" delay={i * 60} duration={500} >
                  <div className="flex items-start gap-3">
                    {Icon ? <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> : null}
                    <p className="text-sm text-foreground leading-relaxed">{feature.text}</p>
                  </div>
                </Enter>
              );
            })}
          </div >
        </div >
      </div >
    </section >
  );
}
