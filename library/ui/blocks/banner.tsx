"use client";

import Image from "next/image";
import Link from "next/link";
import { Enter } from "@ui/atoms/enter";
import { FileText, Building2 } from "lucide-react";

type Props = {
  eyebrow?: string;
  heroTitle?: string;
  heroBadge1: string;
  heroBadge2: string;
  heroCardTitle: string;
  heroCardDesc: string;
  image: {
    src: string;
    alt: string;
  };
  contactCta: {
    label: string;
    href: string;
  };
};

export const Banner = ({
  eyebrow,
  heroTitle,
  heroBadge1,
  heroBadge2,
  heroCardTitle,
  heroCardDesc,
  image,
  contactCta,
}: Props) => {
  return (
    <>
      <Enter variant="fade-up" duration={700}>
        {eyebrow && (
          <p className="text-center text-sm text-muted-foreground mb-3">{eyebrow}</p>
        )}
        {heroTitle && (
          <h1 className="text-center leading-tight text-balance mx-auto">
            {heroTitle}
          </h1>
        )}
      </Enter>

      <div className="mt-12 flex flex-col lg:flex-row items-center gap-8 justify-center">
        <Enter variant="fade-right" delay={200} duration={600}>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-2 bg-background rounded-full border border-border px-4 py-2 text-sm text-foreground shadow-sm">
              <FileText className="w-4 h-4 text-primary" />
              {heroBadge1}
            </div>
            <div className="flex items-center gap-2 bg-background rounded-full border border-border px-4 py-2 text-sm text-foreground shadow-sm">
              <Building2 className="w-4 h-4 text-primary" />
              {heroBadge2}
            </div>
            {contactCta && (
              <Link
                href={contactCta.href}
                className="inline-flex items-center gap-1 rounded-full border border-foreground px-5 py-2.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 "
              >
                {contactCta.label}
              </Link>
            )}
          </div>
        </Enter>

        {image &&
          <Enter variant="scale-up" delay={100} duration={800}>
            <div className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={320}
                height={500}
                className="rounded-3xl w-auto h-auto"
                priority
              />
            </div>
          </Enter>
        }

        <Enter variant="fade-left" delay={300} duration={600} >
          <div className="bg-background rounded-2xl border border-border p-6 shadow-sm text-center max-w-xs hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-3">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-lg">{heroCardTitle}</h3>
            <p className="text-sm text-muted-foreground mt-1">{heroCardDesc}</p>
          </div>
        </Enter >
      </div >
    </>
  );
};

export default Banner;
