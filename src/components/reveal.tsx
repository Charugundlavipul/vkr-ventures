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
import styles from "./reveal.module.css";

type RevealDistance = "up" | "left" | "right" | "none";

type RevealProps<T extends ElementType> = {
  as?: T;
  className?: string;
  delay?: number;
  distance?: RevealDistance;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

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
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  const mergedClassName = className
    ? `${styles.reveal} ${className}`
    : styles.reveal;

  return (
    <Component
      {...rest}
      ref={ref}
      className={mergedClassName}
      data-distance={distance}
      data-visible={visible}
      style={mergedStyle}
    />
  );
}
