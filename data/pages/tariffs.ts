import { app } from "../app";

export const tariffs = {
  title: "Тарифы",
  subtitle: "Платформа Автотех",
  periods: [
    { id: "1m", label: "1 месяц" },
    { id: "3m", label: "3 месяца" },
    { id: "12m", label: "12 месяцев" },
  ],
  plans: [
    {
      name: "Автомойка",
      icons: [{ name: "Droplets" }],
      values: { "1m": "4 000", "3m": "11 000", "12m": "40 000" }
    },
    {
      name: "Автомойка + Шиномонтаж",
      values: { "1m": "5 000", "3m": "13 750", "12m": "50 000" },
      icons: [{ name: "Droplets" }, { name: "Wrench" }],
    },
    {
      name: "Автомойка + Детейлинг",
      icons: [{ name: "Droplets" }, { name: "CarFront" }],
      values: { "1m": "6 000", "3m": "16 500", "12m": "60 000" },
    },
    {
      name: "Автомойка + Детейлинг + Шиномонтаж",
      icons: [{ name: "Droplets" }, { name: "CarFront" }, { name: "Wrench" }],
      values: { "1m": "7 000", "3m": "19 250", "12m": "70 000" },
    },
    {
      name: "Шиномонтаж",
      icons: [{ name: "Wrench" }],
      values: { "1m": "2 000", "3m": "5 500", "12m": "20 000" }
    },
  ],
  priceNote: "Цены указаны без учета налогов.",
  priceNote2: "Уточните полную стоимость у менеджера",
  discountsHeading: "Скидки",
  discounts: {
    heading: "Скидки",
    items: [
      { range: "2 - 5 точки", percent: "10%" },
      { range: "6 - 10 точки", percent: "15%" },
      { range: "11 - 20 точки", percent: "20%" },
      { range: "21 - 30 точки", percent: "25%" },
      { range: "от 31 точки", percent: "30%" },
    ],
    icon: { name: "MapPin" },
  },
  included: {
    heading: "Что включено в тариф",
    items: [
      "Любое количество дополнительных личных кабинетов. Мы не ограничиваем доступ для ваших исполнителей, менеджеров и кассиров",
      "Любое количество боксов/постов",
      "Хранение ваших данных в облаке без ограничения по времени",
      "Поддержка и обновления",
    ],
    image: { ...app.images.appBox, className: "flex-[0_0_40%]" },
  },
  cta: {
    title: 'Подключайтесь и получите \n 2 недели бесплатно',
    items: [app.cta.start, app.cta.contact],
  },
};
