import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мероприятия",
  description:
    "Закрытые мероприятия для собственников и управляющих автомойками, детейлинг-центрами и шиномонтажами. Присоединяйтесь к сообществу Автотех.",
};

export default function EventsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
