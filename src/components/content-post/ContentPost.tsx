import { Content } from "@/interfaces/blog-post";

interface Props {
  content: Content[];
}

export function ContentPost({ content }: Props) {
  return <div>ContentPost</div>;
}
