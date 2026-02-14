import type { Metadata } from "next";
import { Article } from "@ui/blocks/article";
import { Lead } from "@ui/atoms/lead";
import { privacy, seo } from "@data";

export const metadata: Metadata = {
    title: seo.pages.privacy.title,
    description: seo.pages.privacy.description,
    alternates: { canonical: "/privacy" },
};

export const Privacy = () => {
    return <section id="privacy" className="pt-header">
        <Article
            heading={<Lead title={privacy.heading} left />}
            content={privacy.content} />
    </section>
}

export default Privacy;