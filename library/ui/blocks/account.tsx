import Image from "next/image";
import { Enter } from "@ui/atoms/enter";

type Card = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  title: React.ReactNode;
  cards: Card[];
};

export const Account = ({ title, cards }: Props) => {
  return (
    <div className="flex flex-col items-center gap-12">
      <Enter variant="fade-up" duration={700}>
        {title}
      </Enter>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {cards.map((card, i) => (
          <Enter key={card.title} variant="fade-up" delay={i * 120} duration={600}>
            <div className="p-4 md:p-5 gap-3 md:gap-4 rounded-2xl bg-muted overflow-hidden grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3 h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="col-span-2 md:col-span-1 row-start-1 md:row-start-2">
                {card.title}
              </h3>

              <p className="row-start-2 col-start-1 md:row-start-3 md:col-start-1 min-w-0">
                {card.description}
              </p>

              <div className="row-start-2 col-start-2 md:row-start-1 md:col-start-1 relative w-full h-48 bg-muted shrink-0">
                <Image src={card.image} alt={card.title} width={340} height={200} className="full object-contain object-right md:object-center" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            </div>
          </Enter>
        ))}
      </div>
    </div>
  );
};

export default Account;