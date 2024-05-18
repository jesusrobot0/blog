import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getBlogPostsbyCategory } from "@/actions";
import { Post } from "@/interfaces";

interface Props {
  take: number;
  postList: Post[];
  setPostList: (value: Post[]) => void;
}

export function usePaginationPosts({ take, postList, setPostList }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);
  const currentPage = Number(params.get("page")) || 1;

  const createPageUrl = () => {
    const newPage = currentPage + 1;
    params.set("page", String(newPage));
    router.replace(`${currentPath}?${params.toString()}`, { scroll: false });

    return newPage;
  };

  const handleLoadMore = async () => {
    setIsLoading(true);

    const newPage = createPageUrl();
    const category = currentPath.split("/").slice(-1)[0];
    const { data: newPosts } = await getBlogPostsbyCategory({
      page: newPage,
      take: take,
      category,
    });

    setPostList([...postList, ...newPosts]);

    setIsLoading(false);
  };

  return { currentPage, isLoading, handleLoadMore };
}
