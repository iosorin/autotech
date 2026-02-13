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
  image?: {
    alt: string;
    href: string;
  };
};

export const Clients = ({ subtitle, titleLine1, titleLine2, intro, items, image }: Props) => {
  const checkIcon = <CheckCircle2 className="size-6 text-primary flex-shrink-0 mt-0.5" />
  return (
    <>
      {/* Заголовок */}
      <Enter variant="fade-up" duration={600}>
        <div className="text-center mb-12">
          <p className="text-lg text-primary mb-3">{subtitle}</p>
          <h2>
            {titleLine1}
            <br />
            {titleLine2}
          </h2>
        </div>
      </Enter>

      <div className="flex justify-between items-center gap-20">
        {image &&
          <Enter variant="fade-left" delay={200} duration={700} className="flex-[0_0_35%]">
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
          <p className="text-lg mb-8">{intro}</p>
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
    </>
  );
};

export default Clients;