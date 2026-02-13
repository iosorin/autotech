"use client";

import Image from "next/image";
import { Enter } from "@ui/atoms/enter";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@utils";

type Group = {
  title: string;
  tags: string[];
  tagClassName?: string;
};

type Props = {
  list: string[];
  choice: Group;
  filter: Group;
  image: { alt: string; href: string; };
};

export const Columns = ({
  list,
  choice,
  filter,
  image,
}: Props) => {
  const renderGroup = (group: Group) => {
    return (
      <div className="pb-6 border-b last:border-b-0">
        <h5 className="mb-3">{group.title}</h5>
        <div className="flex flex-wrap gap-2">
          {group.tags.map((tag) => (
            <span
              key={tag}
              className={cn("bg-muted rounded-full px-4 py-1.5", group.tagClassName)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10">
      {list && (
        <Enter variant="fade-right" duration={600} className="lg:w-1/3">
          <div className="flex flex-col gap-8">
            {list.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="size-7 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Enter>
      )}

      {image && (
        <Enter variant="scale-up" delay={150} duration={700} className="lg:w-1/3 flex justify-center">
          <Image
            src={image.href}
            alt={image.alt}
            width={280}
            height={500}
            className="rounded-3xl w-auto h-auto"
          />
        </Enter>
      )}

      <Enter variant="fade-left" delay={200} duration={600} className="lg:w-1/3" >
        <div className="flex flex-col gap-8">
          {renderGroup(choice)}
          {renderGroup(filter)}
        </div>
      </Enter >
    </div >
  );
};

export default Columns;
