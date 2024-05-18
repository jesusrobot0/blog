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
  const [isLoadingBack, setIsLoadingBack] = useState(false);
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);
  const currentPage = Number(params.get("page")) || 1;
  const category = currentPath.split("/").slice(-1)[0];

  const createPageUrl = (newPage: number) => {
    params.set("page", String(newPage));
    router.replace(`${currentPath}?${params.toString()}`, { scroll: false });
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    const newPage = currentPage + 1;
    const { data: newPosts } = await getBlogPostsbyCategory({
      page: newPage,
      take: take,
      category,
    });

    createPageUrl(newPage);
    setPostList([...postList, ...newPosts]);
    // setPostList([...newPosts]);

    setIsLoading(false);
  };

  // BackButton
  const handleBack = async () => {
    const newPage = currentPage - 1;
    const numberPostsOfLastPage = postList.length % take;

    if (postList.length > take) {
      if (numberPostsOfLastPage === 0) {
        const newPosts = postList.slice(0, -take);
        setPostList(newPosts);
      } else {
        const newPosts = postList.slice(0, -numberPostsOfLastPage);
        setPostList(newPosts);
      }
    } else {
      setIsLoadingBack(true);
      const { data: newPosts } = await getBlogPostsbyCategory({
        page: newPage,
        take: take,
        category,
      });
      setPostList(newPosts);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setIsLoadingBack(false);
    }

    createPageUrl(newPage);
  };

  return {
    currentPage,
    isLoading: { isLoading, isLoadingBack },
    handleLoadMore,
    handleBack,
  };
}
