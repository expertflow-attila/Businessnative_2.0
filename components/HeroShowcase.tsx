"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/components/motion/primitives";

/* Hero termék-ablak — Chronicle-minta: lapozós slideshow.
   Az ablak alatt tab-sor vált a nézetek között (auto-léptetéssel),
   a jobb széle ködbe vész, bal oldalán fogantyú, alatta eszköztár. */

const VIEW_MS = 5600;

/* ---- 1. nézet: műveleti konzol ---- */

type Task = { id: number; agent: string; text: string; status: "FUT" | "KÉSZ" };

const FEED: Omit<Task, "id" | "status">[] = [
  { agent: "LEAD", text: "Új megkeresés minősítve — időpont-link kiküldve" },
  { agent: "INBOX", text: "12 email kategorizálva, 3 válasz-vázlat elkészült" },
  { agent: "CRM", text: "Ügyféladatok frissítve, következő lépés beütemezve" },
  { agent: "RIPORT", text: "Heti kimutatás összeállítva és elküldve" },
  { agent: "NAPTÁR", text: "Ütközés feloldva — konzultáció megerősítve" },
  { agent: "SZÁMLA", text: "Fizetési emlékeztető kiment 2 partnernek" },
];

const STAGES = [
  { label: "BEJÖVŐ", base: 14 },
  { label: "MINŐSÍTÉS", base: 9 },
  { label: "VÉGREHAJTÁS", base: 23 },
  { label: "RIPORT", base: 6 },
];

function OpsView() {
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
    <div>
      <div className="grid grid-cols-2 gap-px border-b border-hairline bg-hairline sm:grid-cols-4">
        {STAGES.map((s, i) => (
          <div key={s.label} className="bg-surface px-3 py-3 sm:px-4">
            <div className="font-mono text-[9px] tracking-[0.08em] text-ink-3">{s.label}</div>
            <div className="mt-1 font-mono text-[15px] font-medium text-ink sm:text-[17px]">
              {s.base + ((tick + i) % 4)}
              <span className="ml-1 text-[9px] text-accent">/nap</span>
            </div>
          </div>
        ))}
      </div>
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
              className="flex items-center gap-3 rounded-base bg-canvas px-3 py-2.5"
            >
              <span className="w-14 shrink-0 font-mono text-[9px] font-medium tracking-[0.06em] text-accent">
                {t.agent}
              </span>
              <span className="min-w-0 flex-1 truncate text-[12px] leading-snug text-ink-2">
                {t.text}
              </span>
              <span
                className={`shrink-0 rounded-small px-1.5 py-0.5 font-mono text-[8px] font-medium tracking-[0.06em] ${
                  t.status === "FUT" ? "bg-[#0052cc] text-white" : "bg-inset text-ink-3"
                }`}
              >
                {t.status}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---- 2. nézet: inbox-triage ---- */

const MAILS = [
  { from: "Kovács Petra", subject: "Ajánlatkérés — webshop automatizálás", tag: "VÁZLAT KÉSZ", hot: true },
  { from: "Molnár Dénes", subject: "Számla másolat kérése", tag: "MEGVÁLASZOLVA", hot: false },
  { from: "Szabó Lilla", subject: "Időpont-módosítás jövő hétre", tag: "ÁTÜTEMEZVE", hot: false },
  { from: "Balogh Ádám", subject: "Sürgős: integráció kérdés", tag: "ESZKALÁLVA", hot: true },
];

function InboxView() {
  return (
    <div className="grid grid-cols-[112px_1fr] gap-px bg-hairline sm:grid-cols-[140px_1fr]">
      <div className="flex flex-col gap-3 bg-surface p-4">
        {[
          ["Ajánlatkérés", 4],
          ["Ügyfélkérdés", 3],
          ["Számlázás", 2],
          ["Egyéb", 1],
        ].map(([name, n]) => (
          <div key={name as string} className="flex items-center justify-between">
            <span className="text-[11px] text-ink-2">{name}</span>
            <span className="font-mono text-[10px] text-accent">{n}</span>
          </div>
        ))}
        <div className="mt-auto border-t border-hairline pt-3">
          <span className="font-mono text-[9px] tracking-[0.06em] text-ink-3">96% PONTOS</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 bg-surface p-3">
        {MAILS.map((m) => (
          <div key={m.subject} className="flex items-center gap-3 rounded-base bg-canvas px-3 py-2.5">
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${m.hot ? "bg-accent" : "bg-ink-3/40"}`}
              aria-hidden
            />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[12px] font-medium text-ink">{m.from}</span>
              <span className="block truncate text-[11px] text-ink-3">{m.subject}</span>
            </span>
            <span className="shrink-0 rounded-small bg-inset px-1.5 py-0.5 font-mono text-[8px] tracking-[0.05em] text-ink-3">
              {m.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- 3. nézet: riport ---- */

const BARS = [34, 52, 41, 68, 47, 75, 58, 88, 64, 92, 71, 96];

function ReportView() {
  const reduce = useReducedMotion();
  return (
    <div>
      <div className="grid grid-cols-3 gap-px border-b border-hairline bg-hairline">
        {[
          ["ELVÉGZETT FELADAT", "412"],
          ["VISSZANYERT IDŐ", "34 óra"],
          ["ÁTL. REAKCIÓIDŐ", "3 perc"],
        ].map(([l, v]) => (
          <div key={l} className="bg-surface px-3 py-3 sm:px-4">
            <div className="font-mono text-[8px] tracking-[0.08em] text-ink-3 sm:text-[9px]">{l}</div>
            <div className="mt-1 font-mono text-[15px] font-medium text-ink sm:text-[17px]">{v}</div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4 pt-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.08em] text-ink-3">
            ELVÉGZETT FELADATOK / 7 NAP
          </span>
          <span className="font-mono text-[9px] text-accent">+38% e héten</span>
        </div>
        <div className="flex h-24 items-end gap-1">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.04 }}
              style={{ height: `${h}%`, transformOrigin: "bottom" }}
              className={`flex-1 rounded-[2px] ${i >= BARS.length - 3 ? "bg-[#0052cc] dark:bg-[#4d8dff]" : "bg-ink/12"}`}
            />
          ))}
        </div>
        <p className="mt-3 border-t border-hairline pt-3 text-[11px] text-ink-3">
          A heti PDF-kimutatás hétfőn 07:00-kor magától megy ki.
        </p>
      </div>
    </div>
  );
}

/* ---- 4. nézet: naptár ---- */

function CalendarView() {
  const days = ["H", "K", "Sze", "Cs", "P"];
  const blocks: Record<string, { t: string; label: string; hot?: boolean }[]> = {
    H: [{ t: "09:00", label: "Fókusz-idő" }],
    K: [{ t: "10:00", label: "Konzultáció", hot: true }, { t: "14:00", label: "Utánkövetés" }],
    Sze: [{ t: "11:00", label: "Rendszer-riport" }],
    Cs: [{ t: "10:00", label: "Konzultáció", hot: true }],
    P: [{ t: "09:30", label: "Heti zárás" }],
  };
  return (
    <div>
      <div className="grid grid-cols-5 gap-px bg-hairline">
        {days.map((d) => (
          <div key={d} className="min-h-[168px] bg-surface p-2">
            <div className="mb-2 text-center font-mono text-[9px] tracking-[0.08em] text-ink-3">{d}</div>
            <div className="flex flex-col gap-1.5">
              {blocks[d].map((b) => (
                <div
                  key={b.label + b.t}
                  className={`rounded-small px-2 py-1.5 ${
                    b.hot ? "bg-[#0052cc] text-white" : "bg-canvas text-ink-2"
                  }`}
                >
                  <div className="font-mono text-[8px] opacity-70">{b.t}</div>
                  <div className="truncate text-[10px] font-medium">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="border-t border-hairline px-4 py-3 text-[11px] text-ink-3">
        Ütközés automatikusan feloldva — mindkét fél értesítve.
      </p>
    </div>
  );
}

/* ---- keret + tabok ---- */

const VIEWS = [
  { key: "konzol", label: "Műveleti konzol", chip: "ÉLŐ", View: OpsView },
  { key: "inbox", label: "Inbox-triage", chip: "AUTO", View: InboxView },
  { key: "riport", label: "Riport", chip: "HETI", View: ReportView },
  { key: "naptar", label: "Naptár", chip: "SZINKRON", View: CalendarView },
];

export default function HeroShowcase() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const view = VIEWS[active];

  useEffect(() => {
    if (reduce || paused) return;
    const iv = setInterval(() => setActive((a) => (a + 1) % VIEWS.length), VIEW_MS);
    return () => clearInterval(iv);
  }, [reduce, paused, active]);

  return (
    <div
      className="relative lg:-mr-24 xl:-mr-36"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* bal fogantyú */}
      <div
        aria-hidden
        className="absolute -left-5 top-1/2 hidden -translate-y-1/2 flex-col gap-1 lg:flex"
      >
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-[3px] w-[3px] rounded-full bg-ink/25" />
        ))}
      </div>

      {/* ablak */}
      <div className="rounded-large border border-hairline bg-inset p-3 shadow-hero-slider sm:p-4">
        <div className="overflow-hidden rounded-medium bg-surface shadow-card-lift">
          {/* chrome-sor */}
          <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              <span
                className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#16a34a] dark:bg-[#4ade80]"
                aria-hidden
              />
              <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-ink-3">
                {view.label.toUpperCase()} — {view.chip}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex -space-x-1.5" aria-hidden>
                <span className="h-4 w-4 rounded-full border border-surface bg-inset" />
                <span className="h-4 w-4 rounded-full border border-surface bg-ink/25" />
                <span className="h-4 w-4 rounded-full border border-surface bg-[#0052cc]" />
              </span>
              <span className="hidden font-mono text-[10px] text-ink-3/60 sm:block">
                business native os
              </span>
            </div>
          </div>

          {/* nézet-tartalom */}
          <div className="min-h-[300px] sm:min-h-[320px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={view.key}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <view.View />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* jobb szél köd (a Chronicle "elködösítés") */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-28 bg-gradient-to-l from-canvas to-transparent lg:block xl:w-40"
      />

      {/* lebegő eszköztár */}
      <div className="mt-3 flex justify-center">
        <div className="flex items-center gap-1 rounded-medium border border-hairline bg-surface px-2 py-1.5 shadow-card-lift">
          {["M7 2v10M2 7h10", "M2 10l3-4 2 3 4-6", "M3 2h8v10H3z", "M2 5h10M5 2v10"].map((d, i) => (
            <span key={i} className="flex h-6 w-6 items-center justify-center rounded-small text-ink-3 transition-colors duration-200 hover:bg-canvas hover:text-ink">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d={d} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* tab-sor */}
      <div
        className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2"
        role="tablist"
        aria-label="Termék-nézetek"
      >
        {VIEWS.map((v, i) => {
          const isActive = i === active;
          return (
            <button
              key={v.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`relative pb-1.5 text-body font-medium transition-colors duration-200 ${
                isActive ? "text-ink" : "text-ink-3 hover:text-ink-2"
              }`}
            >
              {v.label}
              {isActive && (
                <motion.span
                  layoutId="hero-tab-underline"
                  className="absolute inset-x-0 bottom-0 h-px bg-ink"
                  transition={{ duration: 0.35, ease: EASE }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
