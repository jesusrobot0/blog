import { getCategoriesCount } from "@/categories/api";
import Link from "next/link";

export async function CategoriesList() {
  const categories = await getCategoriesCount();
  return (
    <nav>
      <ul>
        {categories.data.map((category) => (
          <li>
            <Link href={`/category/${category.attributes.slug}`}>
              <span>{category.attributes.name}</span>
              <span>{category.attributes.publications.data.length}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
