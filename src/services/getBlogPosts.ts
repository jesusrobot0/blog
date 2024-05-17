import { BlogPosts } from "@/interfaces";

export async function getBlogPosts(
  page: number,
  take: number,
  category: string
): Promise<BlogPosts> {
  const base = "https://blog-api-dashboard-production.up.railway.app";
  const categoryFilter =
    category && category !== "all"
      ? `filters[categories][slug][$eq]=${category}`
      : "";
  const pagination = `pagination[pageSize]=${take}&pagination[page]=${page}`;
  const endpoint = `${base}/api/publications?fields[0]=id&fields[1]=title&fields[2]=slug&fields[3]=publishedAt&populate[cover][fields][0]=url&populate[categories][fields][0]=name&populate[categories][fields][1]=slug&${categoryFilter}&${pagination}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}
