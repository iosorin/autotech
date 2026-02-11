"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import {
  ScanLine,
  Palette,
  Calculator,
  BarChart3,
  CalendarCheck,
  Users,
  CheckCircle2,
  Phone,
  CreditCard,
  Scissors,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const tabs = [
  { id: "orders", label: "Работа с заказом" },
  { id: "stats", label: "Статистика" },
  { id: "salary", label: "Расчет зарплат" },
  { id: "crm", label: "CRM" },
  { id: "booking", label: "Онлайн-запись" },
];

const tabContent: Record<
  string,
  { title: string; features: { icon: React.ElementType; text: string }[] }
> = {
  orders: {
    title: "Удобная работа с заказом",
    features: [
      { icon: ScanLine, text: "Распознавание номера, марки автомобиля и категории с использованием ИИ" },
      { icon: Users, text: "Выбор исполнителей и скидки на весь заказ или на каждую услугу" },
      { icon: Palette, text: "Автоматическая подстановка скидки, исполнителя, названия контрагента" },
      { icon: Scissors, text: "Гибкие возможности редактирования открытого заказа в соответствии с ролевой моделью" },
      { icon: BarChart3, text: "Просмотр истории заказов, топ-услуг, количества визитов, среднего чека" },
      { icon: CheckCircle2, text: "Поэтапное закрытия заказов (актуально для детейлинг-центров с длительным периодом оказания услуг)" },
      { icon: Phone, text: "Звонок клиенту из приложения" },
      { icon: CreditCard, text: "Оплата разными способами: терминалом, наличными, переводом, по QR-коду, СБП, бонусами, депозитом, безналом по договору" },
      { icon: Calculator, text: "Сплит-оплата: например, оплата части суммы картой + части наличными" },
      { icon: CalendarCheck, text: "Работа с очередью" },
    ],
  },
  stats: {
    title: "Статистика и аналитика",
    features: [
      { icon: BarChart3, text: "Анализ выручки по типам услуг, по исполнителям, анализ скидок" },
      { icon: CheckCircle2, text: "Просмотр статистики по каждой точке или агрегированной статистики по всем точкам" },
      { icon: Users, text: "Детальная аналитика по каждому сотруднику" },
      { icon: Calculator, text: "Отчеты по среднему чеку, количеству визитов и маржинальности" },
    ],
  },
  salary: {
    title: "Гибкий расчет зарплат",
    features: [
      { icon: Calculator, text: "Индивидуальный расчет вознаграждения для каждого сотрудника" },
      { icon: CheckCircle2, text: "Настройка процентов от выручки по разным услугам" },
      { icon: BarChart3, text: "Автоматический расчет на основе выполненных заказов" },
      { icon: Users, text: "Отчеты по зарплатам за любой период" },
    ],
  },
  crm: {
    title: "CRM система",
    features: [
      { icon: Users, text: "Полная база клиентов физических лиц и контрагентов" },
      { icon: CheckCircle2, text: "Автоматическое создание карточки клиента при первом визите" },
      { icon: BarChart3, text: "История всех визитов и заказов для каждого клиента" },
      { icon: CreditCard, text: "Управление бонусами и депозитами клиентов" },
    ],
  },
  booking: {
    title: "Онлайн-запись",
    features: [
      { icon: CalendarCheck, text: "Удобный календарь для записи клиентов" },
      { icon: CheckCircle2, text: "Автоматические напоминания клиентам о записи" },
      { icon: Phone, text: "Клиенты могут записываться через мобильное приложение" },
      { icon: Users, text: "Управление расписанием боксов и исполнителей" },
    ],
  },
};

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("orders");
  const content = tabContent[activeTab];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tabs */}
        <AnimateOnScroll variant="fade-up" duration={500}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-foreground text-background scale-105"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Content */}
        <AnimateOnScroll variant="fade" duration={500} key={activeTab}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 text-balance">
            {content.title}
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Phone mockup */}
          <AnimateOnScroll variant="fade-right" duration={700} className="lg:w-1/3 flex justify-center">
            <div className="relative w-64">
              <Image
                src="/images/app-mockup.jpg"
                alt="Интерфейс приложения"
                width={300}
                height={600}
                className="rounded-3xl shadow-lg w-auto h-auto"
              />
            </div>
          </AnimateOnScroll>

          {/* Features grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.features.map((feature, i) => (
              <AnimateOnScroll key={feature.text} variant="fade-up" delay={i * 60} duration={500}>
                <div className="flex items-start gap-3">
                  <feature.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
