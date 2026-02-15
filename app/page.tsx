import Link from "next/link";
import Image from "next/image";
import { Hero } from "@ui/blocks/hero";
import { Event } from "@ui/blocks/event";
import { Features } from "@ui/blocks/features";
import { Account } from "@ui/blocks/account";
import { Extra } from "@ui/blocks/extra";
import { Badges } from "@ui/blocks/badges";
import { Migration } from "@ui/blocks/migration";
import { Clients } from "@ui/blocks/clients";
import { Cta } from "@ui/blocks/cta";
import { Faq } from "@ui/blocks/faq";
import { Partners } from "@ui/blocks/partners";
import { Testimonials } from "@ui/blocks/testimonials";
import { Lead } from "@ui/atoms/lead";
import { home } from "@data";
import { cn } from "@utils";

const Page = () => {
  const p = home;
  return (
    <>
      <section id="hero" className="pb-0">
        <div className="gradlayer bg-gradient-gray" />

        <Lead title={p.hero.titleLine1} title2={p.hero.titleLine2} tag="h1" label={p.hero.subtitle} />
        <Cta items={p.hero.cta.items} />

        <Hero
          heading={null}
          features={p.hero.features}
          cta={
            <Link
              href={p.hero.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("shadow-sm inline-flex items-center gap-3 rounded-3xl px-6 py-4 text-sm font-medium mt-2 w-fit hover:opacity-90 transition-opacity", p.hero.telegram.className)}
            >
              <Image src={p.hero.telegram.icon} alt="Telegram" width={20} height={20} />
              <span className="text-lg max-w-[220px]">{p.hero.telegram.label}</span>
            </Link>}
          card={p.hero.card}
          image={p.hero.image}
        />
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
        <Account
          titleLine1={p.account.titleLine1}
          titleLine2={p.account.titleLine2}
          descLine1={p.account.descLine1}
          descLine2={p.account.descLine2}
          subtitle={p.account.subtitle}
          cards={p.account.cards}
        />
      </section>

      <section id="extra" className="pb-0">
        <Extra
          title={p.extra.title}
          tire={p.extra.tire}
          integrations={p.extra.integrations}
          security={p.extra.security}
          support={p.extra.support}
        />
      </section>

      <section id="devices">
        <Lead title={p.extra.devices.heading} />
        <Badges list={p.extra.devices.list} />
      </section>

      <section id="migration">
        <div className="gradlayer bg-gradient-green" />
        <Migration
          titleLine1={p.dataMigration.titleLine1}
          titleLine2={p.dataMigration.titleLine2}
          desc={p.dataMigration.desc}
          items={p.dataMigration.items}
        />
      </section>

      <section id="clients">
        <Lead
          label={p.clients.subtitle}
          title={p.clients.titleLine1}
          title2={p.clients.titleLine2}
        />
        <Clients
          intro={p.clients.intro}
          items={p.clients.items}
          image={p.clients.image}
        />
      </section>

      <section id="cta">
        <div className="gradlayer bg-gradient-blue" />
        <Cta
          title1={p.ctaSection.title1}
          items={p.ctaSection.items}
        />
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
        <div className="gradlayer bg-muted" />
        <Lead title={p.testimonials.heading} />
        <Testimonials
          prevAria={p.testimonials.prevAria}
          nextAria={p.testimonials.nextAria}
          list={p.testimonials.list}
        />
      </section>

      <section id="cta-join">
        <div className="gradlayer bg-muted" />
        <Cta
          title1={p.joinSection.title1}
          items={p.joinSection.items}
        />
      </section>
    </>
  );
};

export default Page;
