import Link from "next/link";

interface Props {
  slug: string;
  name: string;
  URLSegment: string;
  categoryCount: number;
}

export function CategoryListItem({
  slug,
  name,
  URLSegment,
  categoryCount,
}: Props) {
  return (
    <li>
      <Link
        href={`/${URLSegment}/category/${slug}`}
        className="text-xl flex items-center gap-3 tracking-wide antialiased group hover:text-white sm:text-2xl transition-colors duration-300"
      >
        <span className="text-[#d1c9c6] group-hover:text-white transition-colors duration-300">
          {name}
        </span>
        <span className="h-[22px] py-[2px] px-[10px] flex items-center rounded-3xl text-[16px] text-[#A4938C] group-hover:text-white group-hover:border-white sm:text-[18px] border border-[#A4938C] transition-colors duration-300">
          {categoryCount}
        </span>
      </Link>
    </li>
  );
}
