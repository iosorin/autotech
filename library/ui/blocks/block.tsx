"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import Link from "next/link";
import { Button } from "../atoms/button";
import { cn } from "@utils";

type Item = {
    heading: string;
    desc?: string;
    items?: string[];
    image?: { alt: string; href: string; };
    cta?: { label: string; href: string; };
};

type Props = {
    heading: string;
    desc?: string;
    items?: string[];
    image?: { alt: string; href: string; };
    cta?: { label: string; href: string; };
    className?: string;
};

export const Block = ({
    heading,
    desc,
    items,
    image,
    cta,
    className,
}: Props) => {
    const renderCta = (cta: Item['cta']) => {
        if (!cta) return null;
        return (
            <Button asChild variant="default" size="lg">
                <Link href={cta.href}>
                    {cta.label}
                    <ArrowUpRight />
                </Link>
            </Button>
        );
    };
    const renderImage = (image: Item['image']) => {
        if (!image) return null;
        return (
            <Enter variant="fade-left" delay={200} duration={700} className="flex-1">
                <Image
                    src={image.href}
                    alt={image.alt}
                    width={500}
                    height={350}
                    className="rounded-2xl w-full h-auto"
                />
            </Enter>
        );
    };
    const renderItems = (items: Item['items']) => {
        if (!items) return null;
        return (
            <div className="flex flex-col gap-6">
                {items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="size-7 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-lg text-foreground">{item}</p>
                    </div>
                ))}
            </div>
        );
    };

    const renderDesc = (desc: Item['desc']) => {
        if (!desc) return null;
        return (
            <p className="text-lg leading-relaxed">{desc}</p>
        );
    };

    return (
        <div className={cn("flex justify-between items-center gap-20", className)}>
            <Enter variant="fade-right" duration={600} className="flex-1 flex flex-col items-start gap-8">
                <h2>{heading}</h2>
                {renderDesc(desc)}
                {renderItems(items)}
                {renderCta(cta)}
            </Enter>
            {renderImage(image)}
        </div>
    );
};

export default Block;
