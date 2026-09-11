import Link from "next/link";
import { ManagementSection } from "../components/management-section";
import { PropertySearch } from "../components/property-search";
import { Reveal } from "../components/reveal";
import { SiteNav } from "../components/site-nav";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Buy & Sell", href: "/#sales" },
  { label: "Management", href: "/#management" },
  { label: "Homes", href: "/#homes" },
  { label: "Areas", href: "/#areas" },
  { label: "Contact", href: "/contact", cta: true },
];

const managementServices = [
  {
    category: "Marketing",
    title: "Syndication across 30+ Platforms",
    description:
      "Maximum exposure across Zillow, Trulia, Realtor.com, MLS, and premier rental portals to attract qualified prospects quickly.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    category: "Media",
    title: "Professional HDR Photography",
    description:
      "Architectural-grade wide-angle imagery and curated lighting that capture property condition and command top rental value.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    category: "Leasing",
    title: "Accompanied Tenant Showings",
    description:
      "Vetted, in-person showings conducted by licensed brokers who represent your property and professionally qualify applicants.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    category: "Screening",
    title: "Rigorous Tenant Screening",
    description:
      "Multi-bureau credit reports, nationwide criminal history, eviction checks, income verification, and previous landlord calls.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    category: "Audits",
    title: "Move-In & Move-Out Inspections",
    description:
      "Comprehensive room-by-room condition reports backed with high-resolution date-stamped photos before and after tenancy.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    category: "Compliance",
    title: "Security-Deposit Trust Handling",
    description:
      "All tenant security deposits and reserve funds held strictly in bonded, NCREC-compliant escrow trust accounts.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    category: "Accounting",
    title: "Monthly Rent Collection & ACH",
    description:
      "Online tenant portal payments with direct ACH disbursements to your account and transparent digital monthly statements.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    category: "Care",
    title: "24/7 Maintenance Coordination",
    description:
      "Rapid emergency handling and vetted local Carolina trades dispatched with zero markup on vendor labor or materials.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.07a4.5 4.5 0 004.486-6.32l-3.27 3.287a1.5 1.5 0 01-2.122 0l-1.06-1.06a1.5 1.5 0 010-2.122l3.287-3.27a4.5 4.5 0 00-6.32 4.486c.118.58.094 1.193-.07 1.742m-.233 5.108l-.828.828" />
      </svg>
    ),
  },
];

const areas = [
  {
    name: "Charlotte",
    price: "$500K+",
    context: "Single-family search range",
    copy: "The region's employment center, with established neighborhoods, urban single-family homes, and strong suburban rental demand.",
    image: "/images/guide-charlotte.png",
  },
  {
    name: "Concord & Kannapolis",
    price: "$450K+",
    context: "Single-family search range",
    copy: "Northeast of Charlotte, these Cabarrus County markets can offer approachable entry points with commuter access and growing local amenities.",
    image: "/images/guide-concord.png",
  },
  {
    name: "Mooresville & Lake Norman",
    price: "$400K+",
    context: "Single-family search range",
    copy: "A north-metro market shaped by lake access, varied housing stock, and demand from households balancing lifestyle with Charlotte connectivity.",
    image: "/images/asset-charlotte.png",
  },
  {
    name: "Hickory & Catawba Valley",
    price: "$375K+",
    context: "Single-family search range",
    copy: "A value-oriented western corridor with established neighborhoods, expanding inventory, and access to the broader Charlotte-to-foothills economy.",
    image: "/images/asset-concord.png",
  },
];

const shell =
  "mx-auto w-[min(1180px,calc(100vw-48px))] max-md:w-[min(1180px,calc(100vw-32px))]";
const section = "relative overflow-clip py-28 max-md:py-20";
const label = "text-[0.72rem] uppercase tracking-[0.2em] leading-[1.3]";
const title =
  "font-display text-[clamp(2.15rem,4.2vw,3.7rem)] font-medium leading-[0.98] tracking-[-0.045em]";
const copy = "text-[clamp(1rem,1.8vw,1.08rem)] leading-[1.85]";
const primaryButton =
  "inline-flex items-center justify-center rounded-full border border-white/25 bg-paper px-6 py-4 text-[0.76rem] uppercase tracking-[0.18em] text-[#15120f] shadow-[0_16px_40px_rgba(8,7,5,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-white";
const secondaryButton =
  "inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-4 text-[0.76rem] uppercase tracking-[0.18em] text-paper transition duration-300 hover:-translate-y-0.5 hover:bg-white/10";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
      <header className="relative overflow-clip">
        <SiteNav brandHref="/#top" items={navItems} />

        <section className="relative min-h-[clamp(700px,92svh,900px)]" id="top">
          <div className="absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
            <div
              className="absolute inset-0 scale-[1.03] bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(8,12,18,.82) 0%,rgba(8,12,18,.54) 48%,rgba(8,12,18,.38) 100%),linear-gradient(180deg,rgba(8,12,18,.16) 0%,rgba(8,12,18,.68) 100%),url('/images/hero-city.png')",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_32%,rgba(197,143,82,0.2),transparent_30%)]" />
          </div>

          <div className={shell}>
            <div className="relative z-[2] grid min-h-[clamp(700px,92svh,900px)] grid-cols-[minmax(0,1fr)_18rem] items-end gap-12 pb-20 pt-36 max-lg:grid-cols-1 max-lg:items-center max-lg:pb-16 max-md:pt-28">
              <div className="grid min-w-0 max-w-[53rem] gap-6">
                <span className={`${label} text-accent`}>North Carolina Real Estate</span>
                <h1 className="min-w-0 font-display text-[clamp(3.4rem,7.4vw,6.8rem)] leading-[0.86] tracking-[-0.055em] text-[#fff8ee] text-balance max-md:text-[clamp(2.85rem,13.5vw,3.35rem)] max-md:leading-[0.92]">
                  Local guidance. Stronger property decisions.
                </h1>
                <p className={`${copy} max-w-[42rem] text-paper/78`}>
                  Buy, sell, invest, or hand off the day-to-day. VKR Ventures serves Charlotte,
                  Concord, Lake Norman, Hickory, and nearby North Carolina markets.
                </p>
                <div className="mt-2 flex flex-wrap gap-4 max-md:grid max-md:grid-cols-1">
                  <a className={primaryButton} href="#homes">Search homes</a>
                  <a className={secondaryButton} href="#management">Management plans</a>
                </div>
              </div>

              <div className="grid gap-3 border-l border-white/20 pl-6 text-paper max-lg:max-w-md max-lg:border-l-0 max-lg:border-t max-lg:pl-0 max-lg:pt-5">
                <span className={`${label} text-paper/48`}>North Carolina broker</span>
                <strong className="font-display text-3xl leading-none text-[#fff8ee]">Vinay R</strong>
                <span className="text-sm text-paper/68">NC Broker #346593</span>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className={`${section} bg-[#f6f1e9] text-ink`} id="about">
          <div className={shell}>
            <div className="grid grid-cols-[0.86fr_1.14fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
              <Reveal className="relative min-h-[34rem] overflow-hidden border border-ink/10 shadow-[0_28px_70px_rgba(24,19,14,0.12)] max-md:min-h-[25rem]" distance="left">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/visual-charlotte.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <div className="absolute bottom-0 z-[1] grid gap-2 p-7 text-paper">
                  <span className={`${label} text-accent`}>North Carolina focused</span>
                  <strong className="font-display text-3xl leading-none">Sales and management, under one roof.</strong>
                </div>
              </Reveal>

              <Reveal className="grid gap-6" delay={100} distance="right">
                <p className={`${label} text-ink/50`}>About VKR Ventures</p>
                <h2 className={`${title} max-w-[19ch]`}>Real estate service built around the full ownership cycle.</h2>
                <p className={`${copy} max-w-[42rem] text-ink/70`}>
                  VKR Ventures helps North Carolina buyers evaluate opportunities, guides sellers
                  through positioning and negotiations, and supports rental owners after closing.
                  The goal is simple: clear advice, responsive execution, and fewer handoffs.
                </p>
                <div className="grid grid-cols-3 gap-px overflow-hidden border border-ink/10 bg-ink/10 max-md:grid-cols-1">
                  {[
                    ["Buy", "Search and offer strategy"],
                    ["Sell", "Pricing and presentation"],
                    ["Manage", "Leasing through operations"],
                  ].map(([heading, detail]) => (
                    <div className="grid gap-2 bg-white/80 p-5" key={heading}>
                      <strong className="font-display text-2xl">{heading}</strong>
                      <span className="text-sm leading-relaxed text-ink/60">{detail}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={`${section} bg-background text-paper`} id="sales">
          <div className={shell}>
            <Reveal className="mb-14 grid max-w-[52rem] gap-5">
              <p className={`${label} text-accent`}>Buy & Sell</p>
              <h2 className={`${title} text-[#fff8ee]`}>A local advocate for both sides of the move.</h2>
              <p className={`${copy} text-paper/65`}>
                From a first showing to the closing table, decisions are grounded in current listings,
                comparable sales, property condition, and your financial priorities.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
              {[
                {
                  eyebrow: "For buyers",
                  title: "Find the right home—not just another listing.",
                  copy: "Build a focused search, compare locations and property types, evaluate value, prepare a competitive offer, and move through inspections and closing with clear next steps.",
                  points: ["Current property search", "Offer and negotiation strategy", "Transaction guidance"],
                },
                {
                  eyebrow: "For sellers",
                  title: "Position the property for a confident sale.",
                  copy: "Use market evidence to set the pricing strategy, prepare the home for launch, manage buyer feedback, and negotiate terms with the full transaction in view.",
                  points: ["Pricing consultation", "Photography and launch plan", "Contract-to-close support"],
                },
              ].map((item, index) => (
                <Reveal
                  as="article"
                  className="grid min-h-[31rem] content-between gap-10 border border-white/12 bg-white/[0.045] p-8 shadow-[0_28px_60px_rgba(0,0,0,0.16)] max-md:min-h-0 max-md:p-6"
                  delay={index * 110}
                  distance={index === 0 ? "left" : "right"}
                  key={item.eyebrow}
                >
                  <div className="grid gap-5">
                    <span className={`${label} text-accent`}>{item.eyebrow}</span>
                    <h3 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] leading-[0.98] tracking-[-0.04em] text-[#fff8ee]">{item.title}</h3>
                    <p className={`${copy} text-paper/66`}>{item.copy}</p>
                  </div>
                  <div className="grid gap-3">
                    {item.points.map((point) => (
                      <span className="border-t border-white/12 pt-3 text-sm uppercase tracking-[0.12em] text-paper/55" key={point}>{point}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ManagementSection services={managementServices} />

        <section
          className="hidden"
          id="management-legacy"
          style={{
            background: "linear-gradient(180deg, #f6f1e8 0%, #fcfbf9 35%, #f6f1e8 100%)",
            color: "#171411",
          }}
        >
          {/* Subtle architectural ambient illumination */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-12 h-96 w-96 rounded-full bg-[#c58f52]/10 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-[#c58f52]/10 blur-[90px]"
          />

          <div className={shell}>
            {/* Header */}
            <Reveal className="mb-14 grid max-w-[56rem] gap-5">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-[#9b642e]/30 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#8e531f]"
                  style={{ backgroundColor: "rgba(197, 143, 82, 0.12)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8e531f]" />
                  Full-Service Management
                </span>
                <span className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[#5c5044] hidden sm:inline">
                  North Carolina Residential
                </span>
              </div>
              <h2 className={`${title} text-balance text-[#171411]`}>
                Hands-off property care with clear, flat-rate pricing.
              </h2>
              <p className={`${copy} max-w-[42rem] text-[#4d433b]`}>
                Complete tenant placement, ongoing leasing operations, and 24/7 maintenance across
                Charlotte, Concord, Lake Norman, Hickory, and surrounding communities.
              </p>
            </Reveal>

            {/* Main Feature Grid */}
            <div className="grid grid-cols-[0.88fr_1.12fr] items-stretch gap-8 max-xl:grid-cols-1">
              {/* Left Column: Crisp Luxury White Pricing Card */}
              <Reveal distance="left">
                <div
                  className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-[#c58f52]/30 p-9 shadow-[0_24px_60px_rgba(24,19,14,0.08)] max-md:p-6"
                  style={{ backgroundColor: "#ffffff", color: "#171411" }}
                >
                  {/* Subtle decorative inner corner glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#c58f52]/8 blur-2xl"
                  />

                  <div className="relative z-[1] grid gap-7">
                    {/* Top Tier Header */}
                    <div className="flex items-center justify-between gap-4 border-b border-[#171411]/10 pb-5">
                      <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#8e531f]">
                        Management Plan
                      </span>
                      <span
                        className="rounded-full border border-[#171411]/12 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#4d433b]"
                        style={{ backgroundColor: "#f6f1e8" }}
                      >
                        Flat Rate
                      </span>
                    </div>

                    {/* Sculpted Price Lockup */}
                    <div className="grid gap-2">
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl font-light text-[#8e531f]">$</span>
                        <strong className="font-display text-7xl font-bold tracking-tight text-[#171411] md:text-8xl">
                          75
                        </strong>
                        <div className="ml-3 flex flex-col">
                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#171411]">
                            per month
                          </span>
                          <span className="text-[0.7rem] uppercase tracking-[0.14em] text-[#7a6b5e]">
                            per unit flat fee
                          </span>
                        </div>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-[#4d433b]">
                        Simple, predictable monthly pricing. No percentage escalations on higher-rent homes.
                      </p>
                    </div>

                    {/* Core Terms & Highlights */}
                    <div className="grid gap-4 border-t border-[#171411]/10 pt-6">
                      <div className="flex items-start gap-3.5">
                        <span
                          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[0.7rem] font-bold text-[#8e531f]"
                          style={{ backgroundColor: "rgba(197, 143, 82, 0.18)" }}
                        >
                          ✓
                        </span>
                        <div className="grid gap-0.5">
                          <strong className="text-sm font-semibold text-[#171411]">
                            No management fee until tenant is placed
                          </strong>
                          <span className="text-xs leading-relaxed text-[#5c5044]">
                            Billing begins only when your property is leased and rent starts collecting.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <span
                          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[0.7rem] font-bold text-[#8e531f]"
                          style={{ backgroundColor: "rgba(197, 143, 82, 0.18)" }}
                        >
                          ✓
                        </span>
                        <div className="grid gap-0.5">
                          <strong className="text-sm font-semibold text-[#171411]">
                            Tenant placement: 50% of first month&apos;s rent
                          </strong>
                          <span className="text-xs leading-relaxed text-[#5c5044]">
                            Covers photography, marketing syndication, broker showings, background vetting, and lease execution.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <span
                          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[0.7rem] font-bold text-[#8e531f]"
                          style={{ backgroundColor: "rgba(197, 143, 82, 0.18)" }}
                        >
                          ✓
                        </span>
                        <div className="grid gap-0.5">
                          <strong className="text-sm font-semibold text-[#171411]">
                            Zero hidden repair markups
                          </strong>
                          <span className="text-xs leading-relaxed text-[#5c5044]">
                            Maintenance and contractor invoices are passed through at 100% direct vendor cost.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Area */}
                  <div className="relative z-[1] mt-9 grid gap-3 border-t border-[#171411]/10 pt-6">
                    <Link
                      className="group flex items-center justify-between rounded-full bg-[#171411] px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#f4efe6] shadow-[0_14px_30px_rgba(23,20,17,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2e261e]"
                      href="/contact"
                    >
                      <span>Request a rental review</span>
                      <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </Link>
                    <span className="text-center text-[0.72rem] text-[#7a6b5e]">
                      Free rental valuation · No long-term lock-in
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Right Column: 8 Included Service Cards (Solid White, High Contrast) */}
              <Reveal delay={100} distance="right">
                <div className="flex h-full flex-col justify-between gap-4">
                  <div className="flex items-center justify-between gap-4 px-1 pb-1">
                    <div className="grid gap-0.5">
                      <span className={`${label} text-[#7a6b5e]`}>Standard Inclusions</span>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-[#171411]">
                        Comprehensive management scope
                      </h3>
                    </div>
                    <span
                      className="rounded-full border border-[#171411]/12 px-3.5 py-1 text-xs font-semibold text-[#4d433b] shadow-xs"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      8 essential services
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1">
                    {managementServices.map((service, index) => (
                      <article
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#171411]/10 p-5 shadow-[0_6px_20px_rgba(24,19,14,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8e531f]/50 hover:shadow-[0_16px_36px_rgba(24,19,14,0.09)]"
                        key={service.title}
                        style={{ backgroundColor: "#ffffff", color: "#171411" }}
                      >
                        <div className="flex items-center justify-between gap-2 pb-2.5">
                          <span className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8e531f]">
                            <span
                              className="grid h-7 w-7 place-items-center rounded-lg text-[#8e531f] transition-colors duration-300 group-hover:bg-[#8e531f] group-hover:text-white"
                              style={{ backgroundColor: "rgba(197, 143, 82, 0.14)" }}
                            >
                              {service.icon}
                            </span>
                            {service.category}
                          </span>
                          <span className="font-display text-sm font-semibold text-[#171411]/30 transition-colors group-hover:text-[#8e531f]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="grid gap-1">
                          <h4 className="text-[0.94rem] font-bold leading-[1.3] text-[#171411]">
                            {service.title}
                          </h4>
                          <p className="text-[0.8rem] leading-[1.65] text-[#5c5044]">
                            {service.description}
                          </p>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#8e531f] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bottom Trust & Assurance Ribbon */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[#171411]/10 pt-8 max-md:grid-cols-1">
              <div
                className="flex items-center gap-4 rounded-2xl border border-[#171411]/10 p-5 shadow-xs"
                style={{ backgroundColor: "#ffffff", color: "#171411" }}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#171411] text-[#c58f52] shadow-xs">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <div className="grid gap-0.5">
                  <strong className="text-xs uppercase tracking-[0.14em] text-[#171411] font-bold">NCREC Compliant</strong>
                  <span className="text-xs text-[#5c5044]">Regulated and bonded client trust escrow accounts</span>
                </div>
              </div>

              <div
                className="flex items-center gap-4 rounded-2xl border border-[#171411]/10 p-5 shadow-xs"
                style={{ backgroundColor: "#ffffff", color: "#171411" }}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#171411] text-[#c58f52] shadow-xs">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="grid gap-0.5">
                  <strong className="text-xs uppercase tracking-[0.14em] text-[#171411] font-bold">Licensed Brokerage</strong>
                  <span className="text-xs text-[#5c5044]">Vinay R · NC Broker #346593</span>
                </div>
              </div>

              <div
                className="flex items-center gap-4 rounded-2xl border border-[#171411]/10 p-5 shadow-xs"
                style={{ backgroundColor: "#ffffff", color: "#171411" }}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#171411] text-[#c58f52] shadow-xs">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6H2.25m0 0v8.25m0-8.25h16.5m-16.5 0c0-.828.672-1.5 1.5-1.5h13.5c.828 0 1.5.672 1.5 1.5m0 0v8.25m0 0a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 14.25m16.5-6.75v6.75" />
                  </svg>
                </div>
                <div className="grid gap-0.5">
                  <strong className="text-xs uppercase tracking-[0.14em] text-[#171411] font-bold">Zero Hidden Fees</strong>
                  <span className="text-xs text-[#5c5044]">Direct pass-through contractor pricing with no markups</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${section} bg-[#122036] text-paper`} id="homes">
          <div className={shell}>
            <Reveal className="mb-10 flex items-end justify-between gap-8 max-lg:grid max-lg:items-start">
              <div className="grid max-w-[45rem] gap-5">
                <p className={`${label} text-accent`}>Homes for sale</p>
                <h2 className={`${title} text-[#fff8ee]`}>Your North Carolina property search starts here.</h2>
              </div>
              <p className="max-w-[25rem] leading-[1.8] text-paper/62">
                Browse current inventory through the Canopy participant IDX search, or request a tailored list for your priorities.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <PropertySearch />
            </Reveal>
          </div>
        </section>

        <section className={`${section} bg-[#f6f1e9] text-ink`} id="areas">
          <div className={shell}>
            <Reveal className="mb-12 grid max-w-[50rem] gap-5">
              <p className={`${label} text-ink/50`}>Nearby markets</p>
              <h2 className={title}>A quick read on four North Carolina search areas.</h2>
              <p className={`${copy} text-ink/65`}>
                Compare communities by lifestyle, location, and the kind of ownership opportunity
                each market offers.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
              {areas.map((area, index) => (
                <Reveal
                  as="article"
                  className="group grid grid-cols-[0.78fr_1.22fr] overflow-hidden border border-ink/10 bg-white shadow-[0_24px_55px_rgba(24,19,14,0.08)] max-md:grid-cols-1"
                  delay={index * 80}
                  key={area.name}
                >
                  <div className="min-h-72 overflow-hidden max-md:min-h-52">
                    <div className="h-full bg-cover bg-center transition duration-700 group-hover:scale-[1.035]" style={{ backgroundImage: `url('${area.image}')` }} />
                  </div>
                  <div className="grid content-between gap-8 p-6">
                    <div className="grid gap-3">
                      <h3 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-none tracking-[-0.035em]">{area.name}</h3>
                      <p className="leading-[1.75] text-ink/65">{area.copy}</p>
                    </div>
                    <div className="grid gap-1 border-t border-ink/10 pt-4">
                      <strong className="font-display text-2xl text-[#9b642e]">{area.price}</strong>
                      <span className={`${label} text-ink/42`}>{area.context}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-7 max-w-[58rem] text-xs leading-[1.8] text-ink/48">
              Figures shown are broad starting points for single-family searches, not market medians,
              appraisals, forecasts, or quotes for a specific property. Availability and pricing vary by
              neighborhood, condition, and property features.
            </p>
          </div>
        </section>

        <section className={`${section} bg-background text-paper`}>
          <div className={shell}>
            <Reveal className="grid grid-cols-[1fr_auto] items-end gap-10 border border-white/12 bg-white/[0.045] p-10 max-lg:grid-cols-1 max-md:p-6">
              <div className="grid max-w-[48rem] gap-5">
                <p className={`${label} text-accent`}>Let&apos;s talk property</p>
                <h2 className={`${title} text-[#fff8ee]`}>Planning a sale, purchase, or management handoff?</h2>
                <p className={`${copy} text-paper/65`}>Share the property or search area and VKR Ventures will help you map the next step.</p>
              </div>
              <Link className={primaryButton} href="/contact">Start a conversation</Link>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#090807] py-10 text-paper">
        <div className={`${shell} grid grid-cols-[1fr_auto] gap-8 max-md:grid-cols-1`}>
          <div className="grid gap-2">
            <strong className="font-display text-2xl text-[#fff8ee]">VKR Ventures LLC</strong>
            <span className="text-sm text-paper/52">North Carolina real estate sales &amp; property management</span>
          </div>
          <div className="grid justify-items-end gap-2 text-sm text-paper/62 max-md:justify-items-start">
            <a href="tel:19728359376">+1 972 835 9376</a>
            <a href="mailto:vinay@vkr-ventures.com">vinay@vkr-ventures.com</a>
            <span>Vinay R · NC Broker #346593</span>
          </div>
          <p className="col-span-full border-t border-white/10 pt-6 text-xs leading-relaxed text-paper/38 max-md:col-span-1">
            Equal Housing Opportunity. Information on this website is for general marketing purposes and is subject to change. Fees and services are confirmed in the signed brokerage or property-management agreement.
          </p>
        </div>
      </footer>
    </div>
  );
}
