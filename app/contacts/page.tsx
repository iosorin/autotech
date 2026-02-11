"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import {
  CheckCircle2,
  FileText,
  Layers,
  Settings,
  Zap,
  ExternalLink,
} from "lucide-react";

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Title */}
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Контакты
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {"Обращение в техническую поддержку: перейдите на страницу "}
            <a
              href="/support"
              className="text-primary underline hover:text-primary/80"
            >
              Поддержка
            </a>
          </p>
        </section>

        {/* Designed For */}
        <section className="px-4 pb-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Приложение Автотех разработано для
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-primary/30 bg-card p-6">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-bold text-card">
                01
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground">
                <span className="border-b-2 border-foreground">
                  Автоматизации операционной работы
                </span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                провайдеров услуг автомоек, детейлинг-центров и шиномонтажей
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-bold text-card">
                02
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground">
                Предоставления услуг корпоративным клиентам
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                От автомоек, детейлинг-центров и шиномонтажей
              </p>
            </div>
          </div>
        </section>

        {/* How We Develop */}
        <section className="px-4 pb-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Как мы ведем разработку
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                icon: <Layers className="h-6 w-6 text-primary" />,
                title: "Разработка ведется спринтами",
                desc: "Длительность одного спринта: 1 неделя. Каждый понедельник мы планируем работу на неделю, к пятнице завершаем разработку текущего плана работ, в выходные тестируем, и в следующий понедельник выкладываем обновления, доступные для всех клиентов.",
              },
              {
                icon: <FileText className="h-6 w-6 text-primary" />,
                title: "Планирование спринтов",
                desc: "Наполнение спринтов задачами осуществляется исходя из пожеланий наших клиентов. Каждый запрос на доработку проходит через стадию анализа — мы разрабатываем сценарии, чтобы потребность одного клиента была реализована в интересах всех клиентов.",
              },
              {
                icon: <Settings className="h-6 w-6 text-primary" />,
                title: "Исследование потребностей",
                desc: "Мы осуществляем непрерывное исследование потребностей наших клиентов. Поэтому то, как приложение выглядит сегодня, это, по большей части, результат тех запросов, которые мы получили от наших клиентов.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Mission */}
        <section className="bg-gradient-to-b from-[#e6fff0] to-[#f0fdf4] px-4 py-20">
          <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
            Миссия компании
          </h2>
          <div className="mx-auto max-w-2xl space-y-10">
            {[
              {
                icon: <Zap className="h-6 w-6 text-primary" />,
                title:
                  "Мы стремимся сделать лучшее приложение на российском рынке",
                desc: "для автомоек, детейлинг-центров и шиномонтажей, и дать лучший пользовательский опыт для собственников, администраторов и исполнителей",
              },
              {
                icon: <Settings className="h-6 w-6 text-primary" />,
                title:
                  "Мы развиваемся в сторону агрегатора услуг для автовладельцев",
                desc: "предоставляя удобный сервис для получения услуг автомоек, детейлинг-центров и шиномонтажей, по записи и без",
              },
              {
                icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
                title:
                  "Все наши клиенты получают исчерпывающую статистику и аналитику",
                desc: "позволяющую реально повысить средний чек, маржинальность, и привлекать больше клиентов",
              },
            ].map((item, i) => (
              <div key={item.title} className="text-center">
                {i > 0 && (
                  <div className="mx-auto mb-8 h-px w-48 bg-border" />
                )}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-card">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="px-4 py-20">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Свяжитесь с нами
          </h2>
          <ContactForm />
        </section>

        {/* Other Contact Methods */}
        <section className="px-4 pb-16">
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

        {/* Company Details */}
        <section className="px-4 pb-20">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Реквизиты
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">
                {'ООО «ГТМ Лабс»'}
              </p>
              <p>
                Юридический и фактический адрес: 105064, Москва, Нижний
                Сусальный переулок, дом 5, строение 17, помещение I, комната 6
              </p>
              <p>ИНН: 9709051668</p>
              <p>КПП: 770901001</p>
              <p>ОГРН: 1197746443036</p>
              <p>ОКПО: 40652356</p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">
                Банковские реквизиты
              </p>
              <p>{"Счёт №: 40702810001500047419"}</p>
              <p>{"Название: ТОЧКА ПАО БАНКА «ФК ОТКРЫТИЕ»"}</p>
              <p>ИНН: 7706092528</p>
              <p>КПП: 770543002</p>
              <p>БИК: 044525999</p>
              <p>Город: Москва</p>
              <p>
                {"Корр. счёт: 30101810845250000999 в ГУ БАНКА РОССИИ ПО ЦФО"}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
