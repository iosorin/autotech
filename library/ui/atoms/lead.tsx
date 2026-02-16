import { cn } from "@utils";
import { Inline } from "@ui/atoms/inline";

type Props = {
  title: React.ReactNode;
  label?: React.ReactNode;
  desc?: React.ReactNode;
  minor?: React.ReactNode;
  titleFirst?: boolean;
  className?: string;
  left?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  primary?: boolean;
};

export const Lead = ({ title, label, desc, minor, titleFirst, className, left, tag = "h2", primary }: Props) => {
  const renderTitle = () => {
    const Tag = tag;
    if (!title) return null;
    return <Tag>{title}</Tag>;
  };
  const renderLabel = () => label ? <p className={cn("text-xl font-medium", primary ? "text-primary" : "")}><Inline text={label} /></p> : null;
  const renderDesc = () => desc ? <p className="text-lg mx-auto"><Inline text={desc} /></p> : null;
  const renderMinor = () => minor ? <p className="text-lg text-muted-foreground"><Inline text={minor} /></p> : null;

  if (!title && !label) return null;

  return (
    <div className={cn("flex flex-col gap-4 mb-6", left ? "text-left" : "text-center", className)}>
      {titleFirst ? renderTitle() : renderLabel()}
      {titleFirst ? renderLabel() : renderTitle()}
      {renderDesc()}
      {renderMinor()}
    </div>
  );
};

export default Lead;
