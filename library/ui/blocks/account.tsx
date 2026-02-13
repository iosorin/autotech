"use client";

import Image from "next/image";
import { Enter } from "@ui/atoms/enter";

type Card = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
};

type Props = {
  titleLine1: string;
  titleLine2: string;
  descLine1: string;
  descLine2: string;
  subtitle: string;
  cards: Card[];
};

export const Account = ({ titleLine1, titleLine2, descLine1, descLine2, subtitle, cards }: Props) => {
  return (
    <>
      {/* Заголовок */}
      <Enter variant="fade-up" duration={600}>
        <div className="text-center mb-4">
          <p className="text-sm font-medium text-primary underline mb-3">{subtitle}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            {titleLine1}
            <br />
            {titleLine2}
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 text-balance">
          {descLine1}
          <br />
          {descLine2}
        </p>
      </Enter>

      {/* Карточки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <Enter key={card.title} variant="fade-up" delay={i * 120} duration={600}>
            <div className="rounded-2xl border border-border bg-white overflow-hidden flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              {/* Картинка с тегами */}
              <div className="relative h-40 bg-muted">
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                )}
                {/* Теги поверх картинки */}
                <div className="absolute inset-0 p-4 flex flex-wrap gap-2 content-start">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Текст */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-foreground mb-2 leading-snug">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </div>
          </Enter>
        ))}
      </div>
    </>
  );
};

export default Account;