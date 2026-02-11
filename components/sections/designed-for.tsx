"use client";

type Block = { num: string; title: string; desc: string };

type Props = {
  id?: string;
  heading: string;
  blocks: Block[];
};

export function DesignedFor({ id, heading, blocks }: Props) {
  return (
    <section id={id} className="px-4 pb-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        {heading}
      </h2>
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {blocks.map((block) => (
          <div
            key={block.num}
            className={`rounded-2xl ${block.num === "01" ? "border-2 border-primary/30" : "border border-border"} bg-card p-6`}
          >
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-bold text-card">
              {block.num}
            </span>
            <h3 className="mt-3 text-lg font-bold text-foreground">
              <span className={block.num === "01" ? "border-b-2 border-foreground" : ""}>
                {block.title}
              </span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{block.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
