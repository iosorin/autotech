import Link from "next/link";
import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
import { Icons } from "@ui/blocks/icons";
import { Form } from "@ui/blocks/form";
import { Links } from "@ui/blocks/links";
import { Requisites } from "@ui/blocks/requisites";
import { seo, app, contacts } from "@data";
import contact from "@api/contact";

export const metadata: Metadata = seo.pages.contacts;

const Contacts = () => {
  const p = contacts;
  return (
    <>
      <section id="contacts" className="pb-0">
        <Lead
          tag="h1"
          title={p.title}
          desc={p.label}
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
        <Form
          className={app.form.className}
          heading={app.form.heading}
          fields={app.form.fields}
          onSubmit={contact}
        />
      </section>

      <section id="other-contact">
        <Lead title={p.otherContactHeading} />
        <Links
          labels={p.contactLabels}
          support={app.telegram}
          email={app.supportEmail}
          phone={app.phone}
          phoneRaw={app.phoneRaw}
        />
      </section>

      <section id="requisites">
        <Lead title={p.requisites.heading} />
        <Requisites
          className="max-w-[85%] mx-auto"
          bankHeading={p.requisites.bank}
          accountLabel={p.requisites.account}
          company={app.company}
          bank={app.company.bank}
        />

        <div className="gradlayer bg-gradient-gray-white" />
      </section>
    </>
  );
}

export default Contacts;