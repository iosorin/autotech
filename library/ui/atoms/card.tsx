import { cn } from "@utils";
import { Icon } from "./icon";
import Link from "next/link";

type Props = {
    title: string;
    desc: string;
    icon?: React.ComponentProps<typeof Icon>;
    image?: string;
    link?: React.ComponentProps<typeof Link>;
    className?: string;
};

const cardClass = (image?: string, className?: string) =>
    cn(
        "rounded-2xl p-4 md:py-8 center flex-col text-center gap-3 md:gap-4",
        image ? "bg-gradient-gray-white overflow-hidden" : "bg-gradient-white",
        className
    );

export const Card = ({ title, desc, icon, image, link, className }: Props) => {
    const content = (
        <>
            {image && (
                <div
                    className="w-full h-44 bg-no-repeat bg-left bg-contain"
                    style={{ backgroundImage: `url(${image})` }}
                />
            )}
            {icon && <Icon {...icon} className={cn("size-10 text-primary", icon.className)} />}
            <h3 className="mb-1">{title}</h3>
            <p className="text-lg text-muted-foreground">{desc}</p>
        </>
    );

    if (link) {
        return (
            <Link {...link} className={cn(link.className, cardClass(image, className))}>
                {content}
            </Link>
        );
    }

    return <div className={cardClass(image, className)}>{content}</div>;
};
