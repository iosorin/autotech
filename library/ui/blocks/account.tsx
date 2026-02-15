import { Enter } from "@ui/atoms/enter";

type Card = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  titleLine1?: string;
  titleLine2?: string;
  descLine1?: string;
  descLine2?: string;
  subtitle?: string;
  cards: Card[];
};

export const Account = ({ titleLine1, titleLine2, descLine1, descLine2, subtitle, cards }: Props) => {
  return (
    <div className="flex flex-col items-center gap-12">
      {/* <Enter variant="fade-up" duration={700}>
        <div className="text-center">
          <p className="text-lg font-medium text-primary">{subtitle}</p>
          <h1 className="my-3">
            {titleLine1}
            <br />
            {titleLine2}
          </h1>
          <p className="text-lg text-center text-balance">
            {descLine1}
            <br />
            {descLine2}
          </p>
        </div>
      </Enter> */}

      {/* Карточки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <Enter key={card.title} variant="fade-up" delay={i * 120} duration={600}>
            <div className="p-5 gap-4 rounded-2xl bg-muted overflow-hidden flex flex-col h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div
                className="w-[110%] -ml-5 h-40 bg-muted bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'contain',
                }}
              />

              {/* Текст */}
              <div className="flex flex-col flex-1 gap-3">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </Enter>
        ))}
      </div>
    </div>
  );
};

export default Account;