import { CategoryHeader, CategoryPosts, Wrapper } from "@/components";
import { getBlogCategory, getBlogPosts } from "@/services";

interface Props {
  params: {
    slug: string;
  };
  searchParams: {
    page: string;
    sortBy: string;
  };
}

export default async function BlogCategoryPage({
  params: { slug: category },
  searchParams: { page, sortBy },
}: Props) {
  const initialPage = Number(page) || 1;
  const paginationTake = 2; // TODO: Restablecer a 7 (para producción)

  const { data: posts, meta } = await getBlogPosts({
    page: initialPage,
    take: paginationTake,
    sort: sortBy,
    category,
  });

  const { data } = await getBlogCategory({ category });

  const categoryDescription = data[0]?.attributes.description;
  const totalPosts = meta?.pagination.total;
  const pageCount = meta?.pagination.pageCount;
  return (
    <Wrapper className="pt-[120px]">
      <CategoryHeader
        category={category}
        totalPosts={totalPosts}
        categoryDescription={categoryDescription}
      />
      <CategoryPosts posts={posts} pageCount={pageCount} category={category} />
    </Wrapper>
  );
}
