import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
import { Links } from "@ui/blocks/links";
import { Form } from "@ui/blocks/form";
import { Icons } from "@ui/blocks/icons";
import { app, seo, support } from "@data";
import contact from "@api/contact";

export const metadata: Metadata = {
  title: seo.pages.support.title,
  description: seo.pages.support.description,
  alternates: { canonical: "/support" },
};

export const Support = () => {
  const p = support;
  return (
    <>
      <section id="support">
        <section id="support-form">

          <div className="gradlayer bg-gradient-lime" />
          <Lead label={p.subtitle} title={p.title} titleFirst tag="h1" />

          <div className="md:w-[60%] mx-auto">
            <Form
              heading={p.headings.form}
              fields={app.form.fields}
              // agree={app.form.agree}
              onSubmit={contact}
            />
          </div>
        </section>


        <section id="support-types">
          <Lead title={p.headings.response} />
          <Icons items={p.types} cols={2} />
        </section>
        <section>
          <div className="gradlayer bg-gradient-white-gray" />


          <section id="other-contact">
            <Lead title={p.headings.otherContact} />
            <Links
              labels={p.contactLabels}
              telegramSupport={app.telegramSupport}
              email={app.supportEmail}
              phone={app.phone}
              phoneRaw={app.phoneRaw}
            />
          </section>
        </section>
      </section>

    </>
  );
}

export default Support;