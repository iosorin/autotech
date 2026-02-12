"use client";

type Props = {
  title: string;
  subtitle: string;
  labelFirst?: boolean;
};

export const Intro = ({ title, subtitle, labelFirst = false }: Props) => {
  return (
    <>
      {labelFirst ? (
        <>
          <p className="mb-2 text-center text-sm text-muted-foreground">{subtitle}</p>
          <h1 className="mb-12 text-center text-4xl font-bold text-foreground md:text-5xl">
            {title}
          </h1>
        </>
      ) : (
        <>
          <h1 className="mb-4 text-center text-4xl font-bold text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="mb-12 text-center text-muted-foreground">{subtitle}</p>
        </>
      )}
    </>
  );
};

export default Intro;
