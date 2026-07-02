"use client";

import { motion, useReducedMotion } from "motion/react";
import HeroShowcase from "@/components/HeroShowcase";
import { PlusMark } from "@/components/PageFrame";
import { EASE, Magnetic } from "@/components/motion/primitives";

const H1_LINES = ["AI-alapú rendszerek", "egyéni", "vállalkozóknak."];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hairline-b relative">
      {/* jelölő keresztek a szerkezeti vonalak metszéspontjain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto hidden w-full max-w-[1280px] lg:block"
      >
        <PlusMark className="absolute -bottom-[5.5px] -left-[5.5px]" />
        <PlusMark className="absolute -bottom-[5.5px] -right-[5.5px]" />
      </div>
      <div className="container-page grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[42fr_58fr] lg:gap-16 lg:py-24">
        {/* Bal: tézis */}
        <div className="min-w-0">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="eyebrow"
          >
            MI-ügynökök · valós folyamatokra
          </motion.p>

          <h1 className="mt-5 text-[clamp(36px,4.6vw,60px)] font-normal leading-[1.04] tracking-[-0.03em] text-ink">
            {H1_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
            className="mt-6 max-w-[46ch] text-body-lg text-ink-3"
          >
            Szolgáltatási rendszert hozok létre a vállalkozásod köré, amely
            láthatóvá és értékesíthetővé teszi a szakmai tudásodat.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.58 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a href="#kapcsolat" className="btn-primary">
                Konzultációt foglalok
              </a>
            </Magnetic>
            <a href="/szolgaltatas" className="btn-ghost group">
              Így dolgozom
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
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
            className="mt-6 text-body-sm text-ink-3"
          >
            Első beszélgetés díjmentes · konkrét folyamat-tervvel távozol
          </motion.p>
        </div>

        {/* Jobb: élő műveleti konzol */}
        <motion.div
          className="min-w-0"
          initial={reduce ? false : { opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.35 }}
        >
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  );
}
