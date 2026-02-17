import { cn } from "@utils";
import { Icon } from "@ui/atoms/icon";
import { Inline } from "@ui/atoms/inline";

type Props = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: React.ReactNode;
  label?: React.ReactNode;
  desc?: React.ReactNode;
  minor?: React.ReactNode;
  icon?: React.ComponentProps<typeof Icon>;
  titleFirst?: boolean;
  left?: boolean;
  primary?: boolean;
  className?: string;
};

export const Lead = ({ tag = "h2", title, label, desc, minor, icon, titleFirst, className, left, primary, }: Props) => {
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
    <div className={cn("flex flex-col gap-4", left ? "text-left" : "text-center", className)}>
      <Icon {...icon} />
      {titleFirst ? renderTitle() : renderLabel()}
      {titleFirst ? renderLabel() : renderTitle()}
      {renderDesc()}
      {renderMinor()}
    </div>
  );
};

export default Lead;
