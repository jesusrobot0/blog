import { Content } from "@/interfaces/blog-posts";

interface Props {
  content: Content[];
}

export function ContentPost({ content }: Props) {
  console.log(content);
  return <div>ContentPost</div>;
}
