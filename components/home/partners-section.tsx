"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function PartnersSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 text-balance">
            {"Наши партнеры"}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="scale-up" delay={150} duration={700}>
          <div className="rounded-2xl bg-secondary p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {"Shine Systems"}
              <sup className="text-xs">{"®"}</sup>
            </h3>
            <p className="text-sm text-foreground mb-4 text-balance leading-relaxed">
              {"Shine Systems \u2013 один из лидеров российского рынка в части производства и дистрибуции широкого спектра товаров для детейлинга и ухода за автомобилем"}
            </p>
            <p className="text-sm text-muted-foreground text-balance leading-relaxed">
              {"Вы можете заказать любые товары из ассортимента Shine Systems в приложении Автотех в один клик, и учитывать стоимость товаров в подсчете себестоимости оказываемых услуг"}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
