"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { EASE, Reveal } from "@/components/motion/primitives";

const ITEMS = [
  {
    q: "Milyen vállalkozásoknak való ez?",
    a: "Szakértő szolgáltatóknak és kis csapatoknak, ahol az ismétlődő adminisztráció — email, ajánlatok, utánkövetés, riportok — értékes órákat visz el. Ha a heti működésed nagy része kézi lépésekből áll, van mit automatizálni.",
  },
  {
    q: "Le kell cserélnem a meglévő eszközeimet?",
    a: "Nem. Az ügynökök a már használt rendszereidhez csatlakoznak — email, naptár, CRM, számlázó. A cél, hogy a meglévő működésed gyorsuljon fel, ne egy új szoftvert kelljen megtanulnod.",
  },
  {
    q: "Mennyi idő a bevezetés?",
    a: "Az első működő ügynök jellemzően 1–2 héten belül élesben fut. A teljes rendszer felmérése, megépítése és átadása általában 4–6 hét, a folyamataid összetettségétől függően.",
  },
  {
    q: "Mi történik, ha valamit elront az ügynök?",
    a: "A kritikus lépéseknél emberi jóváhagyás van: az ügynök előkészít, te döntesz. Minden művelet naplózott és visszakereshető, a rendszer pedig jelzi, ha valami eltér a megszokottól.",
  },
  {
    q: "Hogyan indulunk el?",
    a: "Egy díjmentes konzultációval: végigmegyünk a folyamataidon, és konkrét tervvel távozol — akkor is, ha végül nem dolgozunk együtt.",
  },
];

export default function Faq() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="kerdesek" className="hairline-b">
      <div className="container-page grid gap-10 py-20 md:py-24 lg:grid-cols-[38fr_62fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Kérdések</p>
          <h2 className="mt-4 max-w-[16ch] text-[clamp(30px,4vw,44px)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
            Amit a legtöbben megkérdeznek.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-large border border-hairline bg-surface">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-hairline last:border-b-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-body-lg font-medium text-ink">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="shrink-0 text-ink-3"
                      aria-hidden
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[62ch] px-6 pb-6 text-body text-ink-3">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
