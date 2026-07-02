const TOOLS = [
  "Claude",
  "OpenAI",
  "Supabase",
  "Vercel",
  "Stripe",
  "Next.js",
  "Telegram",
  "Google Workspace",
  "Cal.com",
  "ElevenLabs",
];

/* Őszinte trust-band: nem ügyfél-logók, hanem az eszközök, amikre építek. */
export default function ToolsBand() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <section className="hairline-b" aria-label="Eszközök, amikre építek">
      <div className="container-page py-6">
        <p className="eyebrow text-center">Ezekre az eszközökre építem a rendszereket</p>
      </div>
      <div className="marquee overflow-hidden pb-8" aria-hidden>
        <div className="marquee-track items-center gap-14 pr-14">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap text-heading-sm font-medium tracking-[-0.02em] text-ink/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
