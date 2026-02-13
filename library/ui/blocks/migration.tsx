"use client";

import { RefreshCw } from "lucide-react";
import { Enter } from "@ui/atoms/enter";

type Props = {
  titleLine1: string;
  titleLine2: string;
  desc: string;
  items: string[];
};

export const Migration = ({ titleLine1, titleLine2, desc, items }: Props) => {
  return (
    <div className="center flex-col gap-10 text-center">
      <Enter variant="scale-up" duration={600}>
        <RefreshCw className="size-20 mx-auto text-primary" />
      </Enter>
      <Enter variant="fade-up" delay={100} duration={600}>
        <h2>
          {titleLine1}
          <br />
          {titleLine2}
        </h2>
        <p className="text-balance mx-auto text-xl mt-6">{desc}</p>
      </Enter>

      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item, i) => (
          <Enter key={item} variant="scale-up" delay={200 + i * 80} duration={500}>
            <span className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-lg font-medium text-primary-foreground">
              {item}
            </span>
          </Enter>
        ))}
      </div>
    </div>
  );
};

export default Migration;
