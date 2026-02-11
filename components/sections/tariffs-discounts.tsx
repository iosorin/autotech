"use client";

type Discount = { range: string; percent: string };

type Props = {
  id?: string;
  heading: string;
  discounts: Discount[];
};

export function TariffsDiscounts({ id, heading, discounts }: Props) {
  return (
    <section id={id} className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          {heading}
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {discounts.map((d) => (
            <div key={d.range} className="text-center">
              <p className="text-sm font-medium text-primary mb-1">{d.range}</p>
              <p className="text-4xl md:text-5xl font-bold text-foreground">{d.percent}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
