import { CheckCircle2 } from "lucide-react";
import { cn } from "@utils";

type Props = {
    title?: string;
    desc?: string;
    items?: string[];
    className?: string;
};

export const Checklist = ({ title, desc, items, className }: Props) => {
    return <div className="flex flex-col gap-6">
        {title ? <h2>{title}</h2> : null}
        {desc ? <p className="text-base md:text-lg leading-relaxed">{desc}</p> : null}
        {items && items.length > 0 && (
            <div className={cn("flex flex-col gap-7", className)}>
                {items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className={cn("flex-shrink-0 size-7 text-primary mt-0.5")} />
                        <p className={cn("text-lg text-foreground")}>{item}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
};

export default Checklist;
