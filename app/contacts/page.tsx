import Link from "next/link";
import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
import { Icons } from "@ui/blocks/icons";
import { Form } from "@ui/blocks/form";
import { Links } from "@ui/blocks/links";
import { Requisites } from "@ui/blocks/requisites";
import { seo, app, contacts } from "@data";
import contact from "@api/contact";
import Grid from "@/library/ui/blocks/grid";

export const metadata: Metadata = {
  title: seo.pages.contacts.title,
  description: seo.pages.contacts.description,
  alternates: { canonical: "/contacts" },
};

export const Contacts = () => {
  const p = contacts;
  return (
    <>
      <section id="contacts" className="pb-0">
        <Lead
          tag="h1"
          title={p.title}
          desc={
            <span className="text-lg inline-flex gap-1 justify-center">
              {p.supportHint}
              <Link href="/support" className="text-primary underline hover:text-primary/80" title={p.supportLinkLabel}>
                «{p.supportLinkLabel}»
              </Link>
            </span>
          }
        />

        <div className="pb-10">
          <Lead title={p.designed.heading} />
          <Icons items={p.designed.items} itemClassName={p.designed.itemClassName} cols={2} />
        </div>

        <div className="gradlayer bg-gradient-gray" />
      </section>

      <section id="dev">
        <Lead title={p.dev.heading} />
        <Icons items={p.dev.items} left />
      </section>

      <section id="mission" className="pb-0">
        <div className="max-w-[85%] mx-auto">
          <Lead title={p.mission.heading} />
          <Icons items={p.mission.items} variant="stack" />
        </div>
        <div className="gradlayer bg-gradient-lime" />
      </section>

      <section id="form" className="pb-0">
        <Lead title={app.form.heading} />
        <div className="md:w-[60%] mx-auto">
          <Form
            heading={app.form.heading}
            fields={app.form.fields}
            // agree={app.form.agree}
            onSubmit={contact} />
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

      <section id="requisites">
        <Lead title={p.requisitesHeading} />
        <Requisites
          className="max-w-[85%] mx-auto"
          bankHeading={p.bankHeading}
          accountLabel={p.accountLabel}
          company={{
            short: app.company.short,
            addressFull: app.company.addressFull,
            inn: app.company.inn,
            kpp: app.company.kpp,
            ogrn: app.company.ogrn,
            okpo: app.company.okpo,
          }}
          bank={app.company.bank}
        />

        <div className="gradlayer bg-gradient-gray-white" />
      </section>
    </>
  );
}

export default Contacts;