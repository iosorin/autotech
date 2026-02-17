"use client";

import { Enter } from "@ui/atoms/enter";

type Props = {
  name: string;
  nameSup: string;
  desc: string;
  note: string;
};

export const Partners = ({ name, nameSup, desc, note }: Props) => (
  <Enter variant="scale-up" delay={150} duration={700}>
    <div className="rounded-2xl bg-gradient-gray p-8 md:p-10 text-center max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-foreground mb-5">
        {name}
        <sup className="align-super">{nameSup}</sup>
      </h3>
      <p className="text-lg text-foreground mb-4 text-balance leading-relaxed font-medium">
        {desc}
      </p>
      <p className="text-balance leading-relaxed">{note}</p>
    </div>
  </Enter>
);

export default Partners;
