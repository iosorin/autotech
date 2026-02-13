"use client";

import { cn } from "@utils";

type Type = { icon: React.ReactNode; title: string; desc: string; className: string };

type Props = {
  heading: string;
  types: Type[];
};

export const Types = ({ heading, types }: Props) => {
  return (
    <div className="text-center flex flex-col items-center">
      <h2 className="mb-10">{heading}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {types.map((type) => (
          <div
            key={type.title}
            className={cn(`rounded-2xl border p-5`, type.className)}
          >
            <div className="mb-3 flex justify-center">
              {type.icon}
            </div>
            <h3 className="mb-2 text-sm font-bold text-foreground">{type.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{type.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Types;
