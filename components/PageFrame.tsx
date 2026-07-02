/* Halvány szerkezeti vonalak — a Chronicle "drafting frame" mintája:
   1px függőleges vonalak a tartalom-rács szélein, végigfutva az oldalon.
   A szekció-elválasztó hairline-ok keresztezik őket, finom + pontokat rajzolva. */

export function PlusMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden
      className={`text-ink/40 ${className}`}
    >
      <path d="M5.5 0v11M0 5.5h11" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default function PageFrame() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
      <div className="absolute inset-y-0 left-1/2 w-full max-w-[1280px] -translate-x-1/2 border-x border-frame" />
    </div>
  );
}
