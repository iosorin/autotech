import type { Metadata } from "next";
import { Article } from "@ui/blocks/article";
import { Lead } from "@ui/atoms/lead";
import { license, seo } from "@data";

export const metadata: Metadata = {
    title: seo.pages.license.title,
    description: seo.pages.license.description,
    alternates: { canonical: "/license" },
};

export default function LicensePage() {
    return (
        <section id="license" className="pt-header">
            <Article
                heading={<Lead title={license.heading} left tag="h1" />}
                content={license.content}
            />
        </section>
    );
}
