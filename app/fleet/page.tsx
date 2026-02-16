import type { Metadata } from "next";
import { Icons } from "@ui/blocks/icons";
import { Promo } from "@ui/blocks/promo";
import { Compare } from "@ui/blocks/compare";
import { Cta } from "@ui/blocks/cta";
import { Faq } from "@ui/blocks/faq";
import { Block } from "@ui/blocks/block";
import { Lead } from "@ui/atoms/lead";
import { Form } from "@ui/blocks/form";
import { fleet, seo } from "@data";
import contact from "@api/contact";

export const metadata: Metadata = seo.pages.fleet;

const Fleet = () => {
  const p = fleet;
  return (
    <>
      <section id="fleet" className="pb-0">
        <Lead title={p.hero.title} tag="h1" label={p.hero.subtitle} />
        <Block
          list={[]}
          layout="hero"
          pills={[{ tags: p.hero.features }]}
          image={p.hero.image}
          card={p.hero.card}
          cta={
            <Cta items={p.hero.cta.items}>
              <Cta.Slot id={p.hero.cta.slotId}>
                <Form heading={p.callForm.heading} fields={p.callForm.fields} onSubmit={contact} />
              </Cta.Slot>
            </Cta>
          }
        />
        <div className="gradlayer bg-gradient-lime" />
      </section>

      <section id="why">
        <Lead title={p.why.heading} />
        <Icons items={p.why.items} cols={2} />
      </section>

      <section id="compare">
        <Compare data={p.compare} />
      </section>

      <section id="seasonal">
        <Block
          list={[{ title: p.seasonal.heading, items: p.seasonal.items }]}
          image={p.seasonal.image}
        />
      </section>

      <section id="approaches">
        <Lead title={p.approaches.heading} />
        <Icons items={p.approaches.items} left />
      </section>

      <section id="flexible">
        <Block
          list={[{ title: p.flexible.heading, items: p.flexible.items }]}
          image={p.flexible.image}
          cta={
            <Cta items={p.flexible.cta.items}>
              <Cta.Slot id={p.flexible.cta.slotId}>
                <Form heading={p.callForm.heading} fields={p.callForm.fields} onSubmit={contact} />
              </Cta.Slot>
            </Cta>
          }
          reverse
        />
      </section>

      <section id="how-it-works">
        <div className="max-w-[85%] mx-auto mb-16">
          <Lead title={p.how.heading} />
          <Icons items={p.how.items} variant="stack" />
        </div>

        <Cta items={p.how.cta.items}>
          <Cta.Slot id={p.how.cta.slotId}>
            <Form heading={p.callForm.heading} fields={p.callForm.fields} onSubmit={contact} />
          </Cta.Slot>
        </Cta>

        <div className="gradlayer bg-gradient-lime" />
      </section>

      <section id="transparency">
        <Block
          list={[{ title: p.transparency.heading, items: p.transparency.items }]}
          image={p.transparency.image}
          reverse
        />
      </section>

      <section id="cabinet">
        <Lead title={p.cabinet.heading} />
        <Block
          list={p.cabinet.items?.length ? [{ items: p.cabinet.items }] : []}
          tags={p.cabinet.tags}
          image={p.cabinet.image}
          layout="center-image"
        />
      </section>

      <section id="hrd">
        <Promo
          title={p.hrd.heading}
          desc={p.hrd.desc}
          icon={p.hrd.icon}
          cta={<Cta items={p.hrd.cta.items} />}
          className="bg-gradient-blue"
        />
      </section>

      <section id="faq">
        <Lead title={p.faq.heading} />
        <Faq items={p.faq.items} />
        <div className="gradlayer bg-gradient-gray-white" />
      </section>
    </>
  );
}

export default Fleet;