"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { app } from "@content";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-1 bg-accent w-full" />
      <header
        className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg shadow-sm"
            : "bg-background"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded border-2 border-foreground flex items-center justify-center group-hover:border-primary transition-colors duration-200">
              <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
            </div>
            <span className="font-bold text-lg text-foreground">
              {app.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {app.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 hover:text-foreground relative ${
                  pathname === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href={app.fleetHref}
              className="inline-flex items-center gap-1 rounded-full border border-foreground px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 hover:scale-105"
            >
              {app.fleetLabel}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <Menu className={`w-5 h-5 absolute transition-all duration-200 ${mobileOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
              <X className={`w-5 h-5 absolute transition-all duration-200 ${mobileOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
            </div>
          </button>
        </div>

        <div
          className={`md:hidden border-t border-border bg-background overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
          }`}
        >
          <nav className="flex flex-col gap-3 px-4 py-3">
            {app.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm py-1 transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={app.fleetHref}
              className="inline-flex items-center gap-1 rounded-full border border-foreground px-4 py-2 text-sm font-medium text-foreground w-fit"
              onClick={() => setMobileOpen(false)}
            >
              {app.fleetLabel}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
