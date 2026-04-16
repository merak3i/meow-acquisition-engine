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

// Base logo height — all image logos scale from this value
const BASE_REM = 3.75; // 2.5rem × 1.5 = 50 % bigger

function LogoStrip() {
  return (
    <>
      {clientLogos.map((logo, i) => {
        const scale    = ("scale"    in logo ? logo.scale    : 1)     as number;
        const hasBg    = "hasBg"    in logo && logo.hasBg;
        const noInvert = "noInvert" in logo && logo.noInvert;
        const isText   = "isText"   in logo && logo.isText;

        return (
          <div
            key={`${logo.name}-${i}`}
            className={`flex-shrink-0 mx-8 md:mx-12 group flex items-center justify-center h-16 ${
              hasBg ? "bg-white/10 rounded-md px-4 py-2" : ""
            }`}
          >
            {isText ? (
              /* ── Text wordmark (e.g. CanterClub) ── */
              <span
                className="font-semibold tracking-tight text-white opacity-40 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(73,197,182,0.7)] transition-all duration-500 whitespace-nowrap select-none"
                style={{ fontSize: "2rem", letterSpacing: "-0.04em" }}
              >
                {logo.name}
              </span>
            ) : (
              /* ── Image logo ── */
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={64}
                className={`w-auto max-w-[160px] object-contain grayscale opacity-40 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(73,197,182,0.7)] transition-all duration-500${noInvert ? "" : " invert"}`}
                style={{ height: `${scale * BASE_REM}rem` }}
                unoptimized
              />
            )}
          </div>
        );
      })}
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

      {/* Single marquee row — right to left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <div className="flex items-center animate-marquee w-fit">
          <LogoStrip />
          <LogoStrip />
        </div>
      </div>
    </section>
  );
}
