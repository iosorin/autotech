"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Enter } from "@ui/atoms/enter";

type Props = {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  intro: string;
  items: string[];
  imageAlt: string;
  image?: string;
};

export const Clients = ({ subtitle, titleLine1, titleLine2, intro, items, imageAlt, image }: Props) => {
  return (
    <>
      {/* Заголовок */}
      <Enter variant="fade-up" duration={600}>
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3">{subtitle}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-balance">
            {titleLine1}
            <br />
            {titleLine2}
          </h2>
        </div>
      </Enter>

      {/* Контент */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-center">
        {/* Телефон */}
        <Enter variant="fade-right" duration={700} className="flex justify-center">
          <div className="relative w-[240px]">
            <Image
              src={image ?? "/images/app-booking.png"}
              alt={imageAlt}
              width={240}
              height={490}
              className="w-full h-auto"
            />
          </div>
        </Enter>

        {/* Текст */}
        <div>
          <Enter variant="fade-left" delay={100} duration={600}>
            <p className="text-foreground mb-8 leading-relaxed font-medium">{intro}</p>
          </Enter>
          <div className="flex flex-col gap-5">
            {items.map((feature, i) => (
              <Enter key={feature} variant="fade-left" delay={200 + i * 100} duration={500}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-relaxed">{feature}</p>
                </div>
              </Enter>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;