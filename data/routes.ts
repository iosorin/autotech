import { app } from "./app";

export type RouteMeta = { path: string; key: string; title: string; description: string };

export const routes: RouteMeta[] = [
  {
    path: "/",
    key: "home",
    title: app.title,
    description: app.description,
  },
  {
    path: "/contacts",
    key: "contacts",
    title: "Контакты",
    description:
      "Связь с командой Автотех. Обращение в техническую поддержку, контакты для партнёрства и внедрения приложения для автомойки, детейлинга и шиномонтажа.",
  },
  {
    path: "/events",
    key: "events",
    title: "Мероприятия",
    description:
      "Закрытые мероприятия для собственников и управляющих автомойками, детейлинг-центрами и шиномонтажами. Присоединяйтесь к сообществу Автотех.",
  },
  {
    path: "/fleet",
    key: "fleet",
    title: "Автопарки",
    description:
      "Оплачивайте услуги автомойки, шиномонтажа, сезонного хранения и мелкого ремонта через приложение Автотех. Консолидированная отчётность, безнал и НДС для автопарков.",
  },
  {
    path: "/support",
    key: "support",
    title: "Поддержка",
    description:
      "Техническая поддержка Автотех. Обрабатываем заявки ежедневно с 08:00 до 23:00. Критические ошибки, доработки, вопросы по приложению для автомойки и шиномонтажа.",
  },
  {
    path: "/tariffs",
    key: "tariffs",
    title: "Тарифы",
    description:
      "Тарифы на приложение Автотех: автомойка, детейлинг, шиномонтаж. Помесячно, на 3 и 12 месяцев. Скидки для сетей от 2 точек.",
  },
  {
    path: "/updates",
    key: "updates",
    title: "Обновления",
    description:
      "Что нового в приложении Автотех. Описание доработок и обновлений для автомойки, детейлинга и шиномонтажа.",
  },
  {
    path: "/privacy",
    key: "privacy",
    title: "Согласие на обработку персональных данных",
    description:
      "Согласие на обработку персональных данных при использовании сайта и сервисов Автотех. Условия, цели обработки, права пользователя.",
  },
  {
    path: "/license",
    key: "license",
    title: "Пользовательское соглашение",
    description:
      "Условия использования сайта Автотех. Порядок использования, политика конфиденциальности, обработка данных, заключительные положения.",
  },
  {
    path: "/contract",
    key: "contract",
    title: "Агентский договор",
    description:
      "Агентский договор для партнёров. Условия присоединения, расчёты, обязательства сторон, конфиденциальность, срок действия.",
  },
];

const byPath = new Map(routes.map((r) => [r.path, r]));
const byKey = new Map(routes.map((r) => [r.key, r]));

export const getPageMetaByPath = (path: string): RouteMeta | undefined => byPath.get(path);
export const getPageMetaByKey = (key: string): RouteMeta | undefined => byKey.get(key);
