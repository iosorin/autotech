"use client";

import { cn } from "@utils";

type Col = {
  label: string;
  items: string[];
  icon?: React.ReactNode;
  color?: string;
  text?: string;
};

type Props = {
  data: Col[];
  className?: string;
};

export const Compare = ({ data, className }: Props) => {
  if (!data || data.length === 0) return null;

  const rowCount = Math.max(0, ...data.map((col) => col.items.length));

  return (
    <div
      className={cn("grid w-full rounded-2xl overflow-hidden", className)}
      style={{ gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))` }}
    >
      {data.map((col, colIndex) => (
        <div
          key={colIndex}
          className={cn(
            "px-4 py-3 flex justify-start",
            colIndex === 0 && "rounded-tl-2xl",
            colIndex === data.length - 1 && "rounded-tr-2xl",
          )}
        >
          <span
            className="text-lg text-white inline-block px-6 py-3 rounded-full font-medium"
            style={{ backgroundColor: col.color }}
          >
            {col.label}
          </span>
        </div>
      ))}
      {Array.from({ length: rowCount }, (_, rowIndex) =>
        data.map((col, colIndex) => (
          <div
            key={`${colIndex}-${rowIndex}`}
            className={cn(
              "flex items-start gap-3 p-4 bg-background",
              rowIndex !== 0 && "border-t border-border",
              colIndex === 0 && rowIndex === rowCount - 1 && "rounded-bl-2xl",
              colIndex === data.length - 1 && rowIndex === rowCount - 1 && "rounded-br-2xl",
            )}
            style={{ color: col.color }}
          >
            <div className="shrink-0">
              {col.icon}
            </div>

            <span className="text-lg md:max-w-md" style={{ color: col.text || 'inherit' }}>{col.items[rowIndex] ?? ""}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Compare;
