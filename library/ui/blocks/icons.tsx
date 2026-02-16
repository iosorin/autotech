import { Enter } from "@ui/atoms/enter";
import { cn } from "@utils";
import Icon from "@ui/atoms/icon";

type Item = {
  title: string;
  desc: string;
  badge?: string;
  icon?: React.ComponentProps<typeof Icon>;
  image?: React.ReactNode | string;
  // iconClassName?: string;
  line?: boolean;
  className?: string;
};

type Props = {
  items: Item[];
  itemClassName?: string;
  cols?: 2 | 3 | 4;
  variant?: "cards" | "stack";
  left?: boolean;
};

const isImageUrl = (s: Item["image"]) => {
  if (typeof s !== "string") return false;
  return s?.startsWith("/") || s?.startsWith("http");
};

export const Icons = ({ items, itemClassName, cols = 3, variant = "cards", left = false }: Props) => {
  const renderAssets = (item: Item) =>
    <>
      {item.image && isImageUrl(item.image) ? (
        <div className="w-full h-44 bg-no-repeat bg-left"
          style={{ backgroundImage: `url(${item.image})`, backgroundSize: "contain" }}
        />
      ) : (
        <div className={cn("flex-shrink-0", item.line ? "line" : "")}>{item.image}</div>
      )}

      {item.icon && (
        <Icon {...item.icon} className={cn("size-10 text-accent", item.icon.className)} />
      )}
    </>

  const renderItems = (list: Item[], stack?: boolean) => {
    return list.map((item, i) => {
      return (
        <Enter key={item.title} variant="fade-up" delay={i * 100} duration={600}
          className={
            cn(`flex flex-col gap-4 p-8 overflow-hidden`,
              stack ? (item.line ? '' : 'border-b') : 'rounded-2xl bg-gradient-gray-white',
              left ? 'items-start text-left' : 'items-center text-center', itemClassName, item.className)
          }>
          {item.badge && (
            <span className="inline-block text-lg bg-foreground text-background rounded-full px-4 py-1.5 w-fit">
              {item.badge}
            </span>
          )}
          {renderAssets(item)}
          <h3>{item.title}</h3>
          <p className="text-lg">{item.desc}</p>
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
