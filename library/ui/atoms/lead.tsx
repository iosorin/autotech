import { cn } from "@utils";

type Props = {
  title: string;
  title2?: string;
  label?: string;
  hint?: React.ReactNode;
  titleFirst?: boolean;
  className?: string;
};

export const Lead = ({ title, title2, label, hint, titleFirst, className }: Props) => {
  const renderTitle = () => {
    if (!title) return null;
    return <h2 className="text-3xl md:text-5xl font-bold text-foreground my-2">
      {title}
      {title2 && <> <br /> {title2}</>}
    </h2>;
  };
  const renderLabel = () => label ? <p className="font-medium">{label}</p> : null;
  const renderHint = () => hint ? <p className="mx-auto mt-2">{hint}</p> : null;

  return (
    <div className={cn("text-center mb-10", className)}>
      {titleFirst ? renderTitle() : renderLabel()}
      {titleFirst ? renderLabel() : renderTitle()}
      {renderHint()}
    </div>
  );
};

export default Lead;
