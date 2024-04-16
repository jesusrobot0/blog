import { Wrapper } from "@/components/ui";
import { CategoriesList } from "@/categories/components";
import { CategoriesCountDatum } from "@/categories/interfaces";

interface Props {
  title: string;
  URLSegment: string;
  categories: CategoriesCountDatum[];
}

export function HeroWithCategoryList({ categories, URLSegment, title }: Props) {
  return (
    <header className="pt-[120px] pb-[80px] bg-background min-[1200px]:pt-[200px] min-[1200px]:pb-[100px]">
      <Wrapper>
        <div className="flex flex-col gap-7 text-white min-[1200px]:flex-row min-[1200px]:justify-between min-[1200px]:gap-[50px]">
          <h1 className="text-5xl leading-[64px] tracking-[-0.48px] sm:text-[58px] sm:leading-[84px] sm:tracking-[-1.8px] min-[1200px]:w-2/3 min-[1200px]:text-[80px] min-[1200px]:leading-[100px] min-[1200px]:tracking-[-1.6px]">
            {title}
          </h1>
          <CategoriesList URLSegment={URLSegment} categories={categories} />
        </div>
      </Wrapper>
    </header>
  );
}