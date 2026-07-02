export default function Footer() {
  return (
    <footer className="pinstripes pinstripes-full">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="flex items-baseline gap-1.5 text-[15px] font-semibold tracking-[-0.02em] text-ink">
            business native
            <span className="font-mono text-[10px] font-medium text-ink-3">2.0</span>
          </span>
          <p className="mt-2 max-w-[42ch] text-body-sm text-ink-3">
            AI-alapú rendszereket építek egyéni vállalkozóknak — hogy a
            szakmai tudásod látható és értékesíthető legyen.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-body-sm" aria-label="Lábléc navigáció">
          {[
            ["Szolgáltatás", "/szolgaltatas"],
            ["Rólam", "/rolam"],
            ["Referenciák", "/referenciak"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-ink-3 transition-colors duration-200 hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-body-sm text-ink-3 md:items-end">
          <a href="mailto:hello@expertflow.hu" className="transition-colors duration-200 hover:text-ink">
            hello@expertflow.hu
          </a>
          <span>© {new Date().getFullYear()} Business Native · Nagy Attila</span>
        </div>
      </div>
      <div className="hairline-t">
        <div className="container-page flex flex-wrap items-center gap-x-5 gap-y-2 py-4 text-body-sm text-ink-3">
          <a href="/adatvedelem" className="transition-colors duration-200 hover:text-ink">
            Adatvédelem
          </a>
          <span aria-hidden>·</span>
          <a href="/aszf" className="transition-colors duration-200 hover:text-ink">
            ÁSZF
          </a>
          <span aria-hidden>·</span>
          <a href="/garancia" className="transition-colors duration-200 hover:text-ink">
            Garancia
          </a>
        </div>
      </div>
    </footer>
  );
}
