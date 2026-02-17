import Image from "next/image";
import { Enter } from "@ui/atoms/enter";
import { Card } from "@ui/atoms/card";
import { Checklist } from "@ui/atoms/checklist";
import { Tags } from "@ui/atoms/tags";
import { cn } from "@utils";

type LayoutKind = "default" | "image" | "hero" | "reverse" | "custom";

const DESKTOP_GRID: Record<LayoutKind, string> = {
    custom: "",
    default: "gap-8 grid grid-cols-2 grid-flow-col gap-6",
    reverse: "grid grid-cols-2 grid-flow-col gap-6",
    image: "[grid-template-areas:'list_image_pills'_'card_card_card'] grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto]",
    hero: "[grid-template-areas:'list_pills_image_card'] grid-cols-[minmax(0,auto)_1fr_auto_1fr]",
};

const MOBILE_GRID =
    "max-md:[grid-template-areas:'list'_'image'_'pills'_'card'] max-md:grid-cols-1 max-md:grid-rows-[auto_auto_auto_auto]";

type Props = {
    list?: React.ComponentProps<typeof Checklist>[];
    image?: React.ComponentProps<typeof Image>;
    cta?: React.ReactNode;
    tags?: React.ComponentProps<typeof Tags>;
    card?: React.ComponentProps<typeof Card>;
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
    const custom = layout === "custom";
    const areas = ["default", "reverse"].includes(layout)
        ? { list: "", pills: "", image: "", card: "" }
        : { list: "list", pills: "pills", image: "image", card: "card" };

    return (
        <div
            className={cn(
                "grid",
                layout === "hero" && "lg:gap-0",
                !custom && MOBILE_GRID,
                DESKTOP_GRID[layout],
                className
            )}
        >
            {list && list.length > 0 && (
                <div className="flex flex-col gap-8" style={{ gridArea: areas.list }}>
                    <div className="flex flex-col gap-8">
                        {list.map((entry, index) => (
                            <Enter variant="fade-right" duration={600} key={entry.title ?? index}>
                                <Checklist title={entry.title} desc={entry.desc} items={entry.items ?? []} />
                            </Enter>
                        ))}
                    </div>

                    {!hero && cta}
                </div>
            )}

            {tags && (
                <div className="flex flex-wrap flex-col max-w-full" style={{ gridArea: areas.pills }}>
                    <Enter variant="fade-up" delay={300} duration={600} className="w-full center" style={{ gridArea: areas.pills }}>
                        <Tags {...tags} />
                    </Enter>

                    {hero && cta && (
                        <Enter variant="fade-right" delay={500} duration={500} className="w-full">
                            {cta}
                        </Enter>
                    )}
                </div>
            )}

            {image && image.src && (
                <Enter
                    variant="scale-up"
                    delay={180}
                    duration={700}
                    className={cn("w-full center", image.className)}
                    style={{ gridArea: areas.image }}
                >
                    <Image
                        width={500}
                        height={350}
                        {...image}
                        className="rounded-2xl w-full h-auto max-md:max-h-[45vh] max-md:w-auto mx-auto"
                    />
                </Enter>
            )}

            {card && (
                <Enter variant="fade-left" delay={300} duration={600} className="w-full center" style={{ gridArea: areas.card }}>
                    <Card title={card.title} desc={card.desc} icon={card.icon} />
                </Enter>
            )}
        </div>
    );
};

export default Block;
