"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { app, home } from "@content";

export function JoinSection() {
  const j = home.join;
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <AnimateOnScroll variant="blur-in" duration={700}>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-balance">
            {j.titleLine1}
            <br />
            {j.titleLine2}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              {app.cta.start}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary hover:scale-105 transition-all duration-200"
            >
              {app.cta.contact}
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
