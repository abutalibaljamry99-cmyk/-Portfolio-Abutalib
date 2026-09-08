import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageWrapper from "@/components/ui/PageWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { getProject, projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project?.title ?? "Project",
    description: project?.summary ?? "Architectural and BIM project detail.",
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <PageWrapper>
      <SectionWrapper id="project-hero" className="pb-16 pt-28">
        <Link href="/projects" className="text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4">← All projects</Link>
        <div className="mt-16 flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow">Project {project.number} / {project.type}</p>
            <h1 className="mt-5 max-w-4xl text-6xl leading-[0.92] sm:text-8xl">{project.title}</h1>
          </div>
          <p className="hidden max-w-[12rem] text-right text-sm leading-6 text-brand-600 sm:block">{project.location}</p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="project-cover" className="border-y border-brand-200">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
        </div>
      </SectionWrapper>

      <SectionWrapper id="project-info" className="grid gap-10 border-b border-brand-200 md:grid-cols-[1fr_2fr]">
        <p className="eyebrow">Project scope</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {project.scope.map((item) => <p key={item} className="border-t border-brand-300 pt-3 text-lg">{item}</p>)}
        </div>
      </SectionWrapper>

      <SectionWrapper id="project-description" className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <p className="eyebrow">Overview</p>
        <p className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">{project.summary}</p>
      </SectionWrapper>

      <SectionWrapper id="project-gallery" className="border-t border-brand-200">
        <p className="eyebrow mb-8">Gallery</p>
        <div className="grid gap-px border border-brand-300 bg-brand-300 md:grid-cols-3">
          {project.gallery.map((src, index) => (
            <div key={src} className="relative min-h-56 bg-brand-100">
              <Image src={src} alt={`${project.title} ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="project-nav" className="border-t border-brand-200">
        <div className="flex justify-between gap-6">
          <Link href="/projects" className="text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4">← Back to projects</Link>
          <Link href={`/projects/${projects.find((item) => item.slug !== project.slug)?.slug}`} className="text-right text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4">Next project →</Link>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
