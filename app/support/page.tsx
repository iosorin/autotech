import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
import { Links } from "@ui/blocks/links";
import { Form } from "@ui/blocks/form";
import { Icons } from "@ui/blocks/icons";
import { app, seo, support } from "@data";
import contact from "@api/contact";

export const metadata: Metadata = seo.pages.support;

const Support = () => {
  const p = support;
  return (
    <>
      <section id="support">
        <section id="support-form">
          <Lead label={p.subtitle} title={p.title} titleFirst tag="h1" />
          <Form
            className="md:w-[60%] mx-auto"
            heading={p.headings.form}
            fields={app.form.fields}
            onSubmit={contact}
          />
        </section>

        <section id="support-types">
          <Lead title={p.headings.response} />
          <Icons items={p.types} cols={2} />
        </section>

        <div className="gradlayer bg-gradient-lime" />
      </section>

      <section id="support-contacts">
        <Lead title={p.headings.otherContact} />
        <Links
          labels={p.contactLabels}
          support={app.support}
          email={app.supportEmail}
          phone={app.phone}
          phoneRaw={app.phoneRaw}
        />

        <div className="gradlayer bg-gradient-white-gray" />
      </section>

    </>
  );
}

export default Support;