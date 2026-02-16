import type { Metadata } from "next";
import { Article } from "@ui/blocks/article";
import { Lead } from "@ui/atoms/lead";
import { contract, seo } from "@data";

export const metadata: Metadata = seo.pages.contract;

const Contract = () => {
    return (
        <section id="contract" className="pt-header">
            <Article
                heading={<Lead title={contract.heading} left />}
                content={contract.content}
            />
        </section>
    );
}

export default Contract;