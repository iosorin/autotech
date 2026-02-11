"use client";

type Props = {
  id?: string;
  title: string;
  subtitle: string;
};

export function EventsIntro({ id, title, subtitle }: Props) {
  return (
    <section id={id} className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-center text-4xl font-bold text-foreground md:text-5xl">
        {title}
      </h1>
      <p className="mb-12 text-center text-muted-foreground">{subtitle}</p>
    </section>
  );
}
