"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/components/motion/primitives";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label={mounted && resolvedTheme === "dark" ? "Váltás világos módra" : "Váltás sötét módra"}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-base border border-hairline text-ink transition-colors duration-200 hover:border-ink-3"
    >
      {!mounted ? (
        <span className="block h-4 w-4" />
      ) : resolvedTheme === "dark" ? (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
          <circle cx="7.5" cy="7.5" r="3.25" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M7.5 0.5v2M7.5 12.5v2M0.5 7.5h2M12.5 7.5h2M2.55 2.55l1.4 1.4M11.05 11.05l1.4 1.4M12.45 2.55l-1.4 1.4M3.95 11.05l-1.4 1.4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
          <path
            d="M13 9.5A6 6 0 0 1 5.5 2 6 6 0 1 0 13 9.5Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

const LINKS = [
  { href: "/szolgaltatas", label: "Szolgáltatás" },
  { href: "/munkaim", label: "Munkáim" },
  { href: "/rolam", label: "Rólam" },
];

const TUDASTAR_ITEMS = [
  { href: "https://copywriting-ef.vercel.app/", label: "Copywriting", external: true },
  { href: "/tudastar", label: "Landoló oldal", external: false },
  { href: "https://esettanulmanyok-ef.vercel.app/", label: "Esettanulmányok", external: true },
  { href: "https://expert-flow-start-6-0.vercel.app/", label: "Business Start", external: true },
  { href: "/eszkoztar", label: "AI Eszközök", external: false },
];

const CAL_URL = "https://cal.com/attila-nagy-8uefco/konzultacio";

function TudasDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="flex items-center gap-1 text-body font-medium text-ink/45 transition-colors duration-200 hover:text-ink"
        aria-expanded={open}
      >
        Tudástár
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          aria-hidden
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute left-0 top-full z-50 mt-2 min-w-[168px] overflow-hidden rounded-large border border-hairline bg-canvas shadow-sm"
        >
          {TUDASTAR_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener" : undefined}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 text-body text-ink/60 transition-colors duration-150 hover:bg-inset/50 hover:text-ink"
            >
              {item.label}
              {item.external && (
                <svg width="10" height="10" viewBox="0 0 13 13" fill="none" aria-hidden className="ml-2 shrink-0 opacity-40">
                  <path d="M3.5 9.5l6-6M4.5 3.5h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [tudasOpen, setTudasOpen] = useState(false);

  return (
    <motion.header
      initial={reduce ? false : { y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="sticky top-0 z-50 bg-canvas hairline-b"
    >
      <div className="container-page flex h-[54px] items-center justify-between">
        <a href="#" className="flex items-baseline gap-1.5 text-[15px] font-semibold tracking-[-0.02em] text-ink">
          business native
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Fő navigáció">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-body font-medium text-ink/45 transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <TudasDropdown />
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener"
            className="btn-primary btn-sm hidden sm:inline-flex"
          >
            Konzultáció
          </a>
          <button
            type="button"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-base border border-hairline md:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              {open ? (
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              ) : (
                <path d="M2 4.5h12M2 8h12M2 11.5h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="hairline-t bg-canvas md:hidden"
          aria-label="Mobil navigáció"
        >
          <div className="container-page flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-base px-2 py-2.5 text-body-lg font-medium text-ink/70 hover:bg-inset/40 hover:text-ink"
              >
                {l.label}
              </a>
            ))}

            {/* Tudástár expandable */}
            <button
              type="button"
              onClick={() => setTudasOpen((v) => !v)}
              className="flex items-center justify-between rounded-base px-2 py-2.5 text-body-lg font-medium text-ink/70 hover:bg-inset/40 hover:text-ink"
            >
              Tudástár
              <svg
                width="13"
                height="13"
                viewBox="0 0 11 11"
                fill="none"
                aria-hidden
                className={`transition-transform duration-200 ${tudasOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {tudasOpen && (
              <div className="ml-2 flex flex-col gap-0.5 border-l border-hairline pl-3">
                {TUDASTAR_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener" : undefined}
                    onClick={() => { setOpen(false); setTudasOpen(false); }}
                    className="rounded-base px-2 py-2 text-body font-medium text-ink/60 hover:bg-inset/40 hover:text-ink"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}

            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              Konzultáció
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
