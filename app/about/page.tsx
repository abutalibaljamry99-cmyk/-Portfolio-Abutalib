import type { Metadata } from "next";
import Image from "next/image";
import PageWrapper from "@/components/ui/PageWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Biography, BIM expertise, and professional background.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <SectionWrapper id="about-header" className="pb-20 pt-28">
        <p className="eyebrow">About / Profile</p>
        <h1 className="mt-5 max-w-4xl text-6xl leading-[0.92] sm:text-8xl">
          Designing the<br /><span className="ml-[10%]">bigger picture.</span>
        </h1>
      </SectionWrapper>

      <SectionWrapper id="profile-image" className="pb-20">
        <div className="flex justify-center">
          <Image
            src="/images/profile.jpg"
            alt="Abutalib Eldaw Elnour - Architectural Designer and BIM Specialist"
            width={400}
            height={600}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </SectionWrapper>

      <SectionWrapper id="biography" className="grid gap-10 border-t border-brand-200 md:grid-cols-[1fr_2fr]">
        <p className="eyebrow">Profile</p><div className="max-w-2xl space-y-6 text-lg leading-8 text-brand-700"><p>I am Abutalib Eldaw Elnour, an Architectural Designer and BIM Specialist based in[...]
      </SectionWrapper>

      <SectionWrapper id="bim-expertise" className="border-y border-brand-200">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Working method</p><div><h2 className="max-w-2xl text-4xl sm:text-5xl">Information is a design material.</h2><p cla[...]
      </SectionWrapper>

      <SectionWrapper id="skills">
        <p className="eyebrow mb-8">Core competencies</p><div className="grid border-l border-t border-brand-300 sm:grid-cols-2 lg:grid-cols-4">{["Architectural design", "BIM modeling", "Construct[...]
      </SectionWrapper>

      <SectionWrapper id="experience" className="border-t border-brand-200">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Experience</p><div className="space-y-8"><div className="border-b border-brand-300 pb-6"><p className="text-xs fon[...]
      </SectionWrapper>

      <SectionWrapper id="education" className="border-t border-brand-200">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Continuous learning</p><div className="space-y-4">{["Autodesk Certified Professional (Revit) — In progress", "Ce[...]
      </SectionWrapper>
    </PageWrapper>
  );
}
