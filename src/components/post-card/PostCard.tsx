import Image from "next/image";
import Link from "next/link";
import { Post } from "@/interfaces";

interface Props {
  post: Post;
}

function getFormattedDate(date: Date): string {
  const months: Record<number, string> = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const month = months[new Date(date).getMonth()];
  const day = new Date(date).getDay();
  const year = new Date(date).getFullYear();

  return `${month} ${day}, ${year}`;
}

export function PostCard({ post }: Props) {
  return (
    <article className="py-[80px] flex flex-col gap-[21px] border-b border-b-[#898989] min-[1200px]:flex-row min-[1200px]:gap-[100px]">
      <aside>
        <Image
          src={post.attributes.cover.data.attributes.url}
          alt={post.attributes.title}
          width={1024 / 2}
          height={683}
          className="w-full h-[240px] object-cover object-center sm:h-[370px] min-[1200px]:min-w-[530px]"
        />
      </aside>
      <div className="flex flex-col gap-[30px] min-[1200px]:justify-between">
        <header className="flex justify-between">
          <h2 className="w-10/12 text-[32px] leading-[42px] tracking-[-.45px] sm:text-[48px] sm:leading-[64px] md:w-7/12 min-[1200px]:w-9/12">
            {post.attributes.title}
          </h2>
          <div className="w-2/12 flex justify-center pt-[10px] sm:pt-6 min-[1200px]:justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              className="w-[33px] h-[33px] -rotate-45 sm:w-[40px] sm:h-[40px]"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </div>
        </header>
        <footer className="flex flex-col gap-[20px] sm:flex-row">
          <ul className="flex flex-col gap-[20px] sm:flex-row">
            {post.attributes.categories.data.map((category) => (
              <li key={category.attributes.name}>
                <Link
                  href={`/blog/category/${category.attributes.slug}`}
                  className="px-[14px] py-[4px] text-[18px] tracking-[0.9px] uppercase text-[#6a6a6a] rounded-full bg-[#EDEDED]"
                >
                  {category.attributes.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[20px]">
            {getFormattedDate(post.attributes.publishedAt)}
          </p>
        </footer>
      </div>
    </article>
  );
}
