import {
  usePathname,
  useSearchParams,
  // useRouter,
  redirect,
} from "next/navigation";
import { useURL } from "./useURL";

interface Props {
  pageCount: number;
}

export function usePaginationPosts({ pageCount }: Props) {
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const { createUrl } = useURL();

  const params = new URLSearchParams(searchParams);
  const currentPage = Number(params.get("page")) || 1;

  if (currentPage > pageCount || currentPage < 1) redirect(currentPath);

  const handleLoadMore = async () => {
    const newPage = String(currentPage + 1);
    createUrl("page", newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = async () => {
    const newPage = String(currentPage - 1);
    createUrl("page", newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    currentPage,
    handleLoadMore,
    handleBack,
  };
}
