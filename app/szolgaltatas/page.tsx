import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import Gallery from "@/components/Gallery";
import Workflow from "@/components/Workflow";
import UseCases from "@/components/UseCases";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Szolgáltatás — Business Native",
  description:
    "Egyéni vállalkozók támogatása egy hatékony és fenntartható üzleti rendszer felépítésében — ügyfélszerzés, kiszolgálás, háttérműködés.",
};

const NEKED_SZOL = [
  "Nyitott vagy az AI-ra, és készen állsz beépíteni a mindennapi munkafolyamataidba.",
  "Vannak ügyfeleid, de szeretnéd, ha a kiszolgálás nem venné el a napod nagy részét.",
  "Szeretnéd, ha a vállalkozásod működése átlátható lenne, és nem kellene mindent fejben tartani.",
];

const PILLARS = [
  {
    n: "I. PILLÉR",
    title: "Ügyfélszerzés",
    body: "Felépítek egy ügyfélszerzési útvonalat, ami az ajánlások mellett is dolgozik — hogy a megfelelő emberek megtaláljanak, és felismerjék a szolgáltatásod értékét.",
    results: [
      "Konverzióra optimalizált értékesítési rendszer",
      "Digitális asszisztens az érdeklődők előszűrésére",
      "Automatizált email marketing és utánkövetés",
    ],
    img: "/images/piller-1.webp",
  },
  {
    n: "II. PILLÉR",
    title: "Kiszolgálás",
    body: "Minden ügyfeled ugyanazt a minőségi élményt kapja, függetlenül attól, hogy éppen kettővel dolgozol vagy tízzel — mert minden lépést egy egységes háttérrendszer támogat.",
    results: [
      "Professzionális benyomás az első pillanattól az utolsóig",
      "Még több ajánlás elégedett ügyfeleidtől",
      "Elkötelezett kliensek, akik szívesen fogadják az új ajánlataidat",
    ],
    img: "/images/piller-2.webp",
  },
  {
    n: "III. PILLÉR",
    title: "Háttérműködés",
    body: "A számlázás és az adminisztráció a háttérben fut, minimális beavatkozással — miközben minden adat egy helyre gyűlik, és idővel egyre jobban átlátod, mi működik.",
    results: [
      "Stabil háttér, ami nélküled is működik",
      "Napi 2-3 óra felszabadított idő az admin feladatokból",
      "Automatizált regisztráció, emlékeztetők és utánkövetés",
    ],
    img: "/images/piller-3.webp",
  },
];

const KONZULTACIO = [
  {
    title: "Konzultáció",
    body: "Átbeszéljük a helyzetedet, a céljaidat és a kihívásaidat, hogy valóban megértsem, hol tartasz most.",
  },
  {
    title: "Őszinte vélemény",
    body: "Őszinte véleményt mondok arról, hogy a te élethelyzetedben merre érdemes elindulnod.",
  },
  {
    title: "Iránymutatás",
    body: "Ha most nem az én szolgáltatásom a legjobb megoldás számodra, azt is megmondom — és összekapcsollak a megfelelő szakemberrel.",
  },
  {
    title: "Döntés nyomás nélkül",
    body: "A beszélgetés után nálad van a labda: nincs kötelezettség, nincs utánad nyúló értékesítés.",
  },
];

export default function SzolgaltatasPage() {
  return (
    <>
      {/* Fejléc */}
      <section className="hairline-b">
        <div className="container-page grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[52fr_48fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Szolgáltatás</p>
            <h1 className="mt-5 max-w-[18ch] text-[clamp(34px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.03em] text-ink">
              Hiszek abban, hogy a tudásod érték.
            </h1>
            <p className="mt-6 max-w-[48ch] text-body-lg text-ink-3">
              A szolgáltatásom célja az egyéni vállalkozók támogatása egy
              hatékony és fenntartható üzleti rendszer felépítésében.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-large border border-hairline bg-inset shadow-hero-slider">
              <Image
                src="/images/szolgaltatas-hero.webp"
                alt="Business Native szolgáltatás"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kinek szól */}
      <section className="hairline-b">
        <div className="container-page py-20 md:py-24">
          <Reveal>
            <p className="eyebrow">Kinek szól?</p>
            <h2 className="mt-4 text-[clamp(30px,4vw,44px)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
              Neked szól, ha…
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline md:grid-cols-3">
            {NEKED_SZOL.map((t, i) => (
              <StaggerItem key={t} className="bg-surface p-7 sm:p-8">
                <span className="font-mono text-body-sm text-accent">0{i + 1}</span>
                <p className="mt-4 text-body-lg text-ink-2">{t}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Pillérek részletesen */}
      <section className="hairline-b">
        <div className="container-page py-20 md:py-24">
          <Reveal>
            <p className="eyebrow">Három pillér, egy vállalkozás</p>
            <h2 className="mt-4 max-w-[38ch] text-[clamp(26px,3.4vw,40px)] font-normal leading-[1.15] tracking-[-0.03em] text-ink">
              Az ügyfélszerzés, a kiszolgálás és a háttérműködés egyetlen
              összehangolt rendszer elemei, amelyek együtt fedik le a
              vállalkozásod egészét.
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col gap-14 md:gap-20">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-large border border-hairline bg-inset">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                      {p.n}
                    </span>
                    <h3 className="mt-3 text-heading-lg font-normal tracking-[-0.03em] text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-[52ch] text-body-lg text-ink-3">{p.body}</p>
                    <div className="mt-6 border-t border-hairline pt-4">
                      <span className="font-mono text-[9px] tracking-[0.08em] text-ink-3">
                        EREDMÉNY
                      </span>
                      <ul className="mt-3 flex flex-col gap-2.5">
                        {p.results.map((r) => (
                          <li key={r} className="flex items-start gap-2.5 text-body text-ink-2">
                            <span
                              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                              aria-hidden
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <Workflow />

      {/* Konzultáció-blokk */}
      <section className="hairline-b">
        <div className="container-page grid gap-12 py-20 md:py-24 lg:grid-cols-[40fr_60fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-large border border-hairline bg-inset">
              <Image
                src="/images/attila-portrait.webp"
                alt="Nagy Attila"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="max-w-[30ch] text-[clamp(24px,3vw,34px)] font-normal leading-[1.2] tracking-[-0.03em] text-ink">
              Ha most azon gondolkodsz, hogy mindez jól hangzik, de nem tudod,
              a te helyzetedre is működhet-e — pontosan erről érdemes
              beszélnünk.
            </h2>
            <div className="mt-8 flex flex-col">
              {KONZULTACIO.map((k, i) => (
                <div key={k.title} className="border-b border-hairline py-4 last:border-b-0">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-body-sm text-accent">0{i + 1}</span>
                    <div>
                      <h3 className="text-body-lg font-medium text-ink">{k.title}</h3>
                      <p className="mt-1.5 max-w-[58ch] text-body text-ink-3">{k.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <UseCases />
      <Cta />
    </>
  );
}
