import { Counter, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

const CASES = [
  {
    metric: "24/7",
    animated: null,
    label: "folyamatos működés",
    body: "Ügyfélmegkeresések kezelése éjjel-nappal, emberi beavatkozás nélkül.",
    area: "Ügyfélszolgálat",
  },
  {
    metric: null,
    animated: { value: 3, suffix: " perc" },
    label: "reakcióidő új leadre",
    body: "Új érdeklődők azonnali minősítése és válasz, mielőtt kihűlnének.",
    area: "Értékesítés",
  },
  {
    metric: null,
    animated: { value: 0, suffix: "" },
    label: "elveszett feladat",
    body: "Feladatok automatikus priorizálása és nyomon követése a háttérben.",
    area: "Operáció",
  },
];

export default function UseCases() {
  return (
    <section id="esetek" className="hairline-b">
      <div className="container-page py-20 md:py-24">
        <Reveal>
          <p className="eyebrow">Használat</p>
          <h2 className="mt-4 max-w-[24ch] text-[clamp(30px,4vw,44px)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
            Valós körülmények közötti teljesítményre tervezve.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline md:grid-cols-3">
          {CASES.map((c) => (
            <StaggerItem key={c.label} className="flex flex-col bg-surface p-7 sm:p-8">
              <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-ink-3">
                {c.area.toUpperCase()}
              </span>
              <span className="mt-6 text-[clamp(40px,4.5vw,56px)] font-normal leading-none tracking-[-0.04em] text-ink">
                {c.metric ?? (
                  <Counter value={c.animated!.value} suffix={c.animated!.suffix} duration={1.4} />
                )}
              </span>
              <span className="mt-2 text-body-lg font-medium text-ink-2">{c.label}</span>
              <p className="mt-3 text-body text-ink-3">{c.body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Ráfordítás vs. hozam */}
        <Stagger className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16" stagger={0.12}>
          <StaggerItem className="hairline-t pt-8">
            <span className="text-[clamp(44px,5vw,64px)] font-normal leading-none tracking-[-0.04em] text-ink">
              2–4 óra
            </span>
            <p className="mt-3 max-w-[40ch] text-body-lg text-ink-3">
              heti ráfordításod a közös munkára a bevezetés alatt — ennyi kell
              tőled, a többit én viszem.
            </p>
          </StaggerItem>
          <StaggerItem className="hairline-t pt-8">
            <span className="text-[clamp(44px,5vw,64px)] font-normal leading-none tracking-[-0.04em] text-ink">
              <Counter value={30} />–<Counter value={40} duration={1.8} /> óra
            </span>
            <p className="mt-3 max-w-[40ch] text-body-lg text-ink-3">
              havi visszanyert időd, amikor a rendszer átveszi az ismétlődő
              munkát — ez a tiéd, a céljaidra.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
