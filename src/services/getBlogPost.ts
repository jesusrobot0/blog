interface Args {
  slug: string;
}

export async function getBlogPost({ slug }: Args) {
  const base = "https://blog-api-dashboard-production.up.railway.app";
  const filter = `filters[slug][$eq]=${slug}`;
  const endpoint = `${base}/api/publications?${filter}&populate=*`;
  const response = await fetch(endpoint);
  const { data } = await response.json();

  return data[0];
}
