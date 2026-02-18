import { cn } from "@utils";

type Props = {
  title: React.ReactNode;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  titleFirst?: boolean;
  className?: string;
  left?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Lead = ({ title, label, hint, titleFirst, className, left, tag = "h2" }: Props) => {
  const renderTitle = () => {
    const Tag = tag;
    if (!title) return null;
    return <Tag>{title}</Tag>;
  };
  const renderLabel = () => label ? <p className="text-lg font-medium">{label}</p> : null;
  const renderHint = () => hint ? <p className="mx-auto mt-2">{hint}</p> : null;

  if (!title && !label) return null;

  return (
    <div className={cn("flex flex-col gap-2 md:mb-10 mb-5", left ? "text-left" : "text-center", className)}>
      {titleFirst ? renderTitle() : renderLabel()}
      {titleFirst ? renderLabel() : renderTitle()}
      {renderHint()}
    </div>
  );
};

export default Lead;
