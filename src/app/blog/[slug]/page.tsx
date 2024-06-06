import { getBlogPost } from "@/services";
import { HeaderPost } from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params: { slug } }: Props) {
  const post = await getBlogPost({ slug });

  return (
    <div>
      <HeaderPost post={post} />
    </div>
  );
}
