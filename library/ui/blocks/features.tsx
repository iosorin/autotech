"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Enter } from "@ui/atoms/enter";
import { Button } from "../atoms/button";
import { cn } from "@utils";

type Tab = { id: string; label: string };
type Feature = { icon: React.ReactNode; text: string };
type TabContent = { title: string; features: Feature[]; image?: string };

type Props = {
  tabs: Tab[];
  content: Record<string, TabContent>;
  image: {
    src: string;
    alt: string;
  };
};

export const Features = ({ tabs, content, image }: Props) => {
  const [active, setActive] = useState(tabs[0]?.id ?? "orders");
  const data = content[active];

  if (!data) return null;

  const half = Math.ceil(data.features.length / 2);
  const left = data.features.slice(0, half);
  const right = data.features.slice(half);

  const renderFeatures = (features: Feature[], delay: number) => {
    return features.map((item, i) => {
      return (
        <Enter key={item.text} variant="fade-up" delay={delay + i * 60} duration={500}>
          <div className="flex items-start gap-4">
            {item.icon && <span className="flex-shrink-0 mt-1.5">
              {item.icon}
            </span>}
            <p className="text-lg text-foreground leading-relaxed">{item.text}</p>
          </div>
        </Enter>
      );
    })
  }

  return (
    <>
      {/* Табы */}
      <Enter variant="fade-up" duration={500}>
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="secondary"
              className={cn(active === tab.id && "bg-foreground text-background")}
              // size="lg"
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </Enter>

      <Enter variant="fade" duration={500} key={active}>
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12 text-balance">
          {data.title}
        </h2>
      </Enter>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 justify-between">
        {image && (
          <Enter variant="fade-right" duration={700} className="flex-1 min-w-0">
            <div className="relative w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={435}
                height={664}
                className="w-full h-auto"
              />
            </div>
          </Enter>
        )}

        {/* Левая колонка фич */}
        <div className="flex flex-col gap-6 flex-1">
          {renderFeatures(left, 0)}
        </div>

        {/* Правая колонка фич */}
        <div className="flex flex-col gap-6 flex-1">
          {renderFeatures(right, half)}
        </div>
      </div>
    </>
  );
};

export default Features;
