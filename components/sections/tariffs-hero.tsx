"use client";

type Props = {
  id?: string;
  platformLabel: string;
  title: string;
};

export function TariffsHero({ id, platformLabel, title }: Props) {
  return (
    <section id={id} className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-primary mb-2">{platformLabel}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">{title}</h1>
        </div>
      </div>
    </section>
  );
}
