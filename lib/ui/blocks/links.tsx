"use client";

import { ExternalLink } from "lucide-react";

type Props = {
  id?: string;
  heading: string;
  labels: { telegram: string; email: string; phone: string };
  telegramUrl: string;
  telegramLabel: string;
  email: string;
  phone: string;
  phoneRaw: string;
};

export function Links({
  id,
  heading,
  labels,
  telegramUrl,
  telegramLabel,
  email,
  phone,
  phoneRaw,
}: Props) {
  return (
    <section id={id} className="px-4 pb-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        {heading}
      </h2>
      <div className="mx-auto max-w-md space-y-8 text-center">
        <div>
          <p className="text-sm font-medium text-primary">{labels.telegram}</p>
          <a
            href={telegramUrl}
            className="inline-flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary"
          >
            {telegramLabel}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div>
          <p className="text-sm font-medium text-primary">{labels.email}</p>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary"
          >
            {email}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div>
          <p className="text-sm font-medium text-primary">{labels.phone}</p>
          <a
            href={`tel:${phoneRaw}`}
            className="inline-flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary"
          >
            {phone}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
