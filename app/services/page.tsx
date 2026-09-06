import type { Metadata } from "next";
import PageWrapper from "@/components/ui/PageWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Architectural design and BIM services offered.",
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      <SectionWrapper id="services-header" className="pb-16 pt-28">
        <p className="eyebrow">Capabilities / Services</p><h1 className="mt-5 max-w-5xl text-6xl leading-[0.92] sm:text-8xl">From first line<br /><span className="ml-[10%]">to final detail.</span></h1>
      </SectionWrapper>

      <SectionWrapper id="services-list" className="border-t border-brand-200">
        <div className="grid border-l border-t border-brand-300 md:grid-cols-2">{[{ n: "01", title: "Architectural design", text: "Residential and commercial design development across concept, detailing, and execution-ready documentation." }, { n: "02", title: "BIM modeling & coordination", text: "Revit-based modeling and multidisciplinary coordination for architecture, civil, and MEP teams." }, { n: "03", title: "Construction documentation", text: "Detailed plans, sections, elevations, and shop drawings aligned with engineering and project standards." }, { n: "04", title: "Clash detection & 4D simulation", text: "Navisworks workflows that reduce design conflicts, improve sequencing, and support project scheduling." }, { n: "05", title: "3D visualization", text: "High-quality models and renderings using Lumion, Twinmotion, and D5 Render to communicate design intent clearly." }, { n: "06", title: "Project planning support", text: "Time management, coordination planning, and practical project delivery support for fast-moving teams." }].map((service) => <article key={service.n} className="border-b border-r border-brand-300 p-6 sm:p-8"><p className="eyebrow">{service.n}</p><h2 className="mt-20 text-3xl">{service.title}</h2><p className="mt-4 max-w-sm leading-7 text-brand-600">{service.text}</p></article>)}</div>
      </SectionWrapper>

      <SectionWrapper id="process" className="border-t border-brand-200">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Process</p><div className="space-y-6">{["Understand — establish the brief, constraints, and design priorities.", "Develop — create informed design studies, layouts, and model-based solutions.", "Coordinate — resolve interfaces, clashes, and multidisciplinary requirements.", "Deliver — package clear information to support confident project execution."].map((step) => <p key={step} className="border-b border-brand-300 pb-5 text-2xl font-serif">{step}</p>)}</div></div>
      </SectionWrapper>

      <SectionWrapper id="services-cta" className="border-t border-brand-200"><p className="eyebrow">Need a clear next step?</p><h2 className="mt-4 text-5xl sm:text-6xl">Let&apos;s talk scope.</h2><Link href="/contact" className="mt-8 inline-flex border border-brand-950 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-brand-950 hover:text-brand-100">Contact me →</Link>
      </SectionWrapper>
    </PageWrapper>
  );
}