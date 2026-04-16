import { Check } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { cn } from "@utils";

type Item = {
  title: string;
  desc?: string,
  list?: string[],
  badge?: string,
  icon?: React.ReactNode;
  line?: boolean;
  className?: string,
};

type Props = {
  items: Item[];
  cols?: 2 | 3 | 4;
  variant?: "cards" | "stack";
  left?: boolean;
};

export const Icons = ({ items, cols = 3, variant = "cards", left = false }: Props) => {
  const renderItems = (items: Item[], stack?: boolean) => {
    return items.map((item, i) => {
      return (
        <Enter key={item.title} variant="fade-up" delay={i * 100} duration={600}
          className={
            cn(`flex flex-col gap-3 p-4 md:p-8`,
              stack ? (item.line ? '' : 'border-b') : 'rounded-2xl bg-gradient-gray-white',
              left ? 'items-start text-left' : 'items-center text-center', item.className)
          }>
          {item.badge && (
            <span className="inline-block text-lg bg-foreground text-background rounded-full px-4 py-1.5 w-fit">
              {item.badge}
            </span>
          )}
          {item.icon ? <div className={cn("flex-shrink-0", item.line ? 'line' : '')}>{item.icon}</div> : null}
          <h3 className="mt-1">{item.title}</h3>
          {item.desc && (
            <p>{item.desc}</p>
          )}
          {item.list && (
            <div className="space-y-4 mt-2">
              {item.list.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="size-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-base md:text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
          )}
        </Enter>
      );
    });
  };

  const render = () => {
    if (variant === "stack") {
      return <div className="mx-auto">
        {renderItems(items, true)}
      </div>
    }

    return <div className={cn(`grid gap-6`,
      cols === 2 && "md:grid-cols-2",
      cols === 3 && "md:grid-cols-3",
      cols === 4 && "md:grid-cols-4")
    }>
      {renderItems(items)}
    </div>
  }

  return render();
};

export default Icons;
