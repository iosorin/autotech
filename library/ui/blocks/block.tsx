import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
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
    image?: { alt: string; href: string, className?: string };
    cta?: React.ReactNode;
    groups?: Group[];
    className?: string;
    reverse?: boolean;
};

export const Block = ({
    heading,
    desc,
    items,
    image,
    cta,
    groups,
    className,
    reverse,
}: Props) => {
    // const renderCta = (link: Props["cta"]) => {
    //     if (!link) return null;
    //     return (
    //         <Button asChild variant="default" size="lg">
    //             <Link href={link.href} title={link.label}>
    //                 {link.label}
    //                 <ArrowUpRight />
    //             </Link>
    //         </Button>
    //     );
    // };

    const renderItems = (list: string[] | undefined) => {
        if (!list?.length) return null;
        return (
            <div className="flex flex-col gap-6">
                {list.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="size-6 md:size-7 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-base md:text-lg text-foreground">{item}</p>
                    </div>
                ))}
            </div>
        );
    };

    const renderDesc = (d: string | undefined) => {
        if (!d) return null;
        return <p className="text-base md:text-lg leading-relaxed">{d}</p>;
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
        <div className={cn("flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20", className, reverse ? "lg:flex-row-reverse" : "")}>
            <Enter variant="fade-right" duration={600} className="flex-1 flex flex-col items-start gap-4 lg:gap-6 order-2 lg:order-1 w-full">
                {heading}
                {renderDesc(desc)}
                {renderItems(items)}
                {renderGroups()}
                {cta}
            </Enter>

            {image &&
                <Enter variant="fade-left" delay={200} duration={700} className={cn("order-2 w-full w-auto flex-1 max-md:hidden", image.className)}>
                    <Image
                        src={image.href}
                        alt={image.alt}
                        width={500}
                        height={350}
                        className="rounded-2xl w-full h-auto"
                    />
                </Enter>
            }
        </div>
    );
};

export default Block;