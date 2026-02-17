import ImageNext from "next/image";
import { cn } from "@utils";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export const Image = ({ src, alt, width = 500, height = 350, className }: Props) => (
  <ImageNext
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={cn("rounded-2xl w-full h-auto max-md:max-h-[45vh] max-md:w-auto mx-auto", className)}
  />
);

export default Image;
