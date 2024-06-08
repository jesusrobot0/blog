import Image from "next/image";
import { BlogPostDatum } from "@/interfaces";
import Link from "next/link";
import { getFormattedDate } from "@/utils";

interface Props {
  relatedPost: BlogPostDatum;
}
export function CompactPostCard({ relatedPost }: Props) {
  console.log(relatedPost.attributes.title);
  return (
    <article className="relative py-[50px] flex flex-col gap-8 border-t border-t-[#898989] group min-[1200px]:w-1/2">
      <aside>
        <Image
          src={relatedPost.attributes.cover.data.attributes.url}
          alt={relatedPost.attributes.title}
          width={1024 / 2}
          height={683}
          className="block w-full h-[240px] object-cover object-center group-hover:opacity-[.5] transition-opacity duration-300 sm:h-[370px]"
        />
      </aside>
      <div className="w-full flex flex-col gap-[25px] min-[1200px]:justify-between">
        <header className="flex justify-between">
          <h2 className="w-10/12 text-[32px] leading-[42px] tracking-[-.45px] group-hover:opacity-[.5] transition-opacity duration-300  sm:text-[48px] sm:leading-[64px] md:w-7/12 min-[1200px]:w-9/12">
            {relatedPost.attributes.title}
          </h2>
          <div className="w-2/12 flex justify-center pt-[10px] sm:pt-6 min-[1200px]:justify-end">
            <div className="min-w-[60px] h-[60px] flex justify-center items-center rounded-full rotate-12 group-hover:bg-[#fff] group-hover:rotate-45  transition-all duration-200 ease-out sm:min-w-[80px] sm:h-[80px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[50px] h-[50px] sm:w-[50px] sm:h-[50px] group-hover:text-black"
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
        <footer className="relative bottom-0 flex gap-[20px] sm:flex-row z-10  max-[400px]:flex-col">
          <ul className="flex flex-col gap-[20px] sm:flex-row">
            {relatedPost.attributes.categories.data.map((category) => (
              <li key={category.attributes.name}>
                <Link
                  href={`/blog/category/${category.attributes.slug}`}
                  className="w-fit px-[14px] py-[4px] text-[18px] tracking-[0.9px] uppercase text-[#929292] rounded-full bg-[#2a2a2a] border border-transparent hover:bg-white hover:border-[#898989] transition-colors duration-300"
                >
                  {category.attributes.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[20px]">
            {getFormattedDate(relatedPost.attributes.publishedAt)}
          </p>
        </footer>
      </div>
      <Link
        href={`/blog/${relatedPost.attributes.slug}`}
        className="absolute top-0 bottom-0 w-full cursor-pointer"
        aria-label={`Go to blog post: ${relatedPost.attributes.title}`}
      ></Link>
    </article>
  );
}
