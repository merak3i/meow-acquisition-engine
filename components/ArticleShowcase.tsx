"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredArticles, type FeaturedArticle } from "@/lib/data";

// ─── Animation ──────────────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Niche filters ───────────────────────────────────────────────────────────

const NICHES = [
  { key: "all",          label: "All"              },
  { key: "security",     label: "Cybersecurity"    },
  { key: "blockchain",   label: "Blockchain · RWA" },
  { key: "industrial-ai",label: "Industrial AI"    },
];

// ─── Platform badge ───────────────────────────────────────────────────────────

const PLATFORM_STYLES: Record<FeaturedArticle["platform"], string> = {
  blog:     "border-accent-teal    text-accent-teal",
  medium:   "border-green-500/60   text-green-400",
  linkedin: "border-blue-500/60    text-blue-400",
};

const PLATFORM_LABELS: Record<FeaturedArticle["platform"], string> = {
  blog:     "Blog",
  medium:   "Medium",
  linkedin: "LinkedIn",
};

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: FeaturedArticle }) {
  return (
    <motion.a
      variants={fadeUp}
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col border border-surface-border bg-surface-elevated hover:border-accent-teal/40 transition-colors duration-300"
    >
      {/* Cover */}
      <div className="relative aspect-video overflow-hidden bg-neutral-900">
        <img
          src={article.coverImage}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Platform badge */}
        <span className={`absolute top-2 right-2 text-[9px] uppercase tracking-widest border px-2 py-0.5 bg-surface/80 backdrop-blur-sm ${PLATFORM_STYLES[article.platform]}`}>
          {PLATFORM_LABELS[article.platform]}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Niche badge */}
        <span className="text-[9px] uppercase tracking-[0.18em] text-accent-teal">
          {article.nicheLabel}
        </span>

        {/* Title */}
        <h3 className="text-sm font-semibold text-text leading-snug group-hover:text-accent-teal transition-colors duration-300 line-clamp-3">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[11px] text-text-dim leading-relaxed line-clamp-2 flex-1">
          {article.excerpt}
        </p>

        {/* Footer: client + read link */}
        <div className="flex items-center justify-between gap-2 mt-1 pt-3 border-t border-surface-border">
          <div className="flex items-center gap-2 min-w-0">
            {article.clientLogo ? (
              <img
                src={article.clientLogo}
                alt={article.client}
                className="h-4 w-auto max-w-[60px] object-contain opacity-70"
              />
            ) : null}
            <span className="text-[10px] text-text-dim truncate">{article.client}</span>
          </div>
          <span className="shrink-0 flex items-center gap-1 text-[10px] text-accent-teal uppercase tracking-wider">
            Read <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function ArticleShowcase() {
  const [activeNiche, setActiveNiche] = useState("all");

  const filtered = useMemo(
    () =>
      activeNiche === "all"
        ? featuredArticles
        : featuredArticles.filter((a) => a.niche === activeNiche),
    [activeNiche],
  );

  return (
    <section id="articles" className="py-24 md:py-40 border-t border-surface-border">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <motion.p variants={fadeUp} className="text-label-sm uppercase text-accent-teal tracking-[0.2em] mb-3">
            Content & Publishing
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-display-lg max-w-[760px] mb-4">
            Words that{" "}
            <span className="text-gradient-accent">move markets.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body-md text-text-muted max-w-[520px] mb-8">
            Strategy-first content across security, blockchain, and industrial AI.
            Articles built for the audience that actually buys.
          </motion.p>

          {/* Filter pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {NICHES.map((n) => (
              <button
                key={n.key}
                onClick={() => setActiveNiche(n.key)}
                className={[
                  "text-label-sm px-4 py-1.5 border transition-all duration-300",
                  activeNiche === n.key
                    ? "border-accent-teal text-accent-teal bg-accent-teal/5"
                    : "border-surface-border text-text-dim hover:border-text-dim hover:text-text",
                ].join(" ")}
              >
                {n.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          key={activeNiche}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-border"
        >
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
