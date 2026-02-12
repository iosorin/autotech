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
  featureTags: { icon: string; label: string }[];
  telegramCta: string;
  telegramUrl: string;
  cardTitle1: string;
  cardTitle2: string;
  cardDesc: string;
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
  className?: string;
};

export const Hero = ({
  subtitle,
  titleLine1,
  titleLine2,
  featureTags,
  telegramCta,
  telegramUrl,
  cardTitle1,
  cardTitle2,
  cardDesc,
  image,
  ctaStart,
  ctaContact,
  className,
}: Props) => {
  return (
    <>
      <Enter variant="fade-up" duration={700}>
        <div className="text-center mb-8">
          <p className="text-lg font-medium text-primary mb-3">{subtitle}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            {titleLine1}
            <br />
            {titleLine2}
          </h1>
        </div>
      </Enter>

      <Enter variant="fade-up" delay={200} duration={600}>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex flex-col gap-3 lg:w-1/4">
          {featureTags.map((tag, i) => {
            const Icon = iconMap[tag.icon as keyof typeof iconMap];
            return (
              <Enter key={tag.label
              } variant="fade-right" delay={i * 80} duration={500} >
                <div className="inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-2.5 text-sm text-foreground w-fit">
                  {Icon ? <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" /> : null}
                  <span>{tag.label}</span>
                </div>
              </Enter>
            );
          })}

          <Enter variant="fade-right" delay={500} duration={500}>
            <Link
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground mt-2 w-fit hover:opacity-90 transition-opacity"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.332-.373-.119l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z" />
              </svg>
              {telegramCta}
            </Link>
          </Enter>
        </div >

        <Enter variant="scale-up" delay={150} duration={800} className="lg:w-2/4 flex justify-center" >
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

        <Enter variant="fade-left" delay={300} duration={600} className="lg:w-1/4" >
          <div className="rounded-2xl border border-border p-6 text-center">
            <RefreshCw className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h3 className="font-bold text-foreground mb-1">{cardTitle1}</h3>
            <h3 className="font-bold text-foreground mb-2">{cardTitle2}</h3>
            <p className="text-sm text-muted-foreground">{cardDesc}</p>
          </div>
        </Enter >
      </div >
    </>
  );
};

export default Hero;
