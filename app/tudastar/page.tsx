import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { RESOURCES } from "@/lib/projects";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Tudástár — Business Native",
  description:
    "Ingyenes, gyakorlati tananyagok magyar vállalkozóknak — copywriting és landing-elemzések.",
};

export default function TudastarPage() {
  return (
    <>
      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <p className="eyebrow">Tudástár</p>
            <h1 className="mt-5 max-w-[18ch] text-[clamp(34px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.03em] text-ink">
              Amit ingyen is odaadok.
            </h1>
            <p className="mt-6 max-w-[54ch] text-body-lg text-ink-3">
              Gyakorlati tananyagok magyar vállalkozóknak — abból, amit magam is
              használok. Nem elmélet, hanem bevált képletek és kész eszközök.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <Stagger className="grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline md:grid-cols-2">
            {RESOURCES.map((r) => (
              <StaggerItem key={r.url} className="bg-surface">
                <a href={r.url} target="_blank" rel="noopener" className="group flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-inset">
                    <Image
                      src={r.img}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                      {r.meta.toUpperCase()}
                    </span>
                    <h2 className="mt-3 text-heading font-normal tracking-[-0.02em] text-ink">{r.title}</h2>
                    <p className="mt-2.5 flex-1 text-body text-ink-3">{r.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-body font-medium text-ink">
                      Megnyitom
                      <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M3.5 9.5l6-6M4.5 3.5h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Business Start kiemelés */}
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-large border border-hairline bg-surface">
              <div className="grid md:grid-cols-[1fr_1.1fr]">
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                    ÖNVÉGEZHETŐ PROGRAM
                  </span>
                  <h2 className="mt-4 text-heading-lg font-normal tracking-[-0.03em] text-ink">
                    Business Start
                  </h2>
                  <p className="mt-4 max-w-[46ch] text-body-lg text-ink-3">
                    12 hetes, 13 modulos program szolgáltatóknak: online jelenlét
                    és az első fizető ügyfelek felépítése nulláról — „nem tanítok,
                    megmutatom, te pedig megcsinálod” elven.
                  </p>
                  <a
                    href="https://expert-flow-start-6-0.vercel.app/"
                    target="_blank"
                    rel="noopener"
                    className="btn-primary mt-8 self-start"
                  >
                    Megnézem a programot
                  </a>
                </div>
                <div className="relative min-h-[240px] border-t border-hairline md:border-l md:border-t-0">
                  <Image
                    src="/images/projects/expert-flow-start-6-0.jpg"
                    alt="Business Start"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
