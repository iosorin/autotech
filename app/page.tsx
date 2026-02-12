import { Hero } from "@ui/blocks/hero";
import { Event } from "@ui/blocks/event";
import { Features } from "@ui/blocks/features";
import { Account } from "@ui/blocks/account";
import { ExtraFeatures } from "@ui/blocks/extra";
import { DataMigration } from "@ui/blocks/migration";
import { Clients } from "@ui/blocks/clients";
import { Cta } from "@ui/blocks/cta";
import { Faq } from "@ui/blocks/faq";
import { Partners } from "@ui/blocks/partners";
import { Testimonials } from "@ui/blocks/testimonials";
import { Join } from "@ui/blocks/join";
import { app, home } from "@data";

const Page = () => {
  return (
    <>
      <Hero
        id="hero"
        subtitle={home.hero.subtitle}
        titleLine1={home.hero.titleLine1}
        titleLine2={home.hero.titleLine2}
        featureTags={home.hero.featureTags}
        telegramCta={home.hero.telegramCta}
        telegramUrl={app.telegramUrl}
        cardTitle1={home.hero.cardTitle1}
        cardTitle2={home.hero.cardTitle2}
        cardDesc={home.hero.cardDesc}
        imageAlt={home.hero.imageAlt}
        ctaStart={app.cta.start}
        ctaContact={app.cta.contact}
      // className="bg-gradient-to-b from-primary to-primary/80"
      />

      <Event
        id="events"
        date={home.eventBanner.date}
        title={home.eventBanner.title}
        line1={home.eventBanner.line1}
        line2={home.eventBanner.line2}
        cta={home.eventBanner.cta}
        button={home.eventBanner.button}
      />

      <Features
        id="features"
        tabs={home.features.tabs}
        content={home.features.content}
        imageAlt={home.features.imageAlt}
      />

      <Account
        id="account"
        titleLine1={home.account.titleLine1}
        titleLine2={home.account.titleLine2}
        descLine1={home.account.descLine1}
        descLine2={home.account.descLine2}
        subtitle={home.account.subtitle}
        cards={home.account.cards}
      />

      <ExtraFeatures
        id="extra"
        title={home.extraFeatures.title}
        titleHighlight={home.extraFeatures.titleHighlight}
        titleSuffix={home.extraFeatures.titleSuffix}
        tire={home.extraFeatures.tire}
        integrations={home.extraFeatures.integrations}
        security={home.extraFeatures.security}
        support={home.extraFeatures.support}
        devices={home.extraFeatures.devices}
        mechanicImageAlt={home.extraFeatures.mechanicImageAlt}
      />

      <DataMigration
        id="migration"
        titleLine1={home.dataMigration.titleLine1}
        titleLine2={home.dataMigration.titleLine2}
        desc={home.dataMigration.desc}
        items={home.dataMigration.items}
      />

      <Clients
        id="clients"
        titleLine1={home.clients.titleLine1}
        titleLine2={home.clients.titleLine2}
        subtitle={home.clients.subtitle}
        intro={home.clients.intro}
        items={home.clients.items}
        imageAlt={home.clients.imageAlt}
      />

      <Cta
        id="cta"
        title={home.cta.defaultTitle}
        start={app.cta.start}
        contact={app.cta.contact}
      />

      <Faq
        id="faq"
        heading={home.faq.heading}
        items={home.faq.items}
      />

      <Partners
        id="partners"
        heading={home.partners.heading}
        name={home.partners.name}
        nameSup={home.partners.nameSup}
        desc={home.partners.desc}
        note={home.partners.note}
      />

      <Testimonials
        id="testimonials"
        heading={home.testimonials.heading}
        prevAria={home.testimonials.prevAria}
        nextAria={home.testimonials.nextAria}
        list={home.testimonials.list}
      />

      <Join
        id="join"
        titleLine1={home.join.titleLine1}
        titleLine2={home.join.titleLine2}
        ctaStart={app.cta.start}
        ctaContact={app.cta.contact}
      />
    </>
  );
}

export default Page;