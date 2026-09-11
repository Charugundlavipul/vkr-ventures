import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "VKR Ventures | Connect",
  description: "Connect with VKR Ventures for North Carolina property sales and residential property management.",
};

export default function ExhibitBoothPage() {
  return (
    <div className="relative flex min-h-[100dvh] w-full items-center overflow-hidden bg-[#0a0e1a] px-8 py-10 max-md:px-4">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,#17243b_0%,#0a0e1a_60%,#060810_100%)]" />
        <div className="absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(197,143,82,0.16),transparent_68%)] blur-[80px]" />
        <div className="absolute inset-3 border border-accent/20 max-md:hidden" />
      </div>

      <div className="relative z-[1] mx-auto grid w-full max-w-[1180px] grid-cols-[0.95fr_1.05fr] items-center gap-14 max-lg:grid-cols-1">
        <div className="grid justify-items-center gap-6 text-center text-paper">
          <Image className="h-auto w-full max-w-[32rem] rounded-2xl border border-accent/30 object-contain shadow-2xl" src="/images/vkr-ventures-logo.png" alt="VKR Ventures" width={1534} height={483} priority />
          <div className="grid gap-3">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">North Carolina</p>
            <h1 className="font-display text-[clamp(3.4rem,7vw,6rem)] leading-[0.86] tracking-[-0.05em] text-[#fff8ee]">Let&apos;s talk real estate.</h1>
            <p className="mx-auto max-w-lg leading-[1.8] text-paper/65">Property sales, buyer representation, tenant placement, and full-service residential management.</p>
          </div>
          <div className="grid justify-items-center gap-2 rounded-xl border border-accent/30 bg-white/5 p-4">
            <Image className="h-32 w-32 rounded-lg bg-white object-contain p-2" src="/images/qr-code.png" alt="Scan to connect with VKR Ventures" width={128} height={128} />
            <span className="text-[0.65rem] uppercase tracking-[0.22em] text-accent">Scan to connect</span>
          </div>
          <p className="text-sm text-paper/52">Vinay R · NC Broker #346593</p>
        </div>

        <div className="overflow-auto rounded-2xl bg-white p-7 shadow-[0_32px_80px_rgba(0,0,0,0.45)] max-md:p-4">
          <div className="grid gap-2 pb-3 text-ink">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/48">Get in touch</p>
            <h2 className="font-display text-3xl leading-none tracking-[-0.04em]">Tell us what you need.</h2>
          </div>
          <iframe
            data-tally-src="https://tally.so/embed/D4P8zb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="600"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="VKR Ventures interest form"
          />
        </div>
      </div>
    </div>
  );
}
