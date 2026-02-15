import { cn } from "@utils";

type Props = {
  title: React.ReactNode;
  title2?: React.ReactNode;
  label?: React.ReactNode;
  desc?: React.ReactNode;
  titleFirst?: boolean;
  className?: string;
  left?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Lead = ({ title, title2, label, desc, titleFirst, className, left, tag = "h2" }: Props) => {
  const renderTitle = () => {
    const Tag = tag;
    if (!title) return null;
    return <Tag className="md:whitespace-pre-line">{title}</Tag>;
  };
  const renderLabel = () => label ? <p className="text-xl text-primary font-medium">{label}</p> : null;
  const renderDesc = () => desc ? <p className="mx-auto md:whitespace-pre-line">{desc}</p> : null;

  if (!title && !label) return null;

  return (
    <div className={cn("flex flex-col gap-4 mb-10", left ? "text-left" : "text-center", className)}>
      {titleFirst ? renderTitle() : renderLabel()}
      {titleFirst ? renderLabel() : renderTitle()}
      {renderDesc()}
    </div>
  );
};

export default Lead;
