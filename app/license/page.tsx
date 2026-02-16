import type { Metadata } from "next";
import { Article } from "@ui/blocks/article";
import { Lead } from "@ui/atoms/lead";
import { license, seo } from "@data";

export const metadata: Metadata = seo.pages.license;

const License = () => {
    return (
        <section id="license" className="pt-header">
            <Article
                heading={<Lead title={license.heading} left />}
                content={license.content}
            />
        </section>
    );
}

export default License;