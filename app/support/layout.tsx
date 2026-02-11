import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Поддержка",
  description:
    "Техническая поддержка Автотех. Обрабатываем заявки ежедневно с 08:00 до 23:00. Критические ошибки, доработки, вопросы по приложению для автомойки и шиномонтажа.",
};

export default function SupportLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
