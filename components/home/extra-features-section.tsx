"use client";

import Image from "next/image";
import { Settings, CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { home } from "@content";

export function ExtraFeaturesSection() {
  const x = home.extraFeatures;
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-16 text-balance">
            {x.title}
            <span className="text-primary">{x.titleHighlight}</span>
            {x.titleSuffix}
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-10 items-center mb-20">
          <AnimateOnScroll variant="fade-right" duration={600} className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-muted-foreground" />
              <h3 className="text-xl font-bold text-foreground">{x.tire.heading}</h3>
            </div>
            <div className="flex flex-col gap-3">
              {x.tire.items.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={200} duration={700} className="lg:w-1/2">
            <Image
              src="/images/tires.jpg"
              alt={x.tire.imageAlt}
              width={500}
              height={350}
              className="rounded-2xl w-auto h-auto"
            />
          </AnimateOnScroll>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center mb-20">
          <AnimateOnScroll variant="fade-right" duration={600} className="lg:w-1/2">
            <h3 className="text-xl font-bold text-foreground mb-3">{x.integrations.heading}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{x.integrations.desc}</p>
          </AnimateOnScroll>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-3">
              {x.integrations.items.map((item, i) => (
                <AnimateOnScroll key={item.name} variant="scale-up" delay={i * 100} duration={500}>
                  <div className="rounded-xl border border-border px-5 py-4 flex items-center justify-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <span className="font-medium text-foreground text-sm">{item.label}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
          <AnimateOnScroll variant="fade-right" duration={700} className="lg:w-1/2">
            <Image
              src="/images/mechanic.jpg"
              alt={x.mechanicImageAlt}
              width={500}
              height={600}
              className="rounded-2xl w-auto h-auto"
            />
          </AnimateOnScroll>
          <div className="lg:w-1/2 flex flex-col gap-10">
            <AnimateOnScroll variant="fade-left" delay={150} duration={600}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{x.security.heading}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {x.security.items.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-left" delay={300} duration={600}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{x.support.heading}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {x.support.items.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        <AnimateOnScroll variant="fade-up" duration={600}>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-balance">
              {x.devices.heading}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {x.devices.list.map((device) => (
                <div
                  key={device.label}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
                >
                  <span>{device.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
