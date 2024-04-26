interface Props {
  params: {
    slug: string;
  };
}
export default function ProjectCategoryPage({ params: { slug } }: Props) {
  return (
    <div>
      <h1>Project Category {slug}</h1>
    </div>
  );
}
