interface Props {
  category: string;
  totalPosts: number;
}

export function CategoryHeader({ category, totalPosts }: Props) {
  const categoryFormatted = category.split("-").join(" ");

  return (
    <header>
      <div className="flex flex-col gap-y-[34px] justify-between items-center sm:flex-row sm:gap-x-4">
        <div className="w-full flex justify-between items-center sm:w-[90%]">
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
        <button className="w-full h-[38px] px-[22px] flex items-center justify-center gap-1 text-[18px] border border-[#E3E3E3] rounded-full bg-[#ECECEC] sm:w-fit">
          Sort
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=""
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </header>
  );
}
