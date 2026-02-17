import { cn } from "@utils";
import { Icon } from "./icon";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
    "rounded-2xl p-4 md:px-6 md:py-8 flex items-center",
    {
        variants: {
            variant: {
                default: "flex-col text-center gap-3 md:gap-4",
                row: "flex-row gap-4",
                cover: "flex-col gap-3 overflow-hidden !p-0",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

type Props = VariantProps<typeof cardVariants> & {
    title?: string;
    desc?: string;
    icon?: React.ComponentProps<typeof Icon>;
    image?: string;
    link?: React.ComponentProps<typeof Link>;
    className?: string;
    white?: boolean;
};

export const Card = ({ title, desc, icon, image, link, className, white, variant }: Props) => {
    const classes = cardVariants({ variant, className });

    const content = (
        <>
            {image && variant === 'cover' && (
                <div
                    className="w-full h-48 bg-no-repeat bg-center bg-cover"
                    style={{ backgroundImage: `url(${image})` }}
                />
            )}
            {icon && (
                <Icon
                    {...icon}
                    className={cn(
                        "size-10 shrink-0",
                        white ? "text-white" : "text-primary",
                        icon.className
                    )}
                />
            )}
            <div className={cn("flex flex-col gap-2", variant === 'cover' && "p-4 md:p-6")}>
                {title && (
                    <h3 className={cn(white ? "text-white" : "")}>{title}</h3>
                )}
                {desc && (
                    <p className={cn("text-lg", white ? "text-white" : "text-muted-foreground")}>{desc}</p>
                )}
            </div>
        </>
    );

    if (link) {
        return (
            <Link {...link} className={cn(link.className, classes)}>
                {content}
            </Link>
        );
    }

    return <div className={classes}>{content}</div>;
};

export default Card;