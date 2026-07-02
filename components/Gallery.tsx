"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/primitives";

/* Lapozható terület-galéria — Chronicle "templates" minta:
   viewport-szélességű scroller, snap-kártyák, oldalsó köd, nyilak. */

const AREAS = [
  {
    key: "kampanyok",
    title: "Kampányok támogatása",
    body: "Az AI-csapatod támogatja a kommunikációt, a követést és a kiértékelést, így minden átlátható és mérhető marad.",
    rows: [
      { w: "72%", hot: true },
      { w: "58%", hot: false },
      { w: "84%", hot: false },
    ],
    stat: "mérhető",
  },
  {
    key: "dontesek",
    title: "Adatvezérelt döntések",
    body: "A vállalkozásod tudásbázisa mutatja, hol veszíted el az érdeklődőket, és mire van szükségük az ügyfeleidnek.",
    rows: [
      { w: "64%", hot: true },
      { w: "80%", hot: true },
      { w: "46%", hot: false },
    ],
    stat: "insight",
  },
  {
    key: "asszisztens",
    title: "Személyi asszisztens",
    body: "AI-ügynököd koordinálja a vállalkozásod fő területeire fókuszáló csapattagokat, és a kérésednek megfelelően irányítja őket.",
    rows: [
      { w: "76%", hot: false },
      { w: "52%", hot: true },
      { w: "68%", hot: false },
    ],
    stat: "koordinál",
  },
  {
    key: "szamlazas",
    title: "Számlázás és pénzügyi követés",
    body: "A számlák automatikusan kimennek, a befizetések követhetők, és hónap végén nem kell órákat töltened az összesítéssel.",
    rows: [
      { w: "58%", hot: false },
      { w: "72%", hot: false },
      { w: "40%", hot: true },
    ],
    stat: "auto",
  },
  {
    key: "eloszures",
    title: "Előszűrés és kvalifikáció",
    body: "Az asszisztens kiszűri, kinek tudsz tényleg segíteni — így a konzultációra már felkészült, kvalifikált érdeklődők érkeznek.",
    rows: [
      { w: "66%", hot: true },
      { w: "78%", hot: false },
      { w: "54%", hot: false },
    ],
    stat: "kvalifikált",
  },
  {
    key: "tudasbazis",
    title: "Ügyfél-tudásbázis",
    body: "Minden ügyfeled a saját fiókjában fér hozzá a videókhoz, dokumentumokhoz és felvételekhez, AI-alapú kereséssel.",
    rows: [
      { w: "70%", hot: false },
      { w: "48%", hot: true },
      { w: "82%", hot: false },
    ],
    stat: "24/7",
  },
];

function ArrowButton({
  dir,
  onClick,
  disabled,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Előző kártyák" : "Következő kártyák"}
      onClick={onClick}
      disabled={disabled}
      className="flex h-9 w-9 items-center justify-center rounded-base border border-hairline text-ink transition-all duration-200 hover:border-ink-3 disabled:opacity-30"
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        aria-hidden
        className={dir === "prev" ? "rotate-180" : ""}
      >
        <path
          d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function Gallery() {
  const scroller = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = scroller.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 10);
    setAtEnd(el.scrollLeft > el.scrollWidth - el.clientWidth - 10);
  };

  const page = (dir: 1 | -1) =>
    scroller.current?.scrollBy({ left: dir * 660, behavior: "smooth" });

  return (
    <section id="teruletek" className="hairline-b">
      <div className="container-page pt-20 md:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Megoldások</p>
            <h2 className="mt-4 max-w-[22ch] text-[clamp(30px,4vw,44px)] font-normal leading-[1.08] tracking-[-0.03em] text-ink">
              Megvalósítás a gyakorlatban.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex gap-2 pb-1">
            <ArrowButton dir="prev" onClick={() => page(-1)} disabled={atStart} />
            <ArrowButton dir="next" onClick={() => page(1)} disabled={atEnd} />
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.15}>
        <div className="relative">
          {/* oldalsó köd */}
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent transition-opacity duration-300 sm:w-28 ${atStart ? "opacity-0" : "opacity-100"}`}
          />
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent transition-opacity duration-300 sm:w-28 ${atEnd ? "opacity-0" : "opacity-100"}`}
          />

          <div
            ref={scroller}
            onScroll={update}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-20 pt-10 md:pb-24"
            style={{
              paddingInline: "max(calc((100vw - 1280px) / 2 + 40px), 20px)",
              scrollPaddingInline: "max(calc((100vw - 1280px) / 2 + 40px), 20px)",
            }}
          >
            {AREAS.map((a) => (
              <article
                key={a.key}
                className="w-[300px] shrink-0 snap-start overflow-hidden rounded-large border border-hairline bg-surface sm:w-[340px]"
              >
                {/* mini termék-előnézet */}
                <div className="border-b border-hairline bg-canvas p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-medium tracking-[0.08em] text-accent">
                      {a.title.toUpperCase()}
                    </span>
                    <span className="font-mono text-[9px] text-ink-3">{a.stat}</span>
                  </div>
                  <div className="mt-4 flex flex-col gap-2.5">
                    {a.rows.map((r, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${r.hot ? "bg-accent" : "bg-ink-3/40"}`}
                          aria-hidden
                        />
                        <span
                          className={`h-1.5 rounded-full ${r.hot ? "bg-accent/25" : "bg-ink/8"}`}
                          style={{ width: r.w }}
                          aria-hidden
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-body-lg font-medium text-ink">{a.title}</h3>
                  <p className="mt-2 text-body text-ink-3">{a.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
