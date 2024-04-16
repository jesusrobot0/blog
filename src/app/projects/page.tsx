import { getServices } from "@/projects/api";
import { HeroWithCategoryList } from "@/site-pages/components";

export default async function ProjectsPage() {
  const { data } = await getServices();
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
