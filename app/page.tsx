import Link from "next/link";
import { Hero } from "@ui/blocks/hero";
// import { Event } from "@ui/blocks/event";
import { Features } from "@ui/blocks/features";
import { Account } from "@ui/blocks/account";
import { Extra } from "@ui/blocks/extra";
import { Badges } from "@ui/blocks/badges";
import { Migration } from "@ui/blocks/migration";
import { Faq } from "@ui/blocks/faq";
import { Partners } from "@ui/blocks/partners";
import { Testimonials } from "@ui/blocks/testimonials";
import { Lead } from "@ui/atoms/lead";
import { cn } from "@utils";
import { home, homeVideos, importVideo } from "@data";
import { Cta } from "@/app/client";
import { Videos } from "@ui/blocks/videos";
import Icons from "@/library/ui/blocks/icons";

const Page = () => {
  const p = home;
  return (
    <>
      <section id="hero">
        <Lead title={p.hero.title} label={p.hero.subtitle} tags={{ title: 'h1', label: 'h2' }} orders={{ label: 0, title: 1 }} />

        <Cta items={p.hero.cta.items} goals={p.hero.cta.goals} form={p.hero.cta.form} />

        <Hero
          heading={null}
          features={p.hero.features}
          // links={[app.cta.contact, app.cta.start]}
          cta={<Link
            href={p.hero.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("text-white shadow-sm inline-flex items-center gap-3 rounded-3xl px-6 py-5 text-sm font-medium my-2 w-fit hover:opacity-90 transition-opacity", p.hero.telegram.className)}
          >
            <svg viewBox="0 0 24 24" fill="white" className="size-11">
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.332-.373-.119l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z" />
            </svg>
            <span className="text-lg md:max-w-[220px] leading-tight">{p.hero.telegram.label}</span>
          </Link>}
          card={p.hero.card}
          image={p.hero.image}
        />
        <div className="layer bg-gradient-gray" />
      </section>

      <section id="editions">
        <Lead title={p.editions.heading} />
        {/* <Editions items={p.editions.items} /> */}
        <Icons items={p.editions.items} cols={2} left />
      </section>

      {/*
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
      </section> */}

      <section id="features">
        <Features
          tabs={p.features.tabs}
          content={p.features.content}
        />
      </section>

      <section id="spotlight">
        <Lead title={p.spotlight.title} orders={{ label: 0, title: 1 }} />
        <Videos items={homeVideos} more={p.spotlight.more} className="max-w-6xl mx-auto px-2 md:px-0" />
      </section>

      <section id="account">
        <Account
          title={<Lead title={p.account.title} label={p.account.subtitle} hint={p.account.desc} primary orders={{ label: 0, title: 1 }} />}
          cards={p.account.cards}
        />
      </section>

      <section id="extra">
        <Extra
          title={
            <div className="h2 text-center">
              {p.extra.title.text}
              {p.extra.title.highlight && <span className="text-primary">{p.extra.title.highlight}</span>}
              {p.extra.title.suffix}
            </div>
          }
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

      <section id="migration" className="layered">
        <Migration
          title={<Lead title={p.migration.title} hint={p.migration.desc} className="!mb-0" />}
          items={p.migration.items}
          images={p.migration.images}
          contentClassName="md:max-w-[70%] mx-auto"
        />

        <Videos items={[importVideo]} more={p.spotlight.moreVideos} className="md:max-w-[38%] sm:max-w-[50%] mx-auto px-2 md:px-0 md:mt-10 mt-8" hideDescription light />

        <div className="layer bg-gradient-green" />
      </section>

      <section id="cta" className="layered">
        <Lead title={p.cta.title} label={p.cta.subtitle} />
        <Cta items={p.cta.toolbar.items} goals={p.cta.toolbar.goals} form={p.cta.toolbar.form} />
        <div className="layer bg-gradient-blue" />
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

      <section id="testimonials" className="layered pb-0">
        <Lead title={p.testimonials.heading} />
        <Testimonials
          prevAria={p.testimonials.prevAria}
          nextAria={p.testimonials.nextAria}
          list={p.testimonials.list}
        />
        <div className="layer bg-muted" />
      </section>

      <section id="cta-join" className="layered">
        <Lead title={p.join.title} />
        <Cta items={p.join.cta.items} goals={p.join.cta.goals} form={p.join.cta.form} />
        <div className="layer bg-muted" />
      </section>
    </>
  );
};

export default Page;
