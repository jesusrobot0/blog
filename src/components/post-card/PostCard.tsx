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
    <article className="relative py-[80px] flex flex-col gap-[21px] border-b border-b-[#898989] group min-[1200px]:flex-row min-[1200px]:gap-[100px]">
      <aside>
        <Image
          src={post.attributes.cover.data.attributes.url}
          alt={post.attributes.title}
          width={1024 / 2}
          height={683}
          className="w-full h-[240px] object-cover object-center group-hover:opacity-[.5] transition-opacity duration-300 sm:h-[370px] min-[1200px]:min-w-[530px]"
        />
      </aside>
      <div className="w-full flex flex-col gap-[30px] min-[1200px]:justify-between">
        <header className="flex justify-between">
          <h2 className="w-10/12 text-[32px] leading-[42px] tracking-[-.45px] group-hover:opacity-[.5] transition-opacity duration-300  sm:text-[48px] sm:leading-[64px] md:w-7/12 min-[1200px]:w-9/12">
            {post.attributes.title}
          </h2>
          <div className="w-2/12 flex justify-center pt-[10px] sm:pt-6 min-[1200px]:justify-end">
            <div className="w-[80px] h-[80px]  flex justify-center items-center rounded-full rotate-12 group-hover:bg-[#121212] group-hover:rotate-45  transition-all duration-300 ease-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[50px] h-[50px] group-hover:text-white"
                viewBox="0 0 50 50"
              >
                <g transform="translate(0.364 0.756)" id="ss3522480518_1">
                  <path
                    d="M 24.684 48.487 L 0 24.244 L 24.684 0 L 49.369 24.244 Z"
                    fill="transparent"
                  ></path>
                  <path
                    d="M 11.494 9.972 C 13.186 11.634 15.162 12.982 17.312 13.941 C 19.461 14.899 21.741 15.45 24.021 15.56 C 26.3 15.67 28.536 15.338 30.599 14.583 C 32.663 13.828 34.514 12.665 36.046 11.159 L 36.101 11.213 L 36.101 11.213 L 37.952 13.031 L 37.952 13.031 L 38.007 13.085 C 36.474 14.59 35.289 16.408 34.521 18.434 C 33.752 20.461 33.414 22.657 33.526 24.896 C 33.638 27.135 34.198 29.374 35.175 31.485 C 36.151 33.596 37.524 35.537 39.215 37.198 L 37.322 39.057 C 30.336 32.195 29.998 23.419 34.476 16.445 L 13.268 37.275 L 11.417 35.456 L 32.625 14.627 C 25.524 19.025 16.588 18.693 9.601 11.831 Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </header>
        <footer className="relative bottom-0 flex flex-col gap-[20px] sm:flex-row z-10">
          <ul className="flex flex-col gap-[20px] sm:flex-row">
            {post.attributes.categories.data.map((category) => (
              <li key={category.attributes.name}>
                <Link
                  href={`/blog/category/${category.attributes.slug}`}
                  className="w-fit px-[14px] py-[4px] text-[18px] tracking-[0.9px] uppercase text-[#6a6a6a] rounded-full bg-[#EDEDED] border border-transparent hover:bg-white hover:border-[#898989] transition-colors duration-300"
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
      <Link
        href={`/blog/${post.attributes.slug}`}
        className="absolute top-0 bottom-0 w-full cursor-pointer"
        aria-label={`Go to blog post: ${post.attributes.title}`}
      ></Link>
    </article>
  );
}
