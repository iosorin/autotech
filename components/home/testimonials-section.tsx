"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const testimonials = [
  {
    name: "Илья Ковыков",
    role: "Основатель CARTEL",
    company: "CARTEL",
    text: "Мы перешли на Автотех с другого приложения и очень довольны. У нас одновременно обслуживается до 40 автомобилей, поэтому нам крайне важна стабильная работа приложения и мгновенная техническая поддержка. Кроме того, у нас есть специфичные требования к логике работы приложения, которые были реализованы командой Автотех в кратчайшие сроки. Мы видим, что в лице команды Автотех мы нашли надежного партнера, оперативно выполняющего все доработки, необходимые нам для ведения оперативной деятельности",
  },
  {
    name: "Вячеслав Житенев и Сергей Федоткин",
    role: 'Основатели сети автомоек и шиномонтажей "Княжье Озеро"',
    company: "Княжье Озеро",
    text: "Мы начали тестирование Автотех на нескольких наших точках. Для нас важна бесперебойную работу приложения, точный перенос данных с остатками бонусов. Клиентов стало обслуживать этим меньше, число заказов и услуг ушло меньше.",
  },
  {
    name: "Андрей Петров",
    role: "Владелец автомойки",
    company: "АвтоБлеск",
    text: "Автотех значительно упростил управление нашей автомойкой. Раньше мы тратили часы на подсчет зарплат и ведение статистики, а теперь все автоматизировано. Особенно нравится функция онлайн-записи - клиенты оценили удобство.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);

  const slide = (direction: "prev" | "next") => {
    setSliding(true);
    setTimeout(() => {
      if (direction === "prev") {
        setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
      } else {
        setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
      }
      setSliding(false);
    }, 250);
  };

  return (
    <section className="py-12 md:py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              {"Отзывы клиентов"}
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => slide("prev")}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors bg-background active:scale-90 transition-transform duration-150"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => slide("next")}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors bg-background active:scale-90 transition-transform duration-150"
                aria-label="Следующий отзыв"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="flex gap-6 overflow-hidden">
          {/* Main testimonial */}
          <div
            className={`flex-1 min-w-0 transition-all duration-300 ${
              sliding ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            <div className="rounded-2xl border border-border p-8 bg-background">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center md:items-start flex-shrink-0">
                  <div className="w-24 h-24 rounded-full border-4 border-primary bg-secondary flex items-center justify-center text-2xl font-bold text-muted-foreground mb-3">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <h4 className="font-bold text-foreground text-sm text-center md:text-left">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-xs text-muted-foreground text-center md:text-left">
                    {testimonials[current].role}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="rounded-md border border-border px-3 py-1 text-xs font-medium text-foreground">
                      {testimonials[current].company}
                    </span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {testimonials[current].text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Peek at next testimonial */}
          <div
            className={`hidden lg:block w-72 flex-shrink-0 transition-all duration-300 ${
              sliding ? "opacity-0 translate-x-4" : "opacity-50 translate-x-0"
            }`}
          >
            <div className="rounded-2xl border border-border p-8 bg-background h-full">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-xl font-bold text-muted-foreground mb-3">
                  {testimonials[(current + 1) % testimonials.length].name.charAt(0)}
                </div>
                <h4 className="font-bold text-foreground text-sm text-center">
                  {testimonials[(current + 1) % testimonials.length].name}
                </h4>
                <p className="text-xs text-muted-foreground text-center">
                  {testimonials[(current + 1) % testimonials.length].role}
                </p>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-4">
                {testimonials[(current + 1) % testimonials.length].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
