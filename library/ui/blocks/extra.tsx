"use client";

import Image from "next/image";
import { Settings, CheckCircle2, Smartphone, Tablet, Laptop, Sliders } from "lucide-react";
import { Enter } from "@ui/atoms/enter";

const deviceIcons = {
  phone: Smartphone,
  tablet: Tablet,
  laptop: Laptop,
};

type ExtraProps = {
  title: string;
  titleHighlight: string;
  titleSuffix: string;
  tire: { heading: string; items: string[]; };
  image: {
    alt: string;
    href: string;
  }
  integrations: { heading: string; desc: string; items: { name: string; label: string; logo?: string }[] };
  security: { heading: string; items: string[] };
  support: { heading: string; items: string[] };
  devices: { heading: string; list: { label: string; icon?: string }[] };
  mechanicImageAlt: string;
  mechanicImage?: string;
};

export const ExtraFeatures = ({
  title,
  titleHighlight,
  titleSuffix,
  tire,
  integrations,
  security,
  support,
  devices,
  mechanicImageAlt,
  mechanicImage,
  image,
}: ExtraProps) => {
  return (
    <>
      {/* Заголовок */}
      <Enter variant="fade-up" duration={600}>
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-16 text-balance">
          {title}
          <span className="text-primary">{titleHighlight}</span>
          {titleSuffix}
        </h2>
      </Enter>

      {/* Блок шин */}
      <div className="flex gap-20 justify-between mb-20">
        <Enter variant="fade-right" duration={600} className="flex-1">
          <h2>{tire.heading}</h2>
          <div className="flex flex-col gap-6 mt-6">
            {tire.items.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="size-8 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </Enter>
        {image &&
          <Enter variant="fade-left" delay={200} duration={700} className="flex-1">
            <Image
              src={image.href}
              alt={image.alt}
              width={500}
              height={350}
              className="rounded-2xl w-full h-auto"
            />
          </Enter>
        }
      </div>

      {/* Интеграции */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20">
        <Enter variant="fade-right" duration={600}>
          <h3 className="text-xl font-bold text-foreground mb-4">{integrations.heading}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{integrations.desc}</p>
        </Enter>
        <Enter variant="fade-left" delay={150} duration={600}>
          <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
            {integrations.items.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-border px-5 py-3 flex items-center gap-2 bg-white"
              >
                {item.logo && (
                  <Image src={item.logo} alt={item.label} width={24} height={24} className="size-6" />
                )}
                <span className="font-medium text-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </Enter>
      </div>

      {/* Механик + Безопасность + Поддержка */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20">
        <Enter variant="fade-right" duration={700}>
          <Image
            src={mechanicImage ?? "/images/mechanic.jpg"}
            alt={mechanicImageAlt}
            width={460}
            height={360}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </Enter>
        <div className="flex flex-col gap-10">
          {/* Безопасность */}
          <Enter variant="fade-left" delay={150} duration={600}>
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle2 className="size-6 text-primary flex-shrink-0 mt-0.5" />
              <h3 className="text-xl font-bold text-foreground">{security.heading}</h3>
            </div>
            <div className="flex flex-col gap-3 pl-9">
              {security.items.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </Enter>

          {/* Поддержка */}
          <Enter variant="fade-left" delay={300} duration={600}>
            <div className="flex items-start gap-3 mb-4">
              <Sliders className="size-6 text-primary flex-shrink-0 mt-0.5" />
              <h3 className="text-xl font-bold text-foreground">{support.heading}</h3>
            </div>
            <div className="flex flex-col gap-3 pl-9">
              {support.items.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </Enter>
        </div>
      </div>

      {/* Устройства */}
      <Enter variant="fade-up" duration={600}>
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-balance">
            {devices.heading}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {devices.list.map((device) => {
              const Icon = device.icon ? deviceIcons[device.icon as keyof typeof deviceIcons] : null;
              return (
                <div
                  key={device.label}
                  className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
                >
                  {Icon && <Icon className="size-5" />}
                  <span>{device.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Enter>
    </>
  );
};

export default ExtraFeatures;
