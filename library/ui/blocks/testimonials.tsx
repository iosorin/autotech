"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import Image from "next/image";
import { Button } from "../atoms/button";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar?: string;
  logo?: string;
};

type Props = {
  heading: string;
  prevAria: string;
  nextAria: string;
  list: Testimonial[];
};

export const Testimonials = ({ heading, prevAria, nextAria, list }: Props) => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);

  const slide = (direction: "prev" | "next") => {
    setSliding(true);
    setTimeout(() => {
      if (direction === "prev") {
        setCurrent((c) => (c === 0 ? list.length - 1 : c - 1));
      } else {
        setCurrent((c) => (c === list.length - 1 ? 0 : c + 1));
      }
      setSliding(false);
    }, 250);
  };

  const item = list[current];
  const next = list[(current + 1) % list.length];

  return (
    <>
      {/* Заголовок и навигация */}
      <Enter variant="fade-up" duration={600}>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            {heading}
          </h2>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => slide("prev")}
              aria-label={prevAria}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => slide("next")}
              aria-label={nextAria}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
      </Enter>

      {/* Карусель */}
      <div className="flex gap-6 overflow-hidden">
        {/* Текущий отзыв */}
        <div
          className={`flex-1 min-w-0 transition-all duration-300 ${sliding ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
        >
          <div className="rounded-2xl p-6 md:p-8 bg-white h-full shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Аватар и имя */}
              <div className="flex flex-col items-center md:items-start flex-shrink-0 w-1/5">
                <div className="size-20 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground mb-3 overflow-hidden">
                  {item.avatar ? (
                    <Image src={item.avatar} alt={item.name} width={80} height={80} className="object-cover" />
                  ) : (
                    item.name.charAt(0)
                  )}
                </div>
                <h4 className="font-bold text-foreground text-sm text-center md:text-left leading-snug">
                  {item.name}
                </h4>
                <p className="text-xs text-muted-foreground text-center md:text-left mt-1">
                  {item.role}
                </p>
              </div>

              {/* Текст */}
              <div className="flex-1">
                {item.logo ? (
                  <div className="mb-4">
                    <Image src={item.logo} alt={item.company} width={80} height={32} className="h-8 w-auto" />
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground">
                      {item.company}
                    </span>
                  </div>
                )}
                <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`hidden lg:block w-64 flex-shrink-0 transition-all duration-300 ${sliding ? "opacity-0 translate-x-4" : "opacity-60 translate-x-0"
            }`}
        >
          <div className="rounded-2xl p-6 bg-white h-full shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="size-16 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground flex-shrink-0 overflow-hidden">
                {next.avatar ? (
                  <Image src={next.avatar} alt={next.name} width={64} height={64} className="object-cover" />
                ) : (
                  next.name.charAt(0)
                )}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm leading-snug">{next.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{next.role}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-5 leading-relaxed">{next.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
