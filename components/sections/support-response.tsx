"use client";

import { Zap, Clock, Wrench, MessageCircle } from "lucide-react";

const iconMap = { Zap, Clock, Wrench, MessageCircle };

type Type = { icon: string; title: string; desc: string; bg: string; border: string };

type Props = {
  id?: string;
  heading: string;
  types: Type[];
};

export function SupportResponse({ id, heading, types }: Props) {
  return (
    <div id={id}>
      <h2 className="mb-6 text-2xl font-bold text-foreground">{heading}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {types.map((type) => (
          <div
            key={type.title}
            className={`rounded-2xl border ${type.border} ${type.bg} p-5`}
          >
            <div className="mb-3">
              {type.icon === "Zap" ? (
                <Zap className="h-6 w-6 text-destructive" />
              ) : type.icon === "Clock" ? (
                <Clock className="h-6 w-6 text-amber-500" />
              ) : (
                (() => {
                  const Icon = iconMap[type.icon as keyof typeof iconMap];
                  return Icon ? <Icon className="h-6 w-6 text-foreground" /> : null;
                })()
              )}
            </div>
            <h3 className="mb-2 text-sm font-bold text-foreground">{type.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{type.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
