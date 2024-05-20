"use client";

import { usePaginationPosts } from "@/hooks";
import { BackButton, LoadMoreButton } from "@/components";

interface Props {
  pageCount: number;
}

export function PaginationButtons({ pageCount }: Props) {
  const { currentPage, handleLoadMore, handleBack } = usePaginationPosts({
    pageCount,
  });

  return (
    <div className="mb-[70px] flex flex-col gap-[35px] sm:flex-row">
      {currentPage > 1 && currentPage <= pageCount && (
        <BackButton text="Load Previous" onBack={handleBack} />
      )}
      {currentPage < pageCount && (
        <LoadMoreButton text="Load More" onLoadMore={handleLoadMore} />
      )}
    </div>
  );
}
