"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/primitives";

/* Húzható összehasonlítás: kézi működés ↔ Business Native.
   Pointer + billentyűzet (range) vezérléssel. */

const MANUAL = [
  { t: "Új megkeresés a postafiókban ül", d: "átlag 1–2 nap, mire válasz megy" },
  { t: "Ajánlat-utánkövetés emlékezetből", d: "a lassú válasz hűlő érdeklődő" },
  { t: "Admin este, a munka után", d: "heti 10+ óra ismétlődő kézi lépés" },
  { t: "Riport, ha épp van rá idő", d: "döntések megérzésből" },
];

const NATIVE = [
  { t: "Minden megkeresés percek alatt minősítve", d: "azonnali válasz és időpont-link" },
  { t: "Utánkövetés ütemezve, automatikusan", d: "egyetlen érdeklődő sem vész el" },
  { t: "Admin a háttérben fut", d: "havi 30–40 óra visszanyert idő" },
  { t: "Heti kimutatás magától érkezik", d: "számokra épülő döntések" },
];

function RowList({
  rows,
  accent,
}: {
  rows: { t: string; d: string }[];
  accent: boolean;
}) {
  return (
    <ul className="mt-6 flex flex-col gap-5">
      {rows.map((r) => (
        <li key={r.t} className="flex items-start gap-3">
          <span
            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent ? "bg-accent" : "bg-ink-3/50"}`}
            aria-hidden
          />
          <span>
            <span className={`block text-body-lg font-medium ${accent ? "text-ink" : "text-ink-2"}`}>
              {r.t}
            </span>
            <span className="mt-0.5 block text-body text-ink-3">{r.d}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Compare() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(88, Math.max(12, p)));
  };

  return (
    <section className="hairline-b bg-lifted">
      <div className="container-page py-20 md:py-24">
        <Reveal className="text-center">
          <p className="eyebrow">Miért éri meg</p>
          <h2 className="mx-auto mt-4 max-w-[20ch] text-[clamp(30px,4vw,44px)] font-bold leading-[1.08] tracking-[-0.04em] text-ink">
            A működésed a névjegyed.
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-body-lg text-ink-3">
            Húzd el a csúszkát, és nézd meg, mi változik, amikor az ismétlődő
            munkát rendszer végzi ember helyett.
          </p>
        </Reveal>

        {/* Mobil: két egymás alatti kártya (a csúszka csak md-től) */}
        <Reveal delay={0.15} className="md:hidden">
          <div className="mt-10 flex flex-col gap-px overflow-hidden rounded-large border border-hairline bg-hairline">
            <div className="bg-inset p-6 dark:bg-[#26262a]">
              <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-ink-3">
                KÉZI MŰKÖDÉS
              </span>
              <RowList rows={MANUAL} accent={false} />
            </div>
            <div className="bg-canvas p-6">
              <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                BUSINESS NATIVE MŰKÖDÉS
              </span>
              <RowList rows={NATIVE} accent />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="hidden md:block">
          <div
            ref={ref}
            className="relative mt-12 select-none overflow-hidden rounded-large border border-hairline bg-canvas shadow-hero-slider"
            onPointerDown={(e) => {
              dragging.current = true;
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              setFromClientX(e.clientX);
            }}
            onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            <div className="grid min-h-[380px] grid-cols-1">
              {/* Alap réteg: Business Native (jobb oldal) */}
              <div className="col-start-1 row-start-1 p-6 sm:p-10">
                <div className="ml-auto max-w-[520px]">
                  <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                    BUSINESS NATIVE MŰKÖDÉS
                  </span>
                  <ul className="mt-6 flex flex-col gap-5">
                    {NATIVE.map((r) => (
                      <li key={r.t} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>
                          <span className="block text-body-lg font-medium text-ink">{r.t}</span>
                          <span className="mt-0.5 block text-body text-ink-3">{r.d}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Felső réteg: kézi működés — clip-elve */}
              <div
                className="col-start-1 row-start-1 bg-inset p-6 dark:bg-[#26262a] sm:p-10"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                aria-hidden
              >
                <div className="max-w-[520px]">
                  <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-ink-3">
                    KÉZI MŰKÖDÉS
                  </span>
                  <ul className="mt-6 flex flex-col gap-5">
                    {MANUAL.map((r) => (
                      <li key={r.t} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-3/50" aria-hidden />
                        <span>
                          <span className="block text-body-lg font-medium text-ink-2">{r.t}</span>
                          <span className="mt-0.5 block text-body text-ink-3">{r.d}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fogantyú */}
              <div
                className="pointer-events-none absolute inset-y-0 z-10"
                style={{ left: `${pos}%` }}
                aria-hidden
              >
                <div className="absolute inset-y-0 -ml-px w-0.5 bg-ink" />
                <div className="absolute top-1/2 -ml-[18px] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cta text-cta-ink shadow-deep-card">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M4.5 1 1 5l3.5 4M9.5 1 13 5l-3.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Billentyűzet-vezérlés */}
            <label className="sr-only" htmlFor="compare-range">
              Összehasonlítás csúszka: kézi működés és Business Native
            </label>
            <input
              id="compare-range"
              type="range"
              min={12}
              max={88}
              value={Math.round(pos)}
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute inset-x-0 bottom-0 z-20 h-8 w-full cursor-ew-resize opacity-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
