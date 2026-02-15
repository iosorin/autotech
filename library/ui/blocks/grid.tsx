type Block = { badge: string; title: string; desc: string };

type Props = {
  blocks: Block[];
};

export const Grid = ({ blocks }: Props) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {blocks.map((block) => (
        <div
          key={block.badge}
          className="flex flex-col gap-4 rounded-2xl bg-gradient-blue p-6 md:min-h-[40vh]"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-bold text-card">
            {block.badge}
          </span>
          <h3 className="md:max-w-[80%]">
            {block.title}
          </h3>
          <p className="text-lg leading-relaxed md:max-w-[95%]">{block.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
