import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { cn } from "@utils";

type ListEntry = {
    title?: string;
    desc?: string;
    items?: string[];
};

type Group = {
    title: string;
    tags: string[];
    tagClassName?: string;
};

type Props = {
    list: ListEntry[];
    image?: { src?: string; href?: string; alt: string; className?: string };
    cta?: React.ReactNode;
    groups?: Group[];
    className?: string;
    reverse?: boolean;
    layout?: "default" | "center-image";
};

const renderChecklist = (items: string[] | undefined, compact = false) => {
    if (!items?.length) return null;
    const gap = compact ? "gap-6" : "gap-8";
    const iconSize = compact ? "size-6 md:size-7" : "size-7";
    const textClass = compact ? "text-base md:text-lg" : "text-lg";
    return (
        <div className={cn("flex flex-col", gap)}>
            {items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className={cn(iconSize, "text-primary mt-0.5")} />
                    <p className={cn(textClass, "text-foreground")}>{item}</p>
                </div>
            ))}
        </div>
    );
};

const renderDesc = (d: string | undefined) => {
    if (!d) return null;
    return <p className="text-base md:text-lg leading-relaxed">{d}</p>;
};

export const Block = ({
    list,
    image,
    cta,
    groups,
    className,
    reverse,
    layout = "default",
}: Props) => {
    const centerImage = layout === "center-image";
    const renderGroup = (group: Group) => (
        <div
            key={group.title}
            className={cn("pb-6 border-b last:border-b-0", !centerImage && "border-border")}
        >
            <h5 className={cn("mb-3 text-foreground", !centerImage && "font-medium")}>{group.title}</h5>
            <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                    <span
                        key={tag}
                        className={cn("rounded-full px-4 py-1.5", group.tagClassName ?? "bg-muted", !centerImage && "text-sm")}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );

    const renderGroups = () => {
        if (!groups?.length) return null;
        return <div className="flex flex-col gap-8">{groups.map((g) => renderGroup(g))}</div>;
    };

    const renderList = () => (
        <div className="flex flex-col gap-8">
            {list.map((entry, index) => (
                <div key={index} className="flex flex-col gap-6">
                    {entry.title ? <h2 className="md:whitespace-pre-line">{entry.title}</h2> : null}
                    {renderDesc(entry.desc)}
                    {renderChecklist(entry.items, true)}
                </div>
            ))}
        </div>
    );

    const renderImage = () => {
        const imageSrc = image && (image.src ?? image.href);

        if (!imageSrc) return null;

        return (
            <Enter variant="scale-up" delay={200} duration={700} className={cn("w-full w-auto flex-1", image.className)}>
                <Image
                    src={imageSrc}
                    alt={image.alt}
                    width={500}
                    height={350}
                    className="rounded-2xl w-full h-auto"
                />
            </Enter>
        );
    };


    if (centerImage) {
        const allItems = list.flatMap((e) => e.items ?? []);
        return (
            <div className={cn("flex flex-col lg:flex-row items-center gap-10", className)}>
                {allItems.length > 0 && (
                    <Enter variant="fade-right" duration={600} className="lg:w-1/3">
                        <div className="flex flex-col gap-8">
                            {renderChecklist(allItems, false)}
                            {cta}
                        </div>
                    </Enter>
                )}
                {renderImage()}
                {groups && groups.length > 0 && (
                    <Enter variant="fade-left" delay={200} duration={600} className="lg:w-1/3">
                        <div className="flex flex-col gap-8">{renderGroups()}</div>
                    </Enter>
                )}
            </div>
        );
    }

    return (
        <div className={cn("flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20", className, reverse ? "lg:flex-row-reverse" : "")}>
            <Enter variant="fade-right" duration={600} className="flex-1 flex flex-col items-start gap-3 order-2 lg:order-1 w-full">
                {renderList()}
                {renderGroups()}
                {cta}
            </Enter>

            {renderImage()}
        </div>
    );
};

export default Block;
