import { cn } from "@utils";

type Props = {
  title: React.ReactNode;
  label?: React.ReactNode;
  desc?: React.ReactNode;
  titleFirst?: boolean;
  className?: string;
  left?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  primary?: boolean;
};

export const Lead = ({ title, label, desc, titleFirst, className, left, tag = "h2", primary }: Props) => {
  const renderTitle = () => {
    const Tag = tag;
    if (!title) return null;
    return <Tag className="md:whitespace-pre-line">{title}</Tag>;
  };
  const renderLabel = () => label ? <p className={cn("text-xl font-medium", primary ? "text-primary" : "")}>{label}</p> : null;
  const renderDesc = () => desc ? <p className="mx-auto md:whitespace-pre-line">{desc}</p> : null;

  if (!title && !label) return null;

  return (
    <div className={cn("flex flex-col gap-4 mb-6", left ? "text-left" : "text-center", className)}>
      {titleFirst ? renderTitle() : renderLabel()}
      {titleFirst ? renderLabel() : renderTitle()}
      {renderDesc()}
    </div>
  );
};

export default Lead;
