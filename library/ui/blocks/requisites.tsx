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
  bankHeading: string;
  accountLabel: string;
  company: Company;
  bank: Bank;
};

export const Requisites = ({ bankHeading, accountLabel, company, bank }: Props) => {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="space-y-3">
        <p className="text-lg font-semibold mb-3">{company.short}</p>
        <p>Юридический и фактический адрес: {company.addressFull}</p>
        <p>ИНН: {company.inn}</p>
        <p>КПП: {company.kpp}</p>
        <p>ОГРН: {company.ogrn}</p>
        <p>ОКПО: {company.okpo}</p>
      </div>
      <div className="space-y-3">
        <p className="text-lg font-semibold mb-3">{bankHeading}</p>
        <p>{accountLabel} {bank.account}</p>
        <p>Название: {bank.name}</p>
        <p>ИНН: {bank.inn}</p>
        <p>КПП: {bank.kpp}</p>
        <p>БИК: {bank.bik}</p>
        <p>Город: {bank.city}</p>
        <p>Корр. счёт: {bank.corr}</p>
      </div>
    </div>
  );
};

export default Requisites;
