import { getBlogPost, getBlogPosts } from "@/services";
import { ContentPost, HeaderPost, RelatedPosts } from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params: { slug } }: Props) {
  const post = await getBlogPost({ slug });
  const { data: relatedPosts } = await getBlogPosts({
    category: post.attributes.categories.data[0].attributes.slug!,
    take: 2,
    page: 1,
  });

  return (
    <div>
      <HeaderPost post={post} />
      <ContentPost content={post.attributes.content} />
      <RelatedPosts relatedPosts={relatedPosts} />
    </div>
  );
}
