"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Lead } from "@ui/atoms/lead";
import { Button } from "@ui/atoms/button";
import { Enter } from "@ui/atoms/enter";
import { Dialog, DialogContent, DialogTrigger } from "@ui/atoms/dialog";
import { cn } from "@utils";

const SLOT_TYPE = Symbol("Cta.Slot");

type SlotProps = {
  slot: string;
  children: React.ReactNode;
};

const Slot = ({ slot, children }: SlotProps) => null;
Slot.displayName = "Cta.Slot";
(Object.assign(Slot, { [SLOT_TYPE]: true }) as React.FC<SlotProps> & { [SLOT_TYPE]: boolean });

const getSlots = (children: React.ReactNode): Record<string, React.ReactNode> => {
  const slots: Record<string, React.ReactNode> = {};
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && "slot" in (child.props as SlotProps) && (child.props as SlotProps).slot != null) {
      const { slot, children: slotContent } = child.props as SlotProps;
      slots[slot] = slotContent;
    }
  });
  return slots;
};

type Props = {
  title1?: string;
  title2?: string;
  items?: { label: string; href?: string; dialog?: string }[];
  className?: string;
  children?: React.ReactNode;
};

export const Cta = ({ title1, title2, items, className, children }: Props) => {
  const slots = React.useMemo(() => getSlots(children), [children]);

  return (
    <Enter variant="fade-up" duration={600} className={cn("flex flex-col gap-8 text-center", className)}>
      <Lead title={title1} title2={title2} />
      <div className="flex flex-wrap justify-center gap-3">
        {items?.map((item, i) => {
          const slotContent = item.dialog ? slots[item.dialog] : undefined;

          if (item.dialog) {
            return (
              <Dialog key={item.label}>
                <DialogTrigger asChild>
                  <Button variant={i === 0 ? "default" : "outline"} size="lg" title={item.label}>
                    {item.label}
                    {i === 0 && <ArrowUpRight />}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  {slotContent}
                </DialogContent>
              </Dialog>
            );
          }

          if (item.href) {
            return (
              <Button asChild variant={i === 0 ? "default" : "outline"} size="lg" key={item.label}>
                <Link href={item.href} title={item.label}>
                  {item.label}
                  {i === 0 && <ArrowUpRight />}
                </Link>
              </Button>
            );
          }
          return null;
        })}
      </div>
    </Enter>
  );
};

Cta.Slot = Slot;
export default Cta;