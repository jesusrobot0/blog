import { PostCard } from "..";
import { Post } from "@/interfaces";

interface Props {
  dataPosts: Post[];
}

export function PostList({ dataPosts }: Props) {
  return (
    <main className="mb-[70px]">
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
