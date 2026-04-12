export const siteConfig = {
  name: "Meow Creative Haus",
  email: "mewdiaservice@gmail.com",
  calendly: "https://calendly.com/mewdiaservice/30min",
  social: {
    instagram: "https://www.instagram.com/m3ow.ai/",
    linkedinCompany:
      "https://www.linkedin.com/company/105362259/admin/dashboard/",
    linkedinPersonal: "https://www.linkedin.com/in/vismay-h-b9a89a81gde/",
    linktree: "https://linktr.ee/vismay9",
    twitter: "https://x.com/m3ow_ai",
    github: "https://github.com/merak3i",
  },
} as const;

export const clientLogos = [
  {
    name: "Manipal Aerosports",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/2ab5b161-6bee-476d-87ba-767c24bb9168.png",
    scale: 1.8,
  },
  {
    name: "Resonance Security",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/resonance-security-new.svg",
  },
  {
    name: "Active Power",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/69925ab5-3c33-482a-9561-5eb05acbc182.png",
    scale: 1.8,
  },
  {
    name: "Asset Mantle",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/229aac74-3415-4b4d-8638-01cde5697f70.png",
    scale: 1.4,
  },
  {
    name: "Ingrained Logic",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/0999c1f8-5124-43bc-a51a-af2cd02d5967.png",
  },
  {
    name: "Coastal Karnataka Sailing Club",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/b0883064-dd0a-456f-b051-0af15c5a9ea4.png",
  },
  {
    name: "Stroi Analytics",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/439e62ad-6f38-4c3d-9eca-38def3ad2118.png",
  },
  {
    name: "Mantle Works",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/1af13004-dd8f-444c-a10b-c5a2573ab542.png",
    scale: 1.4,
    hasBg: true,
  },
  {
    name: "JB & Co",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/jb-co-logo.png",
  },
  {
    name: "Precision Electrical Works",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/precision-electrical-works.png",
  },
  {
    name: "BlackFrog",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/blackfrog-logo.png",
  },
  {
    name: "Rhyth Jain",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/rhyth-jain-logo.png",
  },
  {
    name: "BergLabs.ai",
    src: "/berg-logo.svg",
  },
] as const;

export const offers = [
  {
    title: "Strategic GTM",
    description:
      "We map the exact path from zero to market dominance.",
    index: "01",
  },
  {
    title: "Performance Marketing",
    description:
      "Precision campaigns optimized for lowest CAC and highest LTV.",
    index: "02",
  },
  {
    title: "AI Workflow Automation",
    description:
      "Scaling your output while slashing operational overhead.",
    index: "03",
  },
  {
    title: "Account-Based Marketing",
    description:
      "Sniper-targeted outreach to close enterprise whales.",
    index: "04",
  },
] as const;

export const openSourceProjects = [
  {
    name: "Meow Operations",
    slug: "meow-ops",
    tagline: "Know what your AI agents actually cost.",
    description:
      "Local-first token analytics dashboard for Claude Code, Cursor, Aider and Codex. Wall-clock Gantt chart for agent runs, 30+ model pricing, and a 3D companion cat that evolves from your coding patterns.",
    stats: ["30+ models", "4 AI tools", "MIT license", "3D companion"],
    github: "https://github.com/merak3i/meow-ops",
    demo: process.env.NEXT_PUBLIC_DEMO_URL ?? "",
    status: "live",
  },
] as const;

export const aiCampaigns = [
  {
    client: "Asset Mantle",
    niche: "blockchain",
    nicheLabel: "Blockchain · Web3",
    videoId: "PLACEHOLDER_AM",
    title: "AI spokesperson for NFT launchpad",
    description: "Synthetic presenter delivering product narrative to Web3 founders at scale.",
  },
  {
    client: "Active Power",
    niche: "fitness",
    nicheLabel: "Fitness · Performance",
    videoId: "PLACEHOLDER_AP",
    title: "AI brand ambassador for supplement launch",
    description: "Custom AI model carrying campaign messaging without a studio or shoot day.",
  },
  {
    client: "Resonance Security",
    niche: "security",
    nicheLabel: "Cybersecurity",
    videoId: "PLACEHOLDER_RS",
    title: "Threat advisory AI presenter",
    description: "Authoritative AI voice used for security awareness content across channels.",
  },
] as const;

export type AICampaign = (typeof aiCampaigns)[number];

// ─── Logos (shared across article + website sections) ─────────────────────────

const LOGOS = {
  resonanceSecurity: "https://meowcreativehaus.lovable.app/lovable-uploads/resonance-security-new.svg",
  assetMantle:       "https://meowcreativehaus.lovable.app/lovable-uploads/229aac74-3415-4b4d-8638-01cde5697f70.png",
  stroiAnalytics:    "https://meowcreativehaus.lovable.app/lovable-uploads/439e62ad-6f38-4c3d-9eca-38def3ad2118.png",
  activePower:       "https://meowcreativehaus.lovable.app/lovable-uploads/69925ab5-3c33-482a-9561-5eb05acbc182.png",
  mantleWorks:       "https://meowcreativehaus.lovable.app/lovable-uploads/1af13004-dd8f-444c-a10b-c5a2573ab542.png",
  manipalAerosports: "https://meowcreativehaus.lovable.app/lovable-uploads/2ab5b161-6bee-476d-87ba-767c24bb9168.png",
};

// ─── Featured Articles ────────────────────────────────────────────────────────

export const featuredArticles = [
  // ── Resonance Security ────────────────────────────────────────────────────
  {
    id: "rs-1",
    title: "The Pornhub x Mixpanel Breach",
    excerpt: "A forensics deep dive — what happens when third-party analytics scripts become the attack surface.",
    client: "Resonance Security",
    clientLogo: LOGOS.resonanceSecurity,
    niche: "security",
    nicheLabel: "Cybersecurity",
    platform: "blog" as const,
    href: "https://www.resonance.security/blog-posts/the-pornhub-x-mixpanel-breach",
    coverImage: "https://cdn.prod.website-files.com/655193402606af8e0573624c/695e429ac09f3051429869f5_chrome_R8nhAg8Xmy.png",
  },
  {
    id: "rs-2",
    title: "AI-Powered Phishing: How Machines Weaponized Human Psychology",
    excerpt: "LLMs lowered the barrier to craft convincing spear-phishing at unprecedented scale.",
    client: "Resonance Security",
    clientLogo: LOGOS.resonanceSecurity,
    niche: "security",
    nicheLabel: "Cybersecurity",
    platform: "blog" as const,
    href: "https://www.resonance.security/blog-posts/ai-powered-phishing-how-machines-weaponized-human-psychology",
    coverImage: "https://cdn.prod.website-files.com/655193402606af8e0573624c/68fb7845dee02ec742958147_iScreen%20Shoter%20-%20Google%20Chrome%20-%20251024145901.png",
  },
  // ── Asset Mantle ──────────────────────────────────────────────────────────
  {
    id: "am-1",
    title: "AssetMantle 2025: The Blueprint for Institutional-Grade Assetization",
    excerpt: "The roadmap for bringing institutional capital into the on-chain asset economy.",
    client: "Asset Mantle",
    clientLogo: LOGOS.assetMantle,
    niche: "blockchain",
    nicheLabel: "Blockchain · RWA",
    platform: "medium" as const,
    href: "https://assetmantle.medium.com/assetmantle-2025-the-blueprint-for-institutional-grade-assetization-c167788348a7",
    coverImage: "https://miro.medium.com/v2/resize:fit:1024/0*GB6AGK7Vry1pX-Q9.png",
  },
  {
    id: "am-2",
    title: "The Regulatory Race: How Compliance Laws Are Shaping the Future of Tokenized Assets",
    excerpt: "MiCA, SEC enforcement, and the compliance race shaping who wins in tokenized real-world assets.",
    client: "Asset Mantle",
    clientLogo: LOGOS.assetMantle,
    niche: "blockchain",
    nicheLabel: "Blockchain · RWA",
    platform: "medium" as const,
    href: "https://assetmantle.medium.com/the-regulatory-race-how-compliance-laws-are-shaping-the-future-of-tokenized-assets-rwa-ba7e6020ad6d",
    coverImage: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*SUIPlm4BovAtp4yw",
  },
  {
    id: "am-3",
    title: "The Cost of What We Can't Measure",
    excerpt: "Why the metrics that matter most in tokenization don't show up on any dashboard.",
    client: "Asset Mantle",
    clientLogo: LOGOS.assetMantle,
    niche: "blockchain",
    nicheLabel: "Blockchain · RWA",
    platform: "medium" as const,
    href: "https://assetmantle.medium.com/the-cost-of-what-we-cant-measure-88a6a1a268de",
    coverImage: "https://miro.medium.com/v2/resize:fit:1200/1*fgos39fREDz0UGCrdASwWA.jpeg",
  },
  {
    id: "am-4",
    title: "The Assetization of Industries: A Multi-Sectoral Analysis",
    excerpt: "How blockchain tokenization applies across real estate, supply chains, art, and energy.",
    client: "Asset Mantle",
    clientLogo: LOGOS.assetMantle,
    niche: "blockchain",
    nicheLabel: "Blockchain · RWA",
    platform: "medium" as const,
    href: "https://assetmantle.medium.com/the-assetization-of-industries-a-multi-sectoral-analysis-anchored-in-blockchain-tokenization-85b561ed8e9c",
    coverImage: "https://miro.medium.com/v2/resize:fit:1200/1*en5VHM9trxAiU18hohCdwg.png",
  },
  {
    id: "am-5",
    title: "What the Trump Presidency Means for Crypto: A Paradigm Shift",
    excerpt: "The policy pivot that changed crypto's regulatory outlook — and what founders should do now.",
    client: "Asset Mantle",
    clientLogo: LOGOS.assetMantle,
    niche: "blockchain",
    nicheLabel: "Blockchain · RWA",
    platform: "medium" as const,
    href: "https://assetmantle.medium.com/what-the-trump-presidency-means-for-crypto-a-paradigm-shift-09a1a0663e5a",
    coverImage: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*5-6gMx3_yun6xM9i",
  },
  // ── Stroi Analytics ───────────────────────────────────────────────────────
  {
    id: "stroi-1",
    title: "AI-Backed Industrial Analytics: From Origins to Intelligent Industry",
    excerpt: "From basic SCADA to AI-driven predictive intelligence — the full arc of industrial analytics.",
    client: "Stroi Analytics",
    clientLogo: LOGOS.stroiAnalytics,
    niche: "industrial-ai",
    nicheLabel: "Industrial AI",
    platform: "linkedin" as const,
    href: "https://www.linkedin.com/pulse/ai-backed-industrial-analytics-from-origins-intelligent-d5e3c/",
    coverImage: "https://media.licdn.com/dms/image/v2/D5612AQHwRDm0fxtmCg/article-cover_image-shrink_720_1280/B56Zd9ueoYGoAM-/0/1750161033717?e=2147483647&v=beta&t=DbNR_DKCLcy8TvztfUtwDLGRPh3ka3vDyDfP4VKHMxo",
  },
  // ── Active Power ──────────────────────────────────────────────────────────
  {
    id: "ap-1",
    title: "Beyond Task Execution: How RPA Evolved Into the Backbone of Intelligent Industrial Operations",
    excerpt: "How RPA went from simple task bots to the connective layer in intelligent manufacturing.",
    client: "Active Power",
    clientLogo: LOGOS.activePower,
    niche: "industrial-ai",
    nicheLabel: "Industrial AI",
    platform: "linkedin" as const,
    href: "https://www.linkedin.com/pulse/beyond-task-execution-how-rpa-evolved-backbone-intelligent-c6e3c/",
    coverImage: "https://media.licdn.com/dms/image/v2/D5612AQHoEsGZFWRsmA/article-cover_image-shrink_720_1280/B56ZqwLBgoHYAI-/0/1763892383296?e=2147483647&v=beta&t=BSsTla5lEVnIYd_nbECIK0ComMi1qVWU1EyTJfau868",
  },
  {
    id: "ap-2",
    title: "When Machines Learn to Think: The Human-Centered Revolution in Industrial Automation",
    excerpt: "Human-machine collaboration isn't the future of industry — it's already the present.",
    client: "Active Power",
    clientLogo: LOGOS.activePower,
    niche: "industrial-ai",
    nicheLabel: "Industrial AI",
    platform: "linkedin" as const,
    href: "https://www.linkedin.com/pulse/when-machines-learn-think-human-centered-revolution-jtbmf/",
    coverImage: "https://media.licdn.com/dms/image/v2/D4D12AQF7ydcIbGNatQ/article-cover_image-shrink_720_1280/B4DZpYXIrmIkAI-/0/1762419083455?e=2147483647&v=beta&t=YqnDwHFa0snq77hrBzHfsG5nb-lAfSpQLfW7Kt7kV6k",
  },
  {
    id: "ap-3",
    title: "Industry 4.0: The Revolution That Cannot Be Ignored",
    excerpt: "The convergence of cyber-physical systems, AI, and automation that factory operators can't ignore.",
    client: "Active Power",
    clientLogo: LOGOS.activePower,
    niche: "industrial-ai",
    nicheLabel: "Industrial AI",
    platform: "linkedin" as const,
    href: "https://www.linkedin.com/pulse/industry-40-revolution-cannot-ignored-active-power-system-dqjcc/",
    coverImage: "https://media.licdn.com/dms/image/v2/D5612AQGbxBBRHKyW2Q/article-cover_image-shrink_720_1280/B56ZavRs.sGgAI-/0/1746697400877?e=2147483647&v=beta&t=GRO5-zCrf9NJWFGIbEu90lXjm7hObp1hB4wlMC-sWFk",
  },
  // ── Mantle Works ──────────────────────────────────────────────────────────
  {
    id: "mw-1",
    title: "RWA News Wrap August (03)",
    excerpt: "The week's most important real-world asset news, curated for institutional builders.",
    client: "Mantle Works",
    clientLogo: LOGOS.mantleWorks,
    niche: "blockchain",
    nicheLabel: "Blockchain · RWA",
    platform: "linkedin" as const,
    href: "https://www.linkedin.com/pulse/rwa-news-wrap-august-03-mantleworks-dcenc",
    coverImage: "https://media.licdn.com/dms/image/v2/D5612AQFFmVjqXZGo1w/article-cover_image-shrink_720_1280/B56ZjXRMOtHAAM-/0/1755958269778?e=2147483647&v=beta&t=BpsaAI8CgiYXcMurEI2I9sk2VUoZ0LMctXB8HjWcnZY",
  },
  {
    id: "mw-2",
    title: "Blockchain's Corporate Revolution: Stablecoins, Custom Chains, and the Death of Legacy Payments",
    excerpt: "Enterprises are building private chains and stablecoins. Traditional payment rails won't survive.",
    client: "Mantle Works",
    clientLogo: LOGOS.mantleWorks,
    niche: "blockchain",
    nicheLabel: "Blockchain · RWA",
    platform: "linkedin" as const,
    href: "https://www.linkedin.com/pulse/blockchains-corporate-revolution-stablecoins-custom-chains-4dxpc/",
    coverImage: "https://media.licdn.com/dms/image/v2/D5612AQETf1bcglZ-Iw/article-cover_image-shrink_720_1280/B56Zi3ZbuyHcAI-/0/1755423579488?e=2147483647&v=beta&t=ozCvPJq51lj7kSS3x_gvx_iYMTpow_Gz3NU7zn41OW0",
  },
  {
    id: "mw-3",
    title: "The Great Stablecoin Divide: A Tale of Two Visions for Global Finance",
    excerpt: "Competing visions for stablecoin regulation — and why the outcome reshapes global capital flows.",
    client: "Mantle Works",
    clientLogo: LOGOS.mantleWorks,
    niche: "blockchain",
    nicheLabel: "Blockchain · RWA",
    platform: "linkedin" as const,
    href: "https://www.linkedin.com/pulse/great-stablecoin-divide-tale-two-visions-global-finance-mantleworks-83omc/",
    coverImage: "https://media.licdn.com/dms/image/v2/D5612AQE7EvQ_WLaGRg/article-cover_image-shrink_720_1280/B56Zh1nHjCG0AI-/0/1754319855555?e=2147483647&v=beta&t=pqCp9oxzq_GddBwjviw-5RXrF_CQXxstYeu0lA5Ud4A",
  },
  {
    id: "mw-4",
    title: "The Invisible Hand of Web3: Why the Killer App Won't Announce Itself",
    excerpt: "The most transformative Web3 application won't arrive with fanfare — it already hasn't.",
    client: "Mantle Works",
    clientLogo: LOGOS.mantleWorks,
    niche: "blockchain",
    nicheLabel: "Blockchain · RWA",
    platform: "linkedin" as const,
    href: "https://www.linkedin.com/pulse/invisible-hand-web3-why-killer-app-wont-announce-itself-years-6uu9f/",
    coverImage: "https://media.licdn.com/dms/image/v2/D4D12AQFtHSbsFnOsLQ/article-cover_image-shrink_720_1280/B4DZg8v4xuG8AI-/0/1753365853706?e=2147483647&v=beta&t=_2mcnS2Hm0o9qkZOUEXcDKMh-n9MQgnwkoO5Q0f61uA",
  },
  {
    id: "mw-5",
    title: "Ledgers, Liquidity, Latticework: Unpacking Stablecoin Sovereignties",
    excerpt: "Stablecoin sovereignty, cross-border liquidity, and the emerging lattice of on-chain value.",
    client: "Mantle Works",
    clientLogo: LOGOS.mantleWorks,
    niche: "blockchain",
    nicheLabel: "Blockchain · RWA",
    platform: "linkedin" as const,
    href: "https://www.linkedin.com/pulse/ledgers-liquidity-latticework-unpacking-stablecoin-sovereignties-c0gvc/",
    coverImage: "https://media.licdn.com/dms/image/v2/D5612AQF0MkNRloOfkw/article-cover_image-shrink_720_1280/B56ZhCQEtrHcAM-/0/1753458189350?e=2147483647&v=beta&t=JjAePmCGHkxU9ezZpuCNvDoSsaAHuTP_nZrKXUEXDCKL3eg",
  },
] as const;

export type FeaturedArticle = (typeof featuredArticles)[number];

// ─── Client Websites ──────────────────────────────────────────────────────────

export const clientWebsites = [
  {
    name: "Manipal Aerosports",
    tagline: "Aviation training & airshow brand",
    url: "https://manipalaerosports.lovable.app/",
    screenshot: "https://image.thum.io/get/width/1200/crop/800/https://manipalaerosports.lovable.app/",
    industry: "Aviation",
    logo: LOGOS.manipalAerosports,
  },
  {
    name: "Suha Rehma",
    tagline: "Psychology practice — digital presence",
    url: "https://suha-rehma-psychology-git-main-vismayhegdes-projects.vercel.app/",
    screenshot: "https://image.thum.io/get/width/1200/crop/800/https://suha-rehma-psychology-git-main-vismayhegdes-projects.vercel.app/",
    industry: "Psychology",
    logo: "",
  },
  {
    name: "JB & Co Law",
    tagline: "Legal services — modern practice site",
    url: "https://jbandcolaw.vercel.app/",
    screenshot: "https://image.thum.io/get/width/1200/crop/800/https://jbandcolaw.vercel.app/",
    industry: "Legal",
    logo: "",
  },
] as const;

export type ClientWebsite = (typeof clientWebsites)[number];

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
}

export async function fetchSubstackFeed(): Promise<SubstackPost[]> {
  try {
    const res = await fetch(
      "https://impostersyndromeenjoyer.substack.com/feed",
      { next: { revalidate: 3600 } }
    );
    const xml = await res.text();
    const { XMLParser } = await import("fast-xml-parser");
    const parser = new XMLParser({ ignoreAttributes: false });
    const parsed = parser.parse(xml);

    const items = parsed?.rss?.channel?.item;
    if (!items) return [];

    const itemArray = Array.isArray(items) ? items : [items];

    return itemArray.map((item: Record<string, string>) => {
      const rawDesc = item["description"] || item["content:encoded"] || "";
      const stripped = rawDesc.replace(/<[^>]*>/g, "").trim();
      const excerpt =
        stripped.length > 200 ? stripped.slice(0, 200) + "..." : stripped;

      return {
        title: item.title || "Untitled",
        link: item.link || "#",
        pubDate: item.pubDate || "",
        excerpt,
      };
    });
  } catch {
    return [];
  }
}
