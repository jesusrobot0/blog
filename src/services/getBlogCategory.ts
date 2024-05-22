import { CategoryData } from "@/interfaces";

interface Args {
  category: string;
}

export async function getBlogCategory({
  category,
}: Args): Promise<CategoryData> {
  const base = "https://blog-api-dashboard-production.up.railway.app";
  const categoryFilter = category ? `filters[slug][$eq]=${category}` : "";
  const endpoint = `${base}/api/categories?${categoryFilter}`;
  const response = await fetch(endpoint, { cache: "no-cache" });
  const data = await response.json();
  return data;
}
