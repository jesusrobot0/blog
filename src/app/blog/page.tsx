import {
  FancyLink,
  HeroWithCategoryList,
  PostList,
  Wrapper,
} from "@/components";
import { getBlogCategories } from "@/services";
import { getBlogPosts } from "@/services";

export default async function BlogPage() {
  const initialPage = 1;
  const paginationPage = 7;
  const { data: BlogCategories } = await getBlogCategories();
  const { data: BlogPosts, meta } = await getBlogPosts({
    page: initialPage,
    take: paginationPage,
    sort: "newest",
    category: "all",
  });
  const totalPosts = meta.pagination.total;

  return (
    <>
      <HeroWithCategoryList
        title="Sharing is caring so we make time to write about our experience."
        URLSegment="blog"
        dataList={BlogCategories}
        totalPosts={totalPosts}
      />
      <Wrapper className="mb-[60px]">
        <PostList dataPosts={BlogPosts} />
        <FancyLink href="/blog/category/all" text="View All Blogs" />
      </Wrapper>
    </>
  );
}
