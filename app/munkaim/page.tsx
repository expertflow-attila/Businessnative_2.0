import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { PROJECTS } from "@/lib/projects";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Munkáim — Business Native",
  description:
    "Ügyfélprojektek és saját rendszer-koncepciók — weboldalaktól teljes ügyfélszerző rendszerekig és építőipari szoftverekig.",
};

const CLIENTS = [
  {
    tag: "Hangstúdió",
    title: "Modus Recording",
    desc: "Weboldal-koncepció egy budapesti hangstúdiónak — nyers–kész összehasonlító lejátszóval.",
    img: "/images/ref-modus.webp",
    href: "/referenciak/modus-recording",
  },
  {
    tag: "Tanácsadó",
    title: "Dr. Nagyfejő Éva",
    desc: "Prémium, kétnyelvű weboldal egy kiberbiztonsági tanácsadónak, interaktív önértékelő teszttel.",
    img: "/images/ref-eva.webp",
    href: "/referenciak/eva-nagyfejeo",
  },
];

export default function MunkaimPage() {
  const own = PROJECTS;
  return (
    <>
      {/* Fejléc */}
      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <p className="eyebrow">Munkáim</p>
            <h1 className="mt-5 max-w-[18ch] text-[clamp(34px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.03em] text-ink">
              Amin eddig dolgoztam.
            </h1>
            <p className="mt-6 max-w-[54ch] text-body-lg text-ink-3">
              Ügyfélprojektek és saját rendszer-koncepciók: weboldalaktól a
              teljes ügyfélszerző rendszerekig és iparági szoftverekig. Mindet
              élőben is megnézheted.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ügyfélreferenciák */}
      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
              <div>
                <p className="eyebrow">Ügyfélreferenciák</p>
                <h2 className="mt-4 max-w-[22ch] text-[clamp(26px,3.4vw,38px)] font-normal leading-[1.1] tracking-[-0.03em] text-ink">
                  Akikkel együtt dolgoztam.
                </h2>
              </div>
              <p className="max-w-[38ch] pb-1 text-body text-ink-3">
                Valódi vállalkozók, valódi projektek — minden esetben előbb
                megértettem a szakmát, és csak utána építettem.
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-10 grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline md:grid-cols-2">
            {CLIENTS.map((c) => (
              <StaggerItem key={c.href} className="bg-surface">
                <a href={c.href} className="group flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-inset">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                      {c.tag.toUpperCase()}
                    </span>
                    <h3 className="mt-3 text-heading font-normal tracking-[-0.02em] text-ink">{c.title}</h3>
                    <p className="mt-2.5 text-body text-ink-3">{c.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-body font-medium text-ink">
                      Esettanulmány
                      <Arrow />
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Saját projektek */}
      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
              <div>
                <p className="eyebrow">Saját projektek</p>
                <h2 className="mt-4 max-w-[24ch] text-[clamp(26px,3.4vw,38px)] font-normal leading-[1.1] tracking-[-0.03em] text-ink">
                  Rendszerek, amiket a saját kezemmel építettem.
                </h2>
              </div>
              <p className="max-w-[38ch] pb-1 text-body text-ink-3">
                Koncepciók és működő prototípusok különböző iparágakból — így
                dolgozom, és ezt tudom a te vállalkozásodra is alkalmazni.
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-10 grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {own.map((p) => (
              <StaggerItem key={p.slug} className="bg-surface">
                <a href={`/munkaim/${p.slug}`} className="group flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-inset">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    {p.items && p.items.length > 1 && (
                      <span className="absolute right-3 top-3 rounded-small bg-canvas/90 px-2 py-1 font-mono text-[9px] font-medium tracking-[0.06em] text-ink-2 backdrop-blur">
                        {p.items.length} FELÜLET
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-mono text-[9px] font-medium tracking-[0.08em] text-accent">
                      {p.category.toUpperCase()}
                    </span>
                    <h3 className="mt-2.5 text-heading-sm font-medium text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-body text-ink-3">{p.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-body font-medium text-ink">
                      Megnézem
                      <Arrow />
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Cta />
    </>
  );
}

function Arrow() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden
      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
    >
      <path
        d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
