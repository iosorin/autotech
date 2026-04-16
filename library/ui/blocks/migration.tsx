import Image from "next/image";
import { RefreshCw } from "lucide-react";
import { Enter } from "@ui/atoms/enter";
import { cn } from "@utils";

type Props = {
  title: React.ReactNode;
  items: string[];
  images?: { src: string; alt: string }[];
  footer?: string;
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
};

export const Migration = ({
  title,
  items,
  images,
  footer,
  className,
  contentClassName,
  children,
}: Props) => {
  return (
    <>
      <div className={cn("center flex-col gap-8 md:gap-6 text-center", className)}>
        <div className="flex flex-col gap-3">
          {images && images.length > 0 && (
            <Enter variant="fade-up" delay={500} duration={600}>
              <div className="flex items-center justify-center gap-8">
                {images.map((img) => (
                  <Image
                    key={img.alt}
                    src={img.src}
                    alt={img.alt}
                    width={140}
                    height={48}
                    className="h-10 w-auto object-contain md:h-12"
                  />
                ))}
              </div>
            </Enter>
          )}


          <Enter variant="fade-up" delay={100} duration={600}>
            {title}
          </Enter>
        </div>

        <div className={cn("flex flex-wrap justify-center gap-3", contentClassName)}>
          {items.map((item, i) => (
            <Enter key={item} variant="scale-up" delay={200 + i * 80} duration={500}>
              <span className="inline-flex items-center rounded-full border px-6 py-3 text-lg font-medium">
                {item}
              </span>
            </Enter>
          ))}
        </div>

        {children}

        {footer && (
          <Enter variant="fade-up" delay={600} duration={600}>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              {footer}
            </p>
          </Enter>
        )}
      </div>
    </>
  );
};

export default Migration;
