import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "AI Eszközök — Business Native",
  description:
    "Válogatott AI eszközök és nyílt forrású projektek, amelyek vállalkozóként valóban hasznosak lehetnek.",
};

type Tool = {
  name: string;
  url: string;
  tag: string;
  desc: string;
  how: string;
};

const TOOLS: Tool[] = [
  {
    name: "autoresearch",
    url: "https://github.com/karpathy/autoresearch",
    tag: "Kutatás · Karpathy",
    desc: "Autonóm AI-kutatóügynök, amely éjszaka önállóan végez kísérleteket, módosítja a kódot és iterál az eredményeken.",
    how: "Belső folyamatok tesztelése és AI-modellek autonóm kísérletezése — emberi beavatkozás nélkül.",
  },
  {
    name: "browser-use",
    url: "https://github.com/browser-use/browser-use",
    tag: "Böngészőautomatizálás",
    desc: "Természetes nyelvű utasítással irányított böngészőügynök, amely bármilyen webes feladatot elvégez.",
    how: "Versenytárs-figyelés, adatgyűjtés, webes folyamatok automatizálása — anélkül, hogy neked kellene kattintani.",
  },
  {
    name: "video-use",
    url: "https://github.com/browser-use/video-use",
    tag: "Videóautomatizálás",
    desc: "AI-ügynök, amely videókat elemez, feldolgoz és kezel automatikusan.",
    how: "Marketing videók feldolgozása, tartalom kivonása, videós anyagok rendszerezése AI-támogatással.",
  },
  {
    name: "HyperFrames",
    url: "https://github.com/heygen-com/hyperframes",
    tag: "Videógenerálás · HeyGen",
    desc: "AI-alapú interaktív videó és személyre szabott élménygyártó keretrendszer a HeyGen csapatától.",
    how: "Személyre szabott üdvözlő és bemutató videók automatikus generálása — minden érdeklődőnek egyedileg.",
  },
  {
    name: "LLM Wiki minta",
    url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
    tag: "Tudásbázis · Karpathy",
    desc: "Karpathy mintája arra, hogyan tartson fenn egy LLM inkrementálisan bővülő, AI-karbantartott wikit — RAG helyett.",
    how: "Állandóan naprakész belső tudásbázis kiépítése: az AI olvassa az új forrásokat és frissíti a wiki-t helyetted.",
  },
  {
    name: "AIS-OS",
    url: "https://github.com/nateherkai/AIS-OS",
    tag: "AI operációs rendszer",
    desc: "Starter kit, amely a Claude Code-ot személyes AI operációs rendszerré alakítja három kulcsskillel: onboard, audit, level-up.",
    how: "Üzleti folyamatok AI-optimalizálása strukturált keretrendszerrel — tudod, hol nyersz üzleti tőkeáttételt.",
  },
  {
    name: "claude-peers-mcp",
    url: "https://github.com/louislva/claude-peers-mcp",
    tag: "AI-koordináció",
    desc: "MCP kiszolgáló, amely lehetővé teszi, hogy több Claude AI példány valós időben kommunikáljon egymással.",
    how: "Párhuzamos AI-ügynökök koordinálása: a csapat tagjainak megfelelően osztja el a feladatokat.",
  },
  {
    name: "chrome-devtools-mcp",
    url: "https://github.com/ChromeDevTools/chrome-devtools-mcp",
    tag: "Böngésző · DevTools",
    desc: "MCP kiszolgáló, amely közvetlen hozzáférést ad az AI-nek a Chrome fejlesztői eszközeihez.",
    how: "Weboldal-tesztelés, hibakeresés és teljesítmény-elemzés AI-vezérelt automatizálással.",
  },
  {
    name: "codex-mcp-server",
    url: "https://github.com/tuannvm/codex-mcp-server",
    tag: "Fejlesztés · MCP",
    desc: "MCP kiszolgáló-bridge, amely összeköti a Claude AI-t az OpenAI Codex-szel kód-elemzési és generálási feladatokhoz.",
    how: "Fejlesztési folyamatok felgyorsítása: kódellenőrzés, refaktorálás és dokumentáció AI-automatizálással.",
  },
  {
    name: "superpowers",
    url: "https://github.com/obra/superpowers",
    tag: "AI módszertan",
    desc: "Teljes szoftverfejlesztési módszertan AI-ügynökök számára — tervezés, implementáció és tesztelés fázisaira bontva.",
    how: "AI-alapú fejlesztési projektek strukturálása és minőségbiztosítása test-driven szemlélettel.",
  },
  {
    name: "cli-printing-press",
    url: "https://github.com/mvanhorn/cli-printing-press",
    tag: "API-integráció",
    desc: "Automatikusan generál production-ready CLI eszközöket és MCP kiszolgálókat bármely API-hoz, intelligens adatréteggel.",
    how: "Külső szolgáltatások gyors integrálása AI-ügynökök számára — minden API-ból Claude-kompatibilis eszköz lesz.",
  },
  {
    name: "awesome-claude-skills",
    url: "https://github.com/ComposioHQ/awesome-claude-skills",
    tag: "Skill-gyűjtemény · Composio",
    desc: "Kuratált Claude AI skill-gyűjtemény, amelyek kiterjesztik az AI képességeit specifikus, ismétlődő feladatokra.",
    how: "Előre elkészített AI-készségek bevetése a leggyakoribb vállalkozói feladatokhoz — ne kelljen nulláról felépíteni.",
  },
];

export default function EszkozTarPage() {
  return (
    <>
      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <p className="eyebrow">AI Eszközök</p>
            <h1 className="mt-5 max-w-[22ch] text-[clamp(34px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.03em] text-ink">
              Amik valóban hasznosak.
            </h1>
            <p className="mt-6 max-w-[54ch] text-body-lg text-ink-3">
              Válogatott, nyílt forrású AI eszközök — nem lista a lista kedvéért,
              hanem azok, amelyeket érdemes érteni és bevetni a vállalkozásodban.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <Stagger className="grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t) => (
              <StaggerItem key={t.url} className="bg-surface">
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col p-6 transition-colors duration-200 hover:bg-inset/30 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-[9px] font-medium tracking-[0.08em] text-accent">
                      {t.tag.toUpperCase()}
                    </span>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 13 13"
                      fill="none"
                      aria-hidden
                      className="mt-0.5 shrink-0 text-ink-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                      <path
                        d="M3.5 9.5l6-6M4.5 3.5h5v5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h2 className="mt-3 text-heading-sm font-medium text-ink">{t.name}</h2>
                  <p className="mt-2 flex-1 text-body text-ink-3">{t.desc}</p>

                  <div className="mt-5 border-t border-hairline pt-4">
                    <p className="text-body-sm text-ink-3">
                      <span className="font-medium text-ink">Vállalkozásban:</span>{" "}
                      {t.how}
                    </p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Cta />
    </>
  );
}
