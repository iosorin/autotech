"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Lead } from "@ui/atoms/lead";
import { Button } from "@ui/atoms/button";
import { Enter } from "@ui/atoms/enter";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@ui/atoms/dialog";
import { cn } from "@utils";

type SlotProps = {
  id: string;
  children: React.ReactElement<{ className?: string }>;
  className?: string;
};

const Slot = ({ id, children, className }: SlotProps) => null;
Slot.displayName = "Cta.Slot";

const getSlots = (children: React.ReactNode): Record<string, React.ReactNode> => {
  const slots: Record<string, React.ReactNode> = {};
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const p = child.props as SlotProps;
    const el = p.children;
    if (!p.id || !React.isValidElement(el)) return;
    slots[p.id] = React.cloneElement(el, { className: cn(el.props.className, p.className ?? 'shadow-none !p-0') });
  });
  return slots;
};

type Props = {
  title?: string;
  items?: { id: string; label: string; href?: string, blank?: boolean }[];
  className?: string;
  children?: React.ReactNode;
};

export const Cta = ({ title, items, className, children }: Props) => {
  const slots = React.useMemo(() => getSlots(children), [children]);

  return (
    <Enter variant="fade-up" duration={600} className={cn("flex flex-col gap-8 text-center", className)}>
      <Lead title={title} />
      <div className="flex flex-wrap justify-stretch md:justify-center gap-3">
        {items?.map((item, i) => {
          const content = slots[item.id];

          if (content) {
            return (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Button variant={i === 0 ? "default" : "outline"} size="lg" title={item.label} className="w-full md:w-auto">
                    {item.label}
                    {i === 0 && <ArrowUpRight />}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogTitle className="sr-only">{item.label}</DialogTitle>
                  {content}
                </DialogContent>
              </Dialog>
            );
          }

          if (item.href) {
            return (
              <Button asChild variant={i === 0 ? "default" : "outline"} size="lg" key={item.id} className="w-full md:w-auto">
                <Link href={item.href} title={item.label} target={item.blank ? "_blank" : undefined} rel={item.blank ? "noopener noreferrer" : undefined}>
                  {item.label}
                  {i === 0 && <ArrowUpRight className="size-7" />}
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