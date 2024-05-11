import { PostCard } from "../post-card/PostCard";
import { Wrapper } from "../wrapper/Wrapper";

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

export function PostList() {
  return (
    <main>
      <Wrapper>
        <div className="my-[60px] flex flex-col gap-[60px] [&>*:last-child]:border-b-0">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}
