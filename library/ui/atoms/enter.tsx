"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@utils";

type AnimationVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "scale-up" | "blur-in";

type Props = {
  children: any;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  threshold?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

export const Enter = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className,
  threshold = 0.15,
  once = true,
  style,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("animate-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("animate-visible");
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, once]);

  return (
    <div
      ref={ref}
      className={cn(`animate animate-${variant}`, className)}
      style={{ transitionDuration: `${duration}ms`, ...style }}
    >
      {children}
    </div>
  );
}

interface StaggerChildrenProps {
  children: any;
  staggerDelay?: number;
  variant?: AnimationVariant;
  duration?: number;
  className?: string;
  childClassName?: string;
  threshold?: number;
}

export const StaggerChildren = ({
  children,
  staggerDelay = 100,
  variant = "fade-up",
  duration = 500,
  className,
  childClassName,
  threshold = 0.1,
}: StaggerChildrenProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = el.querySelectorAll<HTMLElement>(".stagger-item");
          items.forEach((item, i) => {
            item.style.transitionDelay = `${i * staggerDelay}ms`;
            item.classList.add("animate-visible");
          });
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerDelay, threshold]);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
          <div
            key={i}
            className={cn(
              `stagger-item animate animate-${variant}`,
              childClassName
            )}
            style={{ transitionDuration: `${duration}ms` }}
          >
            {child}
          </div>
        ))
        : children}
    </div>
  );
}

export default Enter;