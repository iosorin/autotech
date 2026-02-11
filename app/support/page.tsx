"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Zap, Clock, Wrench, MessageCircle, ExternalLink } from "lucide-react";
import { app, support } from "@content";

const iconMap = { Zap, Clock, Wrench, MessageCircle };

export default function SupportPage() {
  const p = support;
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-2 text-center text-4xl font-bold text-foreground md:text-5xl">
        {p.title}
      </h1>
      <p className="mb-12 text-center text-muted-foreground">
        {p.subtitle}
      </p>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <ContactForm />
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            {p.responseHeading}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {p.responseTypes.map((type) => {
              const Icon = iconMap[type.icon as keyof typeof iconMap];
              return (
                <div
                  key={type.title}
                  className={`rounded-2xl border ${type.border} ${type.bg} p-5`}
                >
                  <div className="mb-3">
                    {Icon ? (
                      type.icon === "Zap" ? (
                        <Zap className="h-6 w-6 text-destructive" />
                      ) : type.icon === "Clock" ? (
                        <Clock className="h-6 w-6 text-amber-500" />
                      ) : (
                        <Icon className="h-6 w-6 text-foreground" />
                      )
                    ) : null}
                  </div>
                  <h3 className="mb-2 text-sm font-bold text-foreground">
                    {type.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {type.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section className="mt-20">
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
    </div>
  );
}
