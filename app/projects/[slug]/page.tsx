import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

  const gallery = project.gallery ?? [];

  return (
    <PageWrapper>
      <SectionWrapper id="project-hero" className="pb-16 pt-28">
        <Link href="/projects" className="text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4">← All projects</Link>
        <div className="mt-16 flex items-end justify-between gap-8">
          <div><p className="eyebrow">Project {project.number} / {project.type}</p><h1 className="mt-5 max-w-4xl text-6xl leading-[0.92] sm:text-8xl">{project.title}</h1></div>
          <p className="hidden max-w-[12rem] text-right text-sm leading-6 text-brand-600 sm:block">{project.location}</p>
        </div>
      </SectionWrapper>

      {project.coverImage && <SectionWrapper id="project-cover" className="border-y border-brand-200"><div className="relative aspect-[16/9] w-full overflow-hidden"><Image src={project.coverImage} alt={project.title} fill sizes="100vw" className="object-cover" /></div></SectionWrapper>}

      <SectionWrapper id="project-info" className="grid gap-10 border-b border-brand-200 md:grid-cols-[1fr_2fr]">
        <p className="eyebrow">Project scope</p>
        <div className="grid gap-4 sm:grid-cols-2">{project.scope.map((item) => <p key={item} className="border-t border-brand-300 pt-3 text-lg">{item}</p>)}</div>
      </SectionWrapper>

      <SectionWrapper id="project-description" className="grid gap-8 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Overview</p><p className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">{project.summary}</p></SectionWrapper>

      <SectionWrapper id="project-gallery" className="border-t border-brand-200">
        <p className="eyebrow mb-8">Project files / visual record</p>
        {project.media?.length ? <div className="grid gap-6 md:grid-cols-2">{project.media.map((media) => <figure key={media.src} className="overflow-hidden border border-brand-300 bg-brand-100">{media.kind === "image" ? <Image src={media.src} alt={media.alt} width={1600} height={900} className="h-auto w-full object-cover" /> : <video controls preload="metadata" poster={media.poster} className="aspect-video w-full bg-brand-950"><source src={media.src} /></video>}<figcaption className="border-t border-brand-300 p-4 text-sm leading-6 text-brand-600">{media.caption}</figcaption></figure>)}</div> : gallery.length ? <div className="grid gap-px border border-brand-300 bg-brand-300 md:grid-cols-3">{gallery.map((src, index) => <div key={src} className="relative min-h-56 bg-brand-100"><Image src={src} alt={`${project.title} ${index + 1}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /></div>)}</div> : <div className="grid gap-px border border-brand-300 bg-brand-300 md:grid-cols-3">{["Design development", "Model coordination", "Delivery information"].map((item, index) => <div key={item} className="grid-paper min-h-56 bg-brand-100 p-5"><span className="font-serif text-4xl">0{index + 1}</span><span className="self-end text-sm">{item}</span></div>)}</div>}
      </SectionWrapper>

      <SectionWrapper id="project-nav" className="border-t border-brand-200"><div className="flex justify-between gap-6"><Link href="/projects" className="text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4">← Back to projects</Link><Link href={`/projects/${projects.find((item) => item.slug !== project.slug)?.slug}`} className="text-right text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4">Next project →</Link></div></SectionWrapper>
    </PageWrapper>
  );
}
