import Link from "next/link";
import type { ReactNode } from "react";

type ManagementService = {
  category: string;
  description: string;
  icon: ReactNode;
  title: string;
};

type ManagementSectionProps = {
  services: ManagementService[];
};

const shell =
  "mx-auto w-[min(1180px,calc(100vw-48px))] max-md:w-[min(1180px,calc(100vw-32px))]";
const label = "text-[0.72rem] uppercase tracking-[0.2em] leading-[1.3]";

const terms = [
  {
    detail: "Monthly billing starts only after the property is leased.",
    title: "No management fee until a tenant is placed",
  },
  {
    detail: "Photography, marketing, showings, screening, and lease execution are included.",
    title: "Tenant placement is 50% of first month’s rent",
  },
  {
    detail: "Vendor and contractor invoices pass through at direct cost.",
    title: "No hidden maintenance markups",
  },
];

const assurances = [
  ["NCREC compliant", "Regulated client trust accounts"],
  ["Licensed brokerage", "Vinay R · NC Broker #346593"],
  ["No repair markups", "Direct vendor-cost pass-through"],
];

export function ManagementSection({ services }: ManagementSectionProps) {
  return (
    <section className="relative overflow-clip bg-[#f6f1e9] py-24 text-[#171411] max-md:py-16" id="management">
      <div className={shell}>
        <div className="mb-12 grid grid-cols-[1fr_0.7fr] items-end gap-16 max-lg:grid-cols-1 max-lg:gap-5">
          <div className="grid gap-4">
            <p className={`${label} text-[#9b642e]`}>Full-service property management</p>
            <h2 className="max-w-[18ch] font-display text-[clamp(2.4rem,4.6vw,4.25rem)] font-medium leading-[0.95] tracking-[-0.05em]">
              One straightforward fee. Every essential covered.
            </h2>
          </div>
          <p className="max-w-[38rem] text-[clamp(1rem,1.8vw,1.08rem)] leading-[1.8] text-[#171411]/65">
            Tenant placement, leasing operations, and maintenance coordination across Charlotte,
            Concord, Lake Norman, Hickory, and nearby communities.
          </p>
        </div>

        <div className="grid grid-cols-[0.82fr_1.18fr] overflow-hidden border border-white/10 bg-[#122036] text-[#f4efe6] shadow-[0_30px_70px_rgba(18,32,54,0.2)] max-lg:grid-cols-1">
          <div className="grid content-start gap-10 border-r border-white/12 p-10 max-lg:border-b max-lg:border-r-0 max-md:p-6">
            <div className="grid">
              <span className={`${label} text-[#c58f52]`}>Management starts at</span>
              <div className="mt-0 flex items-end gap-2 pb-10">
                <span className="mb-4 font-display text-[clamp(2.3rem,4vw,3.5rem)] leading-none text-[#c58f52]">$</span>
                <strong
                  className="block font-display font-medium tracking-[-0.08em] text-[#e0ad68]"
                  style={{ fontSize: "clamp(7rem, 13vw, 10rem)", lineHeight: 0.72 }}
                >
                  75
                </strong>
              </div>
              <div className="grid gap-3">
                <strong className="text-lg text-[#fff8ee]">Per unit, per month</strong>
                <p className="max-w-[27rem] text-sm leading-[1.75] text-[#f4efe6]/62">
                  Predictable pricing with no percentage increase on higher-rent homes.
                </p>
              </div>
            </div>

            <div className="grid gap-3 border-t border-white/12 pt-8">
              <Link
                className="group flex items-center justify-between bg-[#fff8ee] px-6 py-4 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[#122036] transition hover:bg-white"
                href="/contact"
              >
                <span>Request a rental review</span>
                <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <span className="text-xs text-[#f4efe6]/45">Free rental valuation &middot; No long-term lock-in</span>
            </div>
          </div>

          <div className="grid content-center bg-white/[0.035] p-10 max-md:p-6">
            <span className={`${label} mb-3 text-[#c58f52]`}>Clear terms</span>
            {terms.map((term, index) => (
              <div className="grid grid-cols-[2.25rem_1fr] gap-4 border-t border-white/12 py-6" key={term.title}>
                <span className="font-display text-2xl text-[#c58f52]">0{index + 1}</span>
                <div className="grid gap-2">
                  <strong className="text-lg leading-snug text-[#fff8ee]">{term.title}</strong>
                  <span className="text-sm leading-[1.7] text-[#f4efe6]/58">{term.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between gap-8 border-b border-[#171411]/12 pb-6 max-md:grid">
          <div className="grid gap-2">
            <p className={`${label} text-[#9b642e]`}>What is included</p>
            <h3 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-none tracking-[-0.04em]">
              Management from listing to upkeep.
            </h3>
          </div>
          <span className="shrink-0 text-sm text-[#171411]/48">8 core services</span>
        </div>

        <div className="grid grid-cols-2 gap-x-12 max-md:grid-cols-1">
          {services.map((service, index) => (
            <article className="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-[#171411]/12 py-7" key={service.title}>
              <div className="grid content-start justify-items-start gap-3 text-[#9b642e]">
                <span className="grid h-9 w-9 place-items-center border border-[#9b642e]/30">{service.icon}</span>
                <span className="text-[0.65rem] tracking-[0.15em] text-[#171411]/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="grid content-start gap-2">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#9b642e]">
                  {service.category}
                </span>
                <h4 className="text-lg font-semibold leading-snug">{service.title}</h4>
                <p className="max-w-[34rem] text-sm leading-[1.7] text-[#171411]/58">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 border-y border-[#171411]/12 max-md:grid-cols-1">
          {assurances.map(([heading, detail], index) => (
            <div
              className={`grid gap-1 py-5 ${index === 0 ? "pr-6" : "border-l border-[#171411]/12 px-6 max-md:border-l-0 max-md:border-t max-md:px-0"}`}
              key={heading}
            >
              <strong className="text-xs uppercase tracking-[0.16em]">{heading}</strong>
              <span className="text-sm text-[#171411]/52">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
