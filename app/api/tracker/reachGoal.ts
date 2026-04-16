import { YANDEX_METRIC_ID } from "./constants";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

export const reachGoal = (goalName: string, params?: Record<string, string>) => {
  if (typeof window === "undefined") return;
  const ym = window.ym;
  if (typeof ym !== "function") return;
  ym(YANDEX_METRIC_ID, "reachGoal", goalName, params);
};
