import Image from "next/image";
import Link from "next/link";
import React from "react";

export function PostCard({ post }: { post: any }) {
  return (
    <article className="py-[80px] flex flex-col gap-[21px] border-b border-b-[#898989] min-[1200px]:flex-row min-[1200px]:gap-[100px]">
      <aside>
        <Image
          src={post.cover}
          alt={post.title}
          width={1024 / 2}
          height={683}
          className="w-full h-[240px] object-cover object-center sm:h-[370px]"
        />
      </aside>
      <div className="flex flex-col gap-[30px] min-[1200px]:justify-between">
        <header className="flex justify-between">
          <h2 className="w-10/12 text-[32px] leading-[42px] tracking-[-.45px] sm:text-[48px] sm:leading-[64px] md:w-7/12">
            {post.title}
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
            {post.categories.map((category: any) => (
              <li key={category.slug}>
                <Link
                  href={category.slug}
                  className="px-[14px] py-[4px] text-[18px] tracking-[0.9px] uppercase text-[#6a6a6a] rounded-full bg-[#EDEDED]"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[20px]">{post.releaseDate}</p>
        </footer>
      </div>
    </article>
  );
}
