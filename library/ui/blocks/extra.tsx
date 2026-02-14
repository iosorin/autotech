"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import Link from "next/link";
import { Button } from "../atoms/button";

type Item = {
  heading: string;
  desc?: string;
  items?: string[];
  image?: { alt: string; href: string; };
  cta?: { label: string; href: string; };
};

type Props = {
  title?: {
    text: string;
    highlight?: string;
    suffix?: string;
  },
  tire?: Item;
  integrations?: Item;
  security?: Item;
  support?: Item;
};

export const Extra = ({
  title,
  tire,
  integrations,
  security,
  support,
}: Props) => {
  const renderCta = (cta: Item['cta']) => {
    if (!cta) return null;
    return (
      <Button asChild variant="default" size="lg">
        <Link href={cta.href}>
          {cta.label}
          <ArrowUpRight />
        </Link>
      </Button>
    );
  };
  const renderImage = (image: Item['image']) => {
    if (!image) return null;
    return (
      <Enter variant="fade-left" delay={200} duration={700} className="w-full">
        <Image
          src={image.href}
          alt={image.alt}
          width={500}
          height={350}
          className="rounded-2xl w-full h-auto"
        />
      </Enter>
    );
  };
  const renderItems = (items: Item['items']) => {
    if (!items) return null;
    return (
      <div className="flex flex-col gap-6">
        {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
            <CheckCircle2 className="size-6 md:size-7 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-base md:text-lg text-foreground">{item}</p>
          </div>
        ))}
      </div>
    );
  };
  const renderDesc = (desc: Item['desc']) => {
    if (!desc) return null;
    return (
      <p className="text-base md:text-lg leading-relaxed">{desc}</p>
    );
  };

  return (
    <div className="flex flex-col gap-12 md:gap-20">
      {/* Заголовок */}
      {title && (
        <Enter variant="fade-up" duration={600}>
          <h2 className="text-center">
            {title.text}
            {title.highlight && <span className="text-primary">{title.highlight}</span>}
            {title.suffix}
          </h2>
        </Enter>
      )}

      {tire && (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20">
          <Enter variant="fade-right" duration={600} className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
            <h2>{tire.heading}</h2>
            {renderDesc(tire.desc)}
            {renderItems(tire.items)}
            {renderCta(tire.cta)}
          </Enter>
          <div className="order-1 lg:order-2 w-full lg:w-auto lg:flex-1">
            {renderImage(tire.image)}
          </div>
        </div>
      )}

      {integrations && (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between">
          <Enter variant="fade-right" duration={600} className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
            <h2>{integrations.heading}</h2>
            {renderDesc(integrations.desc)}
            {renderItems(integrations.items)}
            {renderCta(integrations.cta)}
          </Enter>
          <div className="order-1 lg:order-2 w-full lg:w-auto lg:flex-1">
            {renderImage(integrations.image)}
          </div>
        </div>
      )}


      {/* Картинка + Безопасность + Поддержка */}
      {security && (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20">
          <div className="w-full lg:w-auto lg:flex-1">
            {renderImage(security.image)}
          </div>
          <Enter variant="fade-right" duration={600} className="w-full lg:flex-[0_0_55%] flex flex-col gap-10 h-full justify-between">
            <div className="flex-1 flex flex-col gap-6">
              <h2>{security.heading}</h2>
              {renderDesc(security.desc)}
              {renderItems(security.items)}
              {renderCta(security.cta)}
            </div>

            {support && (
              <div className="flex-1 flex flex-col gap-6">
                <h2>{support.heading}</h2>
                {renderDesc(support.desc)}
                {renderItems(support.items)}
                {renderCta(support.cta)}
              </div>
            )}
          </Enter>
        </div>
      )}
    </div>
  );
};

export default Extra;
