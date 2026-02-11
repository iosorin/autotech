"use client";

type Props = {
  id?: string;
  subtitle: string;
  title: string;
};

export function UpdatesIntro({ id, subtitle, title }: Props) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-4">
      <p className="mb-2 text-center text-sm text-muted-foreground">{subtitle}</p>
      <h1 className="mb-12 text-center text-4xl font-bold text-foreground md:text-5xl">
        {title}
      </h1>
    </section>
  );
}
