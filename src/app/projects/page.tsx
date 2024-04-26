import { getServices } from "@/projects/api";
import { HeroWithCategoryList } from "@/ui/components";

export default async function ProjectsPage() {
  const { data } = await getServices();
  return (
    <>
      <HeroWithCategoryList
        title="We are here to support your brands, goods, services, and worldviews."
        URLSegment="projects"
        dataList={data}
      />
    </>
  );
}
