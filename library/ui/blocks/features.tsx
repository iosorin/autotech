"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@ui/atoms/tabs";
import { Enter } from "@ui/atoms/enter";
import { Lead } from "@ui/atoms/lead";
import { Icon } from "@ui/atoms/icon";
import { cn } from "@utils";

type TabContent = {
  id: string;
  label: string;
  title: string;
  items: { icon?: React.ComponentProps<typeof Icon>; text: string }[];
  image?: { src: string; alt: string };
};

type Props =
  | { list: TabContent[] }
  | { tabs: { id: string; label: string }[]; content: Record<string, Omit<TabContent, "id" | "label">> };

export const Features = (props: Props) => {
  const tabs = "list" in props
    ? props.list.map((x) => ({ id: x.id, label: x.label }))
    : props.tabs;
  const content = "list" in props
    ? Object.fromEntries(props.list.map((x) => [x.id, x]))
    : props.content;
  const list: TabContent[] = "list" in props
    ? props.list
    : props.tabs
      .filter((tab) => content[tab.id])
      .map((tab) => ({ ...content[tab.id]!, id: tab.id, label: tab.label }));

  const renderFeatures = (items: TabContent['items'], delay: number) =>
    items.map((item, i) => (
      <Enter key={item.text} variant="fade-up" delay={delay + i * 80} duration={500} className="w-full">
        <div className="flex items-start gap-4">
          <Icon {...item.icon} className={cn("size-6 text-primary mt-1.5", item.icon?.className)} />
          <p className="text-lg text-foreground">{item.text}</p>
        </div>
      </Enter>
    ));

  const defaultTab = tabs[0]?.id ?? "orders";

  return (
    <Tabs defaultValue={defaultTab} className="flex flex-col items-center w-full flex-wrap">
      <TabsList className="mb-12 mx-auto max-w-full overflow-x-auto text-lg">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {list.map((data) => {
        if (!data) return null;
        const items = data.items || [];
        const half = Math.ceil(items.length / 2);
        const left = items.slice(0, half);
        const right = items.slice(half);

        return (
          <TabsContent key={data.id} value={data.id} className="flex flex-col gap-6 mt-0">
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
                    className="w-full h-auto mx-auto"
                  />
                </div>
              )}

              <div className="flex flex-col gap-8 flex-1 md:mt-4">
                {renderFeatures(left, 0)}
              </div>
              <div className="flex flex-col gap-8 flex-1 md:mt-4">
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
