import { Enter } from "@ui/atoms/enter";
import { cn } from "@utils";

type Props = {
  name: string;
  nameSup: string;
  desc: string;
  note: string;
  className?: string;
};

export const Partners = ({ name, nameSup, desc, note, className }: Props) => {
  return (
    <Enter variant="scale-up" delay={150} duration={700}>
      <div className={cn("rounded-2xl bg-gradient-gray p-8 md:p-10 text-center mx-auto", className)}>
        <h3 className="text-2xl font-bold text-foreground mb-5">
          {name}
          <sup className="align-super">{nameSup}</sup>
        </h3>
        <p className="text-lg text-foreground mb-4 text-balance leading-relaxed font-medium">{desc}</p>
        <p className="text-balance leading-relaxed">{note}</p>
      </div>
    </Enter>
  );
};

export default Partners;
