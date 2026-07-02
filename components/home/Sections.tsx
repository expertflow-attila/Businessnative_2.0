import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { PROJECTS } from "@/lib/projects";

/* Főoldal tartalmi szekciói — a Webflow-oldal szövegei első személyben. */

export function WorkTeaser() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <section className="hairline-b">
      <div className="container-page py-20 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
            <div>
              <p className="eyebrow">Munkáim</p>
              <h2 className="mt-4 max-w-[24ch] text-[clamp(30px,4vw,44px)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
                Amit eddig építettem — nézd meg élőben.
              </h2>
            </div>
            <a href="/munkaim" className="btn-ghost group pb-1">
              Összes munkám
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                aria-hidden
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Stagger className="mt-10 grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
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
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[9px] font-medium tracking-[0.08em] text-accent">
                    {p.category.toUpperCase()}
                  </span>
                  <h3 className="mt-2.5 text-heading-sm font-medium text-ink">{p.title}</h3>
                  <p className="mt-2 text-body text-ink-3">{p.tagline}</p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Statement() {
  return (
    <section className="hairline-b">
      <div className="container-page grid gap-10 py-20 md:py-24 lg:grid-cols-[68fr_32fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Ebben segítek</p>
          <h2 className="mt-5 max-w-[30ch] text-[clamp(26px,3.4vw,40px)] font-normal leading-[1.15] tracking-[-0.03em] text-ink">
            AI-támogatott rendszerekkel visszaadom a vállalkozóknak az
            idejüket, energiájukat és szabadságukat — hogy újból arra
            fókuszálhassanak, amit igazán szeretnek.
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="self-end">
          <p className="max-w-[40ch] text-body text-ink-3">
            A célom, hogy az egyéni vállalkozókat segítsem egy hatékony és
            fenntartható vállalkozás kiépítésében — ahol a technológia az
            emberi értéket és a személyes fejlődést szolgálja.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const CHALLENGES = [
  {
    tag: "Ügyfélszerzés",
    title: "Leegyszerűsítem az ügyfélszerzés folyamatát.",
    body: "Olyan rendszert építek, ami a háttérben dolgozik — így a meglévő ügyfeleid kiszolgálására fordíthatod az energiád.",
    img: "/images/ugyfelszerzes.webp",
  },
  {
    tag: "Kiszolgálás",
    title: "Professzionális szintre emelem az ügyfeleid kiszolgálását.",
    body: "Egységes folyamatokat alakítok ki, hogy minden kliensed ugyanazt a magas színvonalú élményt kapja.",
    img: "/images/kiszolgalas.webp",
  },
  {
    tag: "Háttérműködés",
    title: "Fókuszálttá teszem a vállalkozásod működését.",
    body: "Automatizálom az ismétlődő háttérfeladataidat — te pedig a szakmai fejlődésedre és az ügyfeleidre koncentrálhatsz.",
    img: "/images/hatterrmukodes.webp",
  },
];

export function Challenges() {
  return (
    <section id="rendszer" className="hairline-b">
      <div className="container-page py-20 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
            <div>
              <p className="eyebrow">Szolgáltatásom</p>
              <h2 className="mt-4 max-w-[24ch] text-[clamp(30px,4vw,44px)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
                A három legnagyobb kihívásodra fókuszálok.
              </h2>
            </div>
            <p className="max-w-[40ch] pb-1 text-body text-ink-3">
              Mert tudom, ezek viszik el a legtöbb energiádat — és ezek döntik
              el, meddig jut a vállalkozásod.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline md:grid-cols-3">
          {CHALLENGES.map((c) => (
            <StaggerItem key={c.tag} className="flex flex-col bg-surface">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-hairline bg-inset">
                <Image
                  src={c.img}
                  alt={c.tag}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                  {c.tag.toUpperCase()}
                </span>
                <h3 className="mt-3 text-heading-sm font-medium leading-snug text-ink">{c.title}</h3>
                <p className="mt-2.5 text-body text-ink-3">{c.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function AboutTeaser() {
  return (
    <section className="hairline-b">
      <div className="container-page grid items-center gap-10 py-20 md:py-24 lg:grid-cols-[38fr_62fr] lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-large border border-hairline bg-inset">
            <Image
              src="/images/attila-portre.jpg"
              alt="Nagy Attila"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="eyebrow">Rólam</p>
          <h2 className="mt-4 text-[clamp(30px,4vw,44px)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
            Üdvözöllek az oldalamon!
          </h2>
          <p className="mt-5 max-w-[52ch] text-body-lg text-ink-3">
            Nagy Attilának hívnak, és a célom azoknak a vállalkozóknak a
            támogatása, akik hozzám hasonlóan szeretnék a legtöbbet kihozni a
            hivatásukból, miközben másokat támogatnak a megszerzett
            tudásukkal.
          </p>
          <a href="/rolam" className="btn-ghost group mt-8">
            Ismerj meg jobban
            <svg
              width="13"
              height="13"
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
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const DIFFERENCE = [
  {
    title: "Szolgáltatói fókusz",
    body: "Kizárólag szolgáltató vállalkozók számára kínálok személyre szabott megoldásokat, amelyek igazodnak a célközönséged igényeihez.",
  },
  {
    title: "Teljes körű megoldások",
    body: "Nem különálló automatizációkat építek, hanem egy rendszert, ami összeköti a marketinged, az ügyfélkezelésed és a napi működésed.",
  },
  {
    title: "Fenntartható szemlélet",
    body: "Nem hiszek a végtelen növekedésben. Az AI-t arra használom, hogy a vállalkozásod stabil, egyszerű és fenntartható legyen.",
  },
];

export function Difference() {
  return (
    <section className="hairline-b">
      <div className="container-page py-20 md:py-24">
        <Reveal>
          <p className="eyebrow">Miben vagyok más?</p>
          <h2 className="mt-4 max-w-[22ch] text-[clamp(30px,4vw,44px)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
            A Business Native különbség.
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline md:grid-cols-3">
          {DIFFERENCE.map((d, i) => (
            <StaggerItem key={d.title} className="bg-surface p-7 sm:p-8">
              <span className="font-mono text-body-sm text-ink-3">0{i + 1}</span>
              <h3 className="mt-4 text-heading-sm font-medium text-ink">{d.title}</h3>
              <p className="mt-3 text-body text-ink-3">{d.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    n: "1. pillér",
    title: "Ügyfélszerzés",
    lead: "Kiszámítható ügyfélszerzés minden hónapban.",
    focus: [
      "Hatékony értékesítési rendszerek",
      "AI-asszisztens az érdeklődők előszűrésére",
      "Automatizált email marketing és utánkövetés",
    ],
  },
  {
    n: "2. pillér",
    title: "Kiszolgálás",
    lead: "Átlátható folyamatok meglévő és új ügyfeleidnek.",
    focus: [
      "Professzionális onboarding minden ügyfélnek",
      "Személyre szabott ügyfélkezelő rendszer",
      "Automatikus visszajelzés és elégedettség-mérés",
    ],
  },
  {
    n: "3. pillér",
    title: "Háttérműködés",
    lead: "Rendezett háttér, hogy az ügyfeleidre fókuszálhass.",
    focus: [
      "Automatizált számlázás és adminisztráció",
      "AI-alapú belső tudásbázis és döntéstámogatás",
      "Digitális csapatod munkájának összehangolása",
    ],
  },
];

export function Pillars() {
  return (
    <section className="hairline-b">
      <div className="container-page py-20 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
            <div>
              <p className="eyebrow">Három pillér, egy vállalkozás</p>
              <h2 className="mt-4 max-w-[22ch] text-[clamp(30px,4vw,44px)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
                Egyéni szolgáltatásom.
              </h2>
            </div>
            <p className="max-w-[40ch] pb-1 text-body text-ink-3">
              Három alappillér, amely az eszközök és platformok változásától
              függetlenül mindig meghatározza egy vállalkozás sikerét.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline md:grid-cols-3">
          {PILLARS.map((p) => (
            <StaggerItem key={p.title} className="flex flex-col bg-surface p-7 sm:p-8">
              <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                {p.n.toUpperCase()}
              </span>
              <h3 className="mt-3 text-heading font-medium text-ink">{p.title}</h3>
              <p className="mt-2 text-body-lg text-ink-2">{p.lead}</p>
              <div className="mt-5 border-t border-hairline pt-4">
                <span className="font-mono text-[9px] tracking-[0.08em] text-ink-3">FÓKUSZ</span>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {p.focus.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-body text-ink-3">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <a href="/szolgaltatas" className="btn-primary">
            További részletek
          </a>
        </Reveal>
      </div>
    </section>
  );
}
