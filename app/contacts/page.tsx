import Link from "next/link";
import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
import { Grid } from "@ui/blocks/grid";
import { Icons } from "@ui/blocks/icons";
// import { Form } from "@ui/blocks/form";
import { Links } from "@ui/blocks/links";
import { Requisites } from "@ui/blocks/requisites";
import { Contact } from "@ui/blocks/contact";
import { seo, app, contacts } from "@data";

export const metadata: Metadata = {
  title: seo.pages.contacts.title,
  description: seo.pages.contacts.description,
};

export const Contacts = () => {
  const p = contacts;
  return (
    <>
      <section id="contacts" className="pb-0">
        <div className="gradlayer bg-gradient-gray" />

        <Lead
          title={p.title}
          hint={
            <span className="text-lg inline-flex gap-1 justify-center">
              {p.supportHint}
              <Link href="/support" className="text-primary underline hover:text-primary/80">
                «{p.supportLinkLabel}»
              </Link>
            </span>
          }
        />

        <div className="pb-10">
          <Lead title={p.designedForHeading} />
          <Grid blocks={p.designedFor} />
        </div>
      </section>


      <section id="dev">
        <Lead title={p.devHeading} />
        <Icons items={p.dev} left />
      </section>

      <section id="mission" className="pb-0">
        <div className="gradlayer bg-gradient-lime" />
        <div className="max-w-[85%] mx-auto">
          <Lead title={p.mission.heading} />
          <Icons items={p.mission.items} variant="stack" />
        </div>
      </section>

      <section id="form" className="pb-0">
        <Lead title={p.form.heading} />
        <div className="md:w-[60%] mx-auto">
          <Contact topics={p.form.topics} className="shadow-primary/25" />
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
        <div className="gradlayer bg-gradient-gray-light" />
        <div className="max-w-[85%] mx-auto">

          <Lead title={p.requisitesHeading} />
          <Requisites
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
        </div>

      </section>
    </>
  );
}

export default Contacts;