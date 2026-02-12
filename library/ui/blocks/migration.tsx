"use client";

import { RefreshCw } from "lucide-react";
import { Enter } from "@ui/atoms/enter";

type Props = {
  titleLine1: string;
  titleLine2: string;
  desc: string;
  items: string[];
};

export const DataMigration = ({ titleLine1, titleLine2, desc, items }: Props) => {
  return (
    <>
      <Enter variant="scale-up" duration={600}>
          <RefreshCw className="w-10 h-10 mx-auto mb-6 text-primary" />
        </Enter>
        <Enter variant="fade-up" delay={100} duration={600}>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {titleLine1}
            <br />
            {titleLine2}
          </h2>
          <p className="text-muted-foreground mb-8 text-balance">{desc}</p>
        </Enter>

        <div className="flex flex-wrap justify-center gap-3">
          {items.map((item, i) => (
            <Enter key={item} variant="scale-up" delay={200 + i * 80} duration={500}>
              <span className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
                {item}
              </span>
            </Enter>
          ))
          }
        </div >
    </>
  );
};

export default DataMigration;
