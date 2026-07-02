import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

const MAIN = [
  {
    title: "Automatizálási ügynökök",
    body: "Előre meghatározott munkafolyamatok alapján végzik az ismétlődő feladatokat. Figyelik a kiváltó eseményeket, feldolgozzák a bemeneteket, és kézi beavatkozás nélkül hajtják végre a műveleteket.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2.5" y="2.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <rect x="11.5" y="11.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8.5 5.5h4a2 2 0 0 1 2 2v4M11.5 14.5h-4a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Állapotellenőrzés",
    body: "A rendszer folyamatosan figyeli a saját működését: korán jelzi az eltéréseket, kiemeli a szűk keresztmetszeteket, és átláthatóvá teszi a hosszan futó folyamatokat. Semmi nem vész el csendben.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M2.5 12l3.5-5 3 7 3.5-9 2 5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 17h15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const SMALL = [
  {
    title: "A saját eszközeidre épül",
    body: "Email, naptár, CRM, számlázó — nem kell új rendszerre váltanod, az ügynökök a meglévőhöz csatlakoznak.",
  },
  {
    title: "Minden lépés követhető",
    body: "Egy strukturált nézetben látod az állapotot, a függőségeket és azt, hogy mit végzett el helyetted a rendszer.",
  },
  {
    title: "Emberi jóváhagyás, ahol kell",
    body: "A kritikus döntések nálad maradnak: az ügynök előkészít, te jóváhagysz. A határokat te húzod meg.",
  },
  {
    title: "Biztonságos alapok",
    body: "Jogosultság-kezelés, naplózás és titkosított kulcskezelés minden integrációnál — az adataid nálad maradnak.",
  },
];

export default function Features() {
  return (
    <section id="rendszer" className="hairline-b">
      <div className="container-page py-20 md:py-24">
        <Reveal>
          <p className="eyebrow">A rendszer</p>
          <h2 className="mt-4 max-w-[24ch] text-[clamp(30px,4vw,44px)] font-bold leading-[1.08] tracking-[-0.04em] text-ink">
            Komoly munkára építve.
          </h2>
          <p className="mt-4 max-w-[52ch] text-body-lg text-ink-3">
            Nem körítésnek szánt MI, hanem működő háttérrendszer: a feladat
            ténylegesen elkészül, és minden lépése visszakereshető.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline md:grid-cols-2">
          {MAIN.map((f) => (
            <StaggerItem key={f.title} className="bg-lifted p-7 sm:p-9">
              <span className="text-ink" aria-hidden>
                {f.icon}
              </span>
              <h3 className="mt-5 text-heading-sm font-medium text-ink">{f.title}</h3>
              <p className="mt-3 max-w-[48ch] text-body text-ink-3">{f.body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-px grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {SMALL.map((f) => (
            <StaggerItem key={f.title} className="bg-canvas p-6">
              <h3 className="text-body-lg font-medium text-ink">{f.title}</h3>
              <p className="mt-2.5 text-body text-ink-3">{f.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
