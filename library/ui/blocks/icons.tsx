import { Enter } from "@ui/atoms/enter";
import { cn } from "@utils";
import Image from "next/image";

type Item = {
  title: string;
  desc: string,
  badge?: string,
  icon?: React.ReactNode | string;
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
  const renderIcon = (item: Item) => {
    if (!item.icon) return null;
    if (typeof item.icon === 'string') {
      return <div
        className="w-full h-44 bg-no-repeat bg-left"
        style={{ backgroundImage: `url(${item.icon})`, backgroundSize: 'contain', }}
      />
      // return <div className="relative w-full h-auto min-h-[120px]">
      //   <Image src={item.icon} alt={item.title} fill className="object-contain" />
      // </div>
      // return <Image src={item.icon} alt={item.title} width={400} height={200} />
    }

    return <div className={cn("flex-shrink-0", item.line ? 'line' : '')}>{item.icon}</div>;
  }
  const renderItems = (list: Item[], stack?: boolean) => {
    return list.map((item, i) => {
      return (
        <Enter key={item.title} variant="fade-up" delay={i * 100} duration={600}
          className={
            cn(`flex flex-col gap-4 p-8 overflow-hidden`,
              stack ? (item.line ? '' : 'border-b') : 'rounded-2xl bg-gradient-gray-light',
              left ? 'items-start text-left' : 'items-center text-center', item.className)
          }>
          {item.badge && (
            <span className="inline-block text-lg bg-foreground text-background rounded-full px-4 py-1.5 w-fit">
              {item.badge}
            </span>
          )}
          {renderIcon(item)}
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
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
