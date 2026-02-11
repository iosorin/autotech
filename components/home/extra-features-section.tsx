"use client";

import Image from "next/image";
import { Settings, CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const tireFeatures = [
  "Печать наклеек со штрихкодом",
  "Выбор точек хранения комплектов шин",
  "Учет периода хранения шин, напоминания о необходимости смены резины",
  "Формирование и печать заказ-нарядов для мелкого ремонта",
];

const integrations = [
  { name: "amoCRM", label: "amoCRM" },
  { name: "Битрикс24", label: "Битрикс24" },
  { name: "Telegram", label: "Telegram" },
  { name: "1C", label: "1С" },
];

const securityFeatures = [
  'Оно не "падает" и не "виснет"',
  "Автоматические бекапы баз данных",
  "Логирование авторизаций и действий пользователей",
];

const supportFeatures = [
  "Мы оперативно выполняем доработки по вашим требованиям",
  "Подписываем соглашения об уровне качества предоставляемых услуг",
  "Поддержка работает без выходных с 8:00 до 23:00",
];

export function ExtraFeaturesSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <AnimateOnScroll variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-16 text-balance">
            {"И еще "}
            <span className="text-primary">{"100+"}</span>
            {" необходимых функций"}
          </h2>
        </AnimateOnScroll>

        {/* Tire storage section */}
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-20">
          <AnimateOnScroll variant="fade-right" duration={600} className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-muted-foreground" />
              <h3 className="text-xl font-bold text-foreground">
                {"Учет сезонного хранения шин и мелкого ремонта"}
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {tireFeatures.map((feature) => (
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
              alt="Хранение шин"
              width={500}
              height={350}
              className="rounded-2xl w-auto h-auto"
            />
          </AnimateOnScroll>
        </div>

        {/* Integrations */}
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-20">
          <AnimateOnScroll variant="fade-right" duration={600} className="lg:w-1/2">
            <h3 className="text-xl font-bold text-foreground mb-3">
              {"Интеграции с внешними сервисами"}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"Поможем настроить интеграции и рассылки вашим клиентам, напоминания и другие акции для продвижения услуг вашего сервиса, а также настроим интеграцию с 1С для ведения бухгалтерии"}
            </p>
          </AnimateOnScroll>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-3">
              {integrations.map((item, i) => (
                <AnimateOnScroll key={item.name} variant="scale-up" delay={i * 100} duration={500}>
                  <div className="rounded-xl border border-border px-5 py-4 flex items-center justify-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <span className="font-medium text-foreground text-sm">{item.label}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* Security and Support */}
        <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
          <AnimateOnScroll variant="fade-right" duration={700} className="lg:w-1/2">
            <Image
              src="/images/mechanic.jpg"
              alt="Автосервис"
              width={500}
              height={600}
              className="rounded-2xl w-auto h-auto"
            />
          </AnimateOnScroll>
          <div className="lg:w-1/2 flex flex-col gap-10">
            {/* Security */}
            <AnimateOnScroll variant="fade-left" delay={150} duration={600}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    {"Наше приложение безопасно"}
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {securityFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Support */}
            <AnimateOnScroll variant="fade-left" delay={300} duration={600}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    {"Доработки и поддержка"}
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {supportFeatures.map((feature) => (
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

        {/* Device availability */}
        <AnimateOnScroll variant="fade-up" duration={600}>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-balance">
              {"Доступно на любом типе устройств"}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Мобильный телефон" },
                { label: "Планшет" },
                { label: "Ноутбук" },
              ].map((device) => (
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
