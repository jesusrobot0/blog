export const revalidate = 60;
import { getCategoriesCount } from "@/categories/api";
import Link from "next/link";

export async function CategoriesList() {
  const categories = await getCategoriesCount();
  const totalBlogs = categories.data.reduce((total, category, index) => {
    return total + category.attributes.publications.data.length;
  }, 0);
  return (
    <nav className="my-4">
      <ul className="flex flex-col gap-[11px]">
        <li>
          <Link
            href={`/category/all-blogs`}
            className="text-xl flex items-center gap-3 tracking-wide antialiased group sm:text-2xl transition-colors duration-300"
          >
            <span className="text-[#d1c9c6] group-hover:text-white transition-colors duration-300">
              All Blogs
            </span>
            <span className="h-[22px] py-[2px] px-[10px] flex items-center rounded-3xl text-[16px] text-[#A4938C] group-hover:text-white group-hover:border-white sm:text-[18px] border border-[#A4938C] transition-colors duration-300">
              {totalBlogs}
            </span>
          </Link>
        </li>
        {categories.data.map((category) => (
          <li key={`hero-categoriesList-item-${category.id}`}>
            <Link
              href={`/category/${category.attributes.slug}`}
              className="text-xl flex items-center gap-3 tracking-wide antialiased group hover:text-white sm:text-2xl transition-colors duration-300"
            >
              <span className="text-[#d1c9c6] group-hover:text-white transition-colors duration-300">
                {category.attributes.name}
              </span>
              <span className="h-[22px] py-[2px] px-[10px] flex items-center rounded-3xl text-[16px] text-[#A4938C] group-hover:text-white group-hover:border-white sm:text-[18px] border border-[#A4938C] transition-colors duration-300">
                {category.attributes.publications.data.length}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
