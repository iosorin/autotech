import Link from "next/link";
import { Button } from "@ui/atoms/button";
import { Hero } from "@ui/blocks/hero";
import { Features } from "@ui/blocks/features";
import { Block } from "@ui/blocks/block";
import { Enter } from "@ui/atoms/enter";
import { Cta } from "@ui/blocks/cta";
import { Faq } from "@ui/blocks/faq";
import { Partners } from "@ui/blocks/partners";
import { Slider } from "@ui/blocks/slider";
import { Lead } from "@ui/atoms/lead";
import { Icons } from "@ui/blocks/icons";
import { Form } from "@ui/blocks/form";
import { home } from "@data";
import { cn } from "@utils";
import contact from "@api/contact";

const Page = () => {
  const p = home;
  return (
    <>
      <section id="hero" className="pb-0">
        <Lead title={p.hero.title} tag="h1" label={p.hero.subtitle} />

        <Cta items={p.hero.cta.items}>
          <Cta.Slot id={p.hero.cta.slotId}>
            <Form heading={p.hero.cta.slot.heading} fields={p.hero.cta.slot.fields} onSubmit={contact} />
          </Cta.Slot>
        </Cta>

        <Hero
          heading={null}
          features={p.hero.features}
          cta={
            <Link
              href={p.hero.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-white shadow-sm inline-flex items-center gap-3 rounded-3xl px-6 py-4 text-sm font-medium mt-2 w-fit hover:opacity-90 transition-opacity", p.hero.telegram.className)}
            >
              <svg viewBox="0 0 24 24" fill="white" className="size-11">
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.332-.373-.119l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z" />
              </svg>
              <span className="text-lg max-w-[220px] leading-tight">{p.hero.telegram.label}</span>
            </Link>}
          card={p.hero.card}
          image={p.hero.image}
        />

        <div className="gradlayer bg-gradient-gray" />
      </section>

      <section id="event">
        <div className={p.event.className}>
          <Lead title={p.event.title} desc={p.event.desc} minor={p.event.date} label={p.event.date} />
          <Cta items={p.event.cta} />
        </div>
      </section>

      <section id="features">
        <Features list={p.features.list} />
      </section>

      <section id="account">
        <Lead label={p.account.label} title={p.account.title} desc={p.account.desc} />
        <Icons items={p.account.cards} variant="cards" left />
      </section>

      <section id="extra" className="pb-0">
        <div className="flex flex-col gap-12 md:gap-20">
          {p.extra.title && (
            <Enter variant="fade-up" duration={600}>
              <h2 className="text-center">
                {p.extra.title.text}
                {p.extra.title.highlight && <span className="text-primary">{p.extra.title.highlight}</span>}
                {p.extra.title.suffix}
              </h2>
            </Enter>
          )}
          <Block
            list={[{ title: p.tire.heading, items: p.tire.items }]}
            image={p.tire.image}
          />
          <Block
            list={[{ title: p.integrations.heading, desc: p.integrations.desc }]}
            image={p.integrations.image}
          />
          <Block
            reverse
            image={p.security.image}
            list={[
              { title: p.security.heading, items: p.security.items },
              { title: p.support.heading, items: p.support.items },
            ]}
          />
        </div>
      </section>

      <section id="devices">
        <Lead title={p.devices.heading} />

        <div className="flex flex-wrap justify-center gap-3 text-center">
          {p.devices.items.map((item, i) => (
            <Enter key={item.label} delay={i * 80} variant="fade-up" duration={600} >
              <Button size="lg" {...item} readonly />
            </Enter>
          ))}
        </div>
      </section>

      <section id="migration">
        <Lead title={p.migration.heading} desc={p.migration.desc} icon={p.migration.icon} />

        <div className="flex flex-wrap justify-center gap-3 text-center">
          {p.migration.items.map((item, i) => (
            <Enter key={item.label} delay={i * 80} variant="fade-up" duration={600} >
              <Button size="lg" {...item} readonly />
            </Enter>
          ))}
        </div>
        <div className="gradlayer bg-gradient-green" />
      </section>

      <section id="clients" className="pb-0">
        <Lead
          primary
          label={p.clients.subtitle}
          title={p.clients.title}
        />
        <Block
          reverse
          image={p.clients.image}
          list={[{ desc: p.clients.intro, items: p.clients.items }]}
        />
      </section>

      <section id="cta">
        <Cta title={p.try.title} items={p.try.items} />
        <div className="gradlayer bg-gradient-blue" />
      </section>

      <section id="faq">
        <Lead title={p.faq.heading} />
        <Faq items={p.faq.items} />
      </section>

      <section id="partners">
        <Lead title={p.partners.heading} />
        <Partners
          name={p.partners.name}
          nameSup={p.partners.nameSup}
          desc={p.partners.desc}
          note={p.partners.note}
        />
      </section>

      <section id="testimonials">
        <Lead title={p.testimonials.heading} />
        <Slider
          prevLabel={p.testimonials.prevLabel}
          nextLabel={p.testimonials.nextLabel}
          items={p.testimonials.items}
        />
        <div className="gradlayer bg-muted" />
      </section>

      <section id="cta-join">
        <Cta title={p.join.title} items={p.join.items} />
        <div className="gradlayer bg-muted" />
      </section>
    </>
  );
};

export default Page;
