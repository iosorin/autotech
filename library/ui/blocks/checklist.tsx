"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Enter } from "../atoms/enter";

type Props = {
  heading: string;
  items: string[];
  image: { alt: string; href: string; };
};

export const Checklist = ({ heading, items, image }: Props) => {
  const checkIcon = <CheckCircle2 className="size-6 text-primary flex-shrink-0 mt-0.5" />
  return (
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
        <h2 className="mb-6">{heading}</h2>
        <div className="flex flex-col gap-6">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              {checkIcon}
              <p className="text-lg text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </Enter>
    </div>
  );
};

export default Checklist;
