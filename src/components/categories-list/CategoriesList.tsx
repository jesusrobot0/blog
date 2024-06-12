import { CategoryListItem } from "@/components";
import { isCategories } from "@/utils";
import { BlogCategoriesDatum, ProjectCategoriesDatum } from "@/interfaces";

interface Props {
  URLSegment: string;
  dataList: BlogCategoriesDatum[] | ProjectCategoriesDatum[];
  totalPosts: number;
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
          // Evita renderizar la categoría "All Blogs" ya que esta se renderiza
          // de forma estática más arriba
          if (category.attributes.name === "All Blogs") return;

          // Evita renderizar categorías sin publicaciones asignadas
          // Este código solo se aplica a blog categories
          if (isCategories(category)) {
            if (category.attributes.publications.data.length === 0) return;
          }

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
