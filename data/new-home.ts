import type { IGrid } from "@ui/atoms/grid";
import { app } from "./app";
import { home } from "./pages/home";
// import contact from "@api/contact";

export const newHome = {
  hero: {
    items: [
      { name: "lead", type: "Lead", props: { tag: "h1", title: "Приложение для автомойки,\nдетейлинга и шиномонтажа", label: "Платформа Автотех" } },
      { name: "cta", type: "Cta", props: { items: [app.cta.start, app.cta.contact], } },
      {
        name: "telegram",
        type: "Card",
        props: {
          desc: app.cta.telegram.label,
          link: { href: app.cta.telegram.href, rel: "noopener noreferrer", target: "_blank", },
          icon: { name: "telegram" },
          className: "bg-gradient-telegram hover-opacity",
          variant: "row",
          white: true,
        },
      },
      {
        name: "tags", type: "Tags", props: {
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
      { name: "image", type: "Image", props: app.images.preview, },
      {
        name: "card", type: "Card", props: {
          title: "Легкий переход с других приложений",
          desc: "Автоматический перенос \n услуг и настроек",
          icon: { name: "RefreshCw" },
          className: "bg-gradient-white",
        },
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
  } satisfies IGrid,

  features: home.features.list.map((block) => {
    const half = Math.ceil(block.items.length / 2);
    const left = block.items.slice(0, half).map((x) => x.text);
    const right = block.items.slice(half).map((x) => x.text);
    const items: IGrid["items"] = [
      { name: "lead", type: "Lead", props: { title: block.title } },
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
          },
        ]
        : []),
      { name: "left", type: "Checklist", props: { items: left } },
      { name: "right", type: "Checklist", props: { items: right } },
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
      },
      ...home.account.cards.map((card, i) => ({
        name: `card-${i}`,
        type: "Card" as const,
        props: { title: card.title, desc: card.desc, image: card.image },
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
      },
      {
        name: "tireList",
        type: "Checklist",
        props: {
          title: home.tire.heading,
          items: home.tire.items,
        },
      },
      { name: "tireImg", type: "Image", props: home.tire.image },
      {
        name: "intDesc",
        type: "Checklist",
        props: {
          title: home.integrations.heading,
          desc: home.integrations.desc,
        },
      },
      { name: "intImg", type: "Image", props: home.integrations.image },
      {
        name: "secList",
        type: "Checklist",
        props: {
          title: home.security.heading,
          items: home.security.items,
        },
      },
      {
        name: "supportList",
        type: "Checklist",
        props: {
          title: home.support.heading,
          items: home.support.items,
        },
      },
      { name: "secImg", type: "Image", props: home.security.image },
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
      { name: "lead", type: "Lead", props: { title: home.devices.heading } },
      ...home.devices.items.map((item, i) => ({
        name: `btn-${i}`,
        type: "Button" as const,
        props: { label: item.label, icon: item.icon, size: "lg" as const, readonly: true },
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
      },
      ...home.migration.items.map((item, i) => ({
        name: `btn-${i}`,
        type: "Button" as const,
        props: { label: item.label, icon: item.icon, size: "lg" as const, readonly: true },
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
      },
      {
        name: "intro",
        type: "Checklist",
        props: {
          desc: home.clients.intro,
          items: home.clients.items,
        },
      },
      { name: "image", type: "Image", props: home.clients.image },
    ],
    areas: ["lead lead", "intro image"],
    mobileAreas: ["lead", "image", "intro"],
    cols: 2,
    gap: "lg",
  } satisfies IGrid,

  cta: {
    items: [
      { name: "lead", type: "Lead", props: { title: home.try.title } },
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
      { name: "lead", type: "Lead", props: { title: home.faq.heading } },
      { name: "faq", type: "Faq", props: { items: home.faq.items } },
    ],
    areas: ["lead", "faq"],
    mobileAreas: ["lead", "faq"],
    cols: 1,
    gap: "md",
  } satisfies IGrid,

  partners: {
    items: [
      { name: "lead", type: "Lead", props: { title: home.partners.heading } },
      {
        name: "partners",
        type: "Partners",
        props: {
          name: home.partners.name,
          nameSup: home.partners.nameSup,
          desc: home.partners.desc,
          note: home.partners.note,
        },
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
      },
      {
        name: "slider",
        type: "Slider",
        props: {
          prevLabel: home.testimonials.prevLabel,
          nextLabel: home.testimonials.nextLabel,
          items: home.testimonials.items,
        },
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
      { name: "lead", type: "Lead", props: { title: home.join.title } },
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
      },
    ],
    areas: ["lead", "link1 link2"],
    mobileAreas: ["lead", "link1", "link2"],
    cols: 2,
    gap: "md",
    className: "layered",
  } satisfies IGrid,
};
