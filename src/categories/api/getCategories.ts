import { Categories } from "../interfaces";

export async function getCategories(): Promise<Categories> {
  const endpoint =
    "https://blog-api-dashboard-production.up.railway.app/api/categories?[fields][0]=name&[fields][1]=slug&populate[publications][fields][0]=id";
  const response = await fetch(endpoint, { next: { revalidate: 10 } });
  const data = await response.json();

  return data;
}
