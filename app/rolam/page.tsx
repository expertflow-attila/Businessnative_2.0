import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Rólam — Business Native",
  description:
    "Nagy Attila vagyok. Bizalom, jelenlét, felelősségvállalás — vállalkozásépítés mint a legerősebb eszköz a személyes fejlődéshez.",
};

const TORTENET = [
  {
    title: "Kezdetek — ahol minden elkezdődött",
    body: "Középiskolás tesitanárom első nap kihívott megnézni egy rúdugró edzést — azt mondta, „lesznek a pályán jó csajok is”. A csajokból nem lett semmi, de a rúdugrásba azonnal beleszerettem, és attól a naptól fogva 16 évig minden erről szólt.",
  },
  {
    title: "Újratervezés — a gyerekkortól indulva",
    body: "A legjobb akartam lenni benne, olimpiáról álmodtam, és mindent beleadtam, amíg egy sérv véget nem vetett ennek az időszaknak. Az élsport lezárult — egyik napról a másikra új irányt kellett keresnem. Ehhez visszamentem a gyerekkoromhoz: mi az, amit igazán szerettem csinálni, ami mindig is érdekelt, és amit életem végéig szívesen csinálnék.",
  },
  {
    title: "Útkeresés — zero waste és a filmipar",
    body: "Sokáig kerestem azt az egy dolgot, amit egész életemben teljes erőbedobással tudnék csinálni úgy, mint régen a rúdugrást. Kipróbáltam sok mindent: zero waste webshopot, textil körforgásos modellt, még a filmiparba is belekóstoltam.",
  },
  {
    title: "Jelen — ami ma mozgat",
    body: "De bármerre is vitt az élet, végül mindig a vállalkozásépítésnél kötöttem ki — mert semmi más nem ad számomra ennyi kihívást és fejlődési lehetőséget egyszerre. Ma már tudom, hogy ez az, amit igazán szeretek: értéket adni és támogatni mások fejlődését.",
  },
];

const GALERIA = [
  { src: "/images/rolam-1.jpg", alt: "Rúdugrás — versenysport évek" },
  { src: "/images/rolam-2.jpg", alt: "Archív fotó" },
  { src: "/images/rolam-3.webp", alt: "Nagy Attila" },
  { src: "/images/rolam-4.jpg", alt: "Útkeresés évei" },
  { src: "/images/rolam-5.webp", alt: "Jelen" },
];

const SZEMELYES_QA = [
  {
    q: "Miért pont az AI?",
    a: "Bármilyen furcsán hangzik, az egésznek a fenntarthatóság az alapja. Évekig foglalkoztam környezetvédelemmel — zero waste webshop, textil körforgásos modell —, és közben rájöttem valamire: a környezetvédelmi problémák nem okok, hanem következmények. Amikor megismertem az AI világát, azonnal láttam, hogy ez a technológia lesz a következő évekre a legnagyobb hatással. Úgy döntöttem, ebben szeretnék részt venni — és a lehető legpozitívabb irányba terelni. Nem azért foglalkozom AI-jal, mert sok pénz van benne, hanem mert ha segítek az embereknek olyan életet élni, amilyet valóban szeretnének, azzal a bolygó is jobban jár.",
  },
  {
    q: "Mi volt a legnagyobb kudarc, amiből tanultál?",
    a: "Azt hittem, az AI-jal le tudom rövidíteni az utat. Mindent IS rábíztam — olyat is, amit nem szabadott volna. Részben kíváncsiságból, részben lustaságból. A legnagyobb tanulság: az AI felnagyítja azt, akik vagyunk. Ha nem dolgozol saját magadon, a fejlett technológia sem fog megmenteni.",
  },
  {
    q: "Mit csinálsz, amikor nem dolgozol?",
    a: "Szeretek erdőben sétálni, legtöbbször Hűvösvölgyben. Olvasok, sütök, főzök, és próbálok heti kétszer eljutni edzeni — nem mindig sikerül, de próbálom tartani. Rájöttem, hogy a legegyszerűbb dolgok a legjobbak.",
  },
  {
    q: "Mit tanított neked a 16 év versenysport?",
    a: "A rúdugrás volt az, amit mindennél jobban szerettem. Szerelem volt, 16 évig. Aztán egyik napról a másikra abba kellett hagynom — évekbe telt, mire feldolgoztam. De megtanított arra, hogy egy nagy szerelem után jöhet a másik. Ahhoz viszont meg kell állni, le kell csendesedni, és időt kell adni magadnak. Visszamenni az alapokhoz, megtalálni, mi az, ami mindig is boldoggá tett.",
  },
  {
    q: "Milyen szokásaid és furcsaságaid vannak?",
    a: "Képtelen vagyok megenni a velőt. A mazsolát szeretem magában, de másban nem — ha süteményben találom, kiválogatom. A rántott hús sült krumplival és uborkasalátával szerintem az emberiség egyik legnagyobb találmánya. A kedvenc édességem a habos mákos, amit senki nem tud úgy elkészíteni, mint anyum. És 2026-ban járunk, de én még nem ültem repülőn.",
  },
];

export default function RolamPage() {
  return (
    <>
      {/* Fejléc */}
      <section className="hairline-b">
        <div className="container-page grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[55fr_45fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Rólam</p>
            <h1 className="mt-5 max-w-[16ch] text-[clamp(34px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.03em] text-ink">
              Bizalom, jelenlét, felelősségvállalás.
            </h1>
            <p className="mt-6 max-w-[48ch] text-body-lg text-ink-3">
              Nagy Attila vagyok. Hiszem, hogy minél tisztábban látjuk, mi
              fontos számunkra, és minél inkább egy számunkra fontos cél felé
              haladunk, annál nagyobb hatással lehetünk mások életére.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] max-w-[420px] overflow-hidden rounded-large border border-hairline bg-inset shadow-hero-slider lg:ml-auto">
              <Image
                src="/images/attila-portre.jpg"
                alt="Nagy Attila"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filozófia */}
      <section className="hairline-b">
        <div className="container-page grid gap-10 py-20 md:py-24 lg:grid-cols-[32fr_68fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Filozófiám</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[34ch] text-[clamp(22px,2.8vw,32px)] font-normal leading-[1.3] tracking-[-0.02em] text-ink">
              A személyes fejlődés számomra központi jelentőségű — és úgy
              gondolom, a vállalkozásépítés az egyik legerősebb eszköz erre.
              Nemcsak üzleti, hanem emberi értelemben is.
            </p>
            <p className="mt-5 max-w-[52ch] text-body-lg text-ink-3">
              Mert egy vállalkozás tükröt tart: őszinteséget, tudatosságot és
              önismeretet követel.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Történet */}
      <section className="hairline-b">
        <div className="container-page py-20 md:py-24">
          <Reveal>
            <p className="eyebrow">Az én történetem</p>
            <h2 className="mt-4 max-w-[26ch] text-[clamp(28px,3.6vw,42px)] font-normal leading-[1.1] tracking-[-0.03em] text-ink">
              Vállalkozásépítés mint a legerősebb eszköz a személyes
              fejlődéshez.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline sm:grid-cols-2">
            {TORTENET.map((t, i) => (
              <StaggerItem key={t.title} className="bg-surface p-7 sm:p-8">
                <span className="font-mono text-body-sm text-accent">0{i + 1}</span>
                <h3 className="mt-4 text-heading-sm font-medium text-ink">{t.title}</h3>
                <p className="mt-3 text-body text-ink-3">{t.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Fotó-sáv */}
      <section className="hairline-b py-14 md:py-16">
        <div
          className="no-scrollbar flex snap-x gap-4 overflow-x-auto"
          style={{
            paddingInline: "max(calc((100vw - 1280px) / 2 + 40px), 20px)",
            scrollPaddingInline: "max(calc((100vw - 1280px) / 2 + 40px), 20px)",
          }}
        >
          {GALERIA.map((g) => (
            <div
              key={g.src}
              className="relative h-[260px] w-[220px] shrink-0 snap-start overflow-hidden rounded-large border border-hairline bg-inset sm:h-[320px] sm:w-[270px]"
            >
              <Image src={g.src} alt={g.alt} fill sizes="270px" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Akiket szolgálok */}
      <section className="hairline-b">
        <div className="container-page grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Akiket szolgálok</p>
            <h2 className="mt-4 text-[clamp(28px,3.6vw,42px)] font-normal leading-[1.1] tracking-[-0.03em] text-ink">
              Egyéni vállalkozók.
            </h2>
            <p className="mt-5 max-w-[52ch] text-body-lg text-ink-3">
              Egyéni vállalkozóknak segítek, mert magam is az vagyok —
              ugyanazokkal a kérdésekkel, ugyanazokkal a nehézségekkel küzdök,
              mint ők. Az elmúlt évek során rengeteg hibát követtem el és rossz
              döntést hoztam — és ezekből tanultam a legtöbbet.
            </p>
            <p className="mt-4 max-w-[52ch] text-body-lg text-ink-3">
              Úgy gondolom, csak abban lehetek hiteles, amin magam is átmegyek.
              A saját utamat kínálom fel — azt a tudást és azokat a
              tapasztalatokat, amelyeket a hibáimból szűrtem le. Nem elvont
              elméletet, hanem azt, ami valóban működött — és azt is, ami nem.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="self-end">
            <div className="rounded-large border border-hairline bg-surface p-7 sm:p-9">
              <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                MÁSOK SZOLGÁLATA
              </span>
              <p className="mt-4 text-heading-sm font-normal leading-[1.4] text-ink-2">
                Azok építenek valódi értéket, akik nem önmagukért, hanem
                másokért dolgoznak — mert hisznek abban, hogy jobbá tehetik az
                emberek életét. A siker valódi alapja ma sem a technológia vagy
                a stratégia, hanem a bizalom.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Személyes kérdések */}
      <Faq eyebrow="Néhány infó még rólam" title="Amit ritkán kérdeznek meg, pedig érdekes." items={SZEMELYES_QA} />

      {/* Napló-link */}
      <section className="hairline-b">
        <div className="container-page flex flex-wrap items-center justify-between gap-6 py-10">
          <p className="max-w-[52ch] text-body-lg text-ink-3">
            Ha kíváncsi vagy, éppen min dolgozom és mit tanulok közben — a
            naplómban dokumentálom az utat.
          </p>
          <a
            href="https://dirt-and-clouds-v2.vercel.app/"
            target="_blank"
            rel="noopener"
            className="btn-ghost group"
          >
            Expert Flow Napló
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
        </div>
      </section>

      <Cta />
    </>
  );
}
