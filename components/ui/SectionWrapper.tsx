"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/motion";

type SectionWrapperProps = {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  /** Delay before this section animates in (seconds) */
  delay?: number;
};

/**
 * SectionWrapper
 * ---------------
 * Reusable section container with scroll-triggered fade-in animation.
 * Provides consistent vertical padding (section-gap) and max-width centering.
 *
 * Usage:
 *   <SectionWrapper id="hero" className="min-h-screen">
 *     {content}
 *   </SectionWrapper>
 */
export default function SectionWrapper({
  children,
  id,
  className = "",
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`section-gap container-px max-w-content mx-auto w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}