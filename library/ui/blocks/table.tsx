"use client";

import { useState } from "react";
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
    <div className={cn("rounded-2xl p-4 lg:p-8", className)}>
      <div className="flex justify-end mb-4 lg:mb-6">
        <div className="flex flex-wrap gap-2 justify-end">
          {cols.map((item) => (
            <Button
              key={item.id}
              variant="accent"
              size="lg"
              className={cn("lg:pointer-events-none", activePeriod !== item.id && "max-md:opacity-50")}
              onClick={() => setActivePeriod(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto -mx-2 px-2">
        <div className="flex flex-col gap-1">
          {rows.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "flex items-center justify-between gap-2 p-3 lg:p-4 rounded-full",
                item.highlighted && "bg-accent",
                index % 2 !== 0 && "bg-accent/10"
              )}
            >
              <div className="flex items-center gap-2 lg:gap-3 min-w-0 flex-shrink">
                <div className="flex gap-1 min-w-0 flex-shrink-0 lg:min-w-[130px]">
                  {item.icons.map((icon, i) => (
                    <div key={`${item.name}-icon-${i}`} className={cn("rounded-full shadow-md bg-white p-1 lg:p-2", i > 0 && "-ml-2 lg:-ml-3")}>
                      {icon}
                    </div>
                  ))}
                </div>
                <span className="text-base lg:text-lg font-medium text-foreground truncate">{item.name}</span>
              </div>
              <div className="flex gap-4 lg:gap-20 flex-shrink-0">
                {cols.map((period) => (
                  <span
                    key={period.id}
                    className={cn(
                      "text-base lg:text-xl font-semibold text-right text-foreground tabular-nums min-w-[3ch]",
                      period.id !== activePeriod && "hidden lg:inline"
                    )}
                  >
                    {item.values[period.id]}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
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