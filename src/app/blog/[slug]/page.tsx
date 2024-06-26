import { getBlogPost, getBlogPosts } from "@/services";
import {
  ContentPost,
  DynamicContentPost,
  HeaderPost,
  RelatedPosts,
} from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogs = await getBlogPosts({ category: "all" });
  const slugs = blogs.data.map((blog) => ({
    slug: blog.attributes.slug,
  }));
  return slugs;
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
      <DynamicContentPost content={post.attributes.content} />
      <RelatedPosts relatedPosts={relatedPosts} />
    </div>
  );
}
