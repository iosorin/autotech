"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "../atoms/button";
import { cn } from "@utils";

export type Video = {
  id: string;
  title: string;
  description: string;
  duration?: string;
  iframe: string;
  preview: string;
};

type More = {
  label: string;
  href: string;
  asLink?: boolean;
};

type Props = {
  items: Video[];
  more?: More;
  className?: string;
  hideDescription?: boolean;
  children?: React.ReactNode;
  light?: boolean;
};

function extractSrc(iframe: string): string {
  const match = iframe.match(/src="([^"]+)"/);
  return match?.[1] ?? "";
}

const Tile = ({ video, onPlay, hideDescription, light }: { video: Video; onPlay: (v: Video) => void; hideDescription?: boolean; light?: boolean }) => (
  <li className="min-w-0 flex flex-col">
    <button
      type="button"
      onClick={() => onPlay(video)}
      className="group relative block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
      aria-label={`Воспроизвести: ${video.title}`}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-sm">
        <Image
          src={video.preview}
          alt={video.title}
          fill
          className={cn("object-cover transition duration-300 group-hover:blur-0 group-hover:scale-[1.03]", light ? "brightness-[0.78] group-hover:brightness-[0.90] blur-[1px]" : "brightness-[0.65] group-hover:brightness-[0.7] blur-[1.5px]")}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4" aria-hidden>
          <span className="flex size-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm shadow-lg transition group-hover:scale-110 group-hover:bg-white/30 md:size-14">
            <Play className="size-5 fill-white text-white md:size-6 ml-0.5" />
          </span>
          <span className="text-center text-[18px] font-semibold text-white drop-shadow-md leading-snug max-w-[90%]">
            {video.title}
          </span>
        </span>
        {video.duration ? (
          <span
            className="pointer-events-none absolute bottom-2 right-2 z-10 rounded-md px-2 py-0.5 text-xs font-semibold tabular-nums tracking-wide text-white md:bottom-2.5 md:right-2.5 md:text-[13px] md:px-2.5 md:py-1"
            aria-hidden
          >
            {video.duration}
          </span>
        ) : null}
      </div>
    </button>
    {!hideDescription ? (
      <p className="mt-3 text-center text-[15pxx] text-foreground/70 leading-relaxed">
        {video.description}
      </p>
    ) : null}
  </li>
);

const VideoModal = ({ video, onClose }: { video: Video; onClose: () => void }) => {
  const handleOverlay = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  const src = useMemo(() => {
    const base = extractSrc(video.iframe);
    if (!base) return "";
    const sep = base.includes("?") ? "&" : "?";
    return base + sep + "autoplay=1";
  }, [video.iframe]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8 animate-in fade-in duration-200"
      onClick={handleOverlay}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div className="relative w-full max-w-5xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 md:-right-10 md:top-0 flex size-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="size-5" />
        </button>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
          <iframe
            src={src}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            allowFullScreen
          />
        </div>

        <p className="mt-4 text-center md:text-lg font-medium text-white/80">
          {video.title}
        </p>
      </div>
    </div>
  );
};

const Videos = ({ items, more, className, hideDescription, light, children }: Props) => {
  const [active, setActive] = useState<Video | null>(null);

  const handlePlay = useCallback((video: Video) => {
    setActive(video);
    document.body.style.overflow = "hidden";
  }, []);

  const handleClose = useCallback(() => {
    setActive(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      <div className="flex flex-col md:gap-5 gap-3 w-full max-w-full mx-auto">
        <ul className={cn("grid list-none gap-6 md:grid-cols-3 md:gap-10 p-0 m-0 w-full", items.length === 1 ? "md:grid-cols-1" : "md:grid-cols-3", className)}>
          {items.map((video) => (
            <Tile key={video.id} video={video} onPlay={handlePlay} hideDescription={hideDescription} light={light} />
          ))}
        </ul>

        {children}

        {more ? (
          <div className="flex justify-center">
            <Button variant={more.asLink ? "link" : "outline"} size="lg" asChild className="max-md:w-full md:min-w-cta">
              <Link href={more.href} className={cn(more.asLink ? "text-primary hover:text-primary/80 underline hover:no-underline text-xl" : "")}>{more.label}</Link>
            </Button>
          </div>
        ) : null}
      </div>

      {active ? <VideoModal video={active} onClose={handleClose} /> : null}
    </>
  );
};

Videos.Video = Tile;

export { Videos };