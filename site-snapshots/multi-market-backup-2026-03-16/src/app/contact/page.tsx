import { Reveal } from "../../components/reveal";
import { SiteNav } from "../../components/site-nav";

const officeCards = [
  {
    label: "Tennessee office",
    title: "109 Parkway Suite 4C",
    detail: "Sevierville, TN 37862",
  },
  {
    label: "Charlotte-region mailing",
    title: "2357 Herrons Nest Pl NW",
    detail: "Concord, NC 28027",
  },
];

const serviceNotes = [
  "Short-term property management",
  "Long-term property management",
  "Smokies and Charlotte-region properties",
];

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Focus", href: "/#focus" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Markets", href: "/#markets" },
  { label: "Contact", href: "/contact", cta: true, current: true },
];

const shell =
  "mx-auto w-[min(1180px,calc(100vw-48px))] max-md:w-[min(1180px,calc(100vw-32px))]";
const label = "text-[0.72rem] uppercase tracking-[0.2em] leading-[1.3]";
const title =
  "font-display font-medium leading-[1.02] tracking-[-0.04em]";
const copy = "text-[clamp(1rem,1.8vw,1.08rem)] leading-[1.85]";
const card =
  "rounded-[1.2rem] border border-ink/8 bg-white/90 shadow-[0_28px_60px_rgba(24,19,14,0.08)]";
const inputBase =
  "w-full rounded-[0.9rem] border border-ink/12 bg-[#fcfaf6] px-4 py-[0.95rem] text-ink transition duration-200 focus:border-[rgba(101,68,33,0.42)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[rgba(167,123,74,0.12)]";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative">
        <SiteNav brandHref="/#top" items={navItems} />

        <section className="relative min-h-[26rem] overflow-clip bg-background">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(13, 11, 8, 0.36) 0%, rgba(13, 11, 8, 0.7) 100%), linear-gradient(90deg, rgba(13, 11, 8, 0.52) 0%, rgba(13, 11, 8, 0.24) 50%, rgba(13, 11, 8, 0.52) 100%), url('/images/hero-ridge.png')",
            }}
          />

          <div className={shell}>
            <div className="relative z-[1] grid min-h-[26rem] content-center gap-5 py-[3.75rem] text-paper max-md:min-h-96">
              <p className={`${label} text-paper/82`}>Contact Us</p>
              <h1 className={`${title} max-w-[12ch] text-[clamp(3rem,6vw,4.8rem)] text-balance`}>
                Contact VKR Ventures.
              </h1>
              <p className={`${copy} max-w-[38rem] text-paper/76`}>
                Tell us if you need short-term or long-term property management in the Smokies or
                the Charlotte region.
              </p>
            </div>
          </div>
        </section>
      </header>

      <main className="bg-paper">
        <section className="py-[5.5rem] max-md:py-[4.5rem]">
          <div className={shell}>
            <div className="grid grid-cols-[minmax(0,1.08fr)_minmax(320px,0.72fr)] items-start gap-6 max-lg:grid-cols-1">
              <Reveal className={`${card} grid gap-4 p-8 max-md:p-[1.35rem]`} distance="left">
                <p className={`${label} text-ink/48`}>Send an inquiry</p>
                <h2 className={`${title} text-[clamp(2rem,3.2vw,2.6rem)] text-ink`}>
                  Start with the property and what you need.
                </h2>
                <p className={`${copy} text-ink/70`}>
                  Share the basics below so the conversation starts in the right lane.
                </p>

                <form className="mt-2 grid gap-4">
                  <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                    <label className="grid gap-[0.6rem]">
                      <span className={`${label} text-ink/54`}>Full name</span>
                      <input className={`${inputBase} min-h-[3.25rem]`} name="name" placeholder="Your name" type="text" />
                    </label>

                    <label className="grid gap-[0.6rem]">
                      <span className={`${label} text-ink/54`}>Email</span>
                      <input
                        className={`${inputBase} min-h-[3.25rem]`}
                        name="email"
                        placeholder="you@example.com"
                        type="email"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                    <label className="grid gap-[0.6rem]">
                      <span className={`${label} text-ink/54`}>Phone</span>
                      <input
                        className={`${inputBase} min-h-[3.25rem]`}
                        name="phone"
                        placeholder="Optional"
                        type="tel"
                      />
                    </label>

                    <label className="grid gap-[0.6rem]">
                      <span className={`${label} text-ink/54`}>Service needed</span>
                      <div className="relative">
                        <select
                          className={`${inputBase} min-h-[3.25rem] appearance-none pr-12`}
                          defaultValue=""
                          name="service"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          <option value="short-term">Short-term property management</option>
                          <option value="long-term">Long-term property management</option>
                          <option value="both">Both</option>
                        </select>
                        <span className="pointer-events-none absolute right-5 top-1/2 h-[0.55rem] w-[0.55rem] -translate-y-[60%] rotate-45 border-b-[1.5px] border-r-[1.5px] border-ink/54" />
                      </div>
                    </label>
                  </div>

                  <label className="grid gap-[0.6rem]">
                    <span className={`${label} text-ink/54`}>Property location</span>
                    <input
                      className={`${inputBase} min-h-[3.25rem]`}
                      name="location"
                      placeholder="City, area, or property address"
                      type="text"
                    />
                  </label>

                  <label className="grid gap-[0.6rem]">
                    <span className={`${label} text-ink/54`}>Message</span>
                    <textarea
                      className={`${inputBase} min-h-40 resize-y`}
                      name="message"
                      placeholder="Tell us about the property, current use, and what help you need."
                      rows={7}
                    />
                  </label>

                  <button
                    className="inline-flex min-w-48 justify-center justify-self-start rounded-full border border-ink/14 bg-ink px-[1.45rem] py-4 text-[0.8rem] uppercase tracking-[0.18em] text-paper transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:bg-[#211b16] hover:shadow-[0_16px_34px_rgba(23,20,17,0.18)] focus:outline-none focus:ring-4 focus:ring-[rgba(167,123,74,0.18)] max-md:w-full max-md:justify-self-stretch"
                    type="button"
                  >
                    Submit inquiry
                  </button>
                </form>
              </Reveal>

              <Reveal className="grid gap-4" delay={120} distance="right">
                <div className={`${card} grid gap-4 p-[1.6rem] max-md:p-[1.35rem]`}>
                  <p className={`${label} text-ink/48`}>Contact details</p>
                  <h2 className={`${title} text-[clamp(2rem,3.2vw,2.6rem)] text-ink`}>
                    VKR Ventures LLC
                  </h2>
                  <p className={`${copy} text-ink/70`}>
                    Property management focused on short-term and long-term rentals across
                    Tennessee and the Charlotte region.
                  </p>

                  <div className="grid gap-4">
                    {officeCards.map((office) => (
                      <article className="grid gap-2 pt-1" key={office.title}>
                        <span className={`${label} text-ink/48`}>{office.label}</span>
                        <strong className={`${title} text-[1.6rem] text-ink`}>
                          {office.title}
                        </strong>
                        <span className={`${copy} text-ink/68`}>{office.detail}</span>
                      </article>
                    ))}
                  </div>
                </div>

                <div className={`${card} grid gap-4 p-[1.6rem] max-md:p-[1.35rem]`}>
                  <p className={`${label} text-ink/48`}>Best fit</p>
                  <div className="grid gap-4">
                    {serviceNotes.map((note) => (
                      <span
                        className="inline-flex w-fit items-center rounded-full border border-ink/10 bg-[#fcfaf6] px-4 py-[0.9rem] text-[0.82rem] uppercase tracking-[0.14em] text-ink/74"
                        key={note}
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background py-8">
        <div className={shell}>
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-4 text-[0.78rem] uppercase tracking-[0.18em] text-paper/46 max-md:justify-start">
            <span>VKR Ventures LLC</span>
            <span>Sevierville, Tennessee</span>
            <span>Charlotte region</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
