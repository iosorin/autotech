import type { Metadata } from "next";
import { Article } from "@ui/blocks/article";
import { license, seo } from "@data";
import { openGraph } from "@/app/utils";

export const metadata: Metadata = {
    title: seo.pages.license.title,
    description: seo.pages.license.description,
    alternates: { canonical: "/license" },
    openGraph: openGraph(seo.pages.license.title, seo.pages.license.description, '/license'),
};

export const License = () => {
    return (
        <Article
            id="license"
            className="pt-header"
            heading={license.heading}
            sections={license.sections}
        />
    );
}

export default License;