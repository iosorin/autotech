"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ScanLine,
  BarChart3,
  Calculator,
  CalendarCheck,
  Users,
  RefreshCw,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const featureTags = [
  { icon: ScanLine, label: "Распознавание марок и номеров" },
  { icon: BarChart3, label: "Статистика и аналитика" },
  { icon: Calculator, label: "Гибкий расчет зарплат" },
  { icon: CalendarCheck, label: "Онлайн-запись" },
  { icon: Users, label: "CRM" },
];

export function HeroSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={700}>
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-primary mb-3">
              {"Платформа Автотех"}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              {"Приложение для автомойки,"}
              <br />
              {"детейлинга и шиномонтажа"}
            </h1>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={200} duration={600}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {"Начать работать"}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              {"Связаться с нами"}
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: feature tags */}
          <div className="flex flex-col gap-3 lg:w-1/4">
            {featureTags.map((tag, i) => (
              <AnimateOnScroll key={tag.label} variant="fade-right" delay={i * 80} duration={500}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-2.5 text-sm text-foreground w-fit">
                  <tag.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span>{tag.label}</span>
                </div>
              </AnimateOnScroll>
            ))}

            <AnimateOnScroll variant="fade-right" delay={500} duration={500}>
              <Link
                href="https://t.me/moykazdes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground mt-2 w-fit hover:opacity-90 transition-opacity"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.332-.373-.119l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z" />
                </svg>
                {"Подпишитесь на наш телеграм-канал"}
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Center: phone mockup */}
          <AnimateOnScroll variant="scale-up" delay={150} duration={800} className="lg:w-2/4 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/app-mockup.jpg"
                alt="Интерфейс приложения Автотех"
                width={500}
                height={600}
                className="rounded-3xl shadow-lg w-auto h-auto"
                priority
              />
            </div>
          </AnimateOnScroll>

          {/* Right: easy transition card */}
          <AnimateOnScroll variant="fade-left" delay={300} duration={600} className="lg:w-1/4">
            <div className="rounded-2xl border border-border p-6 text-center">
              <RefreshCw className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-bold text-foreground mb-1">
                {"Легкий переход"}
              </h3>
              <h3 className="font-bold text-foreground mb-2">
                {"с других приложений"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {"Автоматический перенос услуг и настроек"}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
