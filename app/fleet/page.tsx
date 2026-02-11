"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Settings,
  Eye,
  Heart,
  SlidersHorizontal,
  MapPin,
  BarChart3,
  FileText,
  Building2,
  ChevronDown,
} from "lucide-react";

const whyConvenient = [
  {
    icon: <MapPin className="w-7 h-7 text-primary" />,
    title: "Сотни точек оказания услуг по всей стране",
    desc: "Доступно для всех типов авто: представительские автомобили, легковые, грузовые, спецтехника",
  },
  {
    icon: <FileText className="w-7 h-7 text-primary" />,
    title: "Контролируйте расходы и отчетность",
    desc: "Контроль факта оказания услуг, прозрачность с чеками",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-primary" />,
    title: "Снижение нагрузки на бухгалтерию",
    desc: "Формирование единого отчета с закрывающими документами",
  },
  {
    icon: <Building2 className="w-7 h-7 text-primary" />,
    title: "Возмещение НДС",
    desc: "При обслуживании в точках, работающих с НДС",
  },
];

const beforeAfter = [
  {
    before: "Прямые договоры с несколькими автомойками, победившими в конкурсе",
    after: "Сотни и тысячи моек \u2013 выбирайте ту, которая удовлетворяем вашим условиям",
  },
  {
    before: "Оплата услуг топливными картами, по которым невозможно получить полную статистику по услугам (состав услуг, исполнители, время оказания услуги, фото)",
    after: "Исчерпывающая статистика и аналитика по всем полученным услугам в личном кабинете",
  },
  {
    before: "Водители привозят бумажные чеки",
    after: "Водители больше не привозят чеки. Вы получаете консолидированную отчетность от нас",
  },
  {
    before: "Невозможно проконтролировать факт оказания услуги",
    after: "Невозможность фрода на чеках. Мы отслеживаем факт оказания услуги со 100% гарантией",
  },
];

const steps = [
  {
    title: "Заключается договор корпоративного обслуживания",
    desc: "В личный кабинет заносятся гос.номера машин из автопарка, и выбирается вариант оплаты: депозит или пост-оплата",
  },
  {
    title: "Водители регистрируются в мобильном приложении",
    desc: "либо получают пластиковую карточку с QR-кодом. Этот QR-код они будут показывать на мойках и шиномонтажах для подтверждения начала и завершения оказания услуг",
  },
  {
    title: "Водитель выбирает удобную автомойку или шиномонтаж на карте и приезжает туда",
    desc: "(можно по предварительной записи из приложения). На автомойке сканируется и распознается гос.номер автомобиля и происходит оказание услуги",
  },
  {
    title: "Раз в месяц мы формируем отчетные документы",
    desc: "и направляем вам вместе с полной статистикой по автомойкам",
  },
];

const approaches = [
  { num: "Подход 1", title: "Задать собственные цены", desc: "Вы сможете обслуживаться в тех точках, которые примут ваш прайс" },
  { num: "Подход 2", title: "Обслуживать по текущим прайсам шиномонтажей и автомоек", desc: "" },
  { num: "Подход 3", title: "Можете выбрать микс двух подходов", desc: "Например, для автомобилей топ-менеджмента выбрать Подход 2, а для массовых автомобилей (например, доставка или такси) выбрать Подход 1" },
];

const faqItems = [
  { q: "Какой будет тариф на автомойках?", a: "Есть два варианта: вы можете задать собственные тарифы, либо воспользоваться тарифами автомойки или шиномонтажа. Вы будете видеть эти тарифы в личном кабинете" },
  { q: "Что будет, если водитель превысит лимит на автомойки?", a: "Система автоматически уведомит администратора и может заблокировать дальнейшие заказы до подтверждения." },
  { q: "Как вы гарантируете уровень качества?", a: "Мы работаем только с проверенными точками и контролируем качество через систему отзывов и фотоотчетов." },
  { q: "Это онлайн-сервис или можно поставить решение в информационный периметр нашей компании?", a: "Автотех работает как облачный сервис, доступный через браузер и мобильные приложения. Интеграция в вашу инфраструктуру обсуждается индивидуально." },
];

export default function FleetPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#e8f5e9] to-background py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <AnimateOnScroll variant="fade-up" duration={700}>
              <p className="text-center text-sm text-muted-foreground mb-3">{"Автопаркам"}</p>
              <h1 className="text-3xl md:text-5xl font-bold text-center text-foreground leading-tight text-balance max-w-4xl mx-auto">
                {"Оплачивайте услуги автомойки, шиномонтажа, сезонного хранения и мелкого ремонта через приложение Автотех"}
              </h1>
            </AnimateOnScroll>

            <div className="mt-12 flex flex-col lg:flex-row items-center gap-8 justify-center">
              <AnimateOnScroll variant="fade-right" delay={200} duration={600}>
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex items-center gap-2 bg-background rounded-full border border-border px-4 py-2 text-sm text-foreground shadow-sm">
                    <FileText className="w-4 h-4 text-primary" />
                    {"Консолидированная отчетность"}
                  </div>
                  <div className="flex items-center gap-2 bg-background rounded-full border border-border px-4 py-2 text-sm text-foreground shadow-sm">
                    <Building2 className="w-4 h-4 text-primary" />
                    {"По безналу и с НДС"}
                  </div>
                  <Link
                    href="/contacts"
                    className="inline-flex items-center gap-1 rounded-full border border-foreground px-5 py-2.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 hover:scale-105"
                  >
                    {"Связаться с нами"}
                  </Link>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="scale-up" delay={100} duration={800}>
                <div className="relative">
                  <Image src="/images/fleet-app.jpg" alt="Приложение Автотех для автопарков" width={320} height={500} className="rounded-3xl shadow-xl w-auto h-auto" priority />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-left" delay={300} duration={600}>
                <div className="bg-background rounded-2xl border border-border p-6 shadow-sm text-center max-w-xs hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-3"><Building2 className="w-10 h-10 text-primary" /></div>
                  <h3 className="font-bold text-foreground text-lg">{"Сотни автомоек и шиномонтажей"}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{"для вашего автопарка"}</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Why convenient */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <AnimateOnScroll variant="fade-up" duration={600}>
              <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">{"Почему это удобно"}</h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-6">
              {whyConvenient.map((item, i) => (
                <AnimateOnScroll key={item.title} variant="fade-up" delay={i * 100} duration={600}>
                  <div className="bg-secondary rounded-2xl p-8 flex flex-col items-center text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-foreground mb-2 text-balance">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Personal cabinet features */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-4">
            <AnimateOnScroll variant="fade-up" duration={600}>
              <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
                {"Возможности личного кабинета для юридических лиц"}
              </h2>
            </AnimateOnScroll>

            <div className="flex flex-col lg:flex-row items-center gap-10">
              <AnimateOnScroll variant="fade-right" duration={600} className="lg:w-1/3">
                <div className="flex flex-col gap-6">
                  {["Вносить любое количество автомобилей", "Задавать категории авто и присваивать индивидуальные лимиты", "Пользоваться акциями и системой лояльности от автомоек"].map((text, i) => (
                    <div key={text} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="scale-up" delay={150} duration={700} className="lg:w-1/3 flex justify-center">
                <Image src="/images/app-mockup.jpg" alt="Интерфейс приложения" width={280} height={500} className="rounded-3xl shadow-lg w-auto h-auto" />
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-left" delay={200} duration={600} className="lg:w-1/3">
                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="font-bold text-foreground mb-3">{"Выбирать конкретные автомойки для конкретных автомобилей"}</h3>
                    <div className="flex flex-wrap gap-2">
                      {["все", "все кроме", "только выбранные"].map((tag) => (
                        <span key={tag} className="bg-background border border-border rounded-full px-4 py-1.5 text-sm text-foreground">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h3 className="font-bold text-foreground mb-3">{"Выбирать автомойки по фильтрам, удовлетворяющие требованиям"}</h3>
                    <div className="flex flex-wrap gap-2">
                      {["стоимость", "локация", "предварительная запись"].map((tag) => (
                        <span key={tag} className="bg-accent rounded-full px-4 py-1.5 text-sm text-accent-foreground">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* HRD Offer */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <AnimateOnScroll variant="blur-in" duration={700}>
              <div className="bg-gradient-to-b from-accent to-background rounded-3xl p-10 md:p-14 text-center">
                <Heart className="w-10 h-10 text-accent-foreground mx-auto mb-4 opacity-60" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">{"Специальное предложение для HRD"}</h2>
                <p className="text-muted-foreground max-w-lg mx-auto mb-8">{"Добавляйте автомойки для ключевых сотрудников в соц.пакет. Это повышает лояльность сотрудников"}</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="#" className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 hover:scale-105 transition-all duration-200">
                    {"Перейти в личный кабинет"}<ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contacts" className="inline-flex items-center rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-200">
                    {"Узнать больше"}
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Before / After */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <AnimateOnScroll variant="fade-up" duration={500}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div><span className="inline-block bg-primary text-primary-foreground rounded-full px-5 py-1.5 text-sm font-medium">{"Было"}</span></div>
                <div><span className="inline-block bg-primary text-primary-foreground rounded-full px-5 py-1.5 text-sm font-medium">{"Стало"}</span></div>
              </div>
            </AnimateOnScroll>

            <div className="flex flex-col gap-0">
              {beforeAfter.map((item, i) => (
                <AnimateOnScroll key={i} variant="fade-up" delay={i * 100} duration={500}>
                  <div className="grid grid-cols-2 gap-4 py-5 border-t border-border">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{item.before}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground font-medium">{item.after}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal storage */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <AnimateOnScroll variant="fade-right" duration={600} className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-7 h-7 text-muted-foreground" />
                  <h2 className="text-xl md:text-2xl font-bold text-foreground text-balance">{"Управление сезонным хранением из мобильного приложения"}</h2>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  {["Хранение комплектов сезонной резины на собственных и партнерских складах", "Учет хранения с указанием адреса и срока хранения", "Быстрая доставка комплектов сезонной резины в выбранные точки", "Запись на смену резины в мобильном приложении"].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{text}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variant="fade-left" delay={200} duration={700} className="lg:w-1/2">
                <Image src="/images/tire-mechanic.jpg" alt="Сезонное хранение шин" width={500} height={350} className="rounded-2xl w-auto h-auto" />
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Tariff approaches */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <AnimateOnScroll variant="fade-up" duration={600}>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 text-balance">
                {"Вы можете выбрать подход по каким тарифам будете обслуживать ваши автомобили"}
              </h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-6">
              {approaches.map((item, i) => (
                <AnimateOnScroll key={item.num} variant="fade-up" delay={i * 120} duration={600}>
                  <div className="bg-background border border-border rounded-2xl p-6 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <span className="inline-block bg-foreground text-background rounded-full px-4 py-1.5 text-sm font-medium w-fit mb-5">{item.num}</span>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    {item.desc && <p className="text-sm text-muted-foreground">{item.desc}</p>}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Flexible management */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <AnimateOnScroll variant="fade-right" duration={700} className="lg:w-1/2">
                <Image src="/images/fleet-dashboard.jpg" alt="Гибкое управление автопарком" width={500} height={350} className="rounded-2xl w-auto h-auto" />
              </AnimateOnScroll>
              <AnimateOnScroll variant="fade-left" delay={200} duration={600} className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <SlidersHorizontal className="w-7 h-7 text-primary" />
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">{"Гибкое управление"}</h2>
                </div>
                <div className="flex flex-col gap-4">
                  {["Задавайте лимиты расходов на разные классы автомобилей в вашем автопарке", "Управляйте списком автомобилей и водителей", "Отслеживайте статистику оказания услуг в любом разрезе, в режиме реального времени"].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground font-medium">{text}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contacts" className="mt-8 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:opacity-90 hover:scale-105 transition-all duration-200">
                  {"Связаться с нами"}<ArrowUpRight className="w-4 h-4" />
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#e8f5e9] to-[#f1f8e9]">
          <div className="max-w-3xl mx-auto px-4">
            <AnimateOnScroll variant="fade-up" duration={600}>
              <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12">{"Как это работает"}</h2>
            </AnimateOnScroll>
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <AnimateOnScroll key={i} variant="fade-up" delay={i * 150} duration={600}>
                  <div className={`text-center py-8 ${i < steps.length - 1 ? "border-b border-border" : ""}`}>
                    <span className="inline-block bg-foreground text-background rounded-full px-5 py-2 text-sm font-medium mb-4">{`Шаг ${i + 1}`}</span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 text-balance">{step.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-xl mx-auto">{step.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <AnimateOnScroll variant="fade-up" delay={600} duration={500}>
              <div className="flex flex-wrap gap-4 justify-center mt-10">
                <Link href="#" className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 hover:scale-105 transition-all duration-200">
                  {"Перейти в личный кабинет"}<ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/contacts" className="inline-flex items-center rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-200">
                  {"Узнать больше"}
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Transparency guarantee */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <AnimateOnScroll variant="fade-right" duration={700} className="lg:w-1/2">
                <Image src="/images/app-mockup.jpg" alt="Гарантия прозрачности" width={400} height={350} className="rounded-2xl bg-secondary w-auto h-auto" />
              </AnimateOnScroll>
              <AnimateOnScroll variant="fade-left" delay={200} duration={600} className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                  <h2 className="text-xl md:text-2xl font-bold text-foreground text-balance">{"Гарантия прозрачности оказания услуг"}</h2>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{"Автомобили корпоративного парка заносятся в личный кабинет с указанием лимита в месяц, далее автомойки фотографируют и распознают гос.номера и оказывают услугу по заранее согласованному прайсу"}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{"Факт оказания услуг фиксируется фотографией гос.номера и геолокацией GPS со временем пребывания автомобиля на автомойке"}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <AnimateOnScroll variant="fade-up" duration={600}>
              <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-10">{"Часто задаваемые вопросы"}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={150} duration={600}>
              <div className="flex flex-col">
                {faqItems.map((item, i) => (
                  <div key={i} className="border-t border-border">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between py-5 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-bold text-foreground pr-4">{item.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"}`}>
                      <p className="text-sm text-muted-foreground pr-8">{item.a}</p>
                    </div>
                  </div>
                ))}
                <div className="border-t border-border" />
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
