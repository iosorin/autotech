"use client";

import { Grid } from "@ui/atoms/grid";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@ui/atoms/tabs";
import { newHome } from "@data";

const NewHome = () => (
  <>
    <section id="hero" className="layered">
      <Grid {...newHome.hero} />
      <div className="layer bg-gradient-gray" />
    </section>

    <section id="features">
      <Tabs defaultValue={newHome.features[0]?.id ?? "orders"} className="flex flex-col items-center w-full flex-wrap">
        <TabsList className="mb-12 mx-auto max-w-full overflow-x-auto text-lg">
          {newHome.features.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {newHome.features.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="flex flex-col gap-6 mt-0">
            <Grid {...tab.grid} />
          </TabsContent>
        ))}
      </Tabs>
    </section>

    <section id="account">
      <Grid {...newHome.account} />
    </section>

    <section id="extra">
      <Grid {...newHome.extra} />
    </section>

    <section id="devices">
      <Grid {...newHome.devices} />
    </section>

    <section id="migration" className="layered">
      <Grid {...newHome.migration} />
      <div className="layer bg-gradient-green" />
    </section>

    <section id="clients">
      <Grid {...newHome.clients} />
    </section>

    <section id="cta" className="layered">
      <Grid {...newHome.cta} />
      <div className="layer bg-gradient-blue" />
    </section>

    <section id="faq">
      <Grid {...newHome.faq} />
    </section>

    <section id="partners">
      <Grid {...newHome.partners} />
    </section>

    <section id="testimonials" className="layered">
      <Grid {...newHome.testimonials} />
      <div className="layer bg-muted" />
    </section>

    <section id="cta-join" className="layered">
      <Grid {...newHome.join} />
      <div className="layer bg-muted" />
    </section>
  </>
);

export default NewHome;
