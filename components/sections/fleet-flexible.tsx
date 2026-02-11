"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { SlidersHorizontal, CheckCircle2, ArrowUpRight } from "lucide-react";

type Props = {
  id?: string;
  title: string;
  list: string[];
  imageAlt: string;
  contactCta: string;
};

export function FleetFlexible({ id, title, list, imageAlt, contactCta }: Props) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <AnimateOnScroll variant="fade-right" duration={700} className="lg:w-1/2">
            <Image
              src="/images/fleet-dashboard.jpg"
              alt={imageAlt}
              width={500}
              height={350}
              className="rounded-2xl w-auto h-auto"
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={200} duration={600} className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <SlidersHorizontal className="w-7 h-7 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
            </div>
            <div className="flex flex-col gap-4">
              {list.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{text}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contacts"
              className="mt-8 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              {contactCta}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
