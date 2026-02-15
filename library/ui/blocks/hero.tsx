"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { Button } from "@ui/atoms/button";
import React from "react";
import { cn } from "@/library/utils";

type Props = {
  heading: React.ReactNode;
  features: { icon: React.ReactNode; label: string }[];
  card: { title: string; desc: string; icon: React.ReactNode; };
  image: { src: string; alt: string; };
  links?: { label: string; href: string; props?: React.ComponentProps<typeof Button>; }[];
  cta?: React.ReactNode;
  className?: string;
};

export const Hero = ({
  heading,
  features,
  card,
  image,
  links,
  cta,
  className,
}: Props) => {
  return (
    <div className={cn("flex flex-col mx-auto", className)}>
      <div className="flex flex-col gap-6">
        {heading && (
          <Enter variant="fade-up" duration={700}>
            {heading}
          </Enter>
        )}

        {links && links.length > 0 && (
          <Enter variant="fade-up" delay={200} duration={600}>
            <div className="flex flex-wrap justify-center gap-3">
              {links.map((link, i) => (
                <Button asChild variant="default" className="rounded-full" size="xl" key={link.href} {...link.props}>
                  <Link href={link.href} title={link.label}>
                    {link.label}
                    {i === 0 && <ArrowUpRight />}
                  </Link>
                </Button>
              ))}
            </div>
          </Enter>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center mt-6 lg:mt-0">
        <div className="flex flex-wrap gap-3 flex-1 justify-center lg:justify-start order-2 lg:order-1">
          {features.map((item, i) => {
            return (
              <Enter key={item.label
              } variant="fade-right" delay={i * 80} duration={500} >
                <div className="inline-flex items-center shadow-sm gap-2 rounded-full px-3 py-2 md:px-4 md:py-2.5 text-sm w-fit bg-white whitespace-nowrap max-w-full">
                  {item.icon &&
                    <span className="flex-shrink-0">
                      {item.icon}
                    </span>
                  }

                  <span className="text-base md:text-lg truncate">{item.label}</span>
                </div>
              </Enter>
            );
          })}

          {cta && (
            <Enter variant="fade-right" delay={500} duration={500} className="mt-2">
              {cta}
            </Enter>
          )}
        </div>

        <Enter variant="scale-up" delay={150} duration={800} className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2" >
          {image &&
            <div className="relative w-full max-w-xs lg:max-w-md">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={600}
                className="rounded-3xl w-full h-auto"
                priority
              />
            </div>
          }
        </Enter >

        {card && (
          <Enter variant="fade-left" delay={300} duration={600} className="flex-1 w-full order-3" >
            <div className="rounded-2xl bg-gradient-white p-4 md:p-6 center flex-col text-center gap-3 md:gap-4">
              {card.icon}
              <h3 className="font-bold text-foreground mb-1 max-w-[235px]">{card.title}</h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-[260px]">{card.desc}</p>
            </div>
          </Enter >
        )}
      </div>
    </div>
  );
};

export default Hero;
