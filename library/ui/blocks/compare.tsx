import { cn } from "@utils";
import Enter from "../atoms/enter";

type Col = {
  label: string;
  items: string[];
  icon?: React.ReactNode;
  // color?: 'primary' | 'muted';
  primary?: boolean;
  // text?: string;
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
            "py-3 px-2 flex justify-start",
            colIndex === 0 && "rounded-tl-2xl",
            colIndex === data.length - 1 && "rounded-tr-2xl",
          )}
        >
          <span
            className={cn("md:text-lg text-white inline-block px-6 py-3 rounded-full font-medium", col.primary ? "bg-primary" : "bg-muted-foreground")}
          >
            {col.label}
          </span>
        </div>
      ))}
      {Array.from({ length: rowCount }, (_, rowIndex) =>
        data.map((col, colIndex) => (
          <Enter
            key={`${colIndex}-${rowIndex}`}
            variant="fade-up"
            delay={rowIndex * 100}
            duration={600}
            className={cn(
              "flex items-start gap-3 py-3 px-2 lg:p-4  bg-background",
              rowIndex !== 0 && "border-t border-border",
              colIndex === 0 && rowIndex === rowCount - 1 && "rounded-bl-2xl",
              colIndex === data.length - 1 && rowIndex === rowCount - 1 && "rounded-br-2xl",
              col.primary ? "text-foreground" : "text-muted-foreground",
            )}
          >
            <div className={cn("shrink-0 hidden lg:block", col.primary && "text-primary")}>
              {col.icon}
            </div>

            <span className="lg:text-lg text-sm md:max-w-md">{col.items[rowIndex] ?? ""}</span>
          </Enter>
        ))
      )}
    </div>
  );
};

export default Compare;
