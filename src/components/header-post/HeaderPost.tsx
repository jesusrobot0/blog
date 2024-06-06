import { Wrapper } from "../wrapper/Wrapper";
import { BlogPostDatum } from "@/interfaces";
import { getFormattedDate } from "@/utils";

interface Props {
  post: BlogPostDatum;
}

export function HeaderPost({ post }: Props) {
  const { title, publishedAt, categories, author } = post.attributes;
  return (
    <header id="header" className="bg-background">
      <Wrapper className="pt-[136px] pb-[108px] flex flex-col gap-[50px] text-white sm:py-[180px] sm:gap-[100px] md:pt-[158px] md:pb-[100px] md:gap-[66px]">
        <div className="max-w-[990px] flex flex-col gap-6">
          <time
            dateTime={getFormattedDate(publishedAt)}
            className="text-[18px] tracking-[0.36px] sm:text-[20px]"
          >
            {getFormattedDate(publishedAt)}
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
    </header>
  );
}
