"use client";

import { motion } from "framer-motion";
import { pageVariants } from "@/lib/motion";

type PageWrapperProps = {
  children?: React.ReactNode;
  className?: string;
};

/**
 * PageWrapper
 * ------------
 * Wraps every page with a Framer Motion entry animation.
 * Apply consistent page-level fade + slide transitions here.
 *
 * Usage:
 *   <PageWrapper>
 *     <SectionWrapper>...</SectionWrapper>
 *   </PageWrapper>
 */
export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`pt-16 ${className}`}
    >
      {children}
    </motion.div>
  );
}