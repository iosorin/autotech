"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { Button } from "@ui/atoms/button";

type Item = {
  title: string;
  subtitle: string;
  source: string;
  text: string;
  image?: string;
  badge?: string;
};

type Props = {
  prevLabel: string;
  nextLabel: string;
  items: Item[];
};

export const Slider = ({ prevLabel, nextLabel, items }: Props) => {
  const [current, setCurrent] = React.useState(0);
  const [sliding, setSliding] = React.useState(false);

  const slide = (direction: "prev" | "next") => {
    setSliding(true);
    setTimeout(() => {
      if (direction === "prev") {
        setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
      } else {
        setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));
      }
      setSliding(false);
    }, 250);
  };

  const item = items[current];
  const next = items[(current + 1) % items.length];

  return (
    <>
      <Enter variant="fade-up" duration={600}>
        <div className="flex items-center justify-end mb-10">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => slide("prev")}
              aria-label={prevLabel}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => slide("next")}
              aria-label={nextLabel}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
      </Enter>

      <div className="flex gap-6 overflow-hidden">
        <div
          className={`flex-1 min-w-0 transition-all duration-300 ${sliding ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
        >
          <div className="rounded-2xl p-6 md:p-8 bg-white h-full shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center md:items-start flex-shrink-0 w-full md:w-1/5">
                <div className="size-20 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground mb-3 overflow-hidden">
                  {item.image ? (
                    <Image src={item.image} alt={item.title} width={80} height={80} className="object-cover" />
                  ) : (
                    item.title.charAt(0)
                  )}
                </div>
                <h4 className="font-bold text-foreground text-sm text-center md:text-left leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground text-center md:text-left mt-1">
                  {item.subtitle}
                </p>
              </div>

              <div className="flex-1">
                {item.badge ? (
                  <div className="mb-4">
                    <Image src={item.badge} alt={item.source} width={80} height={32} className="h-8 w-auto" />
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="rounded-md px-3 py-1.5 text-xs font-medium bg-muted text-foreground">
                      {item.source}
                    </span>
                  </div>
                )}
                <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`hidden lg:block w-64 flex-shrink-0 transition-all duration-300 ${sliding ? "opacity-0 translate-x-4" : "opacity-60 translate-x-0"}`}
        >
          <div className="rounded-2xl p-6 bg-white h-full shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="size-16 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground flex-shrink-0 overflow-hidden">
                {next.image ? (
                  <Image src={next.image} alt={next.title} width={64} height={64} className="object-cover" />
                ) : (
                  next.title.charAt(0)
                )}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm leading-snug">{next.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{next.subtitle}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-5 leading-relaxed">{next.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;