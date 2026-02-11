"use client";

import { useState } from "react";
import Image from "next/image";
import Cta from "@/components/sections/cta";
import { CheckCircle2, Droplets, Scissors, Car } from "lucide-react";
import { app, tariffs } from "@content";

const iconMap = { Droplets, Scissors, Car };

export default function TariffsPage() {
  const [activePeriod, setActivePeriod] = useState("1m");
  const p = tariffs;
  return (
    <>
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-primary mb-2">
              {p.platformLabel}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              {p.title}
            </h1>
          </div>

          <div className="rounded-2xl border border-border p-6 md:p-8">
            <div className="flex justify-end mb-6">
              <div className="flex gap-2">
                {p.periods.map((period) => (
                  <button
                    key={period.id}
                    type="button"
                    onClick={() => setActivePeriod(period.id)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activePeriod === period.id
                        ? "bg-primary text-primary-foreground"
                        : "border border-border text-foreground hover:bg-secondary"
                      }`}
                  >
                    {period.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {p.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex items-center justify-between py-4 px-4 rounded-xl ${plan.highlighted ? "bg-accent" : ""
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {plan.icons.map((iconName, i) => {
                        const Icon = iconMap[iconName as keyof typeof iconMap];
                        return Icon ? (
                          <Icon
                            key={`${plan.name}-icon-${i}`}
                            className="w-4 h-4 text-muted-foreground"
                          />
                        ) : null;
                      })}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {plan.name}
                    </span>
                  </div>
                  <div className="flex gap-8 md:gap-16">
                    {p.periods.map((period) => (
                      <span
                        key={period.id}
                        className={`text-sm font-semibold min-w-[60px] text-right ${activePeriod === period.id
                            ? "text-foreground"
                            : "text-muted-foreground"
                          }`}
                      >
                        {plan.prices[period.id as keyof typeof plan.prices]}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              {p.priceNote}
              <br />
              {p.priceNote2}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            {p.discountsHeading}
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {p.discounts.map((d) => (
              <div key={d.range} className="text-center">
                <p className="text-sm font-medium text-primary mb-1">
                  {d.range}
                </p>
                <p className="text-4xl md:text-5xl font-bold text-foreground">
                  {d.percent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-2/5 flex justify-center">
              <Image
                src="/images/app-mockup.jpg"
                alt={p.imageAlt}
                width={280}
                height={560}
                className="rounded-3xl shadow-lg w-auto h-auto"
              />
            </div>
            <div className="lg:w-3/5">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
                {p.includedHeading}
              </h2>
              <div className="flex flex-col gap-5">
                {p.included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta title={p.ctaTitle} start={app.cta.start} contact={app.cta.contact} />
    </>
  );
}
