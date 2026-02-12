"use client";

import { Contact } from "@ui/blocks/contact";
import { Types } from "@ui/blocks/types";

type Type = { icon: string; title: string; desc: string; bg: string; border: string };

type Props = {
  responseHeading: string;
  responseTypes: Type[];
};

export const Split = ({ responseHeading, responseTypes }: Props) => {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Contact />
        </div>
        <Types heading={responseHeading} types={responseTypes} />
    </div>
  );
};

export default Split;
