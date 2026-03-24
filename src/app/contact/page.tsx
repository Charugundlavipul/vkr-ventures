import { ContactInquiryForm } from "../../components/contact-inquiry-form";
import { Reveal } from "../../components/reveal";
import { SiteNav } from "../../components/site-nav";

const officeCards = [
  {
    label: "Tennessee office",
    title: "109 Parkway Suite 4C",
    detail: "Sevierville, TN 37862",
  },
  {
    label: "Service area",
    title: "Sevier County and the Smokies",
    detail: "Sevierville, Pigeon Forge, Gatlinburg, and Wears Valley",
  },
];

const serviceNotes = [
  "Short-term property management",
  "Cabin and vacation rental operations",
  "Smoky Mountains guest-ready stays",
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
const title = "font-display font-medium leading-[1.02] tracking-[-0.04em]";
const copy = "text-[clamp(1rem,1.8vw,1.08rem)] leading-[1.85]";
const card =
  "rounded-[1.2rem] border border-ink/8 bg-white/90 shadow-[0_28px_60px_rgba(24,19,14,0.08)]";

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
                Tell us if you need short-term rental management in Sevierville, Pigeon Forge,
                Gatlinburg, or nearby Smoky Mountains markets.
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
                  Tell us what you need and we'll get back to you.
                </h2>
                <p className={`${copy} text-ink/70`}>
                  Share the basics below so the conversation starts in the right lane.
                </p>

                <ContactInquiryForm />
              </Reveal>

              <Reveal className="grid gap-4" delay={120} distance="right">
                <div className={`${card} grid gap-4 p-[1.6rem] max-md:p-[1.35rem]`}>
                  <p className={`${label} text-ink/48`}>Contact details</p>
                  <h2 className={`${title} text-[clamp(2rem,3.2vw,2.6rem)] text-ink`}>
                    VKR Ventures LLC
                  </h2>
                  <p className={`${copy} text-ink/70`}>
                    Short-term rental management focused on Sevierville, Pigeon Forge, Gatlinburg,
                    and nearby Smoky Mountains markets.
                  </p>

                  <div className="grid gap-4">
                    <article className="grid gap-2 pt-1">
                      <span className={`${label} text-ink/48`}>Direct Contact</span>
                      <strong className={`${title} text-[1.6rem] text-ink`}>
                        <a href="tel:7047801369" className="hover:opacity-70 transition-opacity">704-780-1369</a>
                      </strong>
                      <span className={`${copy} text-ink/68`}>
                        <a href="mailto:support@vkr-ventures.com" className="hover:opacity-70 transition-opacity">support@vkr-ventures.com</a>
                      </span>
                    </article>

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
            <span>Smoky Mountains short-term rentals</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
