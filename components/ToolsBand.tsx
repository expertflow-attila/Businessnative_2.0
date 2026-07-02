import { Stagger, StaggerItem } from "@/components/motion/primitives";

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

/* Cellás logófal (Chronicle-minta): 1px hairline-nal osztott rács.
   Őszinte trust-band — az eszközök, amikre építek, nem kamu ügyfél-logók. */
export default function ToolsBand() {
  return (
    <section className="hairline-b" aria-label="Eszközök, amikre építek">
      <div className="container-page py-10 md:py-12">
        <p className="eyebrow text-center">Ezekre az eszközökre építem a rendszereket</p>
        <Stagger
          className="mt-6 grid grid-cols-2 overflow-hidden rounded-large border border-hairline bg-hairline gap-px sm:grid-cols-5"
          stagger={0.05}
        >
          {TOOLS.map((t) => (
            <StaggerItem
              key={t}
              y={12}
              className="flex h-[72px] items-center justify-center bg-canvas px-3"
            >
              <span className="whitespace-nowrap text-center text-[15px] font-medium tracking-[-0.02em] text-ink/45 transition-colors duration-200 hover:text-ink">
                {t}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
