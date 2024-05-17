import { useState } from "react";
import { usePathname } from "next/navigation";
import { getBlogPostsbyCategory } from "@/actions";
import { Post } from "@/interfaces";

interface Props {
  take: number;
  postList: Post[];
  setPostList: (value: Post[]) => void;
}

export function usePaginationPosts({ take, postList, setPostList }: Props) {
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
  return { currentPage, isLoading, handleLoadMore };
}
