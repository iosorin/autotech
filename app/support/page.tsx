import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
import { Links } from "@ui/blocks/links";
import { app, seo, support } from "@data";
import { Contact } from "@ui/blocks/contact";
import { Types } from "@ui/blocks/types";

export const metadata: Metadata = {
  title: seo.pages.support.title,
  description: seo.pages.support.description,
};

export default function SupportPage() {
  const p = support;
  return (
    <>
      <section id="support">
        <div className="gradlayer bg-gradient-lime" />
        <Lead label={p.subtitle} title={p.title} titleFirst />
        <div className="md:w-[60%] mx-auto">
          <Contact heading={p.form.heading} topics={p.form.topics} />
        </div>
      </section>

      <section>
        <div className="gradlayer bg-gradient-gray-light" />

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
      </section>
    </>
  );
}
