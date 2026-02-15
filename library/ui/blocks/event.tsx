import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { Button } from "@ui/atoms/button";
import { cn } from "@utils";

type Props = {
  date: string;
  title: string;
  desc: string;
  cta: string;
  button: string;
  href?: string;
  className?: string;
};

export const Event = ({ date, title, desc, cta, button, href = "/events", className }: Props) => {
  return (
    <Enter variant="scale-up" duration={700}>
      <div className={cn("rounded-3xl px-8 py-10 text-center space-y-3", className)}>
        <p className="font-medium text-primary mb-3">{date}</p>
        <h2 className="text-center">
          {title}
        </h2>
        <p className="text-balance">{desc}</p>
        <p className="text-muted-foreground">{cta}</p>
        <Button asChild variant="default" size="lg">
          <Link href={href} title={button}>
            {button}
            <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </Enter>
  );
};

export default Event;