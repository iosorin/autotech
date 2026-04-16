import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const plural = (n: number, one: string, few: string, many: string) => {
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
};

export const parseMoney = (raw: string) => {
  const n = Number(String(raw).replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
};

export const formatAmount = (value: number) => {
  const rounded = Math.round(value);
  return rounded.toLocaleString("ru-RU");
};

export const formatMoney = (value: number, currency: string) => {
  const rounded = Math.round(value);
  return `${rounded.toLocaleString("ru-RU")} ${currency}`.trim();
};

export const clamp = (n: number, lo: number, hi: number) => {
  if (!Number.isFinite(n)) return lo;
  return Math.min(hi, Math.max(lo, Math.round(n)));
};

export const liftNumber = (raw: string): number | null => {
  const n = Number(raw.replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) && n > 0 ? n : null;
};

export const scrollIntoView = (id?: string) => {
  if (!id) return;

  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "center" });
};