import { CategoryListItem } from "@/components";
import { BlogCategoriesDatum, ProjectCategoriesDatum } from "@/interfaces";

interface Props {
  URLSegment: string;
  dataList: BlogCategoriesDatum[] | ProjectCategoriesDatum[];
  totalPosts: number;
}

function isCategories(data: any): data is BlogCategoriesDatum {
  return (data as BlogCategoriesDatum).attributes.publications !== undefined;
}

export function CategoriesList({ URLSegment, dataList, totalPosts }: Props) {
  return (
    <nav className="my-4">
      <ul className="flex flex-col gap-[11px] capitalize">
        <CategoryListItem
          slug={`all`}
          name={`All ${URLSegment}s`}
          URLSegment={URLSegment}
          categoryCount={totalPosts}
        />

        {dataList.map((category) => {
          if (category.attributes.name === "All Blogs") return;
          return (
            <CategoryListItem
              key={`hero-categoriesList-item-${category.id}`}
              slug={category.attributes.slug}
              name={category.attributes.name}
              URLSegment={URLSegment}
              categoryCount={
                isCategories(category)
                  ? category.attributes.publications.data.length
                  : category.attributes.projects.data.length
              }
            />
          );
        })}
      </ul>
    </nav>
  );
}
