import type { IGrid } from "@ui/atoms/grid";
import { app } from "./app";
import { home } from "./pages/home";
// import contact from "@api/contact";

export const newHome = {
  hero: {
    items: [
      {
        name: "lead",
        type: "Lead",
        props: { tag: "h1", title: "Приложение для автомойки,\nдетейлинга и шиномонтажа", label: "Платформа Автотех", className: "mb-2" },
        className: "animate animate-fade-up",
      },
      {
        name: "cta",
        type: "Cta",
        props: { items: [app.cta.start, app.cta.contact], },
        className: "animate animate-fade-up [transition-delay:75ms]",
      },
      {
        name: "telegram",
        type: "Card",
        props: {
          desc: app.cta.telegram.label,
          link: { href: app.cta.telegram.href, rel: "noopener noreferrer", target: "_blank", },
          icon: { name: "telegram", className: "size-12" },
          className: "bg-gradient-telegram md:px-5 md:py-4 hover-opacity md:max-w-[340px]",
          variant: "row",
          white: true,
        },
        className: "self-start animate animate-fade-left [transition-delay:150ms]",
      },
      {
        name: "tags", type: "Tags", className: "self-end animate animate-fade-right [transition-delay:100ms]", props: {
          tags: [{
            items: [
              { icon: { name: "scan-line" }, label: "Распознавание марок и номеров" },
              { icon: { name: "chart-pie" }, label: "Статистика и аналитика" },
              { icon: { name: "calculator" }, label: "Гибкий расчет зарплат" },
              { icon: { name: "calendar-check" }, label: "Онлайн-запись" },
              { icon: { name: "users" }, label: "CRM" },
            ],
            itemClassName: "bg-white [&_svg]:text-primary",
          }]
        },
      },
      { name: "image", type: "Image", props: app.images.preview, className: "animate animate-scale-up [transition-delay:200ms]" },
      {
        name: "card", type: "Card", props: {
          title: "Легкий переход с других приложений",
          desc: "Автоматический перенос \n услуг и настроек",
          icon: { name: "RefreshCw" },
          className: "bg-gradient-white",
        },
        className: "animate animate-fade-up [transition-delay:250ms]",
      },
    ],
    areas: [
      "lead     lead     lead",
      "cta      cta      cta",
      "tags     image    card",
      "telegram image    card",
    ],
    mobileAreas: [
      "lead",
      "cta",
      "tags",
      "image",
      "card",
      "telegram",
    ],
    className: "items-center",
    gap: "md"
  } satisfies IGrid,


  features: home.features.list.map((block) => {
    const half = Math.ceil(block.items.length / 2);
    const left = block.items.slice(0, half).map((x) => x.text);
    const right = block.items.slice(half).map((x) => x.text);
    const items: IGrid["items"] = [
      { name: "lead", type: "Lead", props: { title: block.title }, className: "animate animate-fade-up" },
      ...(block.image
        ? [
          {
            name: "image",
            type: "Image" as const,
            props: {
              src: block.image.src,
              alt: block.image.alt ?? "",
              width: 435,
              height: 664,
              className: "w-full h-auto mx-auto",
            },
            className: "animate animate-scale-up [transition-delay:100ms]",
          },
        ]
        : []),
      { name: "left", type: "Checklist", props: { items: left }, className: "animate animate-fade-left [transition-delay:75ms]" },
      { name: "right", type: "Checklist", props: { items: right }, className: "animate animate-fade-right [transition-delay:150ms]" },
    ];
    const areas = block.image
      ? ["lead lead", "image left right"]
      : ["lead lead", "left right"];
    const mobileAreas = block.image
      ? ["lead", "image", "left", "right"]
      : ["lead", "left", "right"];
    return {
      id: block.id,
      label: block.label,
      grid: {
        items,
        areas,
        mobileAreas,
        cols: block.image ? 3 : 2,
        gap: "lg",
      } satisfies IGrid,
    };
  }),

  account: {
    items: [
      {
        name: "lead",
        type: "Lead",
        props: {
          label: home.account.label,
          title: home.account.title,
          desc: home.account.desc,
        },
        className: "animate animate-fade-up",
      },
      ...home.account.cards.map((card, i) => ({
        name: `card-${i}`,
        type: "Card" as const,
        props: { title: card.title, desc: card.desc, image: card.image },
        className: `animate animate-fade-up [transition-delay:${75 + i * 80}ms]`,
      })),
    ],
    areas: ["lead lead lead", "card-0 card-1 card-2"],
    mobileAreas: ["lead", "card-0", "card-1", "card-2"],
    cols: 3,
    gap: "lg",
  } satisfies IGrid,

  extra: {
    items: [
      {
        name: "title",
        type: "Lead",
        props: {
          title:
            (home.extra.title?.text ?? "") +
            (home.extra.title?.highlight ?? "") +
            (home.extra.title?.suffix ?? ""),
        },
        className: "animate animate-fade-up",
      },
      {
        name: "tireList",
        type: "Checklist",
        props: {
          title: home.tire.heading,
          items: home.tire.items,
        },
        className: "animate animate-fade-left [transition-delay:75ms]",
      },
      { name: "tireImg", type: "Image", props: home.tire.image, className: "animate animate-scale-up [transition-delay:100ms]" },
      {
        name: "intDesc",
        type: "Checklist",
        props: {
          title: home.integrations.heading,
          desc: home.integrations.desc,
        },
        className: "animate animate-fade-right [transition-delay:125ms]",
      },
      { name: "intImg", type: "Image", props: home.integrations.image, className: "animate animate-fade-left [transition-delay:150ms]" },
      {
        name: "secList",
        type: "Checklist",
        props: {
          title: home.security.heading,
          items: home.security.items,
        },
        className: "animate animate-fade-up [transition-delay:175ms]",
      },
      {
        name: "supportList",
        type: "Checklist",
        props: {
          title: home.support.heading,
          items: home.support.items,
        },
        className: "animate animate-fade-up [transition-delay:200ms]",
      },
      { name: "secImg", type: "Image", props: home.security.image, className: "animate animate-scale-up [transition-delay:225ms]" },
    ],
    areas: [
      "title title .",
      "tireList tireImg .",
      "intDesc intImg .",
      "secList supportList secImg",
    ],
    mobileAreas: [
      "title",
      "tireList",
      "tireImg",
      "intDesc",
      "intImg",
      "secList",
      "supportList",
      "secImg",
    ],
    cols: 3,
    gap: "lg",
  } satisfies IGrid,

  devices: {
    items: [
      { name: "lead", type: "Lead", props: { title: home.devices.heading }, className: "animate animate-fade-up" },
      ...home.devices.items.map((item, i) => ({
        name: `btn-${i}`,
        type: "Button" as const,
        props: { label: item.label, icon: item.icon, size: "lg" as const, readonly: true },
        className: `animate animate-fade-up [transition-delay:${75 + i * 80}ms]`,
      })),
    ],
    areas: ["lead lead lead", "btn-0 btn-1 btn-2"],
    mobileAreas: ["lead", "btn-0", "btn-1", "btn-2"],
    cols: 3,
    gap: "md",
  } satisfies IGrid,

  migration: {
    items: [
      {
        name: "lead",
        type: "Lead",
        props: {
          title: home.migration.heading,
          desc: home.migration.desc,
          icon: home.migration.icon,
        },
        className: "animate animate-fade-up",
      },
      ...home.migration.items.map((item, i) => ({
        name: `btn-${i}`,
        type: "Button" as const,
        props: { label: item.label, icon: item.icon, size: "lg" as const, readonly: true },
        className: `animate animate-fade-up [transition-delay:${75 + i * 60}ms]`,
      })),
    ],
    areas: ["lead lead lead lead", "btn-0 btn-1 btn-2 btn-3"],
    mobileAreas: ["lead", "btn-0", "btn-1", "btn-2", "btn-3"],
    cols: 4,
    gap: "md",
    className: "layered",
  } satisfies IGrid,

  clients: {
    items: [
      {
        name: "lead",
        type: "Lead",
        props: {
          primary: true,
          label: home.clients.subtitle,
          title: home.clients.title,
        },
        className: "animate animate-fade-up",
      },
      {
        name: "intro",
        type: "Checklist",
        props: {
          desc: home.clients.intro,
          items: home.clients.items,
        },
        className: "animate animate-fade-left [transition-delay:75ms]",
      },
      { name: "image", type: "Image", props: home.clients.image, className: "animate animate-fade-right [transition-delay:100ms]" },
    ],
    areas: ["lead lead", "intro image"],
    mobileAreas: ["lead", "image", "intro"],
    cols: 2,
    gap: "lg",
  } satisfies IGrid,

  cta: {
    items: [
      { name: "lead", type: "Lead", props: { title: home.try.title }, className: "animate animate-fade-up" },
      {
        name: "link1",
        type: "Link",
        props: {
          href: app.cta.start.href,
          label: app.cta.start.label,
          target: "_blank",
          rel: "noopener noreferrer",
          className:
            "bg-primary text-primary-foreground hover:opacity-85 h-[62px] px-[26px] text-[22px] rounded-full",
        },
        className: "animate animate-fade-up [transition-delay:75ms]",
      },
      {
        name: "link2",
        type: "Link",
        props: {
          href: "#contact",
          label: app.cta.contact.label,
          className:
            "border border-secondary bg-transparent hover:bg-secondary h-[62px] px-[26px] text-[22px] rounded-full",
        },
        className: "animate animate-fade-up [transition-delay:150ms]",
      },
    ],
    areas: ["lead", "link1 link2"],
    mobileAreas: ["lead", "link1", "link2"],
    cols: 2,
    gap: "md",
    className: "layered",
  } satisfies IGrid,

  faq: {
    items: [
      { name: "lead", type: "Lead", props: { title: home.faq.heading }, className: "animate animate-fade-up" },
      { name: "faq", type: "Faq", props: { items: home.faq.items }, className: "animate animate-fade-up [transition-delay:75ms]" },
    ],
    areas: ["lead", "faq"],
    mobileAreas: ["lead", "faq"],
    cols: 1,
    gap: "md",
  } satisfies IGrid,

  partners: {
    items: [
      { name: "lead", type: "Lead", props: { title: home.partners.heading }, className: "animate animate-fade-up" },
      {
        name: "partners",
        type: "Partners",
        props: {
          name: home.partners.name,
          nameSup: home.partners.nameSup,
          desc: home.partners.desc,
          note: home.partners.note,
        },
        className: "animate animate-fade-up [transition-delay:75ms]",
      },
    ],
    areas: ["lead", "partners"],
    mobileAreas: ["lead", "partners"],
    cols: 1,
    gap: "md",
  } satisfies IGrid,

  testimonials: {
    items: [
      {
        name: "lead",
        type: "Lead",
        props: { title: home.testimonials.heading },
        className: "animate animate-fade-up",
      },
      {
        name: "slider",
        type: "Slider",
        props: {
          prevLabel: home.testimonials.prevLabel,
          nextLabel: home.testimonials.nextLabel,
          items: home.testimonials.items,
        },
        className: "animate animate-fade-up [transition-delay:75ms]",
      },
    ],
    areas: ["lead", "slider"],
    mobileAreas: ["lead", "slider"],
    cols: 1,
    gap: "md",
    className: "layered",
  } satisfies IGrid,

  join: {
    items: [
      { name: "lead", type: "Lead", props: { title: home.join.title }, className: "animate animate-fade-up" },
      {
        name: "link1",
        type: "Link",
        props: {
          href: app.cta.start.href,
          label: app.cta.start.label,
          target: "_blank",
          rel: "noopener noreferrer",
          className:
            "bg-primary text-primary-foreground hover:opacity-85 h-[62px] px-[26px] text-[22px] rounded-full",
        },
        className: "animate animate-fade-up [transition-delay:75ms]",
      },
      {
        name: "link2",
        type: "Link",
        props: {
          href: "#contact",
          label: app.cta.contact.label,
          className:
            "border border-secondary bg-transparent hover:bg-secondary h-[62px] px-[26px] text-[22px] rounded-full",
        },
        className: "animate animate-fade-up [transition-delay:150ms]",
      },
    ],
    areas: ["lead", "link1 link2"],
    mobileAreas: ["lead", "link1", "link2"],
    cols: 2,
    gap: "md",
    className: "layered",
  } satisfies IGrid,
};
