"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

type Props = {
  labels: { telegram: string; email: string; phone: string };
  telegramSupport: {
    label: string;
    href: string;
  }
  email: string;
  phone: string;
  phoneRaw: string;
};

export const Links = ({
  labels,
  telegramSupport,
  email,
  phone,
  phoneRaw,
}: Props) => {
  return (
    <div className="max-w-md mx-auto space-y-8 text-center">
      <div>
        <p className="text-lg font-medium text-accent">{labels.telegram}</p>
        {telegramSupport &&
          <Link
            target="_blank"
            href={telegramSupport.href}
            title={telegramSupport.label}
            className="inline-flex items-center gap-2 text-lg font-semibold text-foreground hover:text-accent"
          >
            {telegramSupport.label}
            <ExternalLink className="size-5" />
          </Link>
        }
      </div>
      <div>
        <p className="text-lg font-medium text-accent">{labels.email}</p>
        <Link
          title="Написать на email"
          target="_blank"
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-lg font-semibold text-foreground hover:text-accent"
        >
          {email}
          <ExternalLink className="size-5" />
        </Link>
      </div>
      <div>
        <p className="text-lg font-medium text-accent">{labels.phone}</p>
        <Link
          title="Позвонить"
          target="_blank"
          href={`tel:${phoneRaw}`}
          className="inline-flex items-center gap-2 text-lg font-semibold text-foreground hover:text-accent"
        >
          {phone}
          <ExternalLink className="size-5" />
        </Link>
      </div>
    </div>
  );
};

export default Links;
