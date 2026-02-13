"use client";

type Props = {
  title: string;
  label?: string;
  hint?: React.ReactNode;
  titleFirst?: boolean;
};

export const Lead = ({ title, label, hint, titleFirst }: Props) => {
  const renderLabel = () => label ? <p className="font-medium">{label}</p> : null;
  const renderTitle = () => title ? <h1 className="text-3xl md:text-5xl font-bold text-foreground my-2">{title}</h1> : null;
  const renderHint = () => hint ? <p className="mx-auto mt-2 max-w-lg text-muted-foreground">{hint}</p> : null;

  return (
    <div className="text-center mb-10">
      {titleFirst ? renderTitle() : renderLabel()}
      {titleFirst ? renderLabel() : renderTitle()}
      {renderHint()}
    </div>
  );
};

export default Lead;
