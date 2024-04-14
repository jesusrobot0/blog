import { getCategoriesCount } from "@/categories/api";

export default async function BlogPage() {
  const categoriesCount = await getCategoriesCount();
  return (
    <div>
      <header></header>
    </div>
  );
}
