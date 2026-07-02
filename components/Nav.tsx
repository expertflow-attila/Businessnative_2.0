"use client";

import { useEffect, useState } from "react";
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
        /* nap */
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
        /* hold */
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
  { href: "/tudastar", label: "Tudástár" },
  { href: "/rolam", label: "Rólam" },
];

const TRAINING_URL = "https://expertflow-website-v4.vercel.app/kerdoiv";
const BUSINESS_START_URL = "https://expert-flow-start-6-0.vercel.app/";

export default function Nav() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

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
          <span className="font-mono text-[10px] font-medium text-ink-3">2.0</span>
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
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS_START_URL}
            target="_blank"
            rel="noopener"
            className="hidden text-body font-medium text-ink/45 transition-colors duration-200 hover:text-ink lg:block"
          >
            Business Start
          </a>
          <a
            href={TRAINING_URL}
            target="_blank"
            rel="noopener"
            className="hidden text-body font-medium text-ink/45 transition-colors duration-200 hover:text-ink lg:block"
          >
            Tréningek
          </a>
          <span className="hidden h-4 w-px bg-hairline lg:block" aria-hidden />
          <ThemeToggle />
          <a href="#kapcsolat" className="btn-primary btn-sm hidden sm:inline-flex">
            Beszéljünk
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
            <span className="my-2 h-px bg-hairline" aria-hidden />
            <a
              href={BUSINESS_START_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="rounded-base px-2 py-2.5 text-body-lg font-medium text-ink/70 hover:bg-inset/40 hover:text-ink"
            >
              Business Start
            </a>
            <a
              href={TRAINING_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="rounded-base px-2 py-2.5 text-body-lg font-medium text-ink/70 hover:bg-inset/40 hover:text-ink"
            >
              Tréningek
            </a>
            <a href="#kapcsolat" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Beszéljünk
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
