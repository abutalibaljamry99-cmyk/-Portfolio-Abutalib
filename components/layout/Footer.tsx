import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-200 bg-brand-100">
      <div className="mx-auto flex max-w-content flex-col gap-8 py-10 container-px sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl">AE.</p>
          <p className="mt-2 text-sm text-brand-600">Architectural design / BIM coordination</p>
        </div>
        <div className="flex flex-col items-start gap-3 text-xs font-semibold uppercase tracking-[0.14em] sm:items-end">
          <Link href="mailto:ABUTALIBALJAMRY@GMAIL.COM" className="hover:underline">Email me</Link>
          <Link href="https://www.linkedin.com/in/abutalib-elnour-4919673b2/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn ↗</Link>
          <Link href="https://t.me/abutalib_eldaw" target="_blank" rel="noreferrer" className="hover:underline">Telegram ↗</Link>
          <p className="pt-3 font-normal tracking-normal text-brand-500">© {new Date().getFullYear()} Abutalib Eldaw Elnour</p>
        </div>
      </div>
    </footer>
  );
}