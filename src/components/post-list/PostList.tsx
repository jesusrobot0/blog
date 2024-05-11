import { PostCard } from "../post-card/PostCard";
import { Wrapper } from "../wrapper/Wrapper";
import { Post } from "@/interfaces";

interface Props {
  dataPosts: Post[];
}

export function PostList({ dataPosts }: Props) {
  return (
    <main>
      <Wrapper>
        <div className="flex flex-col gap-[60px] [&>*:last-child]:border-b-0">
          {dataPosts.map((post) => (
            <PostCard key={post.attributes.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}
