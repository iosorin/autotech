import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
import { Links } from "@ui/blocks/links";
import contact from "@api/contact";
import { app, seo, support, forms } from "@data";
import { Types } from "@ui/blocks/types";
import { Form } from "@/app/client";
import { openGraph } from "@/app/utils";

export const metadata: Metadata = {
  title: seo.pages.support.title,
  description: seo.pages.support.description,
  alternates: { canonical: "/support" },
  openGraph: openGraph(seo.pages.support.title, seo.pages.support.description, '/support'),
};

export const Support = () => {
  const p = support;
  return (
    <>
      <section id="support" className="layered">
        <Lead label={p.subtitle} title={p.title} tags={{ title: 'h1', label: 'h2' }}
        />
        <div className="md:w-[60%] mx-auto">
          <Form heading={forms.contact.heading} fields={forms.contact.fields} onSubmit={contact} goal="support" />
        </div>
        <div className="layer bg-gradient-lime" />
      </section>

      <section className="layered">
        <section id="support-types">
          <Lead title={p.responseHeading} />
          <Types types={p.types} />
        </section>

        <section id="other-contact">
          <Lead title={p.otherContactHeading} />
          <Links
            labels={p.contactLabels}
            telegramSupport={app.telegramSupport}
            email={app.supportEmail}
            phone={app.phone}
            phoneRaw={app.phoneRaw}
          />
        </section>
        <div className="layer bg-gradient-white-gray" />
      </section>
    </>
  );
}

export default Support;