import { PaginationButtons, PostList } from "@/components";
import { BlogPostDatum } from "@/interfaces";

interface Props {
  posts: BlogPostDatum[];
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
