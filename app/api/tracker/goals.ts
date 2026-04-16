/**
 * Цели Яндекс.Метрики для посадочной
 * Формат: landing.[page].[section].[button]
 *
 * Динамические цели (calculator.pack, calculator.period, header.click)
 * передают выбранный элемент как параметр { name }, а не в названии цели.
 */

export const goals = {
  home: {
    hero:      { contact: "landing.home.hero.contact",      start: "landing.home.hero.start" },
    migration: { migrate: "landing.home.migration.migrate" },
    cta:       { contact: "landing.home.cta.contact",       start: "landing.home.cta.start" },
    join:      { contact: "landing.home.join.contact",      start: "landing.home.join.start" },
  },
  fleet: {
    hero:     { contact: "landing.fleet.hero.contact" },
    flexible: { contact: "landing.fleet.flexible.contact" },
    how:      { cabinet: "landing.fleet.how.cabinet",  more: "landing.fleet.how.more" },
    hrd:      { cabinet: "landing.fleet.hrd.cabinet",  more: "landing.fleet.hrd.more" },
  },
  tariffs: {
    calculator: {
      manager: "landing.tariffs.calculator.manager",
      pack:    "landing.tariffs.calculator.pack",
      period:  "landing.tariffs.calculator.period",
    },
    cta: { contact: "landing.tariffs.cta.contact", start: "landing.tariffs.cta.start" },
  },
  workflow: {
    features: { contact: "landing.workflow.features.contact", start: "landing.workflow.features.start" },
  },
  header: {
    click: "landing.header.click",
  },
  form: {
    submit: "landing.form.submit",
  },
};
