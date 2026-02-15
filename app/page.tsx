import Link from "next/link";
import { Hero } from "@ui/blocks/hero";
import { Event } from "@ui/blocks/event";
import { Features } from "@ui/blocks/features";
import { Block } from "@ui/blocks/block";
import { Enter } from "@ui/atoms/enter";
import { Badges } from "@ui/blocks/badges";
import { Migration } from "@ui/blocks/migration";
import { Cta } from "@ui/blocks/cta";
import { Faq } from "@ui/blocks/faq";
import { Partners } from "@ui/blocks/partners";
import { Testimonials } from "@ui/blocks/testimonials";
import { Lead } from "@ui/atoms/lead";
import { home } from "@data";
import { cn } from "@utils";
import Icons from "@/library/ui/blocks/icons";

const Page = () => {
  const p = home;
  return (
    <>
      <section id="hero" className="pb-0">
        <Lead title={p.hero.title} tag="h1" label={p.hero.subtitle} />
        <Cta items={p.hero.cta.items} />
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
        <Event
          date={p.eventBanner.date}
          title={p.eventBanner.title}
          line1={p.eventBanner.line1}
          line2={p.eventBanner.line2}
          cta={p.eventBanner.cta}
          button={p.eventBanner.button}
          className="bg-gradient-blue"
        />
      </section>

      <section id="features">
        <Features
          tabs={p.features.tabs}
          content={p.features.content}
        />
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
            list={[{ title: p.extra.tire.heading, items: p.extra.tire.items }]}
            image={p.extra.tire.image}
          />
          <Block
            list={[{ title: p.extra.integrations.heading, desc: p.extra.integrations.desc }]}
            image={p.extra.integrations.image}
          />
          <Block
            reverse
            image={p.extra.security.image}
            list={[
              { title: p.extra.security.heading, items: p.extra.security.items },
              { title: p.extra.support.heading, items: p.extra.support.items },
            ]}
          />
        </div>
      </section>

      <section id="devices">
        <Lead title={p.extra.devices.heading} />
        <Badges list={p.extra.devices.list} />
      </section>

      <section id="migration">
        <Migration
          titleLine1={p.dataMigration.titleLine1}
          titleLine2={p.dataMigration.titleLine2}
          desc={p.dataMigration.desc}
          items={p.dataMigration.items}
        />
        <div className="gradlayer bg-gradient-green" />
      </section>

      <section id="clients" className="pb-0">
        <Lead
          label={p.clients.subtitle}
          title={p.clients.title}
          primary
        />
        <Block
          reverse
          image={p.clients.image}
          list={[{ desc: p.clients.intro, items: p.clients.items }]}
        />
      </section>

      <section id="cta">
        <Cta
          title={p.ctaSection.title}
          items={p.ctaSection.items}
        />
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
        <Testimonials
          prevAria={p.testimonials.prevAria}
          nextAria={p.testimonials.nextAria}
          list={p.testimonials.list}
        />
        <div className="gradlayer bg-muted" />
      </section>

      <section id="cta-join">
        <Cta
          title={p.joinSection.title}
          items={p.joinSection.items}
        />
        <div className="gradlayer bg-muted" />
      </section>
    </>
  );
};

export default Page;
