import {
  usePathname,
  useSearchParams,
  useRouter,
  redirect,
} from "next/navigation";

interface Props {
  pageCount: number;
}

export function usePaginationPosts({ pageCount }: Props) {
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);
  const currentPage = Number(params.get("page")) || 1;

  if (currentPage > pageCount || currentPage < 1) redirect(currentPath);

  const createPageUrl = (newPage: number) => {
    params.set("page", String(newPage));
    router.replace(`${currentPath}?${params.toString()}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoadMore = async () => {
    const newPage = currentPage + 1;
    createPageUrl(newPage);
  };

  const handleBack = async () => {
    const newPage = currentPage - 1;
    createPageUrl(newPage);
  };

  return {
    currentPage,
    handleLoadMore,
    handleBack,
  };
}
