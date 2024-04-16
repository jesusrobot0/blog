import { HeroWithCategoryList } from "@/site-pages/components";
import { getCategories } from "@/categories/api";

export default async function ProjectsPage() {
  const { data } = await getCategories();
  return (
    <>
      <HeroWithCategoryList
        title="We are here to support your brands, goods, services, and worldviews."
        URLSegment="projects"
        categories={data}
      />
    </>
  );
}
