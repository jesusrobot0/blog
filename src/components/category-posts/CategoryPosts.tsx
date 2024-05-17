"use client";

import { useState } from "react";
import { usePaginationPosts } from "@/hooks";
import { LoadMoreButton, PostList } from "@/components";
import { Post } from "@/interfaces";

interface Props {
  posts: Post[];
  pageCount: number;
  take: number;
}

export function CategoryPosts({ posts, pageCount, take }: Props) {
  const [postList, setPostList] = useState(posts);
  const { currentPage, isLoading, handleLoadMore } = usePaginationPosts({
    take,
    postList,
    setPostList,
  });

  return (
    <main>
      <PostList dataPosts={postList} />

      {currentPage < pageCount && (
        <LoadMoreButton
          text="Load More"
          isLoading={isLoading}
          onLoadMore={handleLoadMore}
        />
      )}
    </main>
  );
}
