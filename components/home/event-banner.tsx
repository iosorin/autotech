"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function EventBanner() {
  return (
    <section id="events" className="py-8">
      <div className="max-w-3xl mx-auto px-4">
        <AnimateOnScroll variant="scale-up" duration={700}>
          <div className="rounded-2xl border-2 border-primary p-8 text-center">
            <p className="text-sm font-medium text-primary mb-2">
              {"12 февраля 2026 | 18:00 \u2013 22:00"}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">
              {"Закрытое мероприятие"}
            </h2>
            <p className="text-muted-foreground mb-1 text-balance">
              {"для собственников и управляющих автомойками,"}
            </p>
            <p className="text-muted-foreground mb-4 text-balance">
              {"детейлинг-центрами и шиномонтажами"}
            </p>
            <p className="text-sm text-primary mb-4">
              {"Регистрация обязательна!"}
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {"Узнать детали"}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
