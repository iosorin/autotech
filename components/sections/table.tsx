"use client";

import { useState } from "react";
import { Droplets, Scissors, Car } from "lucide-react";

const iconMap = { Droplets, Scissors, Car };

type Period = { id: string; label: string };
type Plan = {
  icons: string[];
  name: string;
  prices: Record<string, string>;
  highlighted?: boolean;
};

type Props = {
  id?: string;
  periods: Period[];
  plans: Plan[];
  priceNote: string;
  priceNote2: string;
};

export function Table({ id, periods, plans, priceNote, priceNote2 }: Props) {
  const [activePeriod, setActivePeriod] = useState(periods[0]?.id ?? "1m");
  return (
    <section id={id} className="px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-border p-6 md:p-8">
          <div className="flex justify-end mb-6">
            <div className="flex gap-2">
              {periods.map((period) => (
                <button
                  key={period.id}
                  type="button"
                  onClick={() => setActivePeriod(period.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activePeriod === period.id
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
            <div className="flex items-center justify-between py-3 px-4 text-muted-foreground text-sm font-medium border-b border-border">
              <span className="w-[200px]">&nbsp;</span>
              <div className="flex gap-8 md:gap-16">
                {periods.map((period) => (
                  <span key={period.id} className="min-w-[60px] text-right">
                    {period.label}
                  </span>
                ))}
              </div>
            </div>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex items-center justify-between py-4 px-4 rounded-xl ${
                  plan.highlighted ? "bg-accent" : ""
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
                  <span className="text-sm font-medium text-foreground">{plan.name}</span>
                </div>
                <div className="flex gap-8 md:gap-16">
                  {periods.map((period) => (
                    <span
                      key={period.id}
                      className={`text-sm font-semibold min-w-[60px] text-right ${
                        activePeriod === period.id
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {plan.prices[period.id]}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            {priceNote}
            <br />
            {priceNote2}
          </p>
        </div>
      </div>
    </section>
  );
}
