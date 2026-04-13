# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

## [1.2.0] - 2026-04-14

### Added
- `components/VideoShowcase.tsx` — new **Video & Media Production** carousel section on `/lab` page
  - 6 client videos across three tagged categories: `Video Marketing`, `AI Model`, `AI Podcast`
  - Sub-section card selector UI: four interactive cards (All Formats / Video Marketing / AI Model / AI Podcast) each with eyebrow, label, descriptor, and active top-bar indicator
  - `AnimatePresence`-driven body copy that swaps in on category change
  - FocusRail 3D landscape carousel wired to active filter; `key` prop forces remount + index reset on switch
  - Inline YouTube nocookie embed on center-card click; fallback to `hqdefault.jpg` thumbnail on `maxresdefault` 404
- `lib/data.ts` — `ClientVideo` type and `clientVideos` array
  - Active Power × 2 (`kkSUicrnRHM`, `2HWmE4hRqR4`) tagged `Video Marketing`
  - Asset Mantle × 1 (`5CYGxM9emo4`) tagged `AI Model`
  - Ingrained Logic × 1 (`gBlE3XpGmwU`) tagged `Video Marketing`
  - Mantle Works × 2 (`--3EhPjznAg`, `WroSa1eiUbU`) tagged `AI Podcast`

### Changed
- `components/LabPage.tsx` — import and mount `<VideoShowcase />` after `<ClientWebsites />`
- `lib/data.ts` — Manipal Aerosports screenshot upgraded to 16:9 crop (`width/1200/crop/675`) for cinematic hero framing
- `lib/data.ts` — JB & Co Law screenshot upgraded to taller crop (`width/1200/crop/840`) to expose more above-the-fold content
- `VideoShowcase` section copy: headline *"Content at every frequency."*, premium sub-section descriptors, CTA copy *"Get a production brief →"*

## [1.1.0] - 2026-04-09

### Removed
- `components/ui/hero-shutter-text.tsx` — never imported after initial scaffold; only consumer of `lucide-react`

### Changed
- Enable `noUnusedLocals` and `noUnusedParameters` in `tsconfig.json` for build-time dead code enforcement

### Added
- `CHANGELOG.md` — project history in Keep a Changelog format
- `ROLLBACK.md` — documented rollback strategies for Vercel and git
- `db/` — forward-looking migration scaffolding (Supabase/PostgreSQL)
  - `db/migrations/0001_initial_schema.sql` — contacts + waitlist tables
  - `db/migrations/0002_leads_crm.sql` — leads table for acquisition funnel
  - `db/migrate.sh` — idempotent migration runner
  - `db/README.md` — migration workflow documentation

## [1.0.0] - 2026-04-07

### Added
- Comprehensive README with project documentation and deployment guide

### Changed
- Previous README replaced with full project overview

## [0.4.0] - 2026-03-05

### Added
- BergLabs.ai logo to client marquee
- Teal glow effect on logo hover

### Changed
- Logo marquee simplified to single row, right-to-left direction
- Increased logo sizes for Manipal Aerosports and Active Power (1.8×)
- Increased logo sizes for Asset Mantle and Mantle Works (1.4×); added background for Mantle Works

## [0.3.0] - 2026-02-27

### Added
- GitHub link in footer and mobile navigation

### Changed
- GitHub link updated to `merak3i`
- Logo marquee invert filter applied to remove white backgrounds

## [0.2.0] - 2026-02-25

### Added
- Vismay avatar in Authority section
- BackgroundPaths, GradientButton UI components from 21st.dev

### Changed
- Hero shutter text removed; scroll indicator repositioned to right-center
- Logo marquee fixed

## [0.1.0] - 2026-02-25

### Added
- Initial commit: Next.js 14 acquisition engine site
- Hero, Navigation, Footer, Offers, ClientMarquee, Authority, SubstackFeed sections
- `lib/data.ts` — siteConfig, clientLogos, offers, Substack feed fetcher
