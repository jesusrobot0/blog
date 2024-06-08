import { Wrapper, FancyLink, CompactPostCard } from "..";
import { BlogPostDatum } from "@/interfaces";

interface Props {
  relatedPosts: BlogPostDatum[];
}

export function RelatedPosts({ relatedPosts }: Props) {
  return (
    <aside
      className="pt-[120px] pb-[100px] text-white bg-black sm:pt-[150px]"
      id="relatedPosts"
    >
      <Wrapper className="flex flex-col gap-[60px] sm:gap-[50px]">
        <header className="flex justify-between items-center">
          <h2 className="text-[48px] tracking-[-0.48px] leading-[64px] sm:text-[64px] sm:tracking-[-0.64px] sm:leading-[80px]">
            Related Posts
          </h2>
          <div className="hidden md:block">
            <FancyLink href="" text="View All Posts" dark />
          </div>
        </header>
        <div className="flex flex-col min-[1200px]:gap-[80px]  min-[1200px]:flex-row">
          {relatedPosts.map((relatedPost) => (
            <CompactPostCard
              key={`related-posts-card-${relatedPost.attributes.slug}`}
              relatedPost={relatedPost}
            />
          ))}
        </div>
        <div className="md:hidden">
          <FancyLink href="" text="View All Posts" dark />
        </div>
      </Wrapper>
    </aside>
  );
}
