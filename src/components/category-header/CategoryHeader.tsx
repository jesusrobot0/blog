import { SortButton } from "../sort-button/SortButton";

interface Props {
  category: string;
  totalPosts: number;
  categoryDescription: string;
}

export function CategoryHeader({
  category,
  totalPosts,
  categoryDescription,
}: Props) {
  const categoryFormatted = category.split("-").join(" ");

  return (
    <header
      className="flex flex-col gap-10 mb-10 bg-white"
      id="category-header"
      data-bg-nav="white"
    >
      <div className="flex flex-col gap-y-6 md:flex-row ">
        <div className="flex flex-col gap-y-1 md:w-1/2">
          <h1 className="text-[32px] uppercase lg:text-[42px] min-[1200px]:text-[53px]">
            {categoryFormatted}
          </h1>
          <p className="text-[18px] lg:text-[20px]">{totalPosts} posts</p>
        </div>
        <p className="text-[18px] tracking-wide lg:text-[20px] md:w-1/2">
          {categoryDescription}
        </p>
      </div>
      <div className="flex gap-5">
        <SortButton />
      </div>
    </header>
  );
}
