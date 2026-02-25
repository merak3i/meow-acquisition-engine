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
  },
} as const;

export const clientLogos = [
  {
    name: "Manipal Aerosports",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/2ab5b161-6bee-476d-87ba-767c24bb9168.png",
  },
  {
    name: "Resonance Security",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/resonance-security-new.svg",
  },
  {
    name: "Active Power",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/69925ab5-3c33-482a-9561-5eb05acbc182.png",
  },
  {
    name: "Asset Mantle",
    src: "https://meowcreativehaus.lovable.app/lovable-uploads/229aac74-3415-4b4d-8638-01cde5697f70.png",
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
