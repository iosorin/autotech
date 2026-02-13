"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Enter } from "@ui/atoms/enter";

type ExtraProps = {
  title: string;
  titleHighlight: string;
  titleSuffix: string;
  tire: { heading: string; items: string[]; image: { alt: string; href: string; } };
  integrations: { heading: string; desc: string; image: { alt: string; href: string; } };
  security: { heading: string; items: string[]; image: { alt: string; href: string; } };
  support: { heading: string; items: string[] };
  devices: { heading: string; list: { label: string; icon?: React.ReactNode }[] };
};

export const Extra = ({
  title,
  titleHighlight,
  titleSuffix,
  tire,
  integrations,
  security,
  support,
  devices,
}: ExtraProps) => {
  const checkIcon = <CheckCircle2 className="size-6 text-primary flex-shrink-0 mt-0.5" />
  return (
    <div className="flex flex-col gap-20">
      {/* Заголовок */}
      <Enter variant="fade-up" duration={600}>
        <h2 className="text-center">
          {title}
          <span className="text-primary">{titleHighlight}</span>
          {titleSuffix}
        </h2>
      </Enter>

      {/* Блок шин */}
      <div className="flex justify-between items-center gap-20">
        <Enter variant="fade-right" duration={600} className="flex-1">
          <h2 className="mb-6">{tire.heading}</h2>
          <div className="flex flex-col gap-6">
            {tire.items.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                {checkIcon}
                <p className="text-lg text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </Enter>
        {tire.image &&
          <Enter variant="fade-left" delay={200} duration={700} className="flex-1">
            <Image
              src={tire.image.href}
              alt={tire.image.alt}
              width={500}
              height={350}
              className="rounded-2xl w-full h-auto"
            />
          </Enter>
        }
      </div>

      {/* Интеграции */}
      <div className="flex gap-20 justify-between">
        <Enter variant="fade-right" duration={600} className="flex-1">
          <h2 className="mb-6">{integrations.heading}</h2>
          <p className="text-lg leading-relaxed">{integrations.desc}</p>
        </Enter>
        {integrations.image &&
          <Enter variant="fade-left" delay={200} duration={700} className="flex-1">
            <Image
              src={integrations.image.href}
              alt={integrations.image.alt}
              width={500}
              height={350}
              className="rounded-2xl w-full h-auto"
            />
          </Enter>
        }
      </div>

      {/* Картинка + Безопасность + Поддержка */}
      <div className="flex justify-between items-center gap-20">
        {security.image &&
          <Enter variant="fade-left" delay={200} duration={700} className="flex-1">
            <Image
              src={security.image.href}
              alt={security.image.alt}
              width={500}
              height={350}
              className="rounded-2xl w-full h-auto"
            />
          </Enter>
        }
        <Enter variant="fade-right" duration={600} className="flex-[0_0_55%] flex flex-col gap-10 h-full justify-between">
          <div className="flex-1">
            <h2 className="mb-6">{security.heading}</h2>
            <div className="flex flex-col gap-6">
              {security.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  {checkIcon}
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h2 className="mb-6">{support.heading}</h2>
            <div className="flex flex-col gap-6">
              {support.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  {checkIcon}
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Enter>
      </div>


      <Enter variant="fade-up" duration={600}>
        <div className="text-center">
          <h2 className="mb-6">{devices.heading}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {devices.list.map((device) => {
              return (
                <div
                  key={device.label}
                  className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
                >
                  {device.icon}
                  <span className="text-lg">{device.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Enter>
    </div>
  );
};

export default Extra;
