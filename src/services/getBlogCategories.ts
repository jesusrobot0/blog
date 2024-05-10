import { BlogCategories } from "@/interfaces";

export async function getBlogCategories(): Promise<BlogCategories> {
  const base = "https://blog-api-dashboard-production.up.railway.app";
  const endpoint = `${base}/api/categories?[fields][0]=name&[fields][1]=slug&populate[publications][fields][0]=id`;
  const response = await fetch(endpoint, { next: { revalidate: 10 } });
  const data = await response.json();
  return data;
}
