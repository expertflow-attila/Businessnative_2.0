"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/components/motion/primitives";

/* Élő műveleti konzol — a hero termék-ablaka.
   A konzol mindkét témában sötét app-felület (termék-screenshot logika),
   a Signal Blue kizárólag itt, a termékben él. */

type Task = {
  id: number;
  agent: string;
  text: string;
  status: "FUT" | "KÉSZ";
};

const FEED: Omit<Task, "id" | "status">[] = [
  { agent: "LEAD", text: "Új megkeresés minősítve — időpont-link kiküldve" },
  { agent: "INBOX", text: "12 email kategorizálva, 3 válasz-vázlat elkészült" },
  { agent: "CRM", text: "Ügyféladatok frissítve, következő lépés beütemezve" },
  { agent: "RIPORT", text: "Heti kimutatás összeállítva és elküldve" },
  { agent: "NAPTÁR", text: "Ütközés feloldva — konzultáció megerősítve" },
  { agent: "SZÁMLA", text: "Fizetési emlékeztető kiment 2 partnernek" },
  { agent: "LEAD", text: "Űrlap-kitöltés feldolgozva 41 másodperc alatt" },
  { agent: "INBOX", text: "Sürgős ügyfélkérdés eszkalálva — értesítés kiküldve" },
];

const STAGES = [
  { label: "BEJÖVŐ", base: 14 },
  { label: "MINŐSÍTÉS", base: 9 },
  { label: "VÉGREHAJTÁS", base: 23 },
  { label: "RIPORT", base: 6 },
];

const BARS = [34, 52, 41, 68, 47, 75, 58, 88, 64, 92, 71, 96];

export default function Console() {
  const reduce = useReducedMotion();
  const [tasks, setTasks] = useState<Task[]>(() =>
    FEED.slice(0, 4).map((t, i) => ({ ...t, id: i, status: i === 0 ? "FUT" : "KÉSZ" }))
  );
  const [tick, setTick] = useState(0);
  const seq = useRef(4);

  useEffect(() => {
    if (reduce) return;
    const iv = setInterval(() => {
      setTick((t) => t + 1);
      setTasks((prev) => {
        const id = seq.current++;
        const settled = prev.map((t) => ({ ...t, status: "KÉSZ" as const }));
        const next: Task = { ...FEED[id % FEED.length], id, status: "FUT" };
        return [next, ...settled].slice(0, 4);
      });
    }, 2800);
    return () => clearInterval(iv);
  }, [reduce]);

  return (
    <div className="rounded-large border border-hairline bg-inset p-3 shadow-hero-slider sm:p-4">
      <div className="overflow-hidden rounded-medium bg-[#0d0d0e] text-[#e8e8e8] shadow-deep-card">
        {/* Ablak-fejléc */}
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#4ade80]" aria-hidden />
            <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-white/60">
              MŰVELETI KONZOL — ÉLŐ
            </span>
          </div>
          <span className="font-mono text-[10px] text-white/35">business native os</span>
        </div>

        {/* Pipeline számlálók */}
        <div className="grid grid-cols-4 divide-x divide-white/8 border-b border-white/8">
          {STAGES.map((s, i) => (
            <div key={s.label} className="px-3 py-3 sm:px-4">
              <div className="font-mono text-[9px] tracking-[0.08em] text-white/40">{s.label}</div>
              <div className="mt-1 font-mono text-[15px] font-medium text-white sm:text-[17px]">
                {s.base + ((tick + i) % 4)}
                <span className="ml-1 text-[9px] text-[#4d8dff]">/nap</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feladat-feed */}
        <div className="flex flex-col gap-1.5 px-3 py-3 sm:px-4" aria-live="off">
          <AnimatePresence initial={false} mode="popLayout">
            {tasks.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={reduce ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: 8 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="flex items-center gap-3 rounded-base bg-white/[0.04] px-3 py-2.5"
              >
                <span className="w-14 shrink-0 font-mono text-[9px] font-medium tracking-[0.06em] text-[#4d8dff]">
                  {t.agent}
                </span>
                <span className="min-w-0 flex-1 truncate text-[12px] leading-snug text-white/75">
                  {t.text}
                </span>
                <span
                  className={`shrink-0 rounded-small px-1.5 py-0.5 font-mono text-[8px] font-medium tracking-[0.06em] ${
                    t.status === "FUT"
                      ? "bg-[#0052cc] text-white"
                      : "bg-white/8 text-white/50"
                  }`}
                >
                  {t.status}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Kihasználtság sáv-diagram */}
        <div className="border-t border-white/8 px-4 pb-4 pt-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.08em] text-white/40">
              ELVÉGZETT FELADATOK / 7 NAP
            </span>
            <span className="font-mono text-[9px] text-[#4d8dff]">+38% e héten</span>
          </div>
          <div className="flex h-12 items-end gap-1">
            {BARS.map((h, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.4 + i * 0.05 }}
                style={{ height: `${h}%`, transformOrigin: "bottom" }}
                className={`flex-1 rounded-[2px] ${i >= BARS.length - 3 ? "bg-[#0052cc]" : "bg-white/12"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
