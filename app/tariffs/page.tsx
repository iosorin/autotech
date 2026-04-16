import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
import { Rates } from "@ui/blocks/rates";
import { Block } from "@ui/blocks/block";
import { seo, tariffs } from "@data";
import { Cta, Calculator } from "@/app/client";
import { openGraph } from "@/app/utils";

export const metadata: Metadata = {
  title: seo.pages.tariffs.title,
  description: seo.pages.tariffs.description,
  alternates: { canonical: "/tariffs" },
  openGraph: openGraph(seo.pages.tariffs.title, seo.pages.tariffs.description, "/tariffs"),
};

const Tariffs = () => {
  const p = tariffs;

  return (
    <>
      <section id="tariffs" className="layered pb-0">
        <Lead
          // label={p.platformLabel}
          title={p.title}
          tags={{ title: "h1", label: "h2" }}
          className="!mb-4"
        />

        <Calculator
          versions={p.versions}
          cols={p.calculator.periods}
          rows={p.calculator.plans}
          className="bg-gradient-white"
          setup={p.calculator.setup}
          discounts={
            <div id="discounts" className="flex flex-col gap-4 md:gap-8 items-stretch !mt-3 md:!mt-10 w-full">
              <Lead.Slot tag="span" children={p.discounts.heading} className="h2 text-center w-full" />
              <Rates discounts={p.discounts.items} icon={p.discounts.icon} />
            </div>
          }
        >
          <Cta
            items={p.calculator.cta.items}
            goals={p.calculator.cta.goals}
            form={p.calculator.cta.form}
            className="sm:ml-auto mt-3 md:mt-0"
            variant="default"
          />
        </Calculator>
        <div className="layer bg-gradient-blue" />
      </section>

      <section id="included">
        <Block
          heading={
            <Lead title={p.included.heading} className="!mb-0 text-left" />
          }
          items={p.included.items}
          image={p.included.image}
          reverse
        />
      </section>

      <section id="cta" className="layered">
        <Lead title={p.banner.title} />
        <Cta items={p.banner.cta.items} goals={p.banner.cta.goals} form={p.banner.cta.form} />
        <div className="layer bg-gradient-green" />
      </section>
    </>
  );
};

export default Tariffs;
