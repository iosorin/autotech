import { cn } from "@utils";

type Props = {
  title: React.ReactNode;
  title2?: React.ReactNode;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  titleFirst?: boolean;
  className?: string;
  left?: boolean;
};

export const Lead = ({ title, title2, label, hint, titleFirst, className, left }: Props) => {
  const renderTitle = () => {
    if (!title) return null;
    return <h2 className="text-3xl md:text-5xl font-bold text-foreground my-2">
      {title}
      {title2 && <> <br /> {title2}</>}
    </h2>;
  };
  const renderLabel = () => label ? <p className="text-lg font-medium">{label}</p> : null;
  const renderHint = () => hint ? <p className="mx-auto mt-2">{hint}</p> : null;

  return (
    <div className={cn("mb-10", left ? "text-left" : "text-center", className)}>
      {titleFirst ? renderTitle() : renderLabel()}
      {titleFirst ? renderLabel() : renderTitle()}
      {renderHint()}
    </div>
  );
};

export default Lead;
