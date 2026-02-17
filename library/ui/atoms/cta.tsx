import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Lead } from "@ui/atoms/lead";
import { Button } from "@ui/atoms/button";
import { Enter } from "@ui/atoms/enter";
import { cn } from "@utils";

type Props = {
  title?: string;
  items?: { id: string; label: string; href?: string; blank?: boolean }[];
  className?: string;
};

export const Cta = ({ title, items, className }: Props) => {
  return (
    <Enter variant="fade-up" duration={600} className={cn("flex flex-col gap-8 text-center", className)}>
      <Lead title={title} />
      <div className="flex flex-wrap justify-stretch md:justify-center gap-3">
        {items?.map((item, i) => {
          if (item.href) {
            return (
              <Button asChild variant={i === 0 ? "default" : "outline"} size="lg" key={item.id} className="w-full md:w-auto">
                <Link id={item.id} href={item.href} title={item.label} target={item.blank ? "_blank" : undefined} rel={item.blank ? "noopener noreferrer" : undefined}>
                  {item.label}
                  {i === 0 && <ArrowUpRight className="size-7" />}
                </Link>
              </Button>
            );
          }

          return (
            <Button id={item.id} key={item.id} variant={i === 0 ? "default" : "outline"} size="lg" title={item.label} className="w-full md:w-auto">
              {item.label}
              {i === 0 && <ArrowUpRight />}
            </Button>
          );
        })}
      </div>
    </Enter>
  );
};

export default Cta;