import { Wrapper } from "@/components/ui";
import { CategoriesList } from "@/categories/components";

export function HeroWithCategories() {
  return (
    <header className="h-[400px] pt-[120px] bg-background">
      <Wrapper>
        <div className="flex flex-col gap-7">
          <h1 className="">
            Sharing is caring so we make time to write about our experience.
          </h1>
          <CategoriesList />
        </div>
      </Wrapper>
    </header>
  );
}
