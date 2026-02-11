import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Обновления",
  description:
    "Что нового в приложении Автотех. Описание доработок и обновлений для автомойки, детейлинга и шиномонтажа.",
};

export default function UpdatesLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
