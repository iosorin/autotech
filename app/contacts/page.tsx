import Link from "next/link";
import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
import { Grid } from "@ui/blocks/grid";
import { Icons } from "@ui/blocks/icons";
import { Links } from "@ui/blocks/links";
import { Requisites } from "@ui/blocks/requisites";
import contact from "@api/contact";
import { seo, app, contacts, forms } from "@data";
import { Form } from "@/app/client";
import { openGraph } from "@/app/utils";

export const metadata: Metadata = {
  title: seo.pages.contacts.title,
  description: seo.pages.contacts.description,
  alternates: { canonical: "/contacts" },
  openGraph: openGraph(seo.pages.contacts.title, seo.pages.contacts.description, '/contacts'),
};

export const Contacts = () => {
  const p = contacts;
  return (
    <>
      <section id="contacts" className="layered pb-0">
        <Lead
          title={p.title}
          // titleFirst
          label={
            <>
              {/* <Lead.Slot children={p.supportHint} tag="h2" /> */}
              {p.supportHint}
              <Link href="/support" className="text-primary underline hover:text-primary/80" title={p.supportLinkLabel}>
                «{p.supportLinkLabel}»
              </Link>
            </>
          }
          tags={{ title: 'h1', label: 'div' }}
        />

        <Lead title={p.designedForHeading} className="md:mt-14" />
        <Grid blocks={p.designedFor} />
        <div className="layer bg-gradient-gray" />
      </section>


      <section id="dev">
        <Lead title={p.devHeading} />
        <Icons items={p.dev} left />
      </section>

      <section id="mission" className="layered">
        <div className="md:max-w-[85%] mx-auto">
          <Lead title={p.mission.heading} className="!mb-0" />
          <Icons items={p.mission.items} variant="stack" />
        </div>
        <div className="layer bg-gradient-lime" />
      </section>

      <section className="layered">
        <section id="form">
          <Lead title={p.form.heading} />
          <div className="md:w-[60%] mx-auto">
            <Form {...forms.call} className="shadow-xl" onSubmit={contact} goal="contacts" />
          </div>
        </section>

        <section id="other-contact">
          <Lead title={p.otherContactHeading} />
          <Links
            labels={p.contactLabels}
            telegramSupport={app.telegram}
            email={app.supportEmail}
            phone={app.phone}
            phoneRaw={app.phoneRaw}
          />
        </section>

        <section id="requisites" className="layered">
          <div className="md:max-w-[85%] mx-auto">
            <Lead title={p.requisitesHeading} />
            <Requisites
              bankHeading={p.bankHeading}
              accountLabel={p.accountLabel}
              company={{
                short: app.company.short,
                fulladdress: app.company.fulladdress,
                inn: app.company.inn,
                kpp: app.company.kpp,
                ogrn: app.company.ogrn,
                okpo: app.company.okpo,
              }}
              bank={app.company.bank}
            />
          </div>
        </section>
        <div className="layer bg-gradient-white-gray" />
      </section>

    </>
  );
}

export default Contacts;