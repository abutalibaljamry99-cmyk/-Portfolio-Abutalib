import type { Metadata } from "next";
import PageWrapper from "@/components/ui/PageWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Architectural and BIM project portfolio.",
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <SectionWrapper id="projects-header" className="pb-16 pt-28">
        <p className="eyebrow">Selected projects</p>
        <h1 className="mt-5 max-w-4xl text-6xl leading-[0.92] sm:text-8xl">Work that<br /><span className="ml-[10%]">holds up.</span></h1>
      </SectionWrapper>
      <SectionWrapper id="projects-grid" className="border-t border-brand-200">
        <div className="grid gap-px border border-brand-300 bg-brand-300 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group relative min-h-[28rem] overflow-hidden bg-brand-100 p-6 transition-colors sm:p-8">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="absolute inset-0 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-30"
              />
              <div className="relative flex items-start justify-between">
                <span className="font-serif text-5xl">{project.number}</span>
                <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
              <div className="relative mt-32">
                <p className="eyebrow group-hover:text-brand-400">{project.location} / {project.type}</p>
                <h2 className="mt-3 text-4xl">{project.title}</h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-brand-600 group-hover:text-brand-300">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
