import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/ui/PageWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "About",
  description: "Biography, BIM expertise, and professional background.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <SectionWrapper id="about-header" className="pb-20 pt-28">
        <p className="eyebrow">About / Profile</p>
        <h1 className="mt-5 max-w-4xl text-6xl leading-[0.92] sm:text-8xl">Designing the<br /><span className="ml-[10%]">bigger picture.</span></h1>
      </SectionWrapper>

      <SectionWrapper id="biography" className="grid gap-10 border-t border-brand-200 md:grid-cols-[1fr_2fr]">
        <p className="eyebrow">Profile</p>
        <div className="max-w-2xl space-y-6 text-lg leading-8 text-brand-700">
          <p>I am Abutalib Eldaw Elnour, an Architectural Designer and BIM Specialist based in Riyadh — Al Kharj, Saudi Arabia. My work sits at the intersection of creative design thinking, technical precision, and coordinated project delivery.</p>
          <p>With experience in architectural design, construction documentation, BIM modeling, and multidisciplinary coordination, I help teams turn complex project requirements into clear, buildable information across design and execution stages.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="bim-expertise" className="border-y border-brand-200">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Working method</p><div><h2 className="max-w-2xl text-4xl sm:text-5xl">Information is a design material.</h2><p className="mt-6 max-w-2xl leading-7 text-brand-600">I use BIM as a shared language between architectural intent, engineering constraints, and construction delivery. The result is a more coordinated project with fewer conflicts and stronger communication across disciplines.</p></div></div>
      </SectionWrapper>

      <SectionWrapper id="skills">
        <p className="eyebrow mb-8">Core competencies</p>
        <div className="grid border-l border-t border-brand-300 sm:grid-cols-2 lg:grid-cols-4">{["Architectural design", "BIM modeling", "Construction documentation", "Clash detection", "3D visualization", "Project scheduling", "MEP coordination", "AI design tools"].map((skill) => <div key={skill} className="border-b border-r border-brand-300 p-5 text-lg">{skill}</div>)}</div>
      </SectionWrapper>

      <SectionWrapper id="experience" className="border-t border-brand-200">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Experience</p><div className="space-y-8"><div className="border-b border-brand-300 pb-6"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-500">Architectural Designer | BIM Specialist</p><p className="mt-2 text-xl font-semibold">Al-Asdaf Al-Wardiya Contracting Est.</p><p className="mt-1 text-sm text-brand-600">Saudi Arabia</p><ul className="mt-5 list-disc space-y-3 pl-5 text-lg leading-7 text-brand-700"><li>Designed and developed residential and commercial architectural projects.</li><li>Produced detailed construction drawings in compliance with engineering standards.</li><li>Developed BIM models using Revit for design and execution phases.</li><li>Performed clash detection using Navisworks to reduce design conflicts.</li><li>Created high-quality 3D models and renderings with Lumion, Twinmotion, and D5 Render.</li><li>Coordinated with architectural, civil, and MEP teams to ensure design integration.</li></ul></div><div className="space-y-4"><p className="text-xl font-semibold">Selected project impact</p><ul className="list-disc space-y-3 pl-5 text-lg leading-7 text-brand-700"><li>King Salman Oasis — Riyadh</li><li>Royal Commission projects — Jubail & Yanbu</li><li>Improved workflow efficiency and supported on-time project delivery across large-scale public-sector work.</li></ul></div></div></div>
      </SectionWrapper>

      <SectionWrapper id="education" className="border-t border-brand-200">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Continuous learning</p><div className="space-y-4">{["Autodesk Certified Professional (Revit) — In progress", "Cert Prep: Revit for Architectural Design — LinkedIn Learning", "Architectural Revit Course — Edraak", "Architectural Revit Course — Maarif", "Architectural Revit Course — Horizon Engineering Training Gate"].map((item) => <p key={item} className="border-b border-brand-300 pb-4 text-lg">{item}</p>)}</div></div>
        <Link href="/contact" className="mt-12 inline-flex text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4">Work together →</Link>
      </SectionWrapper>
    </PageWrapper>
  );
}
