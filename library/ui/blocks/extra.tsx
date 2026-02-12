"use client";

import Image from "next/image";
import { Settings, CheckCircle2 } from "lucide-react";
import { Enter } from "@ui/atoms/enter";

type ExtraProps = {
  title: string;
  titleHighlight: string;
  titleSuffix: string;
  tire: { heading: string; items: string[]; imageAlt: string };
  integrations: { heading: string; desc: string; items: { name: string; label: string }[] };
  security: { heading: string; items: string[] };
  support: { heading: string; items: string[] };
  devices: { heading: string; list: { label: string }[] };
  mechanicImageAlt: string;
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
}: ExtraProps) => {
  return (
    <>
      <Enter variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-16 text-balance">
            {title}
            <span className="text-primary">{titleHighlight}</span>
            {titleSuffix}
          </h2>
        </Enter>

        <div className="flex flex-col lg:flex-row gap-10 items-center mb-20">
          <Enter variant="fade-right" duration={600} className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-muted-foreground" />
              <h3 className="text-xl font-bold text-foreground">{tire.heading}</h3>
            </div>
            <div className="flex flex-col gap-3">
              {tire.items.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </Enter>
          <Enter variant="fade-left" delay={200} duration={700} className="lg:w-1/2">
            <Image
              src="/images/tires.jpg"
              alt={tire.imageAlt}
              width={500}
              height={350}
              className="rounded-2xl w-auto h-auto"
            />
          </Enter>
        </div >

        <div className="flex flex-col lg:flex-row gap-10 items-center mb-20">
          <Enter variant="fade-right" duration={600} className="lg:w-1/2">
            <h3 className="text-xl font-bold text-foreground mb-3">{integrations.heading}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{integrations.desc}</p>
          </Enter>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-3">
              {integrations.items.map((item, i) => (
                <Enter key={item.name} variant="scale-up" delay={i * 100} duration={500}>
                  <div className="rounded-xl border border-border px-5 py-4 flex items-center justify-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <span className="font-medium text-foreground text-sm">{item.label}</span>
                  </div>
                </Enter>
              ))}
            </div>
          </div >
        </div >

        <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
          <Enter variant="fade-right" duration={700} className="lg:w-1/2">
            <Image
              src="/images/mechanic.jpg"
              alt={mechanicImageAlt}
              width={500}
              height={600}
              className="rounded-2xl w-auto h-auto"
            />
          </Enter>
          <div className="lg:w-1/2 flex flex-col gap-10">
            <Enter variant="fade-left" delay={150} duration={600}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{security.heading}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {security.items.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Enter>

            <Enter variant="fade-left" delay={300} duration={600} >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{support.heading}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {support.items.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Enter >
          </div >
        </div >

        <Enter variant="fade-up" duration={600} >
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-balance">
              {devices.heading}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {devices.list.map((device) => (
                <div
                  key={device.label}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
                >
                  <span>{device.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Enter >
    </>
  );
};

export default ExtraFeatures;
