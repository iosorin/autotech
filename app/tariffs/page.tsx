"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/home/cta-section";
import { CheckCircle2, Droplets, Scissors, Car } from "lucide-react";

const periods = [
  { id: "1m", label: "1 месяц" },
  { id: "3m", label: "3 месяца" },
  { id: "12m", label: "12 месяцев" },
];

const plans = [
  {
    icons: [Droplets],
    name: "Автомойка",
    prices: { "1m": "4 000", "3m": "11 000", "12m": "40 000" },
  },
  {
    icons: [Droplets, Scissors],
    name: "Автомойка + Шиномонтаж",
    prices: { "1m": "5 000", "3m": "13 750", "12m": "50 000" },
  },
  {
    icons: [Droplets, Car],
    name: "Автомойка + Детейлинг",
    prices: { "1m": "6 000", "3m": "16 500", "12m": "60 000" },
  },
  {
    icons: [Droplets, Car, Scissors],
    name: "Автомойка + Детейлинг + Шиномонтаж",
    prices: { "1m": "7 000", "3m": "19 250", "12m": "70 000" },
    highlighted: true,
  },
  {
    icons: [Scissors],
    name: "Шиномонтаж",
    prices: { "1m": "2 000", "3m": "5 500", "12m": "20 000" },
  },
];

const discounts = [
  { range: "2 - 5 точки", percent: "10%", color: "text-primary" },
  { range: "6 - 10 точки", percent: "15%", color: "text-primary" },
  { range: "11 - 20 точки", percent: "20%", color: "text-primary" },
  { range: "21 - 30 точки", percent: "25%", color: "text-primary" },
  { range: "от 31 точки", percent: "30%", color: "text-primary" },
];

const included = [
  "Любое количество дополнительных личных кабинетов. Мы не ограничиваем доступ для ваших исполнителей, менеджеров и кассиров",
  "Любое количество боксов/постов",
  "Хранение ваших данных в облаке без ограничения по времени",
  "Поддержка и обновления",
];

export default function TariffsPage() {
  const [activePeriod, setActivePeriod] = useState("1m");

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm font-medium text-primary mb-2">
                {"Платформа Автотех"}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                {"Тарифы"}
              </h1>
            </div>

            {/* Pricing table */}
            <div className="rounded-2xl border border-border p-6 md:p-8">
              {/* Period selector */}
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

              {/* Plans */}
              <div className="flex flex-col gap-1">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`flex items-center justify-between py-4 px-4 rounded-xl ${
                      plan.highlighted ? "bg-accent" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        {plan.icons.map((Icon, i) => (
                          <Icon
                            key={`${plan.name}-icon-${i}`}
                            className="w-4 h-4 text-muted-foreground"
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {plan.name}
                      </span>
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
                          {plan.prices[period.id as keyof typeof plan.prices]}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                {"Цены указаны без учета налогов."}
                <br />
                {"Уточните полную стоимость у менеджера"}
              </p>
            </div>
          </div>
        </section>

        {/* Discounts */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              {"Скидки"}
            </h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {discounts.map((d) => (
                <div key={d.range} className="text-center">
                  <p className={`text-sm font-medium ${d.color} mb-1`}>
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

        {/* What's included */}
        <section className="py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-2/5 flex justify-center">
                <Image
                  src="/images/app-mockup.jpg"
                  alt="Интерфейс приложения"
                  width={280}
                  height={560}
                  className="rounded-3xl shadow-lg w-auto h-auto"
                />
              </div>
              <div className="lg:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
                  {"Что включено в тариф"}
                </h2>
                <div className="flex flex-col gap-5">
                  {included.map((item) => (
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

        <CtaSection title="Подключайтесь и получите 2 недели бесплатно" />
      </main>
      <Footer />
    </>
  );
}
