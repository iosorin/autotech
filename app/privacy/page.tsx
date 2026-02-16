import type { Metadata } from "next";
import { Article } from "@ui/blocks/article";
import { Lead } from "@ui/atoms/lead";
import { privacy, seo } from "@data";

export const metadata: Metadata = seo.pages.privacy;

const Privacy = () => {
    return <section id="privacy" className="pt-header">
        <Article
            heading={<Lead title={privacy.heading} left />}
            content={privacy.content} />
    </section>
}

export default Privacy;