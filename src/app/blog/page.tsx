import { HeroWithCategoryList } from "@/blog-pages/components";
import { getCategoriesCount } from "@/categories/api";

export default async function BlogPage() {
  const { data } = await getCategoriesCount();

  return (
    <>
      <HeroWithCategoryList
        title="Sharing is caring so we make time to write about our experience."
        URLSegment="blog"
        categories={data}
      />
    </>
  );
}
