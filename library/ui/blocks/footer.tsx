import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@ui/atoms/button";
import { cn } from "@utils";

type NavItem = { title: string; path: string; }
type Props = {
  title: string;
  logo: string;
  copyright: string;
  phone: string;
  email: string;
  telegram: { label: string; href: string; }
  nav: NavItem[];
  links: NavItem[];
  featured: NavItem;
  company: {
    name: string;
    inn: string;
    ogrn: string;
    addressLine1: string;
    addressLine2: string;
  };
  className?: string;
}

export const Footer = ({ title, logo, copyright, phone, email, telegram, nav, featured, company, links, className }: Props) => {
  return (
    <footer className="font-medium bg-background">
      <div className={cn("mx-auto px-4 py-10", className)}>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 group" title={title}>
              {logo &&
                <Image src={logo} alt={title} width={27} height={27} />
              }
              {title &&
                <span className="font-bold text-2xl text-foreground">
                  {title}
                </span>
              }
            </Link>
            {copyright &&
              <p className="text-sm text-muted-foreground">{copyright}</p>
            }
          </div>

          <div className="flex flex-col gap-1">
            {phone &&
              <Link
                href={`tel:${phone}`}
                className="underline hover:no-underline"
                title="Позвонить"
              >
                {phone}
              </Link>
            }
            {email &&
              <Link
                href={`mailto:${email}`}
                className="underline hover:no-underline"
                title="Написать на email"
              >
                {email}
              </Link>
            }
          </div>

          {telegram &&
            <Link
              href={telegram.href}
              target="_blank"
              className="underline hover:no-underline flex items-start gap-2"
              title="Написать в Telegram"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#2AABEE] fill-current flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.332-.373-.119l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z" />
              </svg>
              <span>{telegram.label}</span>
            </Link>
          }

          {nav.length > 0 &&
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
              {nav.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className="hover:underline"
                  title={link.title}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          }


          {featured &&
            <Button asChild variant="secondary">
              <Link href={featured.path} title={featured.title}>
                {featured.title}
                <ArrowRight />
              </Link>
            </Button>
          }
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row gap-4 justify-between text-sm">
          {company &&
            <div className="flex flex-col gap-1">
              <p>{company.name}</p>
              {company.inn &&
                <p>{"ИНН " + company.inn}</p>
              }
              {company.ogrn &&
                <p>{"ОГРН " + company.ogrn}</p>
              }
              {company.addressLine1 &&
                <p>{company.addressLine1}</p>
              }
              {company.addressLine2 &&
                <p>{company.addressLine2}</p>
              }
            </div>
          }

          {links.length > 0 &&
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  title={link.title}
                  className="underline hover:no-underline"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          }
        </div>
      </div>
    </footer>
  );
}

export default Footer;