"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ui/atoms/accordion";
import { Enter } from "@ui/atoms/enter";

type Props = {
  heading: string;
  items: { question: string; answer: string }[];
};

export const Faq = ({ heading, items }: Props) => {
  return (
    <>
      <Enter variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 text-balance">
            {heading}
          </h2>
        </Enter>

        <Enter variant="fade-up" delay={150} duration={600}>
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
        </Enter>
    </>
  );
};

export default Faq;
