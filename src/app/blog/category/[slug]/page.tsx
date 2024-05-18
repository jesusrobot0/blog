import { CategoryHeader, CategoryPosts, Wrapper } from "@/components";
import { getBlogPosts } from "@/services";

interface Props {
  params: {
    slug: string;
  };
  searchParams: {
    page: string;
  };
}

export default async function BlogCategoryPage({
  params: { slug: category },
  searchParams: { page },
}: Props) {
  const initialPage = Number(page) || 1;
  const paginationTake = 2; // TODO: Restablecer a 7 (para producción)
  const { data: posts, meta } = await getBlogPosts({
    page: initialPage,
    take: paginationTake,
    category,
  });
  const totalPosts = meta.pagination.total;
  const pageCount = meta.pagination.pageCount;

  return (
    <Wrapper className="pt-[120px]">
      <CategoryHeader category={category} totalPosts={totalPosts} />
      <CategoryPosts
        posts={posts}
        pageCount={pageCount}
        take={paginationTake}
      />
    </Wrapper>
  );
}
