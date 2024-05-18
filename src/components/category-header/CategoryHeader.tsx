interface Props {
  category: string;
  totalPosts: number;
}

export function CategoryHeader({ category, totalPosts }: Props) {
  const categoryFormatted = category.split("-").join(" ");

  return (
    <header>
      <div className="flex flex-col gap-y-[34px] justify-between items-center sm:flex-row sm:gap-x-4">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-[22px] sm:text-[26px] min-[1200px]:text-[48px]">
            <span className="hidden">All posts tagged</span> <span>Tag: </span>
            <span className="tracking-wider font-bold uppercase">
              {categoryFormatted}
            </span>
          </h1>
          <p className="text-[18px] min-[1200px]:text-[22px]">
            {totalPosts} articles
          </p>
        </div>
      </div>
    </header>
  );
}
