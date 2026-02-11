import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Автопаркам",
  description:
    "Оплачивайте услуги автомойки, шиномонтажа, сезонного хранения и мелкого ремонта через приложение Автотех. Консолидированная отчётность, безнал и НДС для автопарков.",
};

export default function FleetLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
