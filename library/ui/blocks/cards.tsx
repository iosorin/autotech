import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import Link from "next/link";
import { Button } from "../atoms/button";
import { cn } from "@utils";

type Group = {
    title: string;
    tags: string[];
    tagClassName?: string;
};

type Props = {
    heading: React.ReactNode;
    desc?: string;
    items?: string[];
    image?: { alt: string; href: string };
    cta?: { label: string; href: string };
    groups?: Group[];
    className?: string;
};

export const Cards = ({
    heading,
    desc,
    items,
    image,
    cta,
    groups,
    className,
}: Props) => {
    const renderCta = (link: Props["cta"]) => {
        if (!link) return null;
        return (
            <Button asChild variant="default" size="lg">
                <Link href={link.href}>
                    {link.label}
                    <ArrowUpRight />
                </Link>
            </Button>
        );
    };

    const renderImage = (img: Props["image"]) => {
        if (!img) return null;
        return (
            <Enter variant="fade-left" delay={200} duration={700} className="flex-1">
                <Image
                    src={img.href}
                    alt={img.alt}
                    width={500}
                    height={350}
                    className="rounded-2xl w-full h-auto"
                />
            </Enter>
        );
    };

    const renderItems = (list: string[] | undefined) => {
        if (!list?.length) return null;
        return (
            <div className="flex flex-col gap-6">
                {list.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="size-7 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-lg text-foreground">{item}</p>
                    </div>
                ))}
            </div>
        );
    };

    const renderDesc = (d: string | undefined) => {
        if (!d) return null;
        return <p className="text-lg leading-relaxed">{d}</p>;
    };

    const renderGroup = (group: Group) => (
        <div key={group.title} className="pb-6 border-b border-border last:border-b-0">
            <h5 className="mb-3 font-medium text-foreground">{group.title}</h5>
            <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                    <span
                        key={tag}
                        className={cn("rounded-full px-4 py-1.5 text-sm", group.tagClassName ?? "bg-muted")}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );

    const renderGroups = () => {
        if (!groups?.length) return null;
        return <div className="flex flex-col gap-8">{groups.map(renderGroup)}</div>;
    };

    return (
        <div className={cn("flex justify-between items-center gap-20", className)}>
            <Enter variant="fade-right" duration={600} className="flex-1 flex flex-col items-start gap-8">
                {heading}
                {renderDesc(desc)}
                {renderItems(items)}
                {renderGroups()}
                {renderCta(cta)}
            </Enter>
            {renderImage(image)}
        </div>
    );
};

export default Cards;