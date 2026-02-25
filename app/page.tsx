import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import Offers from "@/components/Offers";
import Authority from "@/components/Authority";
import SubstackFeed from "@/components/SubstackFeed";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Offers />
      <Authority />
      <SubstackFeed />
    </>
  );
}
