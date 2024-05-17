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
  const initialPage = 1;
  const paginationPage = 7;
  const { data: posts, meta } = await getBlogPosts(
    initialPage,
    paginationPage,
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
        take={paginationPage}
      />
    </Wrapper>
  );
}
