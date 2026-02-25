import { fetchSubstackFeed } from "@/lib/data";
import SubstackFeedClient from "./SubstackFeedClient";

export default async function SubstackFeed() {
  const posts = await fetchSubstackFeed();

  return <SubstackFeedClient posts={posts} />;
}
