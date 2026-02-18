import { RefreshCw } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { cn } from "@utils";

type Props = {
  title: React.ReactNode;
  items: string[];
  className?: string;
};

export const Migration = ({ title, items, className }: Props) => {
  return (
    <div className={cn("center flex-col gap-10 text-center", className)}>
      <Enter variant="scale-up" duration={600}>
        <RefreshCw className="size-20 mx-auto text-primary" />
      </Enter>
      <Enter variant="fade-up" delay={100} duration={600}>
        {title}
      </Enter>

      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item, i) => (
          <Enter key={item} variant="scale-up" delay={200 + i * 80} duration={500}>
            <span className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-lg font-medium text-primary-foreground">
              {item}
            </span>
          </Enter>
        ))}
      </div>
    </div>
  );
};

export default Migration;
