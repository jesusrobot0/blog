export interface CategoryData {
  data: CategoryDatum[];
  meta: Meta;
}

export interface CategoryDatum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  slug: string;
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
