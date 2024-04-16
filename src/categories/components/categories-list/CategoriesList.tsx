import { CategoriesCountDatum } from "@/categories/interfaces";
import { CategoryListItem } from "@/categories/components";
import { ServicesDatum } from "@/projects/interfaces";

interface Props {
  URLSegment: string;
  dataList: CategoriesCountDatum[] | ServicesDatum[];
}

function isCategoriesCountDatum(data: any): data is CategoriesCountDatum {
  return (data as CategoriesCountDatum).attributes.publications !== undefined;
}

export function CategoriesList({ URLSegment, dataList }: Props) {
  const totalCount = dataList.reduce((total, item) => {
    if (isCategoriesCountDatum(item)) {
      return total + item.attributes.publications.data.length;
    } else {
      return total + item.attributes.projects.data.length;
    }
  }, 0);

  return (
    <nav className="my-4">
      <ul className="flex flex-col gap-[11px]">
        <CategoryListItem
          slug={`all-${URLSegment}s`}
          name="All Blogs"
          URLSegment={URLSegment}
          categoryCount={totalCount}
        />

        {dataList.map((category) => (
          <CategoryListItem
            key={`hero-categoriesList-item-${category.id}`}
            slug={category.attributes.slug}
            name={category.attributes.name}
            URLSegment={URLSegment}
            categoryCount={
              isCategoriesCountDatum(category)
                ? category.attributes.publications.data.length
                : category.attributes.projects.data.length
            }
          />
        ))}
      </ul>
    </nav>
  );
}
