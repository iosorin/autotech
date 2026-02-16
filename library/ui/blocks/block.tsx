import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { Icon } from "@ui/atoms/icon";
import { cn } from "@utils";

type LayoutKind = "default" | "image" | "hero" | "reverse" | 'custom';

const DESKTOP_GRID: Record<LayoutKind, string> = {
    custom: '',
    default: "md:[grid-template-areas:'list_image'_'pills_image'_'card_image'] md:grid-cols-[1fr_auto] md:grid-rows-auto",
    reverse: "md:[grid-template-areas:'image_list'_'image_pills'_'image_card'] md:grid-cols-[1fr_auto] md:grid-rows-auto",
    image: "md:[grid-template-areas:'list_image_pills'_'card_card_card'] md:grid-cols-[1fr_auto_1fr] md:grid-rows-[auto_auto]",
    hero: "md:[grid-template-areas:'list_pills_image_card'] md:grid-cols-[minmax(0,auto)_1fr_auto_1fr]",
};

const MOBILE_GRID =
    "[grid-template-areas:'list'_'image'_'pills'_'card'] grid-cols-1 grid-rows-[auto_auto_auto_auto]";

type Card = {
    title: string;
    desc: string;
    icon?: React.ComponentProps<typeof Icon>;
};

type Tags = {
    title?: string;
    tagClassName?: string;
    items: (string | { label: string; icon?: React.ComponentProps<typeof Icon> })[];
};

type Props = {
    list?: { title?: string; desc?: string; items?: string[]; }[];
    image?: { src?: string; href?: string; alt: string; className?: string };
    cta?: React.ReactNode;
    tags?: Tags[];
    card?: Card;
    className?: string;
    layout?: LayoutKind;
};


export const Block = ({
    list,
    image,
    cta,
    tags,
    card,
    className,
    layout = "default",
}: Props) => {
    const hero = layout === "hero";
    const centerImage = layout === "image";
    const custom = layout === "custom";

    const renderDesc = (d: string | undefined) => {
        if (!d) return null;
        return <p className="text-base md:text-lg leading-relaxed">{d}</p>;
    };

    const renderTag = (tag: Tags['items'][number], tagClassName?: string) => {
        if (typeof tag === 'object') {
            return (
                <span
                    key={tag.label}
                    className={cn("inline-flex items-center shadow-sm gap-2 rounded-full px-3 py-2 md:px-4 md:py-3 text-sm w-fit bg-white md:whitespace-pre-line max-w-full", tagClassName ?? "bg-muted")}
                >
                    {tag.icon && <Icon {...tag.icon} className="flex-shrink-0" />}
                    <span className="text-base md:text-lg truncate">{tag.label}</span>
                </span>
            );
        }
        return (
            <span key={tag} className={cn("rounded-full px-4 py-1.5", tagClassName ?? "bg-muted", !hero && "text-sm")}>
                {tag}
            </span>
        );
    };

    const renderImage = (heroStyle = false) => {
        const imageSrc = image && (image.src ?? image.href);
        if (!imageSrc) return null;
        // const imgClass = heroStyle ? "rounded-3xl w-full h-auto max-w-xs lg:max-w-md" : "rounded-2xl w-full h-auto";
        return (
            <Enter variant="scale-up" delay={heroStyle ? 150 : 200} duration={heroStyle ? 800 : 700} className={cn("w-full", image.className)}>
                <Image
                    src={imageSrc}
                    alt={image.alt}
                    width={500}
                    height={heroStyle ? 600 : 350}
                    className="rounded-2xl w-full h-auto max-md:max-h-[45vh] max-md:w-auto mx-auto"
                    priority={heroStyle}
                />
            </Enter>
        );
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

    return (
        <div className={cn(
            "block-grid grid gap-6 lg:gap-8 lg:gap-20 items-center",
            layout === "hero" && "lg:gap-0",
            !custom && MOBILE_GRID,
            DESKTOP_GRID[layout],
            className
        )}>
            <div className="flex flex-col gap-8" style={{ gridArea: "list" }}>
                {list && list.length > 0 &&
                    <>
                        {centerImage ? (
                            <Enter variant="fade-right" duration={600}>
                                {renderItems(list.flatMap((e) => e.items ?? []), false)}
                            </Enter>
                        ) : (
                            <div className="flex flex-col gap-8">
                                {list.map((entry, index) => (
                                    <div key={index} className="flex flex-col gap-6">
                                        {entry.title ? <h2>{entry.title}</h2> : null}
                                        {renderDesc(entry.desc)}
                                        {renderItems(entry.items, true)}
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                }

                {!hero && cta}
            </div>

            <div className="flex flex-wrap flex-col gap-1 content-start max-w-full" style={{ gridArea: "pills" }}>
                {tags &&
                    <div className={cn("flex flex-col gap-8 max-w-full", hero && "gap-3")}>{tags.map((t, i) =>
                        <div
                            key={t.title ?? i}
                            className={cn("max-w-full border-b last:border-b-0 pb-6", layout === "default" && "border-border")}
                        >
                            {t.title && (
                                <h5 className={cn("mb-3 text-foreground", layout === "default" && "font-medium")}>{t.title}</h5>
                            )}
                            <div className="flex flex-wrap gap-3.5 max-w-full">
                                {t.items.map((item) => renderTag(item, t.tagClassName))}
                            </div>
                        </div>)}</div>
                }

                {hero && cta && (
                    <Enter variant="fade-right" delay={500} duration={500} className="w-full">
                        {cta}
                    </Enter>
                )}
            </div>

            <div className="flex justify-center items-center" style={{ gridArea: "image" }}>
                {renderImage(hero)}
            </div>

            <div className="flex justify-center items-center" style={{ gridArea: "card" }}>
                {card &&
                    <Enter variant="fade-left" delay={300} duration={600} className="w-full">
                        <div className="rounded-2xl bg-gradient-white p-4 md:p-6 center flex-col text-center gap-3 md:gap-4">
                            {card.icon && <Icon {...card.icon} className={cn("size-10 text-primary", card.icon.className)} />}
                            <h3 className="mb-1">{card.title}</h3>
                            <p className="text-muted-foreground">{card.desc}</p>
                        </div>
                    </Enter>
                }
            </div>
        </div>
    );
};

export default Block;