import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { app } from "@data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border-2 border-foreground flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
              </div>
              <span className="font-bold text-lg text-foreground">
                {app.name}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">{app.copyright}</p>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <p className="font-medium text-foreground">{app.phone}</p>
            <Link
              href={`mailto:${app.email}`}
              className="text-foreground underline"
            >
              {app.email}
            </Link>
          </div>

          <div className="flex items-start gap-2 text-sm">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-[#2AABEE] fill-current flex-shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.332-.373-.119l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z" />
            </svg>
            <span className="text-foreground">{app.telegram}</span>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
            {app.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <Link
              href={app.fleetHref}
              className="inline-flex items-center gap-1 rounded-full border border-foreground px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              {app.fleetLabel}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row gap-4 justify-between text-xs text-muted-foreground">
          <div className="flex flex-col gap-1">
            <p>{app.company.name}</p>
            <p>{"ИНН " + app.company.inn}</p>
            <p>{"ОГРН " + app.company.ogrn}</p>
            <p>{app.company.addressLine1}</p>
            <p>{app.company.addressLine2}</p>
          </div>
          <div className="flex flex-col gap-1">
            <Link href="#" className="underline hover:text-foreground">
              {app.legal.offer}
            </Link>
            <Link href="#" className="underline hover:text-foreground">
              {app.legal.privacy}
            </Link>
            <Link href="#" className="underline hover:text-foreground">
              {app.legal.privacySuffix}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
