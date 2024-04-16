import { CategoriesCountDatum } from "@/categories/interfaces";
import { CategoryListItem } from "@/categories/components";

interface Props {
  URLSegment: string;
  categories: CategoriesCountDatum[];
}

export function CategoriesList({ URLSegment, categories }: Props) {
  const totalCount = categories.reduce((total, category) => {
    return total + category.attributes.publications.data.length;
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

        {categories.map((category) => (
          <CategoryListItem
            key={`hero-categoriesList-item-${category.id}`}
            slug={category.attributes.slug}
            name={category.attributes.name}
            URLSegment={URLSegment}
            categoryCount={category.attributes.publications.data.length}
          />
        ))}
      </ul>
    </nav>
  );
}
