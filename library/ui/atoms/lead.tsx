import { cn } from "@utils";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
type Order = 0 | 1 | 2 | 3;
type SlotKey = "title" | "label" | "hint";

const DEFAULTS = {
  title: { tag: "h2" as Tag, className: "", order: 0 },
  label: { tag: "div" as Tag, className: "lead-label", order: 1 },
  hint: { tag: "p" as Tag, className: "lead-hint", order: 2 },
} as const;

const ORDER_CLASS: Record<number, string> = {
  0: "order-0",
  1: "order-1",
  2: "order-2",
  3: "order-3",
};

const Slot = ({
  tag,
  className,
  children,
}: {
  tag: Tag;
  className?: string;
  children: React.ReactNode;
}) => {
  if (children == null) return null;
  const El = tag;
  return (
    <El className={className} >
      {children}
    </El>
  );
};

type Tags = Partial<Record<SlotKey, Tag>>;
type Orders = Partial<Record<SlotKey, Order>>;

type Props = {
  title: React.ReactNode;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  className?: string;
  left?: boolean;
  primary?: boolean;
  tags?: Tags;
  orders?: Orders;
};

export const Lead = ({
  title,
  label,
  hint,
  className,
  left,
  tags,
  primary,
  orders = {},
}: Props) => {
  if (!title && !label) return null;

  const content: Record<SlotKey, React.ReactNode> = { title, label, hint };

  const slot = (key: SlotKey, prim?: boolean) => {
    const def = DEFAULTS[key];
    const contentNode = content[key];
    if (!contentNode) return null;
    const tag = tags?.[key] ?? def.tag;
    const slotClass = def.className;
    const order = orders[key] ?? def.order;
    return (
      <Slot tag={tag} className={cn(slotClass, prim && 'text-primary', ORDER_CLASS[order])}>
        {contentNode}
      </Slot>
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-3 md:gap-4 md:mb-8 mb-4",
        left ? "text-left" : "text-center",
        className
      )}
    >
      {slot("title")}
      {slot("label", primary)}
      {slot("hint")}
    </div>
  );
};

Lead.Slot = Slot;
Lead.DEFAULTS = DEFAULTS;

export default Lead;