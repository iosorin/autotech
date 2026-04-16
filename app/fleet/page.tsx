import type { Metadata } from "next";
import { Icons } from "@ui/blocks/icons";
import { Promo } from "@ui/blocks/promo";
import { Compare } from "@ui/blocks/compare";
import { Hero } from "@ui/blocks/hero";
import { Cabinet } from "@ui/blocks/cabinet";
import { Extra } from "@ui/blocks/extra";
import { Faq } from "@ui/blocks/faq";
import { Block } from "@ui/blocks/block";
import { Lead } from "@ui/atoms/lead";
import { fleet, seo } from "@data";
import { Cta } from "@/app/client";
import { openGraph } from "@/app/utils";

export const metadata: Metadata = {
  title: seo.pages.fleet.title,
  description: seo.pages.fleet.description,
  alternates: { canonical: "/fleet" },
  openGraph: openGraph(seo.pages.fleet.title, seo.pages.fleet.description, '/fleet'),
};

export const Fleet = () => {
  const p = fleet;

  return (
    <>
      <section id="fleet" className="layered pb-0">
        <Hero
          heading={<Lead title={p.hero.subtitle} tags={{ title: 'h1', label: 'h2' }} label={p.hero.title} />}
          features={p.hero.features}
          card={p.hero.card}
          image={p.hero.image}
          cta={<Cta items={p.hero.cta.items} goals={p.hero.cta.goals} form={p.hero.cta.form} />}
        />
        <div className="layer bg-gradient-lime" />
      </section>

      <section id="why">
        <Lead title={p.why.heading} />
        <Icons items={p.why.items} cols={2} />
      </section>

      <section id="compare">
        <Compare data={p.compare} />
      </section>

      <section id="seasonal">
        <Extra tire={p.seasonal} />
      </section>

      <section id="approaches">
        <Lead title={p.approaches.heading} className="max-md:text-left" />
        <Icons items={p.approaches.items} left />
      </section>

      <section id="flexible">
        <Block
          heading={<Lead title={p.flexible.heading} className="text-left !mb-0" />}
          items={p.flexible.items}
          image={p.flexible.image}
          cta={<Cta items={p.flexible.cta.items} goals={p.flexible.cta.goals} form={p.flexible.cta.form} />}
          reverse
        />
      </section>

      <section id="how-it-works" className="layered pb-0">
        <div className="md:max-w-[85%] mx-auto mb-16">
          <Lead title={p.how.heading} className="!mb-0" />
          <Icons items={p.how.items} variant="stack" />
        </div>
        <Cta items={p.how.cta.items} goals={p.how.cta.goals} form={p.how.cta.form} />
        <div className="layer bg-gradient-lime" />
      </section>

      <section id="transparency">
        <Block
          heading={<Lead title={p.transparency.heading} className="text-left !mb-0" />}
          items={p.transparency.items}
          image={p.transparency.image}
          reverse
        />
      </section>

      <section id="cabinet">
        <Lead title={p.cabinet.heading} className="max-md:text-left" />
        <Cabinet
          list={p.cabinet.list}
          choice={p.cabinet.choice}
          filter={p.cabinet.filter}
          image={p.cabinet.image}
        />
      </section>

      <section id="hrd">
        <Promo
          title={p.hrd.heading}
          desc={p.hrd.desc}
          icon={p.hrd.icon}
          cta={<Cta items={p.hrd.cta.items} goals={p.hrd.cta.goals} form={p.hrd.cta.form} />}
          className="bg-gradient-blue"
        />
      </section>

      <section id="faq" className="layered">
        <Lead title={p.faq.heading} />
        <Faq items={p.faq.items} />
        <div className="layer bg-gradient-gray-white" />
      </section>
    </>
  );
}

export default Fleet;
