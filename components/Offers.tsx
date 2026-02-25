"use client";

import { motion } from "framer-motion";
import { offers } from "@/lib/data";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Offers() {
  return (
    <section id="offers" className="py-24 md:py-40 px-6 md:px-12">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto"
      >
        <motion.p
          variants={headerVariants}
          className="text-label-sm uppercase text-accent-teal tracking-[0.2em] mb-3"
        >
          What We Build
        </motion.p>
        <motion.h2
          variants={headerVariants}
          className="text-display-lg max-w-[800px] mb-20"
        >
          We Don&apos;t Do &ldquo;Branding.&rdquo;{" "}
          <span className="text-gradient-accent">
            We Build Acquisition Engines.
          </span>
        </motion.h2>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.index}
              variants={cardVariants}
              className={`group relative p-8 md:p-10 border border-surface-border bg-surface-elevated hover:border-text-dim transition-all duration-500 ${
                i === 0 ? "md:row-span-2 md:flex md:flex-col md:justify-between md:min-h-[400px]" : ""
              }`}
            >
              {/* Hover accent line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent-teal group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

              <div>
                <span className="text-label-sm text-text-dim block mb-6">
                  {offer.index}
                </span>
                <h3 className="text-display-md mb-4 group-hover:text-accent-teal transition-colors duration-300">
                  {offer.title}
                </h3>
              </div>
              <p className="text-body-md text-text-muted">
                {offer.description}
              </p>

              {/* Corner arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-accent-teal"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
