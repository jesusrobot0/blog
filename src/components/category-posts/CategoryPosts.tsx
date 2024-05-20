import { PaginationButtons, PostList } from "@/components";
import { Post } from "@/interfaces";

interface Props {
  posts: Post[];
  pageCount: number;
  category: string;
}

export function CategoryPosts({ posts, pageCount }: Props) {
  return (
    <main>
      <PostList dataPosts={posts} />
      <PaginationButtons pageCount={pageCount} />
    </main>
  );
}
