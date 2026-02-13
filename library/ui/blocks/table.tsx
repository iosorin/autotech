"use client";

import { useState } from "react";
// import { Droplets, Scissors, Car } from "lucide-react";
import { cn } from "@utils";
import { Button } from "../atoms/button";

type Col = { id: string; label: string; };

type Row = {
  name: string;
  icons: React.ReactNode[];
  values: Record<string, string>;
  highlighted?: boolean;
};

type Props = {
  cols: Col[];
  rows: Row[];
  note: string;
  note2: string;
  className?: string;
};

export const Table = ({ cols, rows, note, note2, className }: Props) => {
  const [activePeriod, setActivePeriod] = useState(cols[0]?.id ?? "1m");
  return (
    <div className={cn("rounded-2xl p-6 md:p-8", className)}>
      <div className="flex justify-end mb-6">
        <div className="flex gap-2">
          {cols.map((item) => (<Button key={item.id} variant="accent" size="lg" onClick={() => setActivePeriod(item.id)}>{item.label}</Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between py-3 px-4 text-muted-foreground text-sm font-medium border-b border-border">
          <span className="w-[200px]">&nbsp;</span>
          <div className="flex gap-8 md:gap-16">
            {cols.map((item) => (
              <span key={item.id} className="min-w-[60px] text-right">
                {item.label}
              </span>
            ))}
          </div>
        </div>
        {rows.map((item) => (
          <div
            key={item.name}
            className={cn("flex items-center justify-between py-4 px-4 rounded-xl", item.highlighted ? "bg-accent" : "")}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {item.icons.map((icon, i) => {
                  return (
                    <div key={`${item.name}-icon-${i}`} className={cn("rounded-full shadow-md bg-white p-1", i > 0 && "-ml-3")}>
                      {icon}
                    </div>
                  );
                })}
              </div>
              <span className="text-sm font-medium text-foreground">{item.name}</span>
            </div>
            <div className="flex gap-8 md:gap-16">
              {cols.map((period) => (
                <span
                  key={period.id}
                  className={`text-sm font-semibold min-w-[60px] text-right ${activePeriod === period.id
                    ? "text-foreground"
                    : "text-muted-foreground"
                    }`}
                >
                  {item.values[period.id]}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-right">
        {note}
        <br />
        {note2}
      </p>
    </div>
  );
};

export default Table;
