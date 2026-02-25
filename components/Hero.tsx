"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const headlineWords = "Stop Burning Cash on Marketing That Doesn't Convert.".split(" ");

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { y: 80, opacity: 0, rotateX: -40 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[20%] top-0 bottom-0 w-px bg-surface-border opacity-40" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-surface-border opacity-40" />
        <div className="absolute left-[80%] top-0 bottom-0 w-px bg-surface-border opacity-40" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-label-sm uppercase text-accent-teal tracking-[0.2em] mb-8"
        >
          Revenue Engineering Studio
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-display-xl max-w-[900px] mb-8 [perspective:1000px]"
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.3em] origin-bottom"
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-body-lg text-text-muted max-w-[620px] mb-12"
        >
          We engineer AI-driven B2B & B2C acquisition systems that turn
          strangers into booked calls and locked Annual Recurring Revenue.
          Predictable growth. Zero BS.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-text text-surface font-medium text-sm uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="relative z-10">Scale Your Revenue Today</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
            <div className="absolute inset-0 bg-accent-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </a>

          <a
            href="#offers"
            className="inline-flex items-center gap-3 px-8 py-4 border border-surface-border text-text-muted font-medium text-sm uppercase tracking-widest hover:border-text-dim hover:text-text transition-all duration-300"
          >
            See Our Systems
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3"
        >
          <div className="w-px h-12 bg-text-dim relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-accent-teal"
            />
          </div>
          <span className="text-label-sm text-text-dim uppercase tracking-widest">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
