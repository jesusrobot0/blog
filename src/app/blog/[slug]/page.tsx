import { getBlogPost, getBlogPosts } from "@/services";
import { HeaderPost, RelatedPosts } from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params: { slug } }: Props) {
  const post = await getBlogPost({ slug });
  const category = post.attributes.categories.data[0].attributes.slug!;
  const { data: relatedPosts } = await getBlogPosts({
    category,
    take: 2,
    page: 1,
  });
  return (
    <div>
      <HeaderPost post={post} />
      <RelatedPosts relatedPosts={relatedPosts} />
    </div>
  );
}
