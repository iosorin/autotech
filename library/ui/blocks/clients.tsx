"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Enter } from "@ui/atoms/enter";

type Props = {
  intro: string;
  items: string[];
  image?: {
    alt: string;
    href: string;
  };
};

export const Clients = ({ intro, items, image }: Props) => {
  const checkIcon = <CheckCircle2 className="size-6 text-primary flex-shrink-0 mt-0.5" />
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20">
      {image &&
        <Enter variant="fade-left" delay={200} duration={700} className="w-full lg:flex-[0_0_30%] max-md:hidden">
          <Image
            src={image.href}
            alt={image.alt}
            width={500}
            height={350}
            className="rounded-2xl w-full h-auto"
          />
        </Enter>
      }
      <Enter variant="fade-right" duration={600} className="flex-1">
        <p className="text-lg mb-8 leading-relaxed">{intro}</p>
        <div className="flex flex-col gap-6">
          {items.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              {checkIcon}
              <p className="text-lg text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </Enter>
    </div>
  );
};

export default Clients;