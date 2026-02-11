"use client";

import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import {
  CheckCircle2,
  FileText,
  Layers,
  Settings,
  Zap,
  ExternalLink,
} from "lucide-react";
import { app, contacts } from "@content";

const iconMap = { Layers, FileText, Settings, Zap, CheckCircle2 };

export default function ContactsPage() {
  const p = contacts;
  return (
    <>
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">
          {p.title}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          {p.supportHint}
          <Link
            href="/support"
            className="text-primary underline hover:text-primary/80"
          >
            {p.supportLinkLabel}
          </Link>
        </p>
      </section>

      <section className="px-4 pb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
          {p.designedForHeading}
        </h2>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {p.designedFor.map((block) => (
            <div
              key={block.num}
              className={`rounded-2xl ${block.num === "01" ? "border-2 border-primary/30" : "border border-border"} bg-card p-6`}
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-bold text-card">
                {block.num}
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground">
                <span className={block.num === "01" ? "border-b-2 border-foreground" : ""}>
                  {block.title}
                </span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{block.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
          {p.devHeading}
        </h2>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {p.dev.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  {Icon ? <Icon className="h-6 w-6 text-primary" /> : null}
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#e6fff0] to-[#f0fdf4] px-4 py-20">
        <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
          {p.missionHeading}
        </h2>
        <div className="mx-auto max-w-2xl space-y-10">
          {p.mission.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={item.title} className="text-center">
                {i > 0 && (
                  <div className="mx-auto mb-8 h-px w-48 bg-border" />
                )}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-card">
                  {Icon ? <Icon className="h-6 w-6 text-primary" /> : null}
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-20">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
          {p.contactHeading}
        </h2>
        <ContactForm />
      </section>

      <section className="px-4 pb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
          {p.otherContactHeading}
        </h2>
        <div className="mx-auto max-w-md space-y-8 text-center">
          <div>
            <p className="text-sm font-medium text-primary">{p.contactLabels.telegram}</p>
            <a
              href={app.supportTelegramUrl}
              className="inline-flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary"
            >
              {app.telegramSupport}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div>
            <p className="text-sm font-medium text-primary">{p.contactLabels.email}</p>
            <a
              href={`mailto:${app.supportEmail}`}
              className="inline-flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary"
            >
              {app.supportEmail}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div>
            <p className="text-sm font-medium text-primary">{p.contactLabels.phone}</p>
            <a
              href={`tel:${app.phoneRaw}`}
              className="inline-flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary"
            >
              {app.phone}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
          {p.requisitesHeading}
        </h2>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">{app.company.short}</p>
            <p>Юридический и фактический адрес: {app.company.addressFull}</p>
            <p>ИНН: {app.company.inn}</p>
            <p>КПП: {app.company.kpp}</p>
            <p>ОГРН: {app.company.ogrn}</p>
            <p>ОКПО: {app.company.okpo}</p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">{p.bankHeading}</p>
            <p>{p.accountLabel} {app.company.bank.account}</p>
            <p>Название: {app.company.bank.name}</p>
            <p>ИНН: {app.company.bank.inn}</p>
            <p>КПП: {app.company.bank.kpp}</p>
            <p>БИК: {app.company.bank.bik}</p>
            <p>Город: {app.company.bank.city}</p>
            <p>Корр. счёт: {app.company.bank.corr}</p>
          </div>
        </div>
      </section>
    </>
  );
}
