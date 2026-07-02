import Image from "next/image";
import { Reveal } from "@/components/motion/primitives";
import Cta from "@/components/Cta";

export type RefSection = { label: string; paragraphs: string[] };

export default function ReferenceCase({
  tag,
  name,
  lead,
  img,
  liveUrl,
  sections,
}: {
  tag: string;
  name: string;
  lead: string;
  img: string;
  liveUrl: string;
  sections: RefSection[];
}) {
  return (
    <>
      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <a
              href="/referenciak"
              className="inline-flex items-center gap-2 text-body-sm text-ink-3 transition-colors duration-200 hover:text-ink"
            >
              <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden className="rotate-180">
                <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Vissza a referenciákhoz
            </a>
            <p className="eyebrow mt-8">{tag}</p>
            <h1 className="mt-4 max-w-[20ch] text-[clamp(32px,4.2vw,52px)] font-normal leading-[1.06] tracking-[-0.03em] text-ink">
              {name}
            </h1>
            <p className="mt-4 max-w-[52ch] text-body-lg text-ink-3">{lead}</p>
            <a href={liveUrl} target="_blank" rel="noopener" className="btn-primary mt-8">
              Megnézem az élő oldalt
            </a>
          </Reveal>
        </div>
      </section>

      <section className="hairline-b">
        <div className="container-page py-14 md:py-16">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-large border border-hairline bg-inset shadow-hero-slider">
              <Image
                src={img}
                alt={name}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <div className="mx-auto flex max-w-[820px] flex-col gap-12">
            {sections.map((s) => (
              <Reveal key={s.label}>
                <div className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
                  <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                    {s.label.toUpperCase()}
                  </span>
                  <div className="flex flex-col gap-4">
                    {s.paragraphs.map((p, i) => (
                      <p key={i} className="text-body-lg leading-[1.7] text-ink-2">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
