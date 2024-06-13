import { PostCard } from "..";
import { BlogPostDatum } from "@/interfaces";

interface Props {
  dataPosts: BlogPostDatum[];
}

export function PostList({ dataPosts }: Props) {
  return (
    <main
      className="mb-[70px]"
      // id="post-list"
      data-bg-nav="white"
    >
      <div className="flex flex-col gap-[60px] [&>*:last-child]:border-b-0">
        {dataPosts.map((post, index) => {
          if (index === 0) {
            return (
              <PostCard
                key={`post-with-key-${post.id}-of-post-list`}
                post={post}
                priority
              />
            );
          }
          return (
            <PostCard
              key={`post-with-key-${post.id}-of-post-list`}
              post={post}
            />
          );
        })}
      </div>
    </main>
  );
}
