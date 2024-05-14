import {
  FancyLink,
  HeroWithCategoryList,
  PostList,
  Wrapper,
} from "@/components";
import { getBlogCategories } from "@/services";
import { getBlogPosts } from "@/services";

export default async function BlogPage() {
  const { data: BlogCategories, meta } = await getBlogCategories();
  const { data: BlogPosts } = await getBlogPosts(1, 7);

  return (
    <>
      <HeroWithCategoryList
        title="Sharing is caring so we make time to write about our experience."
        URLSegment="blog"
        dataList={BlogCategories}
        totalPages={meta.pagination.total}
      />
      <Wrapper className="mb-[60px]">
        <PostList dataPosts={BlogPosts} />
        <FancyLink href="/blog/category/all" text="View All Blogs" />
      </Wrapper>
    </>
  );
}
