import { CategoryHeader, PostList, Wrapper } from "@/components";
import { getBlogPosts } from "@/services";

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogCategoryPage({ params: { slug } }: Props) {
  const { data: posts, meta } = await getBlogPosts(1, 7, slug);

  return (
    <Wrapper className="pt-[120px]">
      <CategoryHeader category={slug} postCount={meta.pagination.total} />
      <PostList dataPosts={posts} />
    </Wrapper>
  );
}
