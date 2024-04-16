import { HeroWithCategoryList } from "@/site-pages/components";
import { getCategories } from "@/categories/api";

export default async function BlogPage() {
  const { data } = await getCategories();

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
