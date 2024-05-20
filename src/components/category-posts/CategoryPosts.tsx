"use client";

import { useRef, useState } from "react";
import { usePaginationPosts } from "@/hooks";
import { BackButton, LoadMoreButton, Loader, PostList } from "@/components";
import { Post } from "@/interfaces";

interface Props {
  posts: Post[];
  pageCount: number;
  take: number;
}

export function CategoryPosts({ posts, pageCount, take }: Props) {
  const [postList, setPostList] = useState(posts);
  const { currentPage, isLoading, handleLoadMore, handleBack } =
    usePaginationPosts({
      take,
      postList,
      setPostList,
    });

  return (
    <main>
      <PostList dataPosts={postList} />

      <div className="mb-[70px] flex flex-col gap-[35px] sm:flex-row">
        {currentPage > 1 && (
          <BackButton text="Load Previous" onBack={handleBack} />
        )}
        {currentPage < pageCount && (
          <LoadMoreButton text="Load More" onLoadMore={handleLoadMore} />
        )}

        {isLoading && <Loader />}
      </div>
    </main>
  );
}
