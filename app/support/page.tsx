"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Zap, Clock, Wrench, MessageCircle, ExternalLink } from "lucide-react";

const responseTypes = [
  {
    icon: <Zap className="h-6 w-6 text-destructive" />,
    title: "Критическая ошибка, блокирующая работу",
    desc: "Берем в работу сразу, срок решения зависит от технических возможностей и от того, на чьей стороне возникла проблема — на нашей или на стороне внешних провайдеров, на кого мы не в силах повлиять",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    icon: <Clock className="h-6 w-6 text-amber-500" />,
    title: "Некритическая ошибка, не блокирующая работу",
    desc: "Берем в работу сразу, решение будет предоставлено в согласованные сроки, в среднем от 1 дня до двух недель",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: <Wrench className="h-6 w-6 text-foreground" />,
    title: "Пожелание по доработке",
    desc: "Берем в анализ сразу, возвращаемся в течение двух-трех дней с ответом о принятии в работу или дополнительными вопросами",
    bg: "bg-muted",
    border: "border-border",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-foreground" />,
    title: "Вопрос по приложению",
    desc: "Отвечаем в течение часа",
    bg: "bg-muted",
    border: "border-border",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-2 text-center text-4xl font-bold text-foreground md:text-5xl">
            Техническая поддержка
          </h1>
          <p className="mb-12 text-center text-muted-foreground">
            Обрабатываем ваши заявки ежедневно с 08:00 до 23:00
          </p>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Response Times */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Сроки обработки обращений
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {responseTypes.map((type) => (
                  <div
                    key={type.title}
                    className={`rounded-2xl border ${type.border} ${type.bg} p-5`}
                  >
                    <div className="mb-3">{type.icon}</div>
                    <h3 className="mb-2 text-sm font-bold text-foreground">
                      {type.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {type.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other Contact Methods */}
          <section className="mt-20">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
              Другие способы связи
            </h2>
            <div className="mx-auto max-w-md space-y-8 text-center">
              <div>
                <p className="text-sm font-medium text-primary">Telegram</p>
                <a
                  href="https://t.me/avtotech_support"
                  className="inline-flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary"
                >
                  @avtotech_support
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">
                  Электронная почта
                </p>
                <a
                  href="mailto:support@avtotech.com"
                  className="inline-flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary"
                >
                  support@avtotech.com
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Телефон</p>
                <a
                  href="tel:+79099041111"
                  className="inline-flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary"
                >
                  +7 909 904 1111
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
