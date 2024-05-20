import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getBlogPostsbyCategory } from "@/actions";
import { Post } from "@/interfaces";

interface Props {
  take: number;
  setPostList: (value: Post[]) => void;
}

export function usePaginationPosts({ take, setPostList }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);
  const currentPage = Number(params.get("page")) || 1;

  const createPageUrl = (newPage: number) => {
    params.set("page", String(newPage));
    router.replace(`${currentPath}?${params.toString()}`, { scroll: false });
  };

  const getPosts = async (newPage: number) => {
    const category = currentPath.split("/").slice(-1)[0];

    setIsLoading(true);
    const { data: newPosts } = await getBlogPostsbyCategory({
      page: newPage,
      take: take,
      category,
    });
    setIsLoading(false);

    return newPosts;
  };

  const handleLoadMore = async () => {
    const newPage = currentPage + 1;
    const newPosts = await getPosts(newPage);

    createPageUrl(newPage);
    setPostList(newPosts);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = async () => {
    const newPage = currentPage - 1;
    const newPosts = await getPosts(newPage);

    createPageUrl(newPage);
    setPostList(newPosts);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    currentPage,
    isLoading,
    handleLoadMore,
    handleBack,
  };
}
