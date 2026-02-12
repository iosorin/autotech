"use client";

import { Enter } from "@ui/atoms/enter";

type Props = {
  heading: string;
  name: string;
  nameSup: string;
  desc: string;
  note: string;
};

export const Partners = ({ heading, name, nameSup, desc, note }: Props) => {
  return (
    <>
      <Enter variant="fade-up" duration={600}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 text-balance">
            {heading}
          </h2>
        </Enter>

        <Enter variant="scale-up" delay={150} duration={700}>
          <div className="rounded-2xl bg-secondary p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {name}
              <sup className="text-xs">{nameSup}</sup>
            </h3>
            <p className="text-sm text-foreground mb-4 text-balance leading-relaxed">{desc}</p>
            <p className="text-sm text-muted-foreground text-balance leading-relaxed">{note}</p>
          </div>
        </Enter>
    </>
  );
};

export default Partners;
