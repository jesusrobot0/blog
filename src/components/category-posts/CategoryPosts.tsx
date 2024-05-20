"use client";

import { redirect } from "next/navigation";
import { usePaginationPosts } from "@/hooks";
import { BackButton, LoadMoreButton, PostList } from "@/components";
import { Post } from "@/interfaces";

interface Props {
  posts: Post[];
  pageCount: number;
  category: string;
}

export function CategoryPosts({ posts, pageCount, category }: Props) {
  const { currentPage, handleLoadMore, handleBack } = usePaginationPosts();

  if (currentPage > pageCount || currentPage < 1) {
    redirect(`/blog/category/${category}`);
  }

  return (
    <main>
      <PostList dataPosts={posts} />
      <div className="mb-[70px] flex flex-col gap-[35px] sm:flex-row">
        {currentPage > 1 && currentPage <= pageCount && (
          <BackButton text="Load Previous" onBack={handleBack} />
        )}
        {currentPage < pageCount && (
          <LoadMoreButton text="Load More" onLoadMore={handleLoadMore} />
        )}
      </div>
    </main>
  );
}
