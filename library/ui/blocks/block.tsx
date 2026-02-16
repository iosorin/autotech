import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { Icon } from "@ui/atoms/icon";
import { cn } from "@utils";

type ListEntry = {
    title?: string;
    desc?: string;
    items?: string[];
};

type PillTag = string | { label: string; icon?: React.ComponentProps<typeof Icon> };

type PillGroup = {
    title?: string;
    tagClassName?: string;
    tags: PillTag[];
};

type Card = {
    title: string;
    desc: string;
    icon?: React.ComponentProps<typeof Icon>;
};

type Props = {
    list: ListEntry[];
    image?: { src?: string; href?: string; alt: string; className?: string };
    cta?: React.ReactNode;
    pills?: PillGroup[];
    card?: Card;
    className?: string;
    reverse?: boolean;
    layout?: "default" | "center-image" | "hero";
};

const renderItems = (items: string[] | undefined, compact = false) => {
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

const isPillWithIcon = (tag: PillTag): tag is { label: string; icon?: React.ComponentProps<typeof Icon> } =>
    typeof tag === "object";

export const Block = ({
    list,
    image,
    cta,
    pills,
    card,
    className,
    reverse,
    layout = "default",
}: Props) => {
    const centerImage = layout === "center-image";
    const hero = layout === "hero";

    const renderPillTag = (tag: PillTag, tagClassName?: string) => {
        if (isPillWithIcon(tag)) {
            return (
                <span
                    key={tag.label}
                    className={cn("inline-flex items-center shadow-sm gap-2 rounded-full px-3 py-2 md:px-4 md:py-2.5 text-sm w-fit bg-white whitespace-nowrap max-w-full", tagClassName ?? "bg-muted")}
                >
                    {tag.icon && <Icon {...tag.icon} className="flex-shrink-0" />}
                    <span className="text-base md:text-lg truncate">{tag.label}</span>
                </span>
            );
        }
        return (
            <span key={tag} className={cn("rounded-full px-4 py-1.5", tagClassName ?? "bg-muted", !centerImage && "text-sm")}>
                {tag}
            </span>
        );
    };

    const renderPillGroup = (group: PillGroup, index: number) => (
        <div
            key={group.title ?? index}
            className={cn("pb-6 border-b last:border-b-0", !centerImage && !hero && "border-border")}
        >
            {group.title && (
                <h5 className={cn("mb-3 text-foreground", !centerImage && !hero && "font-medium")}>{group.title}</h5>
            )}
            <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => renderPillTag(tag, group.tagClassName))}
            </div>
        </div>
    );

    const renderPills = () => {
        if (!pills?.length) return null;
        return <div className={cn("flex flex-col gap-8", hero && "gap-3")}>{pills.map((p, i) => renderPillGroup(p, i))}</div>;
    };

    const renderList = () => (
        <div className="flex flex-col gap-8">
            {list.map((entry, index) => (
                <div key={index} className="flex flex-col gap-6">
                    {entry.title ? <h2 className="md:whitespace-pre-line">{entry.title}</h2> : null}
                    {renderDesc(entry.desc)}
                    {renderItems(entry.items, true)}
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

    const renderCard = () => {
        if (!card) return null;
        return (
            <Enter variant="fade-left" delay={300} duration={600} className="flex-1 w-full">
                <div className="rounded-2xl bg-gradient-white p-4 md:p-6 center flex-col text-center gap-3 md:gap-4">
                    {card.icon && <Icon {...card.icon} className={cn("size-10 text-primary", card.icon.className)} />}
                    <h3 className="font-bold text-foreground mb-1 max-w-[235px]">{card.title}</h3>
                    <p className="text-base md:text-lg text-muted-foreground max-w-[260px]">{card.desc}</p>
                </div>
            </Enter>
        );
    };

    if (hero) {
        const heroPills = pills?.[0]?.tags ?? [];
        return (
            <div className={cn("flex flex-col lg:flex-row gap-6 lg:gap-0 items-center", className)}>
                <div className="flex flex-wrap gap-3 flex-1 justify-center lg:justify-start order-1">
                    {heroPills.map((tag, i) => (
                        <Enter key={isPillWithIcon(tag) ? tag.label : tag} variant="fade-right" delay={i * 80} duration={500}>
                            {renderPillTag(tag, pills?.[0]?.tagClassName ?? "bg-white shadow-sm")}
                        </Enter>
                    ))}
                    {cta && (
                        <Enter variant="fade-right" delay={500} duration={500} className="mt-2 w-full lg:w-auto">
                            {cta}
                        </Enter>
                    )}
                </div>
                <div className="flex-1 order-2">{renderImage()}</div>
                <div className="flex-1 order-3">{renderCard()}</div>
            </div>
        );
    }

    if (centerImage) {
        const allItems = list.flatMap((e) => e.items ?? []);
        return (
            <div className={cn("flex flex-col lg:flex-row items-center gap-10", className)}>
                {allItems.length > 0 && (
                    <Enter variant="fade-right" duration={600} className="lg:w-1/3">
                        <div className="flex flex-col gap-8">
                            {renderItems(allItems, false)}
                            {cta}
                        </div>
                    </Enter>
                )}
                {renderImage()}
                {pills && pills.length > 0 && (
                    <Enter variant="fade-left" delay={200} duration={600} className="lg:w-1/3">
                        <div className="flex flex-col gap-8">{renderPills()}</div>
                    </Enter>
                )}
            </div>
        );
    }

    return (
        <div className={cn("flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20", className, reverse ? "lg:flex-row-reverse" : "")}>
            <Enter variant="fade-right" duration={600} className="flex-1 flex flex-col items-start gap-3 order-2 lg:order-1 w-full">
                {renderList()}
                {renderPills()}
                {cta}
            </Enter>
            {renderImage()}
        </div>
    );
};

export default Block;
