# Meow Creative Haus 2.0

Redesigned marketing website for Meow Creative Haus -- an AI-driven revenue engineering studio. Dark editorial aesthetic with smooth scrolling, client marquee, and live Substack newsletter feed.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS 3.4
- Framer Motion 11
- Lenis (smooth scrolling)
- fast-xml-parser (Substack RSS parsing)

## Sections

- **Navigation** -- Fixed top bar with `mix-blend-difference` effect, animated mobile menu
- **Hero** -- Word-by-word spring animation headline, dual CTAs (Calendly + offers anchor), scroll indicator
- **Client Marquee** -- Infinite horizontal scroll of 13 client logos (Manipal Aerosports, Resonance Security, BlackFrog, BergLabs.ai, JB & Co, etc.)
- **Offers** -- 4 service cards: Strategic GTM, Performance Marketing, AI Workflow Automation, Account-Based Marketing
- **Authority** -- Founder bio (Vismay Hegde) with avatar and LinkedIn CTA
- **Substack Feed** -- Server-side RSS fetch from `impostersyndromeenjoyer.substack.com`, rendered as article cards
- **Footer** -- Social links, email CTA, Calendly booking

## External integrations

- **Substack RSS**: `impostersyndromeenjoyer.substack.com/feed` (server-side, revalidated hourly)
- **Calendly**: calendly.com/mewdiaservice/30min
- **Lovable CDN**: Client logos hosted at meowcreativehaus.lovable.app


