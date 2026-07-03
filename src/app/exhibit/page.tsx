import { ContactInquiryForm } from "../../components/contact-inquiry-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NirvanaLuxe | Exhibit Booth",
  description:
    "Connect with NirvanaLuxe at our exhibit booth. Fill out the form and our team will reach out.",
};

const label = "text-[0.72rem] uppercase tracking-[0.2em] leading-[1.3]";
const title =
  "font-display font-medium leading-[1.02] tracking-[-0.04em]";
const copy = "text-[clamp(0.88rem,1.3vw,1rem)] leading-[1.65]";

export default function ExhibitBoothPage() {
  return (
    <div className="relative flex h-[100dvh] w-screen overflow-hidden bg-[#0d0b08]">
      {/* ── Background image ── */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/hero-ridge.png"
        />

        {/* Gradient overlays for depth & readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,11,8,0.85) 0%, rgba(13,11,8,0.5) 35%, rgba(13,11,8,0.28) 55%, rgba(13,11,8,0.6) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 80% at 26% 50%, rgba(13,11,8,0.78) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(13,11,8,0.55) 0%, transparent 25%)",
          }}
        />
      </div>

      {/* ── Floating property thumbnails (right side decoration) ── */}
      <div aria-hidden="true" className="absolute right-[2.5%] top-1/2 z-[1] hidden -translate-y-1/2 flex-col gap-3 xl:flex">
        <div className="h-[110px] w-[170px] overflow-hidden rounded-[0.75rem] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:scale-105">
          <img alt="" className="h-full w-full object-cover" src="/images/asset-smoky.png" />
        </div>
        <div className="h-[110px] w-[170px] overflow-hidden rounded-[0.75rem] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:scale-105">
          <img alt="" className="h-full w-full object-cover" src="/images/asset-charlotte.png" />
        </div>
        <div className="h-[110px] w-[170px] overflow-hidden rounded-[0.75rem] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:scale-105">
          <img alt="" className="h-full w-full object-cover" src="/images/asset-parkway.png" />
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-[2] flex h-full w-full items-center px-[4vw] max-lg:justify-center">
        <div className="flex w-full max-w-[1260px] items-center gap-[4vw] max-lg:flex-col max-lg:justify-center max-lg:gap-4 max-lg:py-6">

          {/* Left: Branding */}
          <div className="flex shrink-0 flex-col gap-3 max-lg:items-center max-lg:text-center">
            {/* Dual logos */}
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 overflow-hidden rounded-[0.75rem] border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-lg:h-11 max-lg:w-11">
                <img
                  alt="VKR Ventures Logo"
                  className="h-full w-full object-cover"
                  src="/images/vkr-ventures.jpeg"
                />
              </div>
              <span className="text-[1.2rem] font-light text-paper/30">&times;</span>
              <div className="h-14 w-14 overflow-hidden rounded-[0.75rem] border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-lg:h-11 max-lg:w-11">
                <img
                  alt="NirvanaLuxe Logo"
                  className="h-full w-full object-cover"
                  src="/images/nirvanaluxe-logo.jpg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className={`${title} text-[clamp(2rem,3.8vw,2.8rem)] text-paper`}>
                VKR Ventures <span className="text-paper/35">&</span> NirvanaLuxe
              </h1>
              <p className={`${label} text-paper/50`}>
                Premium Property Management
              </p>
            </div>
            <p className={`${copy} max-w-[28ch] text-paper/60 max-lg:max-w-[36ch]`}>
              Welcome to our booth! Fill out the form and we&rsquo;ll follow up with you.
            </p>

            {/* Property badge strip */}
            <div className="mt-1 flex flex-wrap gap-2 max-lg:justify-center">
              {["Smoky Mountains", "Charlotte Region", "Sevierville"].map((loc) => (
                <span
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-paper/55 backdrop-blur-sm"
                  key={loc}
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Glassmorphism form card */}
          <div className="w-full max-w-[560px] max-lg:max-w-[520px]">
            <div
              className="rounded-[1.2rem] border border-white/[0.12] p-5 shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl max-md:p-4"
              style={{
                background:
                  "linear-gradient(145deg, rgba(244,239,230,0.93) 0%, rgba(244,239,230,0.97) 100%)",
              }}
            >
              <div className="grid gap-1.5 pb-1">
                <p className={`${label} text-ink/48`}>Get in touch</p>
                <h2 className={`${title} text-[clamp(1.3rem,2.2vw,1.7rem)] text-ink`}>
                  Tell us what you need.
                </h2>
              </div>

              <ContactInquiryForm compact hideService />
            </div>
          </div>

        </div>
      </div>

      {/* ── Minimal footer ── */}
      <div className="absolute inset-x-0 bottom-0 z-[2] px-[4vw] py-2.5">
        <p className="text-[0.6rem] uppercase tracking-[0.2em] text-paper/22">
          &copy; {new Date().getFullYear()} VKR Ventures LLC &middot; NirvanaLuxe
        </p>
      </div>
    </div>
  );
}
