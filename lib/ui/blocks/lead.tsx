"use client";

type Props = {
  id?: string;
  title: string;
  label?: string;
  hint?: React.ReactNode;
};

export function Lead({ id, title, label, hint }: Props) {
  return (
    <section id={id} className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          {label ? <p className="text-sm font-medium text-primary mb-2">{label}</p> : null}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">{title}</h1>
          {hint ? <p className="mx-auto mt-4 max-w-lg text-muted-foreground">{hint}</p> : null}
        </div>
      </div>
    </section>
  );
}
