import Image from "next/image";
import { Wrapper } from "../wrapper/Wrapper";
import { getFormattedDate } from "@/utils";
import { BlogPostDatum } from "@/interfaces";
import styles from "./headerPost.module.css";

interface Props {
  post: BlogPostDatum;
}

export function HeaderPost({ post }: Props) {
  const { title, realeaseDate, categories, author } = post.attributes;
  const mainImageURL = post.attributes.mainImage.data.attributes.url;

  return (
    <header id="header">
      <div className="bg-background z-20 relative">
        <Wrapper className="pt-[136px] pb-[108px] flex flex-col gap-[50px] text-white sm:pt-[180px] sm:pb-[100px] sm:gap-[100px] md:gap-[66px]">
          <div className="max-w-[990px] flex flex-col gap-6">
            <time
              dateTime={getFormattedDate(realeaseDate)}
              className="text-[18px] tracking-[0.36px] sm:text-[20px]"
            >
              {getFormattedDate(realeaseDate)}
            </time>
            <h1 className="text-[48px] tracking-[-0.48px] leading-[64px] sm:text-[80px] sm:tracking-[-1.6px] sm:leading-[100px]">
              {title}
            </h1>
          </div>
          <div className="flex flex-col gap-[38px] sm:flex-row sm:gap-[110px]">
            <div className="w-fit flex flex-col gap-2">
              <p className="text-[18px] text-[#ac9b94] sm:text-[20px]">
                Written by
              </p>
              <p className="text-[20px] text-white leading-[30px] sm:text-[28px]">
                {author.data.attributes.name}
              </p>
            </div>
            <div className="w-fit flex flex-col gap-2">
              <p className="text-[18px] text-[#ac9b94] sm:text-[20px]">
                Category
              </p>
              <div className="flex flex-col gap-2">
                {categories.data.map((category) => (
                  <p
                    key={category.id}
                    className="text-[20px] text-white leading-[30px] sm:text-[28px]"
                  >
                    {category.attributes.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="overflow-clip">
        <Image
          src={mainImageURL}
          alt={title}
          width={1216 / 2}
          height={1824 / 2}
          priority
          className={`w-full h-[619px] md:h-[860px] object-cover ${styles["scroll-scale-animation"]} z-10`}
        />
      </div>
    </header>
  );
}
