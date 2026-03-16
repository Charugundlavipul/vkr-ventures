"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  cta?: boolean;
  current?: boolean;
  href: string;
  label: string;
};

type SiteNavProps = {
  brandHref: string;
  items: NavItem[];
};

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const shell =
  "mx-auto w-[min(1180px,calc(100vw-48px))] max-md:w-[min(1180px,calc(100vw-32px))]";

const navText = "text-[0.72rem] uppercase tracking-[0.2em] leading-[1.3]";

export function SiteNav({ brandHref, items }: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/12 bg-background/55 backdrop-blur-[22px]">
      <div
        className={cn(
          shell,
          "flex items-center justify-between gap-8 py-[1.15rem] max-md:relative max-md:flex max-md:py-4",
        )}
      >
        <div className="flex w-full items-center justify-between gap-4">
          <Link className="inline-flex items-center" href={brandHref} onClick={closeMenu}>
            <Image
              alt="VKR Ventures"
              className="h-12 w-auto md:h-[3.8rem]"
              height={408}
              priority
              sizes="(max-width: 767px) 132px, 156px"
              src="/images/vkr-ventures.png"
              width={612}
            />
            <span className="sr-only">VKR Ventures</span>
          </Link>

          <button
            aria-controls="site-nav-links"
            aria-expanded={menuOpen}
            className="hidden items-center gap-3 rounded-full border border-white/16 bg-white/4 px-4 py-3 text-paper max-md:inline-flex"
            onClick={toggleMenu}
            type="button"
          >
            <span className={cn(navText, "text-paper/82")}>Menu</span>
            <span aria-hidden="true" className="grid gap-[0.22rem]">
              <span className="h-px w-4 bg-current" />
              <span className="h-px w-4 bg-current" />
              <span className="h-px w-4 bg-current" />
            </span>
          </button>
        </div>

        <div
          className={cn(
            "flex max-md:absolute max-md:left-0 max-md:right-0 max-md:top-[calc(100%+0.75rem)] max-md:z-50 max-md:px-0 max-md:transition-[opacity,transform] max-md:duration-300 max-md:ease-[cubic-bezier(0.22,1,0.36,1)]",
            menuOpen
              ? "max-md:pointer-events-auto max-md:translate-y-0 max-md:opacity-100"
              : "max-md:pointer-events-none max-md:-translate-y-2 max-md:opacity-0",
          )}
          id="site-nav-links"
        >
          <div className="flex items-center gap-6 max-md:grid max-md:w-full max-md:gap-1 max-md:rounded-[1.2rem] max-md:border max-md:border-white/12 max-md:bg-background/92 max-md:p-4 max-md:shadow-[0_24px_48px_rgba(0,0,0,0.24)]">
            {items.map((item) => (
              <Link
                aria-current={item.current ? "page" : undefined}
                className={cn(
                  item.cta
                    ? `${navText} inline-flex items-center justify-center rounded-full border border-white/25 bg-paper px-[1.35rem] py-[0.95rem] text-[#15120f] shadow-[0_16px_40px_rgba(8,7,5,0.22)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:bg-[#fff9f1] max-md:mt-2 max-md:w-full`
                    : `${navText} text-paper/78 transition-colors duration-200 hover:text-[#fff8ee] max-md:block max-md:px-1 max-md:py-3`,
                )}
                href={item.href}
                key={`${item.label}-${item.href}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
