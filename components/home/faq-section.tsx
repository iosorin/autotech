"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const faqs = [
  {
    question: "Мы уже много лет работаем на другом приложении, наверное, мы не сможем перенести все данные",
    answer: "Сможем. Если у нас не окажется автоматического мигратора данных под ваше приложение, то мы его разработаем",
  },
  {
    question: "Наши работники уже привыкли к интерфейсу другого приложения, наверное, они долго будут привыкать к новой программе",
    answer: "Наш интерфейс интуитивно понятен и не требует длительного обучения. Большинство сотрудников осваивают приложение за 1-2 дня. Мы также предоставляем обучающие материалы и поддержку.",
  },
  {
    question: "Сколько стоит приложение?",
    answer: "Стоимость зависит от типа вашего бизнеса и количества точек. Ознакомьтесь с нашими тарифами на странице Тарифы или свяжитесь с нами для получения индивидуального предложения.",
  },
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 text-balance">
            {"Часто задаваемые вопросы"}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={150} duration={600}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm font-medium text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
