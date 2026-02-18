import { cn } from "@utils";

type Type = { title: string; desc: string; icon?: React.ReactNode; className: string };

type Props = {
  types: Type[];
};

export const Types = ({ types }: Props) => (
  <div className="text-center flex flex-col items-center">
    <div className="grid gap-6 sm:grid-cols-2">
      {types.map((type) => (
        <div
          key={type.title}
          className={cn(`rounded-2xl px-6 py-7 flex flex-col items-center gap-3 min-h-[25vh] bg-muted`, type.className)}
        >
          {type.icon}
          <h3>{type.title}</h3>
          <p className="md:text-lg font-medium leading-relaxed">{type.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Types;
