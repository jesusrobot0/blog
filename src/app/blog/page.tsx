import { HeroWithCategoryList, PostList } from "@/components";
import { getBlogCategories } from "@/services";
import { getBlogPosts } from "@/services/getBlogPosts";

export default async function BlogPage() {
  const { data: BlogCategories } = await getBlogCategories();
  const { data: BlogPosts } = await getBlogPosts(1, 4);
  return (
    <>
      <HeroWithCategoryList
        title="Sharing is caring so we make time to write about our experience."
        URLSegment="blog"
        dataList={BlogCategories}
      />
      <PostList dataPosts={BlogPosts} />
    </>
  );
}
