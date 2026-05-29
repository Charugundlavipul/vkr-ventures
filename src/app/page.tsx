import Link from "next/link";
import { Reveal } from "../components/reveal";
import { SiteNav } from "../components/site-nav";

/* ─── Data ──────────────────────────────────────────── */

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Long-Term", href: "/#long-term" },
  { label: "Short-Term", href: "/#short-term" },
  { label: "Markets", href: "/#markets" },
  { label: "Contact", href: "/contact", cta: true },
];

const guides = [
  {
    title: "Sevierville",
    copy: "Gateway inventory for Smokies demand and stay-driven revenue.",
    image: "/images/guide-sevierville.png",
  },
  {
    title: "Gatlinburg",
    copy: "Hospitality-led product where experience and upkeep drive returns.",
    image: "/images/guide-gatlinburg.png",
  },
  {
    title: "Charlotte",
    copy: "Urban rental demand built on neighborhood identity and access.",
    image: "/images/guide-charlotte.png",
  },
  {
    title: "Concord",
    copy: "Charlotte-region practicality with room for durable long-term holds.",
    image: "/images/guide-concord.png",
  },
];

const marketTape = [
  "Pigeon Forge",
  "Downtown Sevierville",
  "Wears Valley",
  "Knoxville",
  "South End",
  "NoDa",
  "Plaza Midwood",
  "Concord",
  "Charlotte Metro",
];

/* ─── Tokens ────────────────────────────────────────── */

const shell =
  "mx-auto w-[min(1180px,calc(100vw-48px))] max-md:w-[min(1180px,calc(100vw-32px))]";
const section = "relative py-28 max-md:py-20 overflow-clip";
const label = "text-[0.72rem] uppercase tracking-[0.2em] leading-[1.3]";
const title =
  "font-display text-[clamp(1.8rem,3.2vw,2.4rem)] font-medium leading-[1.05] tracking-[-0.04em]";
const copy = "text-[clamp(1rem,1.8vw,1.08rem)] leading-[1.9]";
const primaryButton =
  "inline-flex items-center justify-center rounded-full border border-white/25 bg-paper px-[1.45rem] py-4 text-[0.8rem] uppercase tracking-[0.18em] text-[#15120f] shadow-[0_16px_40px_rgba(8,7,5,0.22)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:bg-[#fff9f1]";
const secondaryButton =
  "inline-flex items-center justify-center rounded-full border border-white/24 bg-transparent px-[1.45rem] py-4 text-[0.8rem] uppercase tracking-[0.18em] text-paper transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-white/42 hover:bg-white/8";
const darkCard =
  "border border-white/12 bg-white/4 shadow-[0_28px_60px_rgba(0,0,0,0.16)] backdrop-blur-[18px]";

/* ─── Page ──────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full flex flex-col">
      <header className="relative overflow-clip">
        <SiteNav brandHref="/#top" items={navItems} />

        {/* ═══════ HERO ═══════ */}
        <section className="relative min-h-[clamp(680px,88svh,860px)]" id="top">
          <div className="absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
            <div
              className="absolute inset-0 scale-[1.02] bg-cover bg-center"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 22%, rgba(240, 201, 141, 0.16), transparent 26%), linear-gradient(180deg, rgba(13, 11, 8, 0.04) 0%, rgba(13, 11, 8, 0.22) 100%), url('/images/hero-ridge.png')",
              }}
            />
            <div className="absolute left-1/2 top-[22%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(197,143,82,0.22),transparent_68%)] blur-[24px]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,11,8,0.2)_0%,rgba(13,11,8,0.48)_100%),linear-gradient(90deg,rgba(13,11,8,0.48)_0%,rgba(13,11,8,0.26)_50%,rgba(13,11,8,0.48)_100%)] max-md:bg-[linear-gradient(180deg,rgba(13,11,8,0.4)_0%,rgba(13,11,8,0.42)_38%,rgba(13,11,8,0.68)_100%)]" />
          </div>

          <div className={shell}>
            <div className="relative z-[3] grid min-h-[clamp(680px,88svh,860px)] place-items-center py-24 text-center max-md:min-h-[clamp(620px,82svh,760px)] max-md:py-20">
              <div className="grid justify-items-center gap-5">
                <span className={`${label} text-paper/72`}>VKR Ventures</span>

                <h1 className="max-w-[16ch] font-display text-[clamp(3rem,6.2vw,5.2rem)] leading-[0.92] tracking-[-0.04em] text-[#fff8ee] text-balance">
                  Turning Properties into Trusted Stays
                </h1>

                <p className="max-w-[42rem] text-[clamp(1rem,1.7vw,1.08rem)] leading-[1.8] text-[#fff8ee]/82 max-md:text-[0.95rem] max-md:leading-[1.7] max-md:px-2">
                  Based in Sevierville, VKR Ventures specializes in both short-term
                  vacation rentals and long-term residential properties across
                  Tennessee and the Charlotte region.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-2">
                  <a className={primaryButton} href="#long-term">
                    Long-term rentals
                  </a>
                  <a className={secondaryButton} href="#short-term">
                    Vacation rentals
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="flex flex-col">
        {/* ═══════ ABOUT — Clean, concise ═══════ */}
        <section className={`${section} pb-14 bg-[radial-gradient(ellipse_80%_60%_at_30%_20%,rgba(237,228,214,0.5),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(197,143,82,0.06),transparent_50%),linear-gradient(180deg,#faf7f3_0%,#f5f0ea_100%)] text-ink`} id="about">
          <div className={shell}>
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 max-xl:grid-cols-1">
              <Reveal className="grid gap-4" distance="left">
                <div
                  className="group relative grid min-h-[30rem] content-end gap-3 overflow-hidden border border-ink/8 bg-paper p-6 shadow-[0_28px_60px_rgba(24,19,14,0.08)] transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2"
                  style={{ backgroundImage: "url('/images/visual-operating-base.png')" }}
                >
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/visual-operating-base.png')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <span className={`${label} relative z-[1] text-paper/70`}>Operating Base</span>
                  <h3 className="relative z-[1] font-display text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.05] tracking-[-0.03em] text-paper">
                    Sevierville anchored
                  </h3>
                  <p className={`${copy} relative z-[1] text-paper/78`}>
                    A Smokies-facing presence built around rental operations,
                    stay quality, and assets that hold value year-round.
                  </p>
                </div>
              </Reveal>

              <Reveal className="grid content-center gap-6 pt-1" delay={120} distance="right">
                <p className={`${label} text-ink/52`}>About VKR</p>
                <h2 className={`${title} max-w-[24ch]`}>
                  Based in Sevierville, with a Charlotte-region footprint.
                </h2>
                <p className={`${copy} max-w-[40rem] leading-[1.75] text-ink/76`}>
                  VKR Ventures is a rental-focused business founded on a simple conviction:
                  own carefully, operate consistently, and let disciplined holds compound
                  over time.
                </p>
                <p className={`${copy} max-w-[40rem] leading-[1.75] text-ink/76`}>
                  From our base in Sevierville, Tennessee, we manage properties across
                  the Smokies and the Charlotte metro — selecting assets for location
                  strength, operating fit, and long-term hold quality.
                </p>

                <div className="mt-2 grid grid-cols-2 gap-4 max-md:grid-cols-1">
                  {[
                    { label: "Founded", value: "Sevierville, Tennessee" },
                    { label: "Regional Reach", value: "Greater Charlotte Area" },
                    { label: "Strategy", value: "Buy, hold, operate" },
                    { label: "Hospitality Brand", value: "NirvanaLuxe" },
                  ].map((fact) => (
                    <article
                      className="grid gap-2 border border-ink/8 bg-white/82 p-[1.35rem] shadow-[0_28px_60px_rgba(24,19,14,0.08)] backdrop-blur-[12px] transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2"
                      key={fact.label}
                    >
                      <span className={`${label} text-ink/50`}>{fact.label}</span>
                      <strong className="text-base leading-[1.4] text-ink">{fact.value}</strong>
                    </article>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════ DUAL-FOCUS SHOWCASE ═══════ */}
        <section className="relative bg-background py-28 max-md:py-20 overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute left-[15%] top-[20%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(197,143,82,0.1),transparent_60%)] blur-[60px] pointer-events-none" aria-hidden="true" />
          <div className="absolute right-[10%] bottom-[15%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(197,143,82,0.06),transparent_65%)] blur-[40px] pointer-events-none" aria-hidden="true" />

          <div className={shell}>
            {/* Section header */}
            <Reveal className="relative z-10 mx-auto max-w-[52rem] text-center grid gap-5 mb-16 max-md:mb-12">
              <p className={`${label} text-accent`}>What We Do</p>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.95] tracking-[-0.04em] text-[#fff8ee] text-balance">
                Two rental models.<br />
                One disciplined approach.
              </h2>
              <p className={`${copy} mx-auto max-w-[38rem] text-paper/64`}>
                VKR Ventures operates across both long-term residential and short-term
                vacation rental markets — giving investors and property owners a single
                partner for the full spectrum of rental income.
              </p>
            </Reveal>

            {/* Two large preview cards */}
            <div className="grid grid-cols-2 gap-5 max-xl:grid-cols-1">

              {/* Long-Term Card */}
              <Reveal distance="left">
                <a href="#long-term" className="group relative flex flex-col justify-between min-h-[32rem] overflow-hidden border border-white/12 p-8 shadow-[0_28px_60px_rgba(0,0,0,0.2)] transition duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-white/20 max-md:min-h-[28rem] max-md:p-6 max-md:gap-8">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]" style={{ backgroundImage: "url('/images/showcase-ltr.png')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b08]/95 via-[#0d0b08]/60 to-[#0d0b08]/20" />

                  {/* Top badge */}
                  <div className="relative z-10 flex items-start">
                    <span className="rounded-full border border-white/14 bg-white/8 backdrop-blur-sm px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-paper/80">
                      Greater Charlotte Area
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 grid gap-4 mt-auto">
                    <span className={`${label} text-[#fff8ee]/70`}>Long-Term Rentals</span>
                    <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.02] tracking-[-0.03em] text-[#fff8ee]">
                      Residential properties built for lease-backed stability
                    </h3>
                    <p className={`${copy} text-paper/68 max-w-[28rem]`}>
                      Townhomes, duplexes, and single-family rentals in high-growth
                      Charlotte-region neighborhoods — optimized for tenant retention
                      and long-term asset appreciation.
                    </p>

                    {/* Stats row */}
                    <div className="flex gap-6 mt-2 flex-wrap">
                      {[
                        { stat: "Charlotte", detail: "Metro focus" },
                        { stat: "Lease-backed", detail: "Income model" },
                        { stat: "Hold", detail: "Strategy" },
                      ].map((s) => (
                        <div key={s.stat} className="grid gap-0.5">
                          <span className="text-sm font-semibold text-accent">{s.stat}</span>
                          <span className="text-[0.68rem] uppercase tracking-widest text-paper/40">{s.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>

              {/* Short-Term Card */}
              <Reveal distance="right" delay={140}>
                <a href="#short-term" className="group relative flex flex-col justify-between min-h-[32rem] overflow-hidden border border-white/12 p-8 shadow-[0_28px_60px_rgba(0,0,0,0.2)] transition duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-white/20 max-md:min-h-[28rem] max-md:p-6 max-md:gap-8">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]" style={{ backgroundImage: "url('/images/showcase-str.png')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b08]/95 via-[#0d0b08]/60 to-[#0d0b08]/20" />

                  {/* Top badges */}
                  <div className="relative z-10 flex items-start justify-between flex-wrap gap-2">
                    <span className="rounded-full border border-white/14 bg-white/8 backdrop-blur-sm px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-paper/80">
                      Smokies & Lake Norman
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 grid gap-4 mt-auto">
                    <span className={`${label} text-[#fff8ee]/70`}>Vacation Rentals</span>
                    <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.02] tracking-[-0.03em] text-[#fff8ee]">
                      Luxury vacation stays curated by NirvanaLuxe
                    </h3>
                    <p className={`${copy} text-paper/68 max-w-[28rem]`}>
                      Premium mountain cabins and lakefront retreats —
                      with direct booking, dynamic pricing, professional photography,
                      and 24/7 concierge-level guest care.
                    </p>

                    {/* Stats row */}
                    <div className="flex gap-6 mt-2 flex-wrap">
                      {[
                        { stat: "Smokies", detail: "Primary market" },
                        { stat: "Dynamic", detail: "Pricing model" },
                        { stat: "24/7", detail: "Guest support" },
                      ].map((s) => (
                        <div key={s.stat} className="grid gap-0.5">
                          <span className="text-sm font-semibold text-[#fff8ee]">{s.stat}</span>
                          <span className="text-[0.68rem] uppercase tracking-widest text-paper/40">{s.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            LONG-TERM RENTALS — Full independent section
        ═══════════════════════════════════════════════════════════════ */}
        <div className="h-px bg-[linear-gradient(90deg,transparent_5%,rgba(23,20,17,0.10)_30%,rgba(23,20,17,0.10)_70%,transparent_95%)]" />
        <section className={`${section} bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,1)_0%,transparent_60%),radial-gradient(circle_at_100%_100%,rgba(197,143,82,0.15)_0%,transparent_60%),linear-gradient(145deg,#faf8f5_0%,#e8e0d2_100%)] text-ink`} id="long-term">
          <div className={shell}>
            {/* Header with VKR Ventures branding */}
            <Reveal className="mb-14 grid grid-cols-[minmax(0,1fr)_auto] gap-8 items-end max-md:grid-cols-1">
              <div className="grid gap-5">
                <div className="flex items-center gap-4 flex-wrap">
                  <p className={`${label} text-ink/52`}>Long-Term Residential Rentals</p>
                  <span className="h-px w-8 bg-ink/10 max-md:hidden" />
                  <span className={`${label} text-ink/40`}>Operated by VKR Ventures</span>
                </div>
                <h2 className={`${title} max-w-[28ch]`}>
                  Residential properties built for durable, lease-backed income.
                </h2>
                <p className={`${copy} text-ink/72 max-w-[42rem]`}>
                  Our long-term rental portfolio targets neighborhood-driven housing
                  in fast-growing Charlotte-region corridors — where tenant demand is
                  strong, lease renewals are high, and property values appreciate steadily.
                </p>
              </div>

              {/* VKR Ventures logo card */}
              <div className="grid gap-3 justify-items-center text-center p-6 border border-ink/8 bg-white/60 backdrop-blur-[12px] shadow-[0_24px_50px_rgba(24,19,14,0.06)] transition duration-[420ms] hover:-translate-y-1 max-md:flex max-md:items-center max-md:justify-start max-md:p-4 max-md:text-left max-md:w-full max-md:gap-4 max-md:rounded-2xl">
                <div className="w-28 h-28 flex items-center justify-center p-3 bg-background rounded-xl border border-ink/10 shadow-md max-md:w-16 max-md:h-16 max-md:p-1.5 max-md:shrink-0 max-md:rounded-lg">
                  <img
                    src="/images/vkr-ventures.jpeg"
                    alt="VKR Ventures Logo"
                    className="max-h-full max-w-full object-contain rounded-md opacity-90 transition-opacity hover:opacity-100"
                  />
                </div>
                <div className="grid gap-0.5 max-md:gap-0">
                  <span className="font-display text-lg font-bold text-ink max-md:text-base">VKR Ventures</span>
                  <span className="text-[0.65rem] uppercase tracking-wider text-ink/60 max-md:text-[0.6rem]">Asset Management</span>
                </div>
              </div>
            </Reveal>

            {/* Content: Image + Details */}
            <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-stretch max-xl:grid-cols-1">
              <Reveal distance="left" className="grid">
                <div className="overflow-hidden border border-ink/8 bg-paper shadow-[0_28px_60px_rgba(24,19,14,0.08)] transition duration-500 hover:shadow-xl">
                  <img
                    src="/images/section-ltr.png"
                    alt="Modern townhomes in Charlotte metro area"
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.03] max-md:h-64"
                  />
                </div>
              </Reveal>

              <Reveal className="grid grid-rows-[1fr_1fr_auto] gap-4" delay={120} distance="right">
                {[
                  {
                    title: "Charlotte Corporate Townhomes",
                    location: "South End, NoDa, Plaza Midwood",
                    desc: "Townhome-style rentals suited to relocation demand, neighborhood identity, and long-term stability in strong submarkets.",
                  },
                  {
                    title: "Concord Family Rentals",
                    location: "Charlotte metro north",
                    desc: "Duplex and single-family rentals that balance regional demand, metro access, and ownership discipline.",
                  },
                ].map((property) => (
                  <article
                    key={property.title}
                    className="border border-ink/8 bg-white/84 p-6 shadow-[0_28px_60px_rgba(24,19,14,0.08)] transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 grid content-center gap-3"
                  >
                    <span className={`${label} text-ink/40`}>{property.location}</span>
                    <h3 className="font-display text-[clamp(1.4rem,2.2vw,1.8rem)] leading-[1.1] tracking-[-0.03em] text-ink">
                      {property.title}
                    </h3>
                    <p className={`${copy} text-ink/68`}>{property.desc}</p>
                  </article>
                ))}

                <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
                  {["Stable lease demand", "Durable finishes", "Long-term holds"].map((point) => (
                    <span key={point} className="border border-ink/8 bg-white/60 px-4 py-3 text-center text-[0.78rem] uppercase tracking-[0.14em] text-ink/60">
                      {point}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SHORT-TERM RENTALS / NIRVANALUXE — Full independent section
        ═══════════════════════════════════════════════════════════════ */}
        <section className={`${section} bg-background text-foreground`} id="short-term">
          <div className="absolute left-1/4 top-[15%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(197,143,82,0.08),transparent_60%)] blur-[40px] pointer-events-none" aria-hidden="true" />
          <div className="absolute right-[10%] bottom-[10%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(197,143,82,0.06),transparent_70%)] blur-[30px] pointer-events-none" aria-hidden="true" />

          <div className={shell}>
            {/* Header with NirvanaLuxe branding */}
            <Reveal className="mb-14 grid grid-cols-[minmax(0,1fr)_auto] gap-8 items-end max-md:grid-cols-1">
              <div className="grid gap-5">
                <div className="flex items-center gap-4 flex-wrap">
                  <p className={`${label} text-accent`}>Short-Term Vacation Rentals</p>
                  <span className="h-px w-8 bg-white/20 max-md:hidden" />
                  <span className={`${label} text-paper/40`}>Operated by NirvanaLuxe</span>
                </div>
                <h2 className={`${title} max-w-[28ch] text-[#fff8ee]`}>
                  Luxury vacation stays, curated for guests who expect more.
                </h2>
                <p className={`${copy} text-paper/70 max-w-[42rem]`}>
                  Through our hospitality brand <strong className="text-[#fff8ee]">NirvanaLuxe</strong>,
                  we operate premium vacation rentals across the Great Smoky Mountains and Lake Norman —
                  with direct booking, dynamic pricing, and concierge-level guest care.
                </p>
              </div>

              {/* NirvanaLuxe logo card */}
              <div className="grid gap-3 justify-items-center text-center p-6 border border-white/12 bg-white/4 backdrop-blur-[12px] shadow-[0_24px_50px_rgba(0,0,0,0.22)] transition duration-[420ms] hover:-translate-y-1 max-md:flex max-md:items-center max-md:justify-start max-md:p-4 max-md:text-left max-md:w-full max-md:gap-4 max-md:rounded-2xl">
                <div className="w-28 h-28 flex items-center justify-center p-3 bg-white rounded-xl border border-white/10 shadow-lg max-md:w-16 max-md:h-16 max-md:p-1.5 max-md:shrink-0 max-md:rounded-lg">
                  <img
                    src="/images/nirvanaluxe-logo.jpg"
                    alt="NirvanaLuxe Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="grid gap-0.5 max-md:gap-0">
                  <span className="font-display text-lg font-bold text-[#fff8ee] max-md:text-base">NirvanaLuxe</span>
                  <span className="text-[0.65rem] uppercase tracking-wider text-accent max-md:text-[0.6rem]">A VKR Ventures Brand</span>
                </div>
              </div>
            </Reveal>

            {/* Content: Image + Properties */}
            <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-stretch max-xl:grid-cols-1">
              <Reveal distance="left" className="grid">
                <div className="overflow-hidden border border-white/12 bg-white/5 shadow-2xl transition duration-500 hover:border-white/20">
                  <img
                    src="/images/section-str.png"
                    alt="Luxury mountain cabin in the Great Smoky Mountains"
                    className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-[1.03] hover:opacity-100 max-md:h-64"
                  />
                </div>
              </Reveal>

              <Reveal className="grid grid-rows-[1fr_1fr_auto] gap-4" delay={120} distance="right">
                {[
                  {
                    title: "Smoky Ridge Cabin Collection",
                    location: "Sevierville & Gatlinburg corridor",
                    desc: "Cabin inventory centered on family travel, shoulder-season durability, and guest experiences that support repeat demand.",
                  },
                  {
                    title: "Charlotte Lakeside Retreats",
                    location: "Lake Norman & Surrounding",
                    desc: "Premium waterfront properties offering luxury amenities, seamless guest experiences, and year-round vacation appeal.",
                  },
                ].map((property) => (
                  <article
                    key={property.title}
                    className={`${darkCard} p-6 grid content-center gap-3 transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1`}
                  >
                    <span className={`${label} text-paper/40`}>{property.location}</span>
                    <h3 className="font-display text-[clamp(1.4rem,2.2vw,1.8rem)] leading-[1.1] tracking-[-0.03em] text-[#fff8ee]">
                      {property.title}
                    </h3>
                    <p className={`${copy} text-paper/68`}>{property.desc}</p>
                  </article>
                ))}

                <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
                  {["Dynamic pricing", "Direct booking", "24/7 guest care"].map((point) => (
                    <span key={point} className="border border-white/12 bg-white/4 px-4 py-3 text-center text-[0.78rem] uppercase tracking-[0.14em] text-paper/52">
                      {point}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════ MARKETS ═══════ */}
        <div className="h-px bg-[linear-gradient(90deg,transparent_5%,rgba(23,20,17,0.10)_30%,rgba(23,20,17,0.10)_70%,transparent_95%)]" />
        <section id="markets" className={`${section} bg-[radial-gradient(ellipse_70%_50%_at_20%_80%,rgba(197,143,82,0.06),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.7),transparent_40%),linear-gradient(180deg,#f7f3ed_0%,#f2ece4_100%)] text-ink`}>
          <div className={shell}>
            <Reveal className="mb-10 flex items-end justify-between gap-8 max-xl:flex-col max-xl:items-start">
              <div className="grid gap-4">
                <p className={`${label} text-ink/52`}>Key Markets</p>
                <h2 className={title}>Where we operate across both rental models.</h2>
              </div>
              <p className="max-w-96 leading-[1.8] text-ink/62">
                The focus stays tied to real operating lanes across the Smokies, Charlotte, and
                nearby growth corridors.
              </p>
            </Reveal>

            <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
              {guides.map((guide, index) => (
                <Reveal
                  as="article"
                  className="group relative grid min-h-[27rem] content-end overflow-hidden border border-ink/8 p-[1.35rem] shadow-[0_28px_60px_rgba(24,19,14,0.08)] transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 max-md:min-h-56"
                  delay={index * 110}
                  key={guide.title}
                >
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${guide.image}')` }} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(7,6,5,0.52))]" />
                  <div className="relative z-[1] grid gap-3 text-paper">
                    <h3 className="font-display text-[clamp(2rem,3vw,2.8rem)] leading-[1.05] tracking-[-0.03em]">
                      {guide.title}
                    </h3>
                    <p className={`${copy} text-paper/78`}>{guide.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3 max-md:gap-2 max-md:justify-center">
              {marketTape.map((item) => (
                <span
                  className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-white/60 px-5 py-4 text-[0.78rem] uppercase tracking-[0.18em] text-ink/62 max-md:px-4 max-md:py-2.5 max-md:text-[0.65rem]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="relative bg-[radial-gradient(ellipse_80%_50%_at_20%_60%,rgba(197,143,82,0.13),transparent_50%),radial-gradient(circle_at_top_right,rgba(197,143,82,0.22),transparent_34%),radial-gradient(ellipse_60%_40%_at_80%_90%,rgba(160,120,70,0.1),transparent_50%),linear-gradient(180deg,#1e1914_0%,#171310_40%,#12100d_100%)] px-0 py-28 pb-8 text-foreground max-md:py-20">
        <div className={shell}>
          <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start gap-12 max-xl:grid-cols-1">
            <div className="grid gap-8">
              <Reveal className="grid gap-6" distance="left">
                <p className={`${label} text-paper/46`}>Connect</p>
                <h2 className={`${title} max-w-[40ch] text-[#fff8ee]`}>
                  Looking at a rental opportunity in Tennessee or the Charlotte region?
                </h2>
                <p className={`${copy} max-w-[38rem] text-paper/70`}>
                  Whether it is a long-term hold in the Charlotte metro or a vacation rental
                  in the Smokies — if it fits the focus, the details below are the right place to start.
                </p>
              </Reveal>

              <Reveal className="grid content-start" distance="left">
                <div className={`${darkCard} grid gap-5 p-6`}>
                  <span className={`${label} text-paper/48`}>Best fit</span>
                  <div className="grid gap-3">
                    {[
                      "Short-term vacation rentals in the Smokies — via NirvanaLuxe",
                      "Long-term residential rentals in the Charlotte region",
                    ].map((field) => (
                      <span
                        className="border border-white/12 bg-white/3 px-[1.1rem] py-4 text-paper/72"
                        key={field}
                      >
                        {field}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 max-md:w-full">
                    <Link className={primaryButton} href="/contact">
                      Open contact page
                    </Link>
                    <a className={secondaryButton} href="#markets">
                      Review markets
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal className="grid gap-4 content-start" delay={120} distance="right">
              {[
                {
                  label: "Based in Tennessee",
                  value: "109 Parkway Suite 4C",
                  detail: "Sevierville, TN 37862",
                },
                {
                  label: "Charlotte-region footprint",
                  value: "2357 Herrons Nest Pl NW",
                  detail: "Concord, NC 28027",
                },
                {
                  label: "Focus",
                  value: "Short-term and long-term rentals",
                  detail: "Properties selected for location strength, operating fit, and hold quality",
                },
              ].map((card) => (
                <div
                  className={`${darkCard} grid gap-[0.55rem] p-[1.4rem] transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2`}
                  key={card.label}
                >
                  <span className={`${label} text-paper/44`}>{card.label}</span>
                  <strong className="font-display text-[clamp(1.35rem,2.2vw,2.1rem)] leading-[1.05] tracking-[-0.03em] text-[#fff8ee]">
                    {card.value}
                  </strong>
                  <span className="leading-[1.8] text-paper/66">{card.detail}</span>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-4 border-t border-white/12 pt-8 text-[0.78rem] uppercase tracking-[0.18em] text-paper/46">
            <span>VKR Ventures LLC</span>
            <span>NirvanaLuxe — Vacation Rentals</span>
            <span>Sevierville, Tennessee</span>
            <span>Charlotte region</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
