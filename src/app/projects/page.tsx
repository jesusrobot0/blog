import { getProjectCategories } from "@/services";
import { HeroWithCategoryList } from "@/components";

export default async function ProjectsPage() {
  const { data } = await getProjectCategories();
  return (
    <>
      <HeroWithCategoryList
        title="We are here to support your brands, goods, services, and worldviews."
        URLSegment="project"
        dataList={data}
      />
    </>
  );
}
