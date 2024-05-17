"use server";

import { getBlogPosts } from "@/services";

interface Args {
  category: string;
  take: number;
  page: number;
}

export async function getBlogPostsbyCategory({ page, take, category }: Args) {
  const posts = await getBlogPosts({ page, take, category });
  return posts;
}
