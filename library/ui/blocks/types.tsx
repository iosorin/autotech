import { cn } from "@utils";

type Type = { title: string; desc: string; icon?: React.ReactNode; className: string };

type Props = {
  types: Type[];
};

export const Types = ({ types }: Props) => (
  <div className="text-center flex flex-col items-center">
    <div className="grid gap-4 sm:grid-cols-2">
      {types.map((type) => (
        <div
          key={type.title}
          className={cn(`rounded-2xl p-5 flex flex-col items-center gap-4`, type.className)}
        >
          {type.icon}
          <h3 className="md:max-w-[65%]">{type.title}</h3>
          <p className="text-lg font-medium leading-relaxed">{type.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Types;
