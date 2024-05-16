"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { LoadMoreButton, PostList } from "@/components";
import { getBlogPostsbyCategory } from "@/actions";
import { Post } from "@/interfaces";

interface Props {
  posts: Post[];
  pageCount: number;
  take: number;
}

export function CategoryPosts({ posts, pageCount, take }: Props) {
  const [postList, setPostList] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const currentPath = usePathname();

  const handleLoadMore = async () => {
    setIsLoading(true);
    const newPage = currentPage + 1;
    const category = currentPath.split("/").slice(-1)[0];
    const { data: newPosts } = await getBlogPostsbyCategory({
      page: newPage,
      take: take,
      category,
    });

    setCurrentPage(newPage);
    setPostList([...postList, ...newPosts]);
    setIsLoading(false);
  };

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
