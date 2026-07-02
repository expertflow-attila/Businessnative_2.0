import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { PROJECTS, getProject } from "@/lib/projects";
import Cta from "@/components/Cta";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.title} — Munkáim — Business Native`,
    description: p.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const primaryUrl = project.liveUrl ?? project.items?.[0]?.url;

  return (
    <>
      {/* Fejléc */}
      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <a
              href="/munkaim"
              className="inline-flex items-center gap-2 text-body-sm text-ink-3 transition-colors duration-200 hover:text-ink"
            >
              <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden className="rotate-180">
                <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Vissza a munkáimhoz
            </a>
            <p className="eyebrow mt-8">{project.category}</p>
            <h1 className="mt-4 max-w-[20ch] text-[clamp(32px,4.2vw,52px)] font-normal leading-[1.06] tracking-[-0.03em] text-ink">
              {project.title}
            </h1>
            <p className="mt-4 max-w-[54ch] text-body-lg text-ink-3">{project.tagline}</p>
            {primaryUrl && (
              <a href={primaryUrl} target="_blank" rel="noopener" className="btn-primary mt-8">
                Megnézem élőben
              </a>
            )}
          </Reveal>
        </div>
      </section>

      {/* Borító */}
      <section className="hairline-b">
        <div className="container-page py-14 md:py-16">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-large border border-hairline bg-inset shadow-hero-slider">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Összefoglaló + kihívás + megoldás */}
      <section className="hairline-b">
        <div className="container-page py-16 md:py-20">
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <p className="text-[clamp(20px,2.6vw,28px)] font-normal leading-[1.4] tracking-[-0.02em] text-ink">
                {project.summary}
              </p>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <Reveal>
                <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                  A KIHÍVÁS
                </span>
                <p className="mt-3 text-body-lg leading-[1.7] text-ink-2">{project.challenge}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-accent">
                  A MEGOLDÁS
                </span>
                <p className="mt-3 text-body-lg leading-[1.7] text-ink-2">{project.solution}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Felületek (ha többrészes) */}
      {project.items && project.items.length > 0 && (
        <section className="hairline-b">
          <div className="container-page py-16 md:py-20">
            <Reveal>
              <p className="eyebrow">A rendszer felületei</p>
              <h2 className="mt-4 text-[clamp(26px,3.4vw,38px)] font-normal leading-[1.1] tracking-[-0.03em] text-ink">
                {project.items.length} összekapcsolt felület.
              </h2>
            </Reveal>
            <Stagger className="mt-10 grid gap-px overflow-hidden rounded-large border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {project.items.map((it) => (
                <StaggerItem key={it.url} className="bg-surface">
                  <a href={it.url} target="_blank" rel="noopener" className="group flex h-full flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-inset">
                      <Image
                        src={it.img}
                        alt={it.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-body-lg font-medium text-ink">{it.name}</h3>
                      <p className="mt-2 flex-1 text-body text-ink-3">{it.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-body-sm font-medium text-ink">
                        Megnyitom
                        <svg width="11" height="11" viewBox="0 0 13 13" fill="none" aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <path d="M3.5 9.5l6-6M4.5 3.5h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <Cta />
    </>
  );
}
