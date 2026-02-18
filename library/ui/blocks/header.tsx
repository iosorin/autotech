"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, } from "lucide-react";
import { cn } from "@utils";
import { Button } from "@ui/atoms/button";

type NavItem = {
  label: string;
  href: string;
}

type Props = {
  title: string;
  logo: string;
  nav: NavItem[];
  featured: NavItem;
  className?: string;
}

export const Header = ({ title, logo, nav, featured, className }: Props) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const background = scrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-background";

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderItems = (items: NavItem[]) => {
    return (
      <>
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            title={item.label}
            className={cn("font-medium transition-colors duration-200 relative", item.label === featured.label ? "text-primary" : "text-foreground", pathname === item.href ? "underline" : "text-foreground")}
          >
            {item.label}
          </Link>
        ))}
        <Button asChild variant="secondary" className="max-md:hidden">
          <Link href={featured.href} title={featured.label}>
            {featured.label}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </>
    );
  };

  return (
    <header className={cn('w-full center transition-all duration-300 relative')}>
      <div className={cn('w-full flex items-center justify-between rounded-full px-4 mx-auto relative', background, className)}>
        <Link href="/" className="flex items-center gap-2 group" title={title}>
          {logo &&
            <Image src={logo} alt={title} width={27} height={27} />
          }
          {title &&
            <span className="font-bold text-2xl text-foreground">
              {title}
            </span>
          }
        </Link>

        <div className="flex items-center gap-3 lg:gap-7">
          <nav className="hidden md:flex items-center gap-3 lg:gap-7">
            {renderItems(nav)}
          </nav>

          <Button variant="secondary" className="md:hidden" size="icon" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Открыть меню">
            <Menu className={cn("size-5 absolute transition-all duration-200", mobileOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0")} />
            <X className={cn("size-5 absolute transition-all duration-200", mobileOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90")} />
          </Button>
        </div>

        <div className={cn("bg-white shadow-md absolute top-[100%] left-0 right-0 mt-1 rounded-xl w-full md:hidden overflow-hidden transition-all duration-300 ease-in-out z-50", mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0")}>
          <nav className="flex flex-col items-start gap-4 p-4">
            {renderItems(nav)}
          </nav>
        </div>
      </div>

    </header>
  );
}

export default Header;