import { PostCard } from "../post-card/PostCard";
import { Wrapper } from "../wrapper/Wrapper";
import { Post } from "@/interfaces";

const posts = [
  {
    title: "How to easly set your digital media budget",
    slug: "how-to-easly-set-your-digital-media-budget",
    releaseDate: "August 22, 2024",
    cover: "/post-image.jpeg",
    categories: [
      {
        name: "Branding",
        slug: "branding",
      },
      {
        name: "SEO",
        slug: "seo",
      },
    ],
  },
  {
    title: "How to easly set your digital media budget",
    slug: "how-to-easly-set-your-digital-media-budget",
    releaseDate: "August 22, 2024",
    cover: "/post-image.jpeg",
    categories: [
      {
        name: "Branding",
        slug: "branding",
      },
      {
        name: "SEO",
        slug: "seo",
      },
    ],
  },
  {
    title: "How to easly set your digital media budget",
    slug: "how-to-easly-set-your-digital-media-budget",
    releaseDate: "August 22, 2024",
    cover: "/post-image.jpeg",
    categories: [
      {
        name: "Branding",
        slug: "branding",
      },
      {
        name: "SEO",
        slug: "seo",
      },
    ],
  },
  {
    title: "How to easly set your digital media budget",
    slug: "how-to-easly-set-your-digital-media-budget",
    releaseDate: "August 22, 2024",
    cover: "/post-image.jpeg",
    categories: [
      {
        name: "Branding",
        slug: "branding",
      },
      {
        name: "SEO",
        slug: "seo",
      },
    ],
  },
  {
    title: "How to easly set your digital media budget",
    slug: "how-to-easly-set-your-digital-media-budget",
    releaseDate: "August 22, 2024",
    cover: "/post-image.jpeg",
    categories: [
      {
        name: "Branding",
        slug: "branding",
      },
      {
        name: "SEO",
        slug: "seo",
      },
    ],
  },
];

interface Props {
  dataPosts: Post[];
}

export function PostList({ dataPosts }: Props) {
  return (
    <main>
      <Wrapper>
        <div className="flex flex-col gap-[60px] [&>*:last-child]:border-b-0">
          {dataPosts.map((post) => (
            <PostCard key={post.attributes.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}
