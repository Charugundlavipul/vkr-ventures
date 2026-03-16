import Link from "next/link";
import { Reveal } from "../components/reveal";
import { SiteNav } from "../components/site-nav";

const overviewFacts = [
  { label: "Base", value: "Sevierville, Tennessee" },
  { label: "Market", value: "Sevier County and the Smokies" },
  { label: "Focus", value: "Short-term rental management" },
  { label: "Approach", value: "Guest-ready operations and selective acquisitions" },
];

const pillars = [
  {
    title: "Cabin and stay acquisitions",
    description:
      "Tourism-facing properties with room for stronger presentation, cleaner turnover, and better guest appeal.",
  },
  {
    title: "Guest-ready operations",
    description:
      "Housekeeping, maintenance coordination, check-in quality, and review-driven standards that keep vacation rentals dependable.",
  },
  {
    title: "Revenue and listing management",
    description:
      "Calendar strategy, pricing, and listing quality built to improve occupancy without losing stay quality.",
  },
];

const principles = [
  {
    title: "Guest experience first",
    copy:
      "Short-term rentals only work when the stay feels clean, smooth, and worth recommending. That standard comes first.",
  },
  {
    title: "Smokies market focus",
    copy:
      "Sevierville, Pigeon Forge, Gatlinburg, and nearby mountain corridors each need practical operating decisions, not generic hospitality talk.",
  },
  {
    title: "Built for repeat bookings",
    copy:
      "The goal is not just occupied nights. It is better reviews, cleaner execution, and stays that keep guests coming back.",
  },
];

const portfolioProfiles = [
  {
    type: "Short-term rental",
    title: "Smoky Ridge Cabin Collection",
    location: "Sevierville and Gatlinburg corridor",
    description:
      "Cabin inventory centered on family travel, shoulder-season durability, and guest experiences that support repeat demand.",
    detail: "Revenue lens: dynamic pricing, direct booking lift, service consistency.",
    image: "/images/asset-smoky.png",
  },
  {
    type: "Short-term rental",
    title: "Parkway Flex Suites",
    location: "109 Parkway corridor, Sevier County",
    description:
      "Furnished stays with clear standards and a streamlined operating model built for consistent performance.",
    detail: "Operating lens: lean staffing, sharper presentation, occupancy control.",
    image: "/images/asset-parkway.png",
  },
  {
    type: "Short-term rental",
    title: "Ridge View Retreat Homes",
    location: "Wears Valley and Townsend edge",
    description:
      "Larger-format mountain stays built around views, group travel, and guest expectations that rise with nightly rate.",
    detail: "Stay lens: presentation quality, amenity clarity, and dependable pre-arrival execution.",
    image: "/images/hero-ridge.png",
  },
  {
    type: "Short-term rental",
    title: "Gatlinburg Guest Lodges",
    location: "Gatlinburg and nearby cabin clusters",
    description:
      "Vacation rental inventory designed for drive-to tourism, attraction access, and strong weekend conversion.",
    detail: "Booking lens: occupancy control, sharper merchandising, and cleaner guest communication.",
    image: "/images/guide-gatlinburg.png",
  },
];

const marketNotes = [
  {
    market: "Sevier County",
    title: "Tourism demand works only when operations stay disciplined",
    copy:
      "The Smokies can generate strong short-term demand, but the real edge comes from cleaner standards, sharper listing quality, and reliable turnover.",
  },
  {
    market: "Sevierville",
    title: "Drive-to access and cabin supply reward cleaner positioning",
    copy:
      "Sevierville works best for operators who understand presentation, booking flow, and how to turn practical inventory into a better guest stay.",
  },
  {
    market: "Pigeon Forge",
    title: "Family-travel inventory performs best when the experience is clear",
    copy:
      "In a dense vacation market, the properties that win usually explain the stay well and deliver exactly what the listing promises.",
  },
  {
    market: "Gatlinburg and Wears Valley",
    title: "Views and upkeep standards matter as much as nightly rate",
    copy:
      "Mountain inventory can justify strong rates, but only when the stay quality, cleanliness, and upkeep hold up against guest expectations.",
  },
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
    title: "Pigeon Forge",
    copy: "Family-travel inventory supported by attraction access and repeat visitor demand.",
    image: "/images/asset-parkway.png",
  },
  {
    title: "Wears Valley",
    copy: "View-driven stays where presentation and guest expectations need to stay aligned.",
    image: "/images/hero-ridge.png",
  },
];

const marketTape = [
  "Pigeon Forge",
  "Downtown Sevierville",
  "Wears Valley",
  "Gatlinburg",
  "Townsend",
  "Douglas Lake",
  "Kodak",
  "Pittman Center",
  "Smoky Mountains",
];

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Focus", href: "/#focus" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Markets", href: "/#markets" },
  { label: "Contact", href: "/contact", cta: true },
];

const shell =
  "mx-auto w-[min(1180px,calc(100vw-48px))] max-md:w-[min(1180px,calc(100vw-32px))]";
const section = "relative py-28 max-md:py-20";
const label = "text-[0.72rem] uppercase tracking-[0.2em] leading-[1.3]";
const title =
  "font-display text-[clamp(1.8rem,3.2vw,2.4rem)] font-medium leading-[1.05] tracking-[-0.04em]";
const copy = "text-[clamp(1rem,1.8vw,1.08rem)] leading-[1.9]";
const primaryButton =
  "inline-flex items-center justify-center rounded-full border border-white/25 bg-paper px-[1.45rem] py-4 text-[0.8rem] uppercase tracking-[0.18em] text-[#15120f] shadow-[0_16px_40px_rgba(8,7,5,0.22)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:bg-[#fff9f1]";
const secondaryButton =
  "inline-flex items-center justify-center rounded-full border border-white/24 bg-transparent px-[1.45rem] py-4 text-[0.8rem] uppercase tracking-[0.18em] text-paper transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-white/42 hover:bg-white/8";
const lightCard =
  "border border-ink/8 bg-white/84 shadow-[0_28px_60px_rgba(24,19,14,0.08)]";
const darkCard =
  "border border-white/12 bg-white/4 shadow-[0_28px_60px_rgba(0,0,0,0.16)] backdrop-blur-[18px]";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-clip">
        <SiteNav brandHref="/#top" items={navItems} />

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

                <p className="max-w-[42rem] text-[clamp(1rem,1.7vw,1.08rem)] leading-[1.8] text-[#fff8ee]/82">
                  Based in Sevierville, VKR Ventures focuses on guest-ready properties,
                  disciplined operations, and better-performing stays across Sevier County.
                </p>

                <div className="flex flex-wrap justify-center gap-4 max-md:w-full">
                  <a className={`${primaryButton} max-md:w-full`} href="#focus">
                    Explore services
                  </a>
                  <a className={`${secondaryButton} max-md:w-full`} href="#markets">
                    View markets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="flex flex-col">
        <section className={`${section} bg-paper text-ink`} id="about">
          <div className={shell}>
            <div className="grid grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] gap-12 max-xl:grid-cols-1">
              <Reveal className="grid gap-4" distance="left">
                <div className="group relative grid min-h-[30rem] content-end gap-3 overflow-hidden border border-ink/8 bg-paper p-6 shadow-[0_28px_60px_rgba(24,19,14,0.08)] transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/visual-operating-base.png')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-[-18%] right-[-8%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.34),transparent_70%)]" />
                  <span className={`${label} relative z-[1] text-paper/70`}>Operating Base</span>
                  <h3 className="relative z-[1] font-display text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.05] tracking-[-0.03em] text-paper">
                    Sevierville anchored
                  </h3>
                  <p className={`${copy} relative z-[1] text-paper/78`}>
                    A Smokies-facing presence built around short-term rental logic, stay quality,
                    and guest-ready properties that can hold up across peak travel periods.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                  {[
                    {
                      image: "/images/guide-sevierville.png",
                      kicker: "Smokies Market",
                      title: "Sevier County lanes",
                      light: false,
                    },
                    {
                      image: "/images/visual-structure.png",
                      kicker: "Service Standard",
                      title: "Guest-ready operations",
                      copy: "Clean turnovers, responsive service, reliable stays.",
                      light: true,
                    },
                  ].map((panel) => (
                    <div
                      className="group relative grid min-h-64 content-end gap-3 overflow-hidden border border-ink/8 bg-paper p-6 shadow-[0_28px_60px_rgba(24,19,14,0.08)] transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2"
                      key={panel.title}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${panel.image}')` }}
                      />
                      <div
                        className={
                          panel.light
                            ? "absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent"
                            : "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
                        }
                      />
                      <div className="absolute bottom-[-18%] right-[-8%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.34),transparent_70%)]" />
                      <span
                        className={`${label} relative z-[1] ${panel.light ? "text-ink/50" : "text-paper/70"}`}
                      >
                        {panel.kicker}
                      </span>
                      <h3
                        className={`relative z-[1] font-display text-[clamp(1.8rem,3vw,2.2rem)] leading-[1.05] tracking-[-0.03em] ${panel.light ? "text-ink" : "text-paper"}`}
                      >
                        {panel.title}
                      </h3>
                      {panel.copy ? (
                        <p
                          className={`${copy} relative z-[1] ${panel.light ? "text-ink/74" : "text-paper/78"}`}
                        >
                          {panel.copy}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="grid content-start gap-4 pt-1" delay={120} distance="right">
                <p className={`${label} text-ink/52`}>About VKR</p>
                <h2 className={`${title} max-w-[17ch]`}>
                  Based in Sevierville, with a Tennessee short-term rental focus.
                </h2>
                <div className="grid gap-4">
                  <p className={`${copy} max-w-[34rem] leading-[1.75] text-ink/76`}>
                    VKR Ventures is a Tennessee-based rental business operating from Sevierville,
                    with its focus centered on Sevier County and the wider Smoky Mountains tourism
                    corridor.
                  </p>
                  <p className={`${copy} max-w-[34rem] leading-[1.75] text-ink/76`}>
                    The focus stays on cabins, furnished stays, and vacation rental properties in
                    markets where guest demand and operational discipline can work together.
                  </p>
                </div>

                <div className="mt-1 grid grid-cols-2 gap-4 max-md:grid-cols-1">
                  {overviewFacts.map((fact) => (
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

        <section className={`${section} bg-paper text-ink`} id="focus">
          <div className={shell}>
            <Reveal className="mx-auto mb-12 grid max-w-[56rem] gap-6 text-center">
              <p className={`${label} text-ink/52`}>What We Focus On</p>
              <h2 className={`${title} mx-auto max-w-[25ch]`}>
                Short-term rentals, guest-ready standards, and steady operations.
              </h2>
              <p className={`${copy} mx-auto max-w-[38rem] text-ink/76`}>
                That is the core story. The rest of the website should support it, not inflate it.
              </p>
            </Reveal>

            <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-1">
              {pillars.map((pillar, index) => (
                <Reveal
                  as="article"
                  className={`${lightCard} grid min-h-96 gap-5 overflow-hidden p-[1.7rem] transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2`}
                  delay={index * 120}
                  key={pillar.title}
                >
                  <div
                    className="-mx-[1.7rem] -mt-[1.7rem] mb-2 h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${["/images/pillar-str.png", "/images/pillar-ops.png", "/images/pillar-str.png"][index]}')`,
                    }}
                  />
                  <span className={`${label} text-ink/40`}>0{index + 1}</span>
                  <h3 className="font-display text-[clamp(1.6rem,2.5vw,2.1rem)] leading-[1.05] tracking-[-0.03em] text-ink">
                    {pillar.title}
                  </h3>
                  <p className={`${copy} text-ink/68`}>{pillar.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${section} bg-background text-foreground`}>
          <div className={shell}>
            <div className="grid grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] items-start gap-12 max-xl:grid-cols-1">
              <Reveal className="grid gap-6" distance="left">
                <p className={`${label} text-paper/46`}>How We Work</p>
                <h2 className={`${title} max-w-[25ch] text-[#fff8ee]`}>
                  Simple standards that keep Tennessee stays operating well.
                </h2>
                <p className={`${copy} max-w-[38rem] text-paper/70`}>
                  We prefer clear standards over big claims: take on the right stays, operate
                  consistently, and keep the guest experience dependable.
                </p>
              </Reveal>

              <div className="grid gap-4">
                {principles.map((principle, index) => (
                  <Reveal
                    as="article"
                    className={`${darkCard} grid gap-3 p-6 transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2`}
                    delay={index * 140}
                    distance="right"
                    key={principle.title}
                  >
                    <h3 className="font-display text-[2rem] leading-[1.05] tracking-[-0.03em] text-[#fff8ee]">
                      {principle.title}
                    </h3>
                    <p className={`${copy} text-paper/68`}>{principle.copy}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${section} bg-paper text-ink`} id="portfolio">
          <div className={shell}>
            <Reveal className="mb-10 flex items-end justify-between gap-8 max-xl:flex-col max-xl:items-start">
              <div className="grid gap-4">
                <p className={`${label} text-ink/52`}>Portfolio Focus</p>
                <h2 className={title}>The kinds of short-term rentals VKR is built around.</h2>
              </div>
              <p className="max-w-96 leading-[1.8] text-ink/62">
                These are example portfolio lanes, not live listings. They show how the business
                can be positioned across Sevier County and nearby Tennessee tourism corridors.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-5 max-xl:grid-cols-1">
              {portfolioProfiles.map((profile, index) => (
                <Reveal
                  as="article"
                  className={`${lightCard} overflow-hidden transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2`}
                  delay={index * 110}
                  key={profile.title}
                >
                  <div
                    className="relative flex min-h-64 items-end justify-between gap-4 bg-cover bg-center p-6 text-paper max-md:flex-col max-md:items-start max-md:min-h-56"
                    style={{ backgroundImage: `url('${profile.image}')` }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(7,6,5,0.5)),repeating-linear-gradient(90deg,transparent_0_5%,rgba(255,248,236,0.07)_5%_6%,transparent_6%_11%)] mix-blend-screen" />
                    <span className={`${label} relative z-[1] text-paper/74`}>{profile.type}</span>
                    <span className="relative z-[1] rounded-full border border-white/14 bg-white/8 px-3 py-2 text-[0.74rem] uppercase tracking-[0.14em]">
                      {profile.location}
                    </span>
                  </div>

                  <div className="grid gap-4 p-6">
                    <h3 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] leading-[1.05] tracking-[-0.03em] text-ink">
                      {profile.title}
                    </h3>
                    <p className={`${copy} text-ink/74`}>{profile.description}</p>
                    <p className={`${copy} text-ink/60`}>{profile.detail}</p>
                    <Link
                      className="inline-flex justify-self-start rounded-full border border-ink/14 px-[1.45rem] py-4 text-[0.8rem] uppercase tracking-[0.18em] text-ink transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:bg-ink/4"
                      href="/contact"
                    >
                      Ask about this lane
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${section} bg-background text-foreground`} id="markets">
          <div className={shell}>
            <Reveal className="mb-10 flex items-end justify-between gap-8 max-xl:flex-col max-xl:items-start">
              <div className="grid gap-4">
                <p className={`${label} text-paper/46`}>Why These Markets</p>
                <h2 className={`${title} max-w-[25ch] text-[#fff8ee]`}>
                  Different Tennessee stay markets still call for different operating strategies.
                </h2>
              </div>
              <Link className={secondaryButton} href="/contact">
                Start a conversation
              </Link>
            </Reveal>

            <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-1 max-lg:grid-cols-2 max-md:grid-cols-1">
              {marketNotes.map((note, index) => (
                <Reveal
                  as="article"
                  className={`${darkCard} grid min-h-72 gap-4 p-6 transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2`}
                  delay={index * 120}
                  key={note.title}
                >
                  <span className={`${label} text-paper/46`}>{note.market}</span>
                  <h3 className="font-display text-[clamp(1.9rem,2.8vw,2.6rem)] leading-[1.05] tracking-[-0.03em] text-[#fff8ee]">
                    {note.title}
                  </h3>
                  <p className={`${copy} text-paper/68`}>{note.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${section} bg-paper text-ink`}>
          <div className={shell}>
            <Reveal className="mb-10 flex items-end justify-between gap-8 max-xl:flex-col max-xl:items-start">
              <div className="grid gap-4">
                <p className={`${label} text-ink/52`}>Key Markets</p>
                <h2 className={title}>A few Tennessee markets where the focus is strongest.</h2>
              </div>
              <p className="max-w-96 leading-[1.8] text-ink/62">
                The focus stays tied to real short-term rental lanes across the Smokies and nearby
                Tennessee tourism corridors.
              </p>
            </Reveal>

            <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-1">
              {guides.map((guide, index) => (
                <Reveal
                  as="article"
                  className="group relative grid min-h-[27rem] content-between overflow-hidden border border-ink/8 p-[1.35rem] shadow-[0_28px_60px_rgba(24,19,14,0.08)] transition duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 max-md:min-h-56"
                  delay={index * 110}
                  key={guide.title}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${guide.image}')` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(7,6,5,0.52))]" />
                  <span className={`${label} relative z-[1] text-paper`}>Guide</span>
                  <div className="relative z-[1] grid gap-3 text-paper">
                    <h3 className="font-display text-[clamp(2rem,3vw,2.8rem)] leading-[1.05] tracking-[-0.03em]">
                      {guide.title}
                    </h3>
                    <p className={`${copy} text-paper/78`}>{guide.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {marketTape.map((item) => (
                <span
                  className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-white/76 px-5 py-4 text-[0.78rem] uppercase tracking-[0.18em] text-ink/78"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative bg-[radial-gradient(circle_at_top_right,rgba(197,143,82,0.14),transparent_28%),linear-gradient(180deg,#100d0a_0%,#0d0b08_100%)] px-0 py-28 pb-8 text-foreground max-md:py-20">
        <div className={shell}>
          <div className="grid grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] items-start gap-12 max-xl:grid-cols-1">
            <Reveal className="grid gap-6" distance="left">
              <p className={`${label} text-paper/46`}>Connect</p>
              <h2 className={`${title} max-w-[25ch] text-[#fff8ee]`}>
                Looking at a Tennessee short-term rental opportunity?
              </h2>
              <p className={`${copy} max-w-[38rem] text-paper/70`}>
                If a property fits the focus, the details below are the right place to start.
              </p>

              <div className={`${darkCard} mt-4 grid gap-5 p-6`}>
                <span className={`${label} text-paper/48`}>Best fit</span>
                <div className="grid gap-3">
                  {[
                    "Short-term rentals in the Smokies",
                    "Cabins and furnished stays in Sevier County",
                    "Well-located properties with guest-ready upside",
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

            <Reveal className="grid gap-4" delay={120} distance="right">
              {[
                {
                  label: "Based in Tennessee",
                  value: "109 Parkway Suite 4C",
                  detail: "Sevierville, TN 37862",
                },
                {
                  label: "Market focus",
                  value: "Sevier County and the Smokies",
                  detail: "Sevierville, Pigeon Forge, Gatlinburg, and nearby Tennessee stay markets",
                },
                {
                  label: "Focus",
                  value: "Short-term rentals",
                  detail: "Cabins, furnished stays, and vacation rental operations",
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
            <span>Sevierville, Tennessee</span>
            <span>Smoky Mountains short-term rentals</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
