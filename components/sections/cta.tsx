"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

type Props = {
  title: string;
  start: string;
  contact: string;
};

const Cta = ({ title, start, contact }: Props) => {
  return (
    <section className="bg-gradient-to-b from-accent/60 to-background py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
            {title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity hover:scale-105 transition-transform duration-200"
            >
              {start}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors bg-background hover:scale-105 transition-transform duration-200"
            >
              {contact}
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export default Cta;