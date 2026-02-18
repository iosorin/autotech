import type { Metadata } from "next";
import { Article } from "@ui/blocks/article";
import { Lead } from "@ui/atoms/lead";
import { contract, seo } from "@data";

export const metadata: Metadata = {
    title: seo.pages.contract.title,
    description: seo.pages.contract.description,
    alternates: { canonical: "/contract" },
};

export const Contract = () => {
    return (
        <Article
            id="contract"
            heading={contract.heading}
            sections={contract.sections}
            className="pt-header"
        />
    );
}

export default Contract;