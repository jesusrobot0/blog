import Link from "next/link";
import { PostCard } from "../post-card/PostCard";
import { Wrapper } from "../wrapper/Wrapper";
import { Post } from "@/interfaces";
import { FancyLink } from "../fancy-link/FancyLink";

interface Props {
  dataPosts: Post[];
}

export function PostList({ dataPosts }: Props) {
  return (
    <main className="mb-[60px]">
      <Wrapper>
        <div className="mb-[70px] flex flex-col gap-[60px] [&>*:last-child]:border-b-0">
          {dataPosts.map((post) => (
            <PostCard key={post.attributes.slug} post={post} />
          ))}
        </div>
        <FancyLink href="/blog/category/all" text="View All Blogs" />
      </Wrapper>
    </main>
  );
}
