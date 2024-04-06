import { PublicationsResponse } from "./interface";

async function getPublications(): Promise<PublicationsResponse> {
  const endpoint =
    "https://blog-api-dashboard-production.up.railway.app/api/publications";
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}

export default async function Home() {
  const publications = await getPublications();
  console.log(publications.data);

  return (
    <>
      {publications.data.map((publication) => (
        <h1>{publication.attributes.title}</h1>
      ))}
    </>
  );
}
