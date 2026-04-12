"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { aiCampaigns, type AICampaign } from "@/lib/data";

// ─── Animation variants ────────────────────────────────────────────────────
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Niche filter pills ────────────────────────────────────────────────────
const NICHES = [
  { key: "all",        label: "All"           },
  { key: "blockchain", label: "Blockchain"    },
  { key: "fitness",    label: "Fitness"       },
  { key: "security",   label: "Cybersecurity" },
];

// ─── VideoCard ─────────────────────────────────────────────────────────────
// Lazy YouTube embed: only loads iframe when the user clicks play.
// Thumbnail served from YouTube's CDN (i.ytimg.com) — zero cost to you.
// Uses youtube-nocookie.com domain to block tracking cookies.

function VideoCard({ campaign }: { campaign: AICampaign }) {
  const [playing, setPlaying] = useState(false);

  const isPlaceholder = campaign.videoId.startsWith("PLACEHOLDER");

  const thumbSrc = isPlaceholder
    ? null
    : `https://i.ytimg.com/vi/${campaign.videoId}/maxresdefault.jpg`;

  const handlePlay = useCallback(() => {
    if (!isPlaceholder) setPlaying(true);
  }, [isPlaceholder]);

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col border border-surface-border bg-surface-elevated hover:border-text-dim transition-all duration-500"
    >
      {/* Hover accent line */}
      <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent-teal group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

      {/* Video area — 16:9 aspect ratio */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${campaign.videoId}?autoplay=1&rel=0&modestbranding=1&color=white`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={campaign.title}
          />
        ) : (
          <button
            onClick={handlePlay}
            aria-label={`Play ${campaign.title}`}
            className="absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
          >
            {/* Thumbnail */}
            {thumbSrc ? (
              <img
                src={thumbSrc}
                alt={campaign.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if maxresdefault doesn't exist
                  (e.currentTarget as HTMLImageElement).src =
                    `https://i.ytimg.com/vi/${campaign.videoId}/hqdefault.jpg`;
                }}
              />
            ) : (
              // Placeholder state — no real video yet
              <div className="w-full h-full bg-surface flex flex-col items-center justify-center gap-2 border border-dashed border-surface-border">
                <span className="text-text-dim text-xs uppercase tracking-widest">
                  Video coming soon
                </span>
                <span className="text-[10px] text-text-dim opacity-50">
                  {campaign.client}
                </span>
              </div>
            )}

            {/* Dark gradient overlay */}
            {thumbSrc && (
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/20 to-transparent" />
            )}

            {/* Play button */}
            {!isPlaceholder && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-surface/80 border border-surface-border flex items-center justify-center group-hover:scale-110 group-hover:border-accent-teal transition-all duration-300 backdrop-blur-sm">
                  {/* Triangle */}
                  <div
                    className="ml-1"
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "8px solid transparent",
                      borderBottom: "8px solid transparent",
                      borderLeft: "14px solid #f5f5f5",
                    }}
                  />
                </div>
              </div>
            )}
          </button>
        )}
      </div>

      {/* Card meta */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] uppercase tracking-widest text-accent-teal border border-accent-teal/30 px-2 py-0.5">
            {campaign.client}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-accent-gold border border-accent-gold/20 px-2 py-0.5">
            {campaign.nicheLabel}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-text leading-snug">{campaign.title}</h3>
        <p className="text-xs text-text-muted leading-relaxed">{campaign.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────

export default function AIModelsShowcase() {
  const [activeNiche, setActiveNiche] = useState<string>("all");

  const filtered =
    activeNiche === "all"
      ? aiCampaigns
      : aiCampaigns.filter((c) => c.niche === activeNiche);

  return (
    <section id="ai-models" className="py-24 md:py-40 px-6 md:px-12 border-t border-surface-border">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[1400px] mx-auto"
      >
        {/* Header */}
        <motion.p
          variants={fadeUp}
          className="text-label-sm uppercase text-accent-teal tracking-[0.2em] mb-3"
        >
          AI Media
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-display-lg max-w-[760px] mb-4">
          The next medium{" "}
          <span className="text-gradient-accent">doesn&apos;t need a camera.</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-body-md text-text-muted max-w-[560px] mb-10"
        >
          Synthetic AI presenters. No studio. No shoot days. No casting.
          Every brand voice, rendered on demand — and indistinguishable from the real thing.
          This is how the next decade of advertising gets made.
        </motion.p>

        {/* Niche filter pills */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-12">
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

        {/* Video grid — swap this wrapper for a 21st.dev carousel component later */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {(filtered as readonly AICampaign[]).map((campaign) => (
            <VideoCard key={campaign.videoId} campaign={campaign} />
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-body-md text-text-muted max-w-[420px]">
            Want AI media for your brand? We&apos;ll build the model, write the script, and ship the campaign.
          </p>
          <a
            href="mailto:mewdiaservice@gmail.com"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-accent-teal text-surface text-label-sm uppercase tracking-wider hover:bg-accent-teal/90 transition-colors duration-300"
          >
            Start a campaign →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
