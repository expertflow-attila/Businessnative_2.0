import { Magnetic, Reveal } from "@/components/motion/primitives";

export default function Cta() {
  return (
    <section id="kapcsolat" className="hairline-b">
      <div className="container-page py-24 text-center md:py-32">
        <Reveal>
          <p className="eyebrow">Kezdjük el</p>
          <h2 className="mx-auto mt-4 max-w-[18ch] text-[clamp(34px,5vw,56px)] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
            Nézzük meg, mit végezne el helyetted a rendszer.
          </h2>
          <p className="mx-auto mt-5 max-w-[48ch] text-body-lg text-ink-3">
            Egy 30 perces beszélgetésben végigmegyünk a folyamataidon.
            Konkrét tervvel távozol — kötelezettség nélkül.
          </p>
          <div className="mx-auto mt-9 flex w-full max-w-[320px] flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <Magnetic className="w-full sm:w-auto">
              <a
                href="mailto:hello@expertflow.hu?subject=Business%20Native%20konzult%C3%A1ci%C3%B3"
                className="btn-primary w-full sm:w-auto"
              >
                Konzultációt foglalok
              </a>
            </Magnetic>
            <a href="mailto:hello@expertflow.hu" className="btn-ghost w-full sm:w-auto">
              hello@expertflow.hu
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
