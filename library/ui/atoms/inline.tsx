import Link from "next/link";
import { parseInline } from "@utils/inline";
import { cn } from "@utils";

type Props = {
    text: React.ReactNode;
    className?: string;
    linkClassName?: string;
};

export const Inline = ({ text, className = "", linkClassName = "" }: Props) => {
    if (!text) return null;
    if (typeof text !== "string") return text;

    const segments = parseInline(text);

    if (segments.length === 1 && segments[0].type === "text") return segments[0].value;

    return (
        <span className={cn("inline-flex flex-wrap items-center gap-x-1", className)}>
            {segments.map((seg, i) =>
                seg.type === "text" ? (
                    seg.value
                ) : (
                    <Link
                        key={i}
                        href={seg.href}
                        className={cn("text-primary underline hover:text-primary/80", linkClassName)}
                        title={seg.label}
                    >
                        «{seg.label}»
                    </Link>
                )
            )}
        </span>
    );
};

export default Inline;