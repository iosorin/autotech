import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Тарифы",
  description:
    "Тарифы на приложение Автотех: автомойка, детейлинг, шиномонтаж. Помесячно, на 3 и 12 месяцев. Скидки для сетей от 2 точек.",
};

export default function TariffsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
