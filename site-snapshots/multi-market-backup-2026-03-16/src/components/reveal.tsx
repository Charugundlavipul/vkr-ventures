"use client";

import {
  startTransition,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
} from "react";

type RevealDistance = "up" | "left" | "right" | "none";

type RevealProps<T extends ElementType> = {
  as?: T;
  className?: string;
  delay?: number;
  distance?: RevealDistance;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

const distanceClasses: Record<RevealDistance, string> = {
  left: "translate-y-0 -translate-x-[52px]",
  none: "translate-x-0 translate-y-0",
  right: "translate-y-0 translate-x-[52px]",
  up: "translate-x-0 translate-y-10",
};

const cn = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export function Reveal<T extends ElementType = "div">({
  as,
  className,
  delay = 0,
  distance = "up",
  style,
  ...rest
}: RevealProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (visible) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        startTransition(() => {
          setVisible(true);
        });
        observer.disconnect();
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [visible]);

  const mergedStyle = {
    ...style,
    transitionDelay: `${delay}ms`,
  } as CSSProperties;

  return (
    <Component
      {...rest}
      ref={ref}
      className={cn(
        "will-change-transform will-change-opacity transition-[opacity,transform] duration-[760ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none data-[visible=true]:translate-x-0 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
        visible ? "translate-x-0 translate-y-0 opacity-100" : cn("opacity-0", distanceClasses[distance]),
        className,
      )}
      data-visible={visible}
      style={mergedStyle}
    />
  );
}
