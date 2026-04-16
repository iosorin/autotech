import type { Metadata } from "next";
import { Icons } from "@ui/blocks/icons";
import { Promo } from "@ui/blocks/promo";
import { Lead } from "@ui/atoms/lead";
import { Videos } from "@ui/blocks/videos";
import { workflow, videos, seo } from "@data";
import { Cta } from "@/app/client";
import { openGraph } from "@/app/utils";

export const metadata: Metadata = {
    title: seo.pages.workflow.title,
    description: seo.pages.workflow.description,
    alternates: { canonical: "/videos" },
    openGraph: openGraph(seo.pages.workflow.title, seo.pages.workflow.description, "/videos"),
};

const Workflow = () => {
    const p = workflow;

    return (
        <>
            <section id="workflow-videos" className="layered">
                <Lead
                    title={p.hero.title}
                    label={p.hero.subtitle}
                    tags={{ title: "h1", label: "h2" }}
                    orders={{ label: 1, title: 0 }}
                />
                <div className="layer bg-gradient-gray" />
                <Videos items={videos} className="max-w-6xl mx-auto px-2 md:px-0" />
            </section>

            <section id="workflow-operations" className="layered">
                <div className="md:max-w-[85%] mx-auto">
                    <Lead title={p.flow.heading} label={p.flow.label} hint={p.flow.desc} orders={{ label: 0, title: 1 }} className="!mb-0" />
                    <Icons items={p.flow.items} variant="stack" />
                </div>
                <div className="layer bg-gradient-green" />
            </section>

            <section id="workflow-features layered">
                <Lead title={p.daily.heading} hint={p.daily.desc} orders={{ label: 0, title: 1 }} />
                <Icons items={p.daily.items} cols={2} left />

                <Promo
                    title={p.cta.title}
                    desc={p.cta.desc}
                    cta={<Cta items={p.cta.toolbar.items} goals={p.cta.toolbar.goals} form={p.cta.toolbar.form} />}
                    className="bg-gradient-blue md:mt-20 mt-16"
                />
                <div className="layer bg-gradient-white-blue" />
            </section>

        </>
    );
};

export default Workflow;
