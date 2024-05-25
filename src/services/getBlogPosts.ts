import { BlogPosts } from "@/interfaces";

interface Args {
  page: number;
  take: number;
  sort: string;
  category: string;
}

function getSortQueryParameter(sort: string) {
  if (sort === "newest") {
    return "sort[0]=publishedAt:desc"; // Ordenar de más reciente a más antiguo
  } else if (sort === "oldest") {
    return "sort[0]=publishedAt:asc"; // Ordenar de más antiguo a más reciente
  } else if (sort === "az") {
    return "sort[0]=title:asc"; // Ordenar de A a Z
  } else if (sort === "za") {
    return "sort[0]=title:desc"; // Ordenar de Z a A
  } else if (!sort) {
    return "sort[0]=publishedAt:desc"; // Valor por defecto en caso de que no se especifique un criterio de ordenación válido
  }
}

export async function getBlogPosts({
  page,
  take,
  sort,
  category,
}: Args): Promise<BlogPosts> {
  const base = "https://blog-api-dashboard-production.up.railway.app";
  const categoryFilter =
    category && category !== "all"
      ? `filters[categories][slug][$eq]=${category}`
      : "";
  const categorySorting = getSortQueryParameter(sort);
  const pagination = `pagination[pageSize]=${take}&pagination[page]=${page}`;
  const endpoint = `${base}/api/publications?fields[0]=id&fields[1]=title&fields[2]=slug&fields[3]=publishedAt&populate[cover][fields][0]=url&populate[categories][fields][0]=name&populate[categories][fields][1]=slug&${categoryFilter}&${pagination}&${categorySorting}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}
