"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clientLogos } from "@/lib/data";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function LogoStrip() {
  return (
    <>
      {clientLogos.map((logo, i) => (
        <div
          key={`${logo.name}-${i}`}
          className="flex-shrink-0 mx-8 md:mx-12 group flex items-center justify-center"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={120}
            height={48}
            className="h-8 md:h-10 w-auto max-w-[120px] object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mix-blend-lighten"
            unoptimized
          />
        </div>
      ))}
    </>
  );
}

export default function ClientMarquee() {
  return (
    <section className="py-20 md:py-32 border-t border-b border-surface-border overflow-hidden">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12"
      >
        <motion.p
          variants={headerVariants}
          className="text-label-sm uppercase text-text-dim tracking-[0.2em] mb-3"
        >
          Trusted Partners
        </motion.p>
        <motion.h2
          variants={headerVariants}
          className="text-display-md text-gradient"
        >
          Brands scaling with our systems.
        </motion.h2>
      </motion.div>

      {/* Marquee Row 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <div className="flex items-center animate-marquee w-fit">
          <LogoStrip />
          <LogoStrip />
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <div className="flex items-center animate-marquee-reverse w-fit">
          <LogoStrip />
          <LogoStrip />
        </div>
      </div>
    </section>
  );
}
