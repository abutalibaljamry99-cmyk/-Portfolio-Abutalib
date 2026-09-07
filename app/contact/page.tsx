import type { Metadata } from "next";
import PageWrapper from "@/components/ui/PageWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for architectural design and BIM projects.",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <SectionWrapper id="contact-header" className="pb-16 pt-28"><p className="eyebrow">Contact / Let&apos;s connect</p><h1 className="mt-5 max-w-4xl text-6xl leading-[0.92] sm:text-8xl">Bring a good<br /><span className="ml-[10%]">question.</span></h1><p className="mt-8 max-w-md leading-7 text-brand-600">For project enquiries, collaborations, or a conversation about architectural design and BIM, send a note.</p>
      </SectionWrapper>

      <SectionWrapper id="contact-form" className="grid gap-12 border-t border-brand-200 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Send an enquiry</p><form action="mailto:ABUTALIBALJAMRY@GMAIL.COM" method="post" encType="text/plain" className="space-y-6"><label className="block"><span className="eyebrow">Name</span><input name="name" required className="mt-2 w-full border-b border-brand-400 bg-transparent py-3 outline-none focus:border-brand-950" /></label><label className="block"><span className="eyebrow">Email</span><input name="email" type="email" required className="mt-2 w-full border-b border-brand-400 bg-transparent py-3 outline-none focus:border-brand-950" /></label><label className="block"><span className="eyebrow">Project details</span><textarea name="message" required rows={5} className="mt-2 w-full resize-y border-b border-brand-400 bg-transparent py-3 outline-none focus:border-brand-950" /></label><button type="submit" className="border border-brand-950 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-brand-950 hover:text-brand-100">Send message →</button></form>
      </SectionWrapper>

      <SectionWrapper id="contact-details" className="grid gap-8 border-t border-brand-200 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Details</p><div className="grid gap-6 sm:grid-cols-4"><div><p className="eyebrow">Email</p><a href="mailto:ABUTALIBALJAMRY@GMAIL.COM" className="mt-2 block text-sm underline underline-offset-4">ABUTALIBALJAMRY@GMAIL.COM</a></div><div><p className="eyebrow">Phone</p><p className="mt-2 text-sm">+966 573918894</p></div><div><p className="eyebrow">LinkedIn</p><a href="https://www.linkedin.com/in/abutalib-elnour-4919673b2/" target="_blank" rel="noreferrer" className="mt-2 block text-sm underline underline-offset-4">abutalib-elnour</a></div><div><p className="eyebrow">Telegram</p><a href="https://t.me/abutalib_eldaw" target="_blank" rel="noreferrer" className="mt-2 block text-sm underline underline-offset-4">@abutalib_eldaw</a></div></div>
      </SectionWrapper>
    </PageWrapper>
  );
}