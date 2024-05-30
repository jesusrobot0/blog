import { BlogCategoriesDatum } from "@/interfaces";

export function isCategories(data: any): data is BlogCategoriesDatum {
  return (data as BlogCategoriesDatum).attributes.publications !== undefined;
}
