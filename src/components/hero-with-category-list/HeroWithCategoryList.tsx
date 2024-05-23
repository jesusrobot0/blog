import { Wrapper } from "@/components";
import { CategoriesList } from "@/components";
import { BlogCategoriesDatum } from "@/interfaces";
import { ProjectCategoriesDatum } from "@/interfaces";

interface Props {
  title: string;
  URLSegment: string;
  dataList: BlogCategoriesDatum[] | ProjectCategoriesDatum[];
  totalPosts: number;
}

export function HeroWithCategoryList({
  dataList,
  URLSegment,
  title,
  totalPosts,
}: Props) {
  return (
    <header
      className="pt-[120px] pb-[80px] bg-background min-[1200px]:pt-[200px] min-[1200px]:pb-[100px]"
      id="header"
    >
      <Wrapper>
        <div className="flex flex-col gap-7 text-white animate-fadeIn min-[1200px]:flex-row min-[1200px]:justify-between min-[1200px]:gap-0">
          <h1 className="text-5xl leading-[64px] tracking-[-0.48px] sm:text-[58px] sm:leading-[84px] sm:tracking-[-1.8px] min-[1200px]:w-2/3 min-[1200px]:text-[80px] min-[1200px]:leading-[100px] min-[1200px]:tracking-[-1.6px] max-[1280px]:max-w-[660px] max-[1366px]:max-w-[740px]">
            {title}
          </h1>
          <CategoriesList
            URLSegment={URLSegment}
            dataList={dataList}
            totalPosts={totalPosts}
          />
        </div>
      </Wrapper>
    </header>
  );
}
