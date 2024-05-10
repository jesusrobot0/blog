import { HeroWithCategoryList, PostList } from "@/components";
import { getCategories } from "@/services";

export default async function BlogPage() {
  const { data } = await getCategories();

  return (
    <>
      <HeroWithCategoryList
        title="Sharing is caring so we make time to write about our experience."
        URLSegment="blog"
        dataList={data}
      />
      <PostList />
    </>
  );
}
