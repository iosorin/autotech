import Link from "next/link";
import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
import { Grid } from "@ui/blocks/grid";
import { Icons } from "@ui/blocks/icons";
import { Form } from "@ui/blocks/form";
import { Links } from "@ui/blocks/links";
import { Requisites } from "@ui/blocks/requisites";
import { seo, app, contacts } from "@data";

export const metadata: Metadata = {
  title: seo.pages.contacts.title,
  description: seo.pages.contacts.description,
};

export const Contacts = () => {
  const p = contacts;
  return (
    <>
      <section id="contacts" className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Lead
            title={p.title}
            hint={
              <>
                {p.supportHint}
                <Link href="/support" className="text-primary underline hover:text-primary/80">
                  {p.supportLinkLabel}
                </Link>
              </>
            }
          />
        </div>
      </section>

      <section id="designed-for" className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Grid heading={p.designedForHeading} blocks={p.designedFor} />
        </div>
      </section>

      <section id="dev" className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <Icons heading={p.devHeading} items={p.dev} />
        </div>
      </section>

      <section id="mission" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6fff0] to-[#f0fdf4] -z-10" />
        <div className="max-w-2xl mx-auto px-4 relative">
          <Icons heading={p.missionHeading} items={p.mission} variant="stack" />
        </div>
      </section>

      <section id="form" className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <Form heading={p.contactHeading} />
        </div>
      </section>

      <section id="other-contact" className="pb-16">
        <div className="max-w-md mx-auto px-4">
          <Links
            heading={p.otherContactHeading}
            labels={p.contactLabels}
            telegramUrl={app.supportTelegramUrl}
            telegramLabel={app.telegramSupport}
            email={app.supportEmail}
            phone={app.phone}
            phoneRaw={app.phoneRaw}
          />
        </div>
      </section>

      <section id="requisites" className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <Requisites
            heading={p.requisitesHeading}
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
