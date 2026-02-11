import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Связь с командой Автотех. Обращение в техническую поддержку, контакты для партнёрства и внедрения приложения для автомойки, детейлинга и шиномонтажа.",
};

export default function ContactsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
