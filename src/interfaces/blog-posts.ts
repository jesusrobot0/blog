export interface BlogPosts {
  data: Post[];
  meta: Meta;
}

export interface Post {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  slug: string;
  publishedAt: Date;
  categories: Categories;
  cover: Cover;
}

export interface Categories {
  data: CategoriesDatum[];
}

export interface CategoriesDatum {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  slug: string;
}

export interface Cover {
  data: Data;
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
