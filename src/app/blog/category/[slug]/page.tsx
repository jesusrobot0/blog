import { CategoryHeader, CategoryPosts, Wrapper } from "@/components";
import { getBlogPosts } from "@/services";

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogCategoryPage({
  params: { slug: category },
}: Props) {
  const INITIAL_PAGE = 1;
  const PAGINATION_TAKE = 7;
  const { data: posts, meta } = await getBlogPosts(
    INITIAL_PAGE,
    PAGINATION_TAKE,
    category
  );
  const totalPosts = meta.pagination.total;
  const pageCount = meta.pagination.pageCount;

  return (
    <Wrapper className="pt-[120px]">
      <CategoryHeader category={category} totalPosts={totalPosts} />
      <CategoryPosts
        posts={posts}
        pageCount={pageCount}
        take={PAGINATION_TAKE}
      />
    </Wrapper>
  );
}
