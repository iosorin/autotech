import Icon from "./icon";
import { cn } from "@utils";

type ITags = {
    tags?: { title?: string; itemClassName?: string; items?: ({ label: string; icon?: React.ComponentProps<typeof Icon> })[] }[];
    className?: string;
};

export const Tags = ({ tags, className, ...props }: ITags) => {
    if (!tags?.length) return null;

    return <div className={cn("flex flex-col gap-8 max-w-full", className)} {...props}>
        {
            tags.map((t, i) =>
                <div
                    key={t.title ?? i}
                    className={cn("max-w-full border-b border-border last:border-b-0")}
                >
                    {t.title && (
                        <h5>{t.title}</h5>
                    )}

                    {t.items && t.items.length > 0 && (
                        <div className="flex flex-wrap gap-3.5 max-w-full">
                            {t.items.map((tag) => <span
                                key={tag.label}
                                className={cn("inline-flex items-center shadow-sm gap-2 rounded-full px-3 py-2 md:px-4 md:py-3 text-sm w-fit bg-white md:whitespace-pre-line max-w-full", t.itemClassName ?? "bg-muted")}
                            >
                                {tag.icon && <Icon {...tag.icon} className="flex-shrink-0" />}
                                <span className="text-base md:text-lg truncate">{tag.label}</span>
                            </span>)}
                        </div>
                    )}
                </div>
            )}
    </div>
}

export default Tags