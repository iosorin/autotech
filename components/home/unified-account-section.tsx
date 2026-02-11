"use client";

import { Shield, BarChart3, Building2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const cards = [
  {
    icon: Shield,
    title: "Гибкая ролевая модель для работников",
    description: "Можно выбирать кто на какой точке работает и к каким функциям приложения имеет доступ",
    tags: ["Супер Администратор", "Кассир", "Пользователь"],
  },
  {
    icon: BarChart3,
    title: "Быстрый и удобный просмотр статистики по всем точкам",
    description: "Анализ выручки по типам услуг, по исполнителям, анализ скидок",
    tags: ["Выручка", "Средний чек"],
  },
  {
    icon: Building2,
    title: "Разные юр.лица для разных точек?",
    description: "Приложение позволяет вести раздельный учет по разным юр.лицам",
    tags: ['ООО "Детейлинг"', "ИП Иванов И.И."],
  },
];

export function UnifiedAccountSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <div className="text-center mb-4">
            <p className="text-sm font-medium text-primary mb-2">
              {"У вас сеть автомоек или шиномонтажей?"}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground text-balance leading-tight">
              {"Теперь у вас будет"}
              <br />
              {"единый аккаунт для всех точек"}
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-10 text-balance">
            {"с возможностью просмотра статистики по каждой точке"}
            <br />
            {"или агрегированной статистики по всем точкам"}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.title} variant="fade-up" delay={i * 120} duration={600}>
              <div className="rounded-2xl border border-border p-6 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
