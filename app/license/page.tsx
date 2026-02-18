import type { Metadata } from "next";
import { Article } from "@ui/blocks/article";
import { Lead } from "@ui/atoms/lead";
import { license, seo } from "@data";

export const metadata: Metadata = {
    title: seo.pages.license.title,
    description: seo.pages.license.description,
    alternates: { canonical: "/license" },
};

export const License = () => {
    return (
        <Article
            id="license"
            className="pt-header"
            heading={<Lead title={license.heading} left tag="h1" />}
            sections={license.sections}
        />
    );
}

export default License;