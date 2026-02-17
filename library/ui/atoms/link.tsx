import LinkNext from "next/link";
import { cn } from "@utils";

type Props = {
  href: string;
  label: string;
  className?: string;
  target?: string;
  rel?: string;
};

export const Link = ({ href, label, className, target, rel }: Props) => (
  <LinkNext
    href={href}
    target={target}
    rel={rel}
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-opacity hover:opacity-90",
      className
    )}
  >
    {label}
  </LinkNext>
);

export default Link;
