import { cn } from "@utils";
import Icon from "@ui/atoms/icon";

type Props = {
  title: string;
  desc: string;
  date?: string;
  icon?: React.ComponentProps<typeof Icon>;
  className?: string;
  cta: React.ReactNode;
};

export const Promo = ({
  title,
  desc,
  date,
  icon,
  className,
  cta,
}: Props) => {
  return (
    <div className={cn("rounded-3xl bg-primary/10 p-8 text-center md:p-12", className)}>
      {date ? <p className="mb-4 font-semibold text-primary">{date}</p> : null}
      {icon ? <div className="mb-4 flex justify-center"><Icon {...icon} /></div> : null}
      <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      <p className="text-lg mb-8 md:max-w-xl mx-auto">{desc}</p>

      {cta}
    </div>
  );
};

export default Promo;
