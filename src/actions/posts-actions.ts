"use server";

import { getBlogPosts } from "@/services";

interface Args {
  category: string;
  page: number;
}

export async function getBlogPostsbyCategory({ category, page }: Args) {
  const posts = await getBlogPosts(page, 1, category);
  return posts;
}
