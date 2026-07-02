export default function Footer() {
  return (
    <footer>
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="flex items-baseline gap-1.5 text-[15px] font-semibold tracking-[-0.02em] text-ink">
            business native
            <span className="font-mono text-[10px] font-medium text-ink-3">2.0</span>
          </span>
          <p className="mt-2 max-w-[42ch] text-body-sm text-ink-3">
            Teljesítményközpontú rendszerek magyar vállalkozásoknak —
            MI-ügynökök, amik elvégzik az ismétlődő munkát.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-body-sm text-ink-3 md:items-end">
          <a href="mailto:hello@expertflow.hu" className="transition-colors duration-200 hover:text-ink">
            hello@expertflow.hu
          </a>
          <span>© {new Date().getFullYear()} Business Native · Nagy Attila</span>
        </div>
      </div>
    </footer>
  );
}
