import type { Metadata } from "next";
import { ContactInquiryForm } from "../../components/contact-inquiry-form";
import { Reveal } from "../../components/reveal";
import { SiteNav } from "../../components/site-nav";

export const metadata: Metadata = {
  title: "Contact VKR Ventures | North Carolina Real Estate",
  description: "Contact VKR Ventures about buying, selling, tenant placement, or property management in the Charlotte region and nearby North Carolina markets.",
};

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Buy & Sell", href: "/#sales" },
  { label: "Management", href: "/#management" },
  { label: "Homes", href: "/#homes" },
  { label: "Areas", href: "/#areas" },
  { label: "Contact", href: "/contact", cta: true, current: true },
];

const shell = "mx-auto w-[min(1180px,calc(100vw-48px))] max-md:w-[min(1180px,calc(100vw-32px))]";
const label = "text-[0.72rem] uppercase tracking-[0.2em] leading-[1.3]";
const title = "font-display font-medium leading-[1.02] tracking-[-0.04em]";
const copy = "text-[clamp(1rem,1.8vw,1.08rem)] leading-[1.85]";
const card = "border border-ink/8 bg-white/92 shadow-[0_28px_60px_rgba(24,19,14,0.08)]";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative">
        <SiteNav brandHref="/#top" items={navItems} />
        <section className="relative min-h-[29rem] overflow-clip bg-background">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "linear-gradient(90deg,rgba(8,12,18,.86),rgba(8,12,18,.46)),linear-gradient(180deg,rgba(8,12,18,.2),rgba(8,12,18,.72)),url('/images/hero-city.png')",
            }}
          />
          <div className={shell}>
            <div className="relative z-[1] grid min-h-[29rem] content-end gap-5 pb-16 pt-32 text-paper">
              <p className={`${label} text-accent`}>Contact VKR Ventures</p>
              <h1 className={`${title} max-w-[18ch] text-[clamp(3.2rem,6.5vw,5.5rem)] text-[#fff8ee]`}>
                Tell us what property decision is next.
              </h1>
              <p className={`${copy} max-w-[38rem] text-paper/72`}>
                Buying, selling, tenant placement, or full-service management—we will start with the details that matter.
              </p>
            </div>
          </div>
        </section>
      </header>

      <main className="bg-[#f6f1e9] py-24 text-ink max-md:py-16">
        <div className={shell}>
          <div className="grid grid-cols-[1.08fr_0.72fr] items-start gap-6 max-lg:grid-cols-1">
            <Reveal className={`${card} grid gap-4 p-8 max-md:p-5`} distance="left">
              <p className={`${label} text-ink/48`}>Get in touch</p>
              <h2 className={`${title} text-[clamp(2rem,3.2vw,2.7rem)]`}>Send an inquiry.</h2>
              <p className={`${copy} text-ink/68`}>
                Tell us how we can help, and we&apos;ll be in touch shortly.
              </p>
              <ContactInquiryForm />
            </Reveal>

            <Reveal className="grid gap-4" delay={100} distance="right">
              <div className={`${card} grid gap-5 p-7 max-md:p-5`}>
                <p className={`${label} text-ink/48`}>Direct contact</p>
                <h2 className={`${title} text-[clamp(2rem,3.2vw,2.7rem)]`}>Vinay R</h2>
                <p className="text-sm uppercase tracking-[0.16em] text-[#9b642e]">NC Broker #346593</p>
                <div className="grid gap-2 border-t border-ink/10 pt-5">
                  <a className="font-display text-2xl transition hover:text-[#9b642e]" href="tel:19728359376">+1 972 835 9376</a>
                  <a className="leading-relaxed text-ink/65 transition hover:text-ink" href="mailto:vinay@vkr-ventures.com">vinay@vkr-ventures.com</a>
                  <a className="leading-relaxed text-ink/65 transition hover:text-ink" href="https://www.vkr-ventures.com">www.vkr-ventures.com</a>
                </div>
              </div>

              <div className={`${card} grid gap-4 p-7 max-md:p-5`}>
                <p className={`${label} text-ink/48`}>Management highlights</p>
                {[
                  "First 3 months free",
                  "50% of first month's rent for tenant placement",
                  "No monthly management fee until a tenant is placed",
                ].map((note) => (
                  <span className="border-t border-ink/10 pt-4 leading-[1.65] text-ink/72" key={note}>{note}</span>
                ))}
                <p className="text-xs leading-relaxed text-ink/45">Call for property-specific details. Final terms are set by the signed management agreement.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </main>

      <footer className="bg-background py-8 text-paper">
        <div className={`${shell} flex flex-wrap justify-between gap-4 text-xs uppercase tracking-[0.16em] text-paper/46`}>
          <span>VKR Ventures LLC</span>
          <span>North Carolina sales &amp; property management</span>
          <span>Equal Housing Opportunity</span>
        </div>
      </footer>
    </div>
  );
}
