"use client";

import React from "react";
import Image from "next/image";
import { Enter } from "@ui/atoms/enter";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "../atoms/tabs";
import Lead from "../atoms/lead";

type Tab = { id: string; label: string };
type Feature = { icon: React.ReactNode; text: string };
type TabContent = {
  title: string;
  features: Feature[];
  image?: { src: string; alt: string };
};

type Props = {
  tabs: Tab[];
  content: Record<string, TabContent>;
};

export const Features = ({ tabs, content }: Props) => {
  const renderFeatures = (features: Feature[], delay: number) => {
    return features.map((item, i) => {
      return (
        <Enter key={item.text} variant="fade-up" delay={delay + i * 60} duration={500} className="w-full">
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

  const defaultTab = tabs[0]?.id ?? "orders";

  return (
    <Tabs defaultValue={defaultTab} className="flex flex-col items-center w-full flex-wrap">
      <TabsList className="mb-10 mx-auto max-w-full overflow-x-auto">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => {
        const data = content[tab.id];
        if (!data) return null;
        const half = Math.ceil(data.features.length / 2);
        const left = data.features.slice(0, half);
        const right = data.features.slice(half);

        return (
          <TabsContent key={tab.id} value={tab.id} className="flex flex-col gap-8 mt-0">
            <Enter variant="fade" duration={500}>
              <Lead title={data.title} />
            </Enter>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 justify-between">
              {data.image && (
                <div className="relative w-full lg:flex-1 min-w-0 order-first">
                  <Image
                    src={data.image.src}
                    alt={data.image.alt}
                    width={435}
                    height={664}
                    className="w-full h-auto max-w-sm mx-auto lg:max-w-none"
                  />
                </div>
              )}

              <div className="flex flex-col gap-6 flex-1">
                {renderFeatures(left, 0)}
              </div>

              <div className="flex flex-col gap-6 flex-1">
                {renderFeatures(right, half)}
              </div>
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default Features;
