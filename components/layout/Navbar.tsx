"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between rounded-full border border-white/25 bg-slate-950/40 px-4 shadow-[0_0_30px_rgba(96,165,250,0.18)] backdrop-blur-xl sm:px-6"
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Abutalib Eldaw Elnour home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 text-sm font-semibold text-white">AE</span>
          <span className="hidden text-[0.7rem] font-medium uppercase tracking-[0.26em] text-white/80 sm:block">Abutalib Eldaw</span>
        </Link>

        <div className="ml-auto flex items-center justify-end">
          <DesktopLinks />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

function DesktopLinks() {
  return (
    <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/80 md:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/10 hover:text-white"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-lg text-white"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span className="leading-none">{open ? "×" : "☰"}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-4 right-4 top-20 rounded-3xl border border-white/20 bg-slate-950/75 p-5 shadow-[0_0_30px_rgba(15,23,42,0.7)] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}