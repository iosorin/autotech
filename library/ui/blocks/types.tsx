import { cn } from "@utils";

type Type = { title: string; desc: string; icon?: React.ReactNode; className: string };

type Props = {
  heading: string;
  types: Type[];
};

export const Types = ({ heading, types }: Props) => (
  <div className="text-center flex flex-col items-center">
    <h2 className="mb-10">{heading}</h2>
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
