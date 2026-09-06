import type { Metadata } from "next";
import PageWrapper from "@/components/ui/PageWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Architectural designer and BIM specialist portfolio — home.",
};

export default function HomePage() {
  return (
    <PageWrapper>
      <SectionWrapper id="hero" className="pb-16 pt-24 sm:pt-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-slate-950 shadow-[0_30px_120px_rgba(15,23,42,0.5)]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(2,6,23,0.76) 0%, rgba(2,6,23,0.58) 32%, rgba(2,6,23,0.18) 100%), url('/hero-portrait.jpg')",
            }}
          />

          <div className="relative grid min-h-[720px] grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1.3fr_0.8fr_1.2fr] lg:p-10 xl:p-12">
            <div className="flex flex-col justify-between py-8 lg:py-12">
              <div className="space-y-6">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-sky-200/90">Portfolio / 2026</p>
                <div className="space-y-5">
                  <p className="font-serif text-2xl italic text-sky-100/85">Architectural Designer | BIM Specialist</p>
                  <h1 className="max-w-xl text-5xl leading-[0.88] text-white sm:text-6xl lg:text-7xl xl:text-[6rem]">
                    Abutalib
                    <span className="ml-4 block text-sky-100/90">Eldaw.</span>
                  </h1>
                </div>
              </div>

              <div className="mt-10 max-w-lg space-y-4 text-base leading-7 text-slate-200/90 sm:text-lg">
                <p>
                  Designing clarity into complexity through architecture, BIM coordination, and project-ready documentation.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/projects"
                    className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/15"
                  >
                    Explore work
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-sky-300/40 bg-sky-400/10 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-100 transition hover:bg-sky-400/20"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden lg:block" />

            <div className="flex flex-col justify-center gap-4 py-6 lg:items-end lg:py-12">
              <div className="w-full max-w-[320px] rounded-[1.5rem] border border-white/20 bg-slate-950/35 p-4 backdrop-blur-md">
                <p className="text-[0.64rem] font-medium uppercase tracking-[0.26em] text-sky-200/80">Based in</p>
                <p className="mt-3 text-xl font-medium text-white">Riyadh — Al Kharj</p>
                <p className="mt-1 text-sm text-slate-300">Saudi Arabia</p>
              </div>

              <div className="w-full max-w-[320px] rounded-[1.5rem] border border-sky-300/25 bg-sky-300/10 p-4 backdrop-blur-md">
                <p className="text-[0.64rem] font-medium uppercase tracking-[0.26em] text-sky-100/80">Focus</p>
                <p className="mt-3 text-lg leading-7 text-white">
                  Architecture, BIM, coordination, design development, and construction documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="featured-projects" className="border-t border-brand-200">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div><p className="eyebrow">Selected work</p><h2 className="mt-3 text-5xl sm:text-6xl">Built with intent.</h2></div>
          <Link href="/projects" className="hidden text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4 sm:block">View all projects</Link>
        </div>
        <div className="grid gap-px border border-brand-300 bg-brand-300 md:grid-cols-2">
          {[{ name: "King Salman Oasis", place: "Riyadh / Architectural + BIM", number: "01" }, { name: "Royal Commission", place: "Jubail & Yanbu / Coordination", number: "02" }].map((project) => (
            <Link href={`/projects/${project.number === "01" ? "king-salman-oasis" : "royal-commission"}`} key={project.number} className="group bg-brand-100 p-6 transition-colors hover:bg-brand-950 hover:text-brand-100 sm:p-8">
              <div className="mb-24 flex items-start justify-between"><span className="font-serif text-4xl">{project.number}</span><span aria-hidden="true" className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></div>
              <p className="eyebrow group-hover:text-brand-400">{project.place}</p><h3 className="mt-2 text-3xl">{project.name}</h3>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="about-teaser" className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <p className="eyebrow">Approach</p>
        <div><p className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">I connect the ambition of a design with the precision needed to build it.</p><Link href="/about" className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4">More about me →</Link></div>
      </SectionWrapper>

      <SectionWrapper id="services-teaser" className="border-y border-brand-200">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Capabilities</p><div className="grid gap-4 sm:grid-cols-2"><p className="border-t border-brand-300 pt-3 text-lg">Architectural design</p><p className="border-t border-brand-300 pt-3 text-lg">BIM modeling & coordination</p><p className="border-t border-brand-300 pt-3 text-lg">Construction documentation</p><p className="border-t border-brand-300 pt-3 text-lg">3D visualization</p></div></div>
      </SectionWrapper>

      <SectionWrapper id="cta" className="pb-28 pt-28">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-end"><div><p className="eyebrow">Start a conversation</p><h2 className="mt-4 max-w-2xl text-5xl sm:text-7xl">Have a space<br />to solve?</h2></div><Link href="/contact" className="inline-flex items-center gap-2 border border-brand-950 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-brand-950 hover:text-brand-100">Get in touch <span aria-hidden="true">↗</span></Link></div>
      </SectionWrapper>
    </PageWrapper>
  );
}
