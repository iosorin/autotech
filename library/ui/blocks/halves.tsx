"use client";

import Image from "next/image";
import Link from "next/link";
import { Enter } from "@ui/atoms/enter";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  list: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  headingIcon?: React.ReactNode;
  cta?: string;
};

export const Halves = ({
  title,
  list,
  imageSrc,
  imageAlt,
  imagePosition,
  headingIcon,
  cta,
}: Props) => {
  const content = (
    <>
      <div className="flex items-center gap-3 mb-6">
        {headingIcon ?? null}
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-balance">{title}</h2>
      </div>
      <div className="flex flex-col gap-4">
        {list.map((text) => (
          <div key={text} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">{text}</p>
          </div>
        ))}
      </div>
      {cta ? (
        <Link
          href="/contacts"
          className="mt-8 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:opacity-90 hover:scale-105 transition-all duration-200"
        >
          {cta}
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      ) : null}
    </>
  );
  const img = (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={500}
      height={350}
      className="rounded-2xl w-auto h-auto"
    />
  );
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center">
          {imagePosition === "left" ? (
            <>
              <Enter variant="fade-right" duration={700} className="lg:w-1/2">
                {img}
              </Enter>
              <Enter variant="fade-left" delay={200} duration={600} className="lg:w-1/2">
                {content}
              </Enter>
            </>
          ) : (
            <>
              <Enter variant="fade-right" duration={600} className="lg:w-1/2">
                {content}
              </Enter>
              <Enter variant="fade-left" delay={200} duration={700} className="lg:w-1/2">
                {img}
              </Enter>
            </>
          )
          }
        </div >
  );
};

export default Halves;
