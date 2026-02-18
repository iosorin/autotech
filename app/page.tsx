import Link from "next/link";
import { Hero } from "@ui/blocks/hero";
// import { Event } from "@ui/blocks/event";
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
import { Form } from "@ui/blocks/form";
import { cn } from "@utils";
import contact from "@api/contact";
import { app, forms, home } from "@data";

const Page = () => {
  const p = home;
  return (
    <>
      <section id="hero">

        <Lead title={p.hero.title} tag="h1" label={p.hero.subtitle} />

        <Cta items={[app.cta.start, app.cta.contact]}>
          <Cta.Slot id={app.cta.contact.id}>
            <Form heading={forms.call.heading} fields={forms.call.fields} onSubmit={contact} />
          </Cta.Slot>
        </Cta>

        <Hero
          heading={null}
          features={p.hero.features}
          // links={[app.cta.start, app.cta.contact]}
          cta={<Link
            href={p.hero.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("text-white shadow-sm inline-flex items-center gap-3 rounded-3xl px-6 py-5 text-sm font-medium mt-2 w-fit hover:opacity-90 transition-opacity", p.hero.telegram.className)}
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
        <div className="layer bg-gradient-gray" />
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

      <section id="extra">
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

      <section id="migration" className="layered">
        <Migration
          titleLine1={p.dataMigration.titleLine1}
          titleLine2={p.dataMigration.titleLine2}
          desc={p.dataMigration.desc}
          items={p.dataMigration.items}
        />
        <div className="layer bg-gradient-green" />
      </section>

      <section id="clients">
        <Lead
          label={p.clients.subtitle}
          title={p.clients.title}
        />
        <Clients
          intro={p.clients.intro}
          items={p.clients.items}
          image={p.clients.image}
        />
      </section>

      <section id="cta" className="layered">
        <Lead title={p.cta.defaultTitle} />
        <Cta items={[app.cta.start, app.cta.contact]}>
          <Cta.Slot id={app.cta.contact.id}>
            <Form heading={forms.call.heading} fields={forms.call.fields} onSubmit={contact} />
          </Cta.Slot>
        </Cta>
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
        // className="md:max-w-[85%]"
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

        <Cta items={[app.cta.start, app.cta.contact]}>
          <Cta.Slot id={app.cta.contact.id}>
            <Form heading={forms.call.heading} fields={forms.call.fields} onSubmit={contact} />
          </Cta.Slot>
        </Cta>
        <div className="layer bg-muted" />
      </section>
    </>
  );
};

export default Page;
