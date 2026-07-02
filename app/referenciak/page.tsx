import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Referenciák — Business Native",
  description:
    "Akikkel eddig dolgoztam — minden projektben más a szakma, más a kihívás, de a megközelítés ugyanaz.",
};

const REFERENCIAK = [
  {
    tag: "Hangstúdió",
    title: "Felvétel, keverés, mastering, filmes hangmunka",
    name: "Vitányi Dávid · Modus Recording",
    img: "/images/ref-modus.webp",
  },
  {
    tag: "Tanácsadó",
    title: "Kiberbiztonsági irányítás és digitális ellenállóképesség",
    name: "Dr. Nagyfejő Éva",
    img: "/images/ref-eva.webp",
  },
];

export default function ReferenciakPage() {
  return (
    <>
      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <p className="eyebrow">Referenciák</p>
            <h1 className="mt-5 max-w-[16ch] text-[clamp(34px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.03em] text-ink">
              Akikkel eddig dolgoztam.
            </h1>
            <p className="mt-6 max-w-[52ch] text-body-lg text-ink-3">
              Minden projektben más a szakma, más a kihívás — de a
              megközelítésem ugyanaz: először megértem, hogyan dolgozol és
              kinek segítesz, és csak utána építek.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <Stagger className="grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline md:grid-cols-2">
            {REFERENCIAK.map((r) => (
              <StaggerItem key={r.name} className="flex flex-col bg-surface">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-inset">
                  <Image
                    src={r.img}
                    alt={r.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                    {r.tag.toUpperCase()}
                  </span>
                  <h2 className="mt-3 text-heading font-normal tracking-[-0.02em] text-ink">
                    {r.title}
                  </h2>
                  <p className="mt-3 text-body text-ink-3">{r.name}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-12 max-w-[52ch] text-center text-body text-ink-3">
              A lista rövid — és ez szándékos. Kevés ügyféllel dolgozom
              egyszerre, hogy minden projekt megkapja azt a figyelmet, amit
              megérdemel.
            </p>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
