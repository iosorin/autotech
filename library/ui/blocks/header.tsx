"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@utils";

type Props = {
  title: string;
  logo: string;
  nav: {
    label: string;
    href: string;
  }[];
  featured: {
    label: string;
    href: string;
  };
  className?: string;
}

export const Header = ({ title, logo, nav, featured, className }: Props) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn('transition-all duration-300', scrolled
        ? "bg-background/80 backdrop-blur-lg shadow-sm"
        : "bg-background", className)}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 group">
          {logo &&
            <Image src={logo} alt={title} width={26} height={26} />
          }
          {title &&
            <span className="font-bold text-xl text-foreground">
              {title}
            </span>
          }
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 hover:text-foreground relative ${pathname === link.href
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
            href={featured.href}
            className="inline-flex items-center gap-1 rounded-full border border-foreground px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 hover:scale-105"
          >
            {featured.label}
            <ArrowRight className="w-3.5 h-3.5" />
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
        className={`md:hidden border-t border-border bg-background overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
          }`}
      >
        <nav className="flex flex-col gap-3 px-4 py-3">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm py-1 transition-colors duration-200 ${pathname === link.href
                ? "text-foreground font-medium"
                : "text-muted-foreground"
                }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={featured.href}
            className="inline-flex items-center gap-1 rounded-full border border-foreground px-4 py-2 text-sm font-medium text-foreground w-fit"
            onClick={() => setMobileOpen(false)}
          >
            {featured.label}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;