import { ContactInquiryForm } from "../../components/contact-inquiry-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VKR Ventures & NirvanaLuxe | Exhibit Booth",
  description:
    "Connect with VKR Ventures & NirvanaLuxe at our exhibit booth. Property sales & management across Tennessee and the Charlotte region.",
};

export default function ExhibitBoothPage() {
  return (
    <div className="relative flex h-[100dvh] w-screen overflow-hidden bg-[#0a0e1a]">

      {/* ── Layered background ── */}
      <div aria-hidden="true" className="absolute inset-0">
        {/* Deep navy radial base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 50% 0%, #111827 0%, #0a0e1a 60%, #060810 100%)",
          }}
        />

        {/* Gold corner glow — top-left */}
        <div
          className="absolute -left-[10%] -top-[10%] h-[50%] w-[50%] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(197,143,82,0.18) 0%, transparent 70%)" }}
        />

        {/* Gold corner glow — top-right */}
        <div
          className="absolute -right-[10%] -top-[10%] h-[45%] w-[45%] rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(197,143,82,0.12) 0%, transparent 70%)" }}
        />

        {/* Subtle bottom glow */}
        <div
          className="absolute bottom-0 left-1/2 h-[30%] w-[80%] -translate-x-1/2 rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(197,143,82,0.08) 0%, transparent 70%)" }}
        />

        {/* Decorative gold border frame */}
        <div
          className="absolute inset-[10px] rounded-[4px] border border-[rgba(197,143,82,0.2)] max-md:inset-[6px]"
          style={{
            boxShadow: "inset 0 0 40px rgba(197,143,82,0.04), 0 0 40px rgba(197,143,82,0.03)",
          }}
        />
        <div
          className="absolute inset-[14px] rounded-[3px] border border-[rgba(197,143,82,0.08)] max-md:inset-[10px]"
        />

        {/* Sparkle dots */}
        <div className="absolute left-[18%] top-[38%] h-1 w-1 rounded-full bg-[#c58f52] opacity-40 blur-[1px]" />
        <div className="absolute right-[22%] top-[55%] h-1.5 w-1.5 rounded-full bg-[#c58f52] opacity-25 blur-[1px]" />
        <div className="absolute left-[45%] bottom-[22%] h-1 w-1 rounded-full bg-[#c58f52] opacity-35 blur-[1px]" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-[2] flex h-full w-full flex-col items-center justify-center px-8">
        <div className="flex w-full max-w-[1280px] items-center gap-12 max-lg:flex-col max-lg:items-center max-lg:gap-5 max-lg:py-4">

          {/* ═══ Left: Branding & Identity ═══ */}
          <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center max-lg:gap-3">

            {/* Dual logos — prominent display */}
            <div className="flex items-center gap-7 max-md:gap-3">
              {/* NirvanaLuxe Logo */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-[5.5rem] w-[5.5rem] overflow-hidden rounded-2xl border border-[rgba(197,143,82,0.3)] shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(197,143,82,0.08)] max-md:h-12 max-md:w-12"
                >
                  <img
                    alt="NirvanaLuxe Logo"
                    className="h-full w-full object-cover"
                    src="/images/nirvanaluxe-logo.jpg"
                  />
                </div>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#f4efe6]/70 max-md:text-[0.5rem]">
                  NirvanaLuxe
                </span>
              </div>

              {/* Divider */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-[rgba(197,143,82,0.5)] to-transparent max-md:h-6" />
              </div>

              {/* VKR Ventures Logo */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-[5.5rem] w-[5.5rem] overflow-hidden rounded-2xl border border-[rgba(197,143,82,0.3)] shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(197,143,82,0.08)] max-md:h-12 max-md:w-12"
                >
                  <img
                    alt="VKR Ventures Logo"
                    className="h-full w-full object-cover"
                    src="/images/vkr-ventures.jpeg"
                  />
                </div>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#f4efe6]/70 max-md:text-[0.5rem]">
                  VKR Ventures
                </span>
              </div>
            </div>

            {/* Main heading */}
            <div className="flex items-center gap-3">
              <h1 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-medium leading-[1] tracking-[-0.03em] text-[#f4efe6]">
                Connect
              </h1>
              <p className="font-display text-[clamp(2.8rem,5.5vw,4.5rem)] font-medium italic leading-[0.9] tracking-[-0.03em] text-[#c58f52]">
                with us
              </p>
            </div>

            {/* QR Code */}
            <div className="relative mt-2 flex flex-col items-center justify-center">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-b from-[rgba(197,143,82,0.15)] to-transparent opacity-60 blur-lg" />
              <div className="relative flex flex-col items-center gap-2.5 rounded-xl border border-[rgba(197,143,82,0.3)] bg-[#0a0e1a]/40 p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_15px_rgba(255,255,255,0.05)] backdrop-blur-md">
                <div className="overflow-hidden rounded-lg bg-white p-2 shadow-inner">
                  <img
                    alt="Connect With Us QR Code"
                    className="h-[8rem] w-[8rem] object-contain max-md:h-16 max-md:w-16"
                    src="/images/qr-code.png"
                  />
                </div>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#c58f52]/90">
                  Scan to Connect
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="mt-2 text-[0.72rem] uppercase tracking-[0.22em] text-[#f4efe6]/50">
              Property Sales &amp; Management
            </p>

            {/* Service highlights */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-md:gap-1.5">
              {["Greater Charlotte Area", "Tennessee"].map((loc) => (
                <span
                  className="inline-flex items-center rounded-full border border-[rgba(197,143,82,0.2)] bg-[rgba(197,143,82,0.06)] px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.16em] text-[#c58f52]/70 backdrop-blur-sm max-md:px-2 max-md:py-0.5 max-md:text-[0.5rem]"
                  key={loc}
                >
                  {loc}
                </span>
              ))}
            </div>

            {/* Brand names */}
            <p className="text-[0.75rem] tracking-[0.14em] text-[#f4efe6]/50 max-md:text-[0.55rem]">
              <span className="font-semibold text-[#f4efe6]/70">www.nirvanaluxevacations.com</span>
              <span className="mx-2.5 text-[#c58f52]/40">|</span>
              <span className="font-semibold text-[#f4efe6]/70">www.vkr-ventures.com</span>
            </p>
          </div>

          {/* ═══ Right: Compact contact form ═══ */}
          <div className="w-full max-w-[540px] max-lg:max-w-[520px]">
            <div
              className="rounded-2xl border border-[rgba(197,143,82,0.18)] p-7 shadow-[0_32px_80px_rgba(0,0,0,0.4),0_0_30px_rgba(197,143,82,0.04)] backdrop-blur-xl max-md:p-4"
              style={{
                background:
                  "linear-gradient(145deg, rgba(244,239,230,0.94) 0%, rgba(244,239,230,0.98) 100%)",
              }}
            >
              <div className="grid gap-1.5 pb-2">
                <p className="text-[0.75rem] uppercase tracking-[0.2em] leading-[1.3] text-[#171411]/48">
                  Get in touch
                </p>
                <h2 className="font-display text-[clamp(1.35rem,2.2vw,1.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#171411]">
                  Tell us what you need.
                </h2>
              </div>

              <ContactInquiryForm compact hideService />
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}
