"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ui/atoms/accordion";
import { Enter } from "@ui/atoms/enter";

type Props = {
  items: { q: string; a: string }[];
};

export const Faq = ({ items }: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <Enter variant="fade-up" delay={150 * index} duration={600} key={item.q}>
          <AccordionItem key={item.q} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        </Enter>
      ))}
    </Accordion>
  );
};

export default Faq;
