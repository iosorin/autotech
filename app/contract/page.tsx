import type { Metadata } from "next";
import { Article } from "@ui/blocks/article";
import { contract, seo } from "@data";
import { openGraph } from "@/app/utils";

export const metadata: Metadata = {
    title: seo.pages.contract.title,
    description: seo.pages.contract.description,
    alternates: { canonical: "/contract" },
    openGraph: openGraph(seo.pages.contract.title, seo.pages.contract.description, '/contract'),
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