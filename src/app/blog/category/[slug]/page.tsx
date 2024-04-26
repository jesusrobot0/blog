interface Props {
  params: {
    slug: string;
  };
}
export default function BlogCategoryPage({ params: { slug } }: Props) {
  return (
    <div>
      <h1>Blog Category {slug}</h1>
    </div>
  );
}
