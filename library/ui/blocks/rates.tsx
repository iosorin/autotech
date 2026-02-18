"use client";

type Discount = { range: string; percent: string };

type Props = {
  discounts: Discount[];
  icon?: React.ReactNode;
};

export const Rates = ({ discounts, icon }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 md:gap-10">
      {discounts.map((d) => (
        <div key={d.range} className="text-center flex-[0_0_30%] md:flex-1">
          <div className="flex items-center justify-center gap-2 mb-2">
            {icon}
            <p className="text-base md:text-lg font-medium text-accent shrink-0">{d.range}</p>
          </div>
          <p className="text-3xl md:text-5xl font-bold text-foreground ml-9">{d.percent}</p>
        </div>
      ))}
    </div>
  );
};

export default Rates;
