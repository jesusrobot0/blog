import { CategoryListItem } from "@/components";
import { BlogCategoriesDatum } from "@/interfaces";
import { ProjectCategoriesDatum } from "@/interfaces";

interface Props {
  URLSegment: string;
  dataList: BlogCategoriesDatum[] | ProjectCategoriesDatum[];
  totalPages: number;
}

function isCategoriesDatum(data: any): data is BlogCategoriesDatum {
  return (data as BlogCategoriesDatum).attributes.publications !== undefined;
}

export function CategoriesList({ URLSegment, dataList, totalPages }: Props) {
  return (
    <nav className="my-4">
      <ul className="flex flex-col gap-[11px] capitalize">
        <CategoryListItem
          slug={`all`}
          name={`All ${URLSegment}s`}
          URLSegment={URLSegment}
          categoryCount={totalPages}
        />

        {dataList.map((category) => (
          <CategoryListItem
            key={`hero-categoriesList-item-${category.id}`}
            slug={category.attributes.slug}
            name={category.attributes.name}
            URLSegment={URLSegment}
            categoryCount={
              isCategoriesDatum(category)
                ? category.attributes.publications.data.length
                : category.attributes.projects.data.length
            }
          />
        ))}
      </ul>
    </nav>
  );
}
