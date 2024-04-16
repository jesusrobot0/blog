import { Services } from "../interfaces";

export async function getServices(): Promise<Services> {
  const endpoint =
    "https://blog-api-dashboard-production.up.railway.app/api/services?[fields][0]=name&[fields][1]=slug&populate[projects][fields][0]=id";
  const response = await fetch(endpoint, { next: { revalidate: 10 } });
  const data = await response.json();

  return data;
}
