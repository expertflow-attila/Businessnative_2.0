"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EASE, Reveal } from "@/components/motion/primitives";

const STEP_MS = 5200;

const STEPS = [
  {
    key: "felmeres",
    title: "Felmérés",
    body: "Végigmegyünk a napi működéseden, és megkeressük, hol folyik el az idő. Nem eszközt adok el — a folyamataidból indulok ki.",
    panel: {
      label: "FOLYAMAT-TÉRKÉP",
      rows: [
        { name: "Email + megkeresések kezelése", value: "heti 6,5 óra", hot: true },
        { name: "Ajánlatok és utánkövetés", value: "heti 4 óra", hot: true },
        { name: "Adminisztráció, számlázás", value: "heti 3 óra", hot: false },
        { name: "Riportok, kimutatások", value: "heti 2 óra", hot: false },
      ],
    },
  },
  {
    key: "terv",
    title: "Rendszerterv",
    body: "Megtervezem, mit érdemes ügynökre bízni és mit nem. Írásos tervet kapsz: lépések, felelősök, mérhető célok.",
    panel: {
      label: "RENDSZERTERV — RÉSZLET",
      rows: [
        { name: "Lead-minősítő ügynök", value: "1. hét", hot: true },
        { name: "Email-triage + válasz-vázlatok", value: "2. hét", hot: true },
        { name: "CRM-szinkron és utánkövetés", value: "3. hét", hot: false },
        { name: "Heti riport automatikusan", value: "4. hét", hot: false },
      ],
    },
  },
  {
    key: "epites",
    title: "Ügynök-építés",
    body: "Megépítem és élesben tesztelem az ügynököket a saját eszközeiddel — email, naptár, CRM, számlázó. Te közben a munkádat végzed.",
    panel: {
      label: "ÉLES TESZT — NAPLÓ",
      rows: [
        { name: "Lead-ügynök: 28 megkeresés feldolgozva", value: "kész", hot: true },
        { name: "Inbox-ügynök: 96% pontos kategorizálás", value: "kész", hot: true },
        { name: "Naptár-ügynök: ütközések feloldva", value: "fut", hot: false },
        { name: "Riport-ügynök: első kimutatás kiment", value: "fut", hot: false },
      ],
    },
  },
  {
    key: "atadas",
    title: "Átadás és mérés",
    body: "Átadom a rendszert, betanítalak, és mérjük az eredményt. Minden lépés követhető — látod, mit végzett el helyetted a rendszer.",
    panel: {
      label: "HAVI KIMUTATÁS",
      rows: [
        { name: "Automatikusan elvégzett feladat", value: "412 db", hot: true },
        { name: "Visszanyert munkaidő", value: "34 óra", hot: true },
        { name: "Átlagos reakcióidő új leadre", value: "3 perc", hot: false },
        { name: "Elveszett vagy elfelejtett feladat", value: "0 db", hot: false },
      ],
    },
  },
];

export default function Workflow() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const step = STEPS[active];

  useEffect(() => {
    if (reduce || paused) return;
    const iv = setInterval(() => setActive((a) => (a + 1) % STEPS.length), STEP_MS);
    return () => clearInterval(iv);
  }, [reduce, paused, active]);

  return (
    <section
      id="folyamat"
      ref={sectionRef}
      className="hairline-b bg-lifted"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-page py-20 md:py-24">
        <Reveal>
          <p className="eyebrow">Így dolgozom</p>
          <h2 className="mt-4 max-w-[22ch] text-[clamp(30px,4vw,44px)] font-bold leading-[1.08] tracking-[-0.04em] text-ink">
            Négy lépés a kézi munkától a működő rendszerig.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[38fr_62fr] lg:gap-16">
          {/* Lépés-választó */}
          <div className="flex flex-col" role="tablist" aria-label="A folyamat lépései">
            {STEPS.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className="group relative border-b border-hairline py-5 text-left last:border-b-0"
                >
                  {/* progress-csík */}
                  <span className="absolute inset-x-0 top-0 h-px overflow-hidden" aria-hidden>
                    {isActive && !reduce && !paused && (
                      <motion.span
                        key={`${s.key}-progress-${active}`}
                        className="block h-full bg-ink"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: STEP_MS / 1000, ease: "linear" }}
                        style={{ transformOrigin: "left" }}
                      />
                    )}
                  </span>
                  <span className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-body-sm transition-colors duration-200 ${
                        isActive ? "text-ink" : "text-ink-3/60"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block text-heading-sm font-medium transition-colors duration-200 ${
                          isActive ? "text-ink" : "text-ink-3 group-hover:text-ink-2"
                        }`}
                      >
                        {s.title}
                      </span>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            initial={reduce ? false : { opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={reduce ? undefined : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.45, ease: EASE }}
                            className="block overflow-hidden"
                          >
                            <span className="block pt-2 text-body text-ink-3">{s.body}</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Preview panel — termék-ablak logika */}
          <div className="rounded-large border border-hairline bg-inset p-3 shadow-hero-slider sm:p-4">
            <div className="relative min-h-[320px] overflow-hidden rounded-medium bg-canvas shadow-card-lift">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={step.key}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="p-5 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                      {step.panel.label}
                    </span>
                    <span className="font-mono text-[10px] text-ink-3/70">
                      {String(active + 1).padStart(2, "0")} / 04
                    </span>
                  </div>
                  <div className="mt-5 flex flex-col">
                    {step.panel.rows.map((r, i) => (
                      <motion.div
                        key={r.name}
                        initial={reduce ? false : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, ease: EASE, delay: 0.1 + i * 0.08 }}
                        className="flex items-center justify-between gap-4 border-b border-hairline py-3.5 last:border-b-0"
                      >
                        <span className="flex items-center gap-3 text-body text-ink-2">
                          <span
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                              r.hot ? "bg-accent" : "bg-ink-3/40"
                            }`}
                            aria-hidden
                          />
                          {r.name}
                        </span>
                        <span className="shrink-0 font-mono text-body-sm text-ink">{r.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
