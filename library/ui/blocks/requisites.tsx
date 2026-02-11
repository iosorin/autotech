"use client";

type Company = {
  short: string;
  addressFull: string;
  inn: string;
  kpp: string;
  ogrn: string;
  okpo: string;
};

type Bank = {
  account: string;
  name: string;
  inn: string;
  kpp: string;
  bik: string;
  city: string;
  corr: string;
};

type Props = {
  id?: string;
  heading: string;
  bankHeading: string;
  accountLabel: string;
  company: Company;
  bank: Bank;
};

export function Requisites({ id, heading, bankHeading, accountLabel, company, bank }: Props) {
  return (
    <section id={id} className="px-4 pb-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        {heading}
      </h2>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">{company.short}</p>
          <p>Юридический и фактический адрес: {company.addressFull}</p>
          <p>ИНН: {company.inn}</p>
          <p>КПП: {company.kpp}</p>
          <p>ОГРН: {company.ogrn}</p>
          <p>ОКПО: {company.okpo}</p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">{bankHeading}</p>
          <p>{accountLabel} {bank.account}</p>
          <p>Название: {bank.name}</p>
          <p>ИНН: {bank.inn}</p>
          <p>КПП: {bank.kpp}</p>
          <p>БИК: {bank.bik}</p>
          <p>Город: {bank.city}</p>
          <p>Корр. счёт: {bank.corr}</p>
        </div>
      </div>
    </section>
  );
}
