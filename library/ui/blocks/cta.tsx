import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Lead } from "@ui/atoms/lead";
import { Button } from "@ui/atoms/button";
import { Enter } from "@ui/atoms/enter";
import { cn } from "@utils";

type Props = {
  title1?: string;
  title2?: string;
  items?: { label: string; href: string; }[];
  className?: string;
};

export const Cta = ({ title1, title2, items, className }: Props) => {
  return (
    <Enter variant="fade-up" duration={600} className={cn("flex flex-col gap-8 text-center", className)}>
      <Lead title={title1} title2={title2} />
      <div className="flex flex-wrap justify-center gap-3">
        {items?.map((item, i) => (
          <Button asChild variant={i === 0 ? "default" : "outline"} size="lg" key={item.label}>
            <Link href={item.href} title={item.label}>
              {item.label}
              {i === 0 && <ArrowUpRight />}
            </Link>
          </Button>
        ))}
      </div>
    </Enter>
  );
};

export default Cta;