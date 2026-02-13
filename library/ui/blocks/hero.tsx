"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  RefreshCw,
  ScanLine,
  BarChart3,
  Calculator,
  CalendarCheck,
  Users,
} from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { Button } from "@ui/atoms/button";

const iconMap = { ScanLine, BarChart3, Calculator, CalendarCheck, Users };

type Props = {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  features: { icon: string; label: string }[];
  card: {
    title: string;
    desc: string;
  },
  image: {
    src: string;
    alt: string;
  }
  ctaStart: {
    label: string;
    href: string;
  };
  ctaContact: {
    label: string;
    href: string;
  };
  ctaTelegram: {
    label: string;
    href: string;
  };
  className?: string;
};

export const Hero = ({
  subtitle,
  titleLine1,
  titleLine2,
  features,
  ctaTelegram,
  card,
  image,
  ctaStart,
  ctaContact,
  className,
}: Props) => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="flex flex-col gap-6">
        <Enter variant="fade-up" duration={700}>
          <div className="text-center">
            <p className="text-lg font-medium text-primary mb-3">{subtitle}</p>
            <h1>
              {titleLine1}
              <br />
              {titleLine2}
            </h1>
          </div>
        </Enter>

        <Enter variant="fade-up" delay={200} duration={600}>
          <div className="flex flex-wrap justify-center gap-3">
            {ctaStart && (
              <Button asChild variant="default" className="rounded-full" size="xl">
                <Link href={ctaStart.href}>
                  {ctaStart.label}
                  <ArrowUpRight />
                </Link>
              </Button>
            )}
            {ctaContact && (
              <Button asChild variant="outline" className="rounded-full" size="xl">
                <Link href={ctaContact.href}>{ctaContact.label}</Link>
              </Button>
            )}
          </div>
        </Enter>
      </div>

      <div className="flex flex-col lg:flex-row gap-0 items-center">
        <div className="flex flex-wrap gap-3 flex-1">
          {features.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Enter key={item.label
              } variant="fade-right" delay={i * 80} duration={500} >
                <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm w-fit bg-white whitespace-nowrap">
                  {Icon ? <Icon className="size-5 text-primary flex-shrink-0" /> : null}
                  <span className="text-lg">{item.label}</span>
                </div>
              </Enter>
            );
          })}

          {ctaTelegram && (
            <Enter variant="fade-right" delay={500} duration={500}>
              <Link
                href={ctaTelegram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-telegram px-5 py-3 text-sm font-medium text-primary-foreground mt-2 w-fit hover:opacity-90 transition-opacity"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-10 fill-current flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.332-.373-.119l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z" />
                </svg>
                <span className="text-lg max-w-[220px]">{ctaTelegram.label}</span>
              </Link>
            </Enter>
          )}
        </div>

        <Enter variant="scale-up" delay={150} duration={800} className="lg:w-1/3 flex justify-center" >
          {image &&
            <div className="relative w-full max-w-md">
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
          <Enter variant="fade-left" delay={300} duration={600} className="flex-1" >
            <div className="rounded-2xl bg-gradient-to-b from-white to-transparent p-5 center flex-col text-center gap-4">
              <RefreshCw className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-bold text-foreground mb-1 md:max-w-[235px]">{card.title}</h3>
              <p className="text-lg text-muted-foreground md:max-w-[260px]">{card.desc}</p>
            </div>
          </Enter >
        )}
      </div>
    </div>
  );
};

export default Hero;
