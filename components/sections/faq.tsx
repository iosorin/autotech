"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

type Props = {
  id?: string;
  heading: string;
  items: { question: string; answer: string }[];
};

export function FaqSection({ id, heading, items }: Props) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 text-balance">
            {heading}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={150} duration={600}>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm font-medium text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
