import { IField } from "@/library/ui/blocks/form"
import Link from "next/link";

const appurl = "https://work.moykazdes.ru/";


export const app = {
  name: "Автотех",
  tagline: "Платформа Автотех",
  title: "Автотех - Приложение для автомойки, детейлинга и шиномонтажа",
  description:
    "Онлайн-запись, учёт, CRM и расчёт зарплат для вашего автосервиса в одном приложении.",
  siteurl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://moykazdes.ru",
  app: appurl,
  copyright: "© " + new Date().getFullYear(),
  logo: "/logo.svg",
  phone: "+7 909 904 1111",
  phoneRaw: "+79099041111",
  email: "info@moykazdes.ru",
  supportEmail: "support@avtotech.com",
  telegram: {
    label: "@moykazdes",
    href: "https://t.me/moykazdes",
  },
  telegramSupport: {
    label: "@avtotech_support",
    href: "https://t.me/avtotech_support",
  },
  nav: [
    { label: "Тарифы", href: "/tariffs" },
    { label: "Обновления", href: "/updates" },
    { label: "Мероприятия", href: "/events" },
    { label: "Поддержка", href: "/support" },
    { label: "Контакты", href: "/contacts" },
  ],
  links: [
    { label: "Агентский договор", href: "/contract" },
    { label: "Пользовательское соглашение", href: "/license" },
    { label: "Политика обработки персональных данных", href: "/privacy" },
  ],
  featured: { label: "Автопаркам", href: "/fleet", },
  cta: {
    connect: "Подключайтесь и получите \n 2 недели бесплатно",
    join: "Присоединяйтесь к нашим \n довольным клиентам",
    try: "Готовы попробовать?",
    start: { id: "start" as const, label: "Начать работать", href: appurl, blank: true },
    contact: {
      id: "contact" as const,
      label: "Связаться с нами",
      slot: "call" as const,
      // href: "/contacts",
      // props: { variant: "outline" as const, className: "rounded-full" },
    },
    telegram: {
      label: "Подпишитесь на наш телеграм-канал",
      href: "https://t.me/moykazdes",
      className: "text-primary-foreground bg-gradient-telegram",
      // icon: "/images/icons/telegram.svg",
    },

    contact2: {
      id: "contact2" as const,
      label: "Связаться с нами",
      href: "/contacts",
      className: "border border-secondary hover:bg-secondary hover:text-secondary-foreground rounded-full",
    },

    cabinet: { id: "cabinet" as const, label: "Перейти в личный кабинет", href: appurl, blank: true },
    more: { id: "more" as const, label: "Узнать больше", slot: "call" as const },
  },
  call: {
    heading: "Запросить обратный звонок",
    fields: [
      { id: "name", type: "text", required: true, label: "Имя", placeholder: "Введите ваше имя" },
      { id: "phone", type: "tel", required: true, label: "Мобильный телефон", placeholder: "+7 (999) 999-99-99" },
      { id: "organization", type: "text", label: "Организация", placeholder: "Введите название организации" },
      {
        id: "privacy", type: "checkbox", required: true, label: <>
          Я принимаю условия{" "}
          <Link target="_blank" href="/privacy" className="text-primary underline hover:text-primary/80" title="Политика обработки персональных данных" > обработки персональных данных </Link>
        </>
      },
    ] as IField[],
  },
  form: {
    heading: "Свяжитесь с нами",
    fields: [
      { id: "name", type: "text", required: true, label: "Имя", placeholder: "Введите ваше имя" },
      { id: "phone", type: "tel", required: true, label: "Мобильный телефон", placeholder: "+7 (999) 999-99-99" },
      {
        id: "topic", type: "select", label: "Тема обращения", placeholder: "Выберите тему обращения",
        options: ["Подключение", "Техническая проблема", "Пожелание по доработке", "Вопрос по приложению", "Другое",] as const,
      },
      { id: "message", type: "textarea", label: "Опишите вопрос или проблему", placeholder: "Опишите вопрос или проблему" },
    ] as IField[],
    agree: (
      <>
        Я принимаю условия{" "}
        <Link target="_blank" href="/privacy" className="text-primary underline hover:text-primary/80" title="Политика обработки персональных данных" > обработки персональных данных </Link>
      </>
    ),
  },
  event: {
    date: "12 февраля 2026 | 18:00 – 22:00",
    title: "Закрытое мероприятие",
    desc: "для собственников и управляющих автомойками,\n детейлинг-центрами и шиномонтажами",
    minor: "Регистрация обязательна!",
    className: "rounded-3xl px-6 py-8 bg-gradient-blue md:max-w-[70%] mx-auto",
    cta: [{
      id: "details" as const,
      label: "Узнать детали",
      href: "/events",
      // props: { variant: "outline" as const, className: "rounded-full" },
    }]
  },
  company: {
    name: "ООО ГТМ Лабс",
    short: "ООО «ГТМ Лабс»",
    inn: "9709051668",
    kpp: "770901001",
    ogrn: "1197746443036",
    okpo: "40652356",
    address: "Нижний Сусальный пер., 5с17, 4 этаж",
    addressLine1: "Нижний Сусальный пер.,",
    addressLine2: "5с17, 4 этаж",
    addressFull:
      "105064, Москва, Нижний Сусальный переулок, дом 5, строение 17, помещение I, комната 6",
    bank: {
      account: "40702810001500047419",
      name: "ТОЧКА ПАО БАНКА «ФК ОТКРЫТИЕ»",
      inn: "7706092528",
      kpp: "770543002",
      bik: "044525999",
      city: "Москва",
      corr: "30101810845250000999 в ГУ БАНКА РОССИИ ПО ЦФО",
    },
  },
};