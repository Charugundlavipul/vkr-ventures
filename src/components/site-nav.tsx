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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/12 bg-background/60 backdrop-blur-[22px] transition-all">
        <div className={cn(shell, "flex items-center justify-between gap-8 py-2 max-md:py-2.5")}>
          <div className="flex items-center justify-between gap-4 max-md:w-full">
            <Link className="inline-flex items-center z-50" href={brandHref} onClick={closeMenu}>
              <Image
                alt="VKR Ventures"
                className="h-10 w-auto md:h-[4.2rem] rounded-lg mix-blend-screen opacity-90 transition-opacity hover:opacity-100"
                height={408}
                priority
                sizes="(max-width: 767px) 110px, 156px"
                src="/images/vkr-ventures.jpeg"
                width={612}
              />
              <span className="sr-only">VKR Ventures</span>
            </Link>

            <button
              aria-controls="site-nav-links"
              aria-expanded={menuOpen}
              className="hidden items-center justify-center rounded-full border border-white/16 bg-white/4 w-11 h-11 text-paper max-md:flex z-50 transition-colors hover:bg-white/10"
              onClick={toggleMenu}
              type="button"
            >
              <span className="sr-only">Menu</span>
              <div className="relative w-5 h-[14px] flex flex-col justify-between overflow-hidden">
                <span className={cn("h-[1.5px] w-full bg-current transition-all duration-300 origin-left", menuOpen ? "rotate-[42deg] translate-x-[2.5px]" : "")} />
                <span className={cn("h-[1.5px] w-full bg-current transition-all duration-300", menuOpen ? "opacity-0 translate-x-4" : "")} />
                <span className={cn("h-[1.5px] w-full bg-current transition-all duration-300 origin-left", menuOpen ? "-rotate-[42deg] translate-x-[2.5px]" : "")} />
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="flex max-md:hidden items-center gap-6">
            {items.map((item) => (
              <Link
                aria-current={item.current ? "page" : undefined}
                className={cn(
                  item.cta
                    ? `${navText} inline-flex items-center justify-center rounded-full border border-white/25 bg-paper px-[1.35rem] py-[0.95rem] text-[#15120f] shadow-[0_16px_40px_rgba(8,7,5,0.22)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:bg-[#fff9f1]`
                    : `${navText} text-paper/78 whitespace-nowrap transition-colors duration-200 hover:text-[#fff8ee]`
                )}
                href={item.href}
                key={`desktop-${item.label}-${item.href}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-6 p-6 w-full max-w-sm">
          {items.map((item, i) => (
            <Link
              aria-current={item.current ? "page" : undefined}
              className={cn(
                "font-display text-[2rem] leading-none tracking-[-0.02em] transition-all duration-300",
                item.cta
                  ? "mt-4 rounded-full border border-white/25 bg-paper px-8 py-4 text-base tracking-[0.18em] uppercase text-[#15120f] hover:bg-[#fff9f1]"
                  : "text-paper/80 hover:text-white"
              )}
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transitionDelay: `${menuOpen ? i * 60 + 100 : 0}ms`,
              }}
              href={item.href}
              key={`mobile-${item.label}-${item.href}`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

