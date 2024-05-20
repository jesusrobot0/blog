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
    setPostList([...postList, ...newPosts]);
  };

  // BackButton
  const handleBack = async () => {
    const newPage = currentPage - 1;
    const numberPostsOfLastPage = postList.length % take;

    if (postList.length > take) {
      if (numberPostsOfLastPage === 0) {
        const newPosts = postList.slice(0, -take);
        setPostList(newPosts);
        // No me siento orgulloso de esto. Pero... ¡FUNCIONA!
        // TODO: usar una referencia
        const secondPage = take + take;
        if (postList.length !== secondPage) {
          // SCROLL MGMT
          const lastPage = document.getElementById(
            `post-with-key-${postList.length - secondPage}-of-post-list`
          );
          lastPage?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      } else {
        const newPosts = postList.slice(0, -numberPostsOfLastPage);
        setPostList(newPosts);

        // No me siento orgulloso de esto. Pero... ¡FUNCIONA!
        // TODO: usar una referencia
        const secondPage = take + take;
        if (postList.length !== secondPage) {
          // SCROLL MGMT
          const lastPage = document.getElementById(
            `post-with-key-${
              postList.length - (numberPostsOfLastPage + numberPostsOfLastPage)
            }-of-post-list`
          );
          lastPage?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }
    } else {
      const newPosts = await getPosts(newPage);
      setPostList(newPosts);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    createPageUrl(newPage);
  };

  return {
    currentPage,
    isLoading,
    handleLoadMore,
    handleBack,
  };
}
