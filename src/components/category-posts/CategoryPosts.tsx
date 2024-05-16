"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { LoadMoreButton, PostList } from "@/components";
import { getBlogPostsbyCategory } from "@/actions";
import { Post } from "@/interfaces";

interface Props {
  posts: Post[];
}

export function CategoryPosts({ posts }: Props) {
  const [postList, setPostList] = useState(posts);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const currentPath = usePathname();

  const handleLoadMore = async () => {
    setIsLoading(true);
    const newPage = page + 1;
    const category = currentPath.split("/").slice(-1)[0];
    const { data: newPosts } = await getBlogPostsbyCategory({
      category,
      page: newPage,
    });

    setPage(newPage);
    setPostList([...postList, ...newPosts]);
    setIsLoading(false);
  };

  return (
    <main>
      <PostList dataPosts={postList} />

      <LoadMoreButton
        text="Load More"
        isLoading={isLoading}
        onLoadMore={handleLoadMore}
      />
    </main>
  );
}
