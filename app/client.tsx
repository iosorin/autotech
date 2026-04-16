"use client";

import React from "react";
import { Cta as CtaInternal, type Item } from "@ui/blocks/cta";
import { Form as FormInternal, type IForm } from "@ui/blocks/form";
import { Header as HeaderInternal } from "@ui/blocks/header";
import { Calculator as CalculatorInternal, type Col, type Row } from "@ui/blocks/calculator";
import contact from "@api/contact";
import { reachGoal, goals, YANDEX_METRIC_ID } from "@api/tracker";
import { forms } from "@data";
import Script from "next/script";



export const Metrika = () => (
  <>
    <Script id="yandex-metrika" strategy="afterInteractive">
      {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window,document,"script","https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIC_ID}","ym");

        ym(${YANDEX_METRIC_ID}, 'init', {
          ssr:true,
          webvisor:true,
          clickmap:true,
          ecommerce:"dataLayer",
          referrer: document.referrer,
          url: location.href,
          accurateTrackBounce:true,
          trackLinks:true
        });
      `}
    </Script>
    <noscript>
      <div>
        <img src={`https://mc.yandex.ru/watch/${YANDEX_METRIC_ID}`} style={{ position: "absolute", left: "-9999px" }} alt="" />
      </div>
    </noscript>
  </>
);

// ---- Tracked Form: fires reachGoal on success ----
export const Form = ({ goal, ...props }: IForm & { goal: string }) => (
  <FormInternal {...props} onSuccess={() => reachGoal(goals.form.submit, { name: goal })} />
);

// ---- Tracked CTA: reachGoal from goals[item.id] or item.goal; optional embedded call form ----
type CtaProps = Omit<React.ComponentProps<typeof CtaInternal>, "onClick" | "children"> & {
  goals?: Record<string, string>;
  form?: { for: string; goal: string };
  children?: React.ReactNode;
  onClick?: (item: Item) => void;
};

export const Cta = ({ goals: goalsMap, onClick, form, children, ...rest }: CtaProps) => (
  <CtaInternal
    {...rest}
    onClick={(item) => {
      onClick?.(item);
      const g = goalsMap?.[item.id] ?? item.goal;
      if (g) reachGoal(g);
    }}
  >
    {form ? (
      <CtaInternal.Slot id={form.for}>
        <Form heading={forms.call.heading} fields={forms.call.fields} onSubmit={contact} goal={form.goal} />
      </CtaInternal.Slot>
    ) : null}
    {children}
  </CtaInternal>
);
Cta.Slot = CtaInternal.Slot;

// ---- Tracked Header: fires reachGoal on nav click ----
export const Header = (props: React.ComponentProps<typeof HeaderInternal>) => (
  <HeaderInternal {...props} onNavClick={(item) => reachGoal(goals.header.click, { name: item.label })} />
);

// ---- Tracked Calculator: fires reachGoal on row/col selection ----
export const Calculator = (props: React.ComponentProps<typeof CalculatorInternal>) => (
  <CalculatorInternal
    {...props}
    onRow={(row: Row) => reachGoal(goals.tariffs.calculator.pack, { name: row.name })}
    onCol={(col: Col) => reachGoal(goals.tariffs.calculator.period, { name: col.id })}
  />
);
