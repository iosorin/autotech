"use client";

import { Contact } from "@ui/blocks/contact";

type Props = {
  heading: string;
};

export const Form = ({ heading }: Props) => {
  return (
    <>
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        {heading}
      </h2>
      <Contact />
    </>
  );
};

export default Form;
