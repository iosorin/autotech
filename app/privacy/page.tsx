import type { Metadata } from "next";
import { Article } from "@ui/blocks/article";
import { privacy, seo } from "@data";
import { openGraph } from "@/app/utils";

export const metadata: Metadata = {
    title: seo.pages.privacy.title,
    description: seo.pages.privacy.description,
    alternates: { canonical: "/privacy" },
    openGraph: openGraph(seo.pages.privacy.title, seo.pages.privacy.description, '/privacy'),
};

export const Privacy = () => {
    return (
        <Article
            id="privacy"
            className="pt-header"
            heading={privacy.heading}
            sections={privacy.sections} />
    )
}

export default Privacy;