export interface CategoriesCount {
  data: CategoriesCountDatum[];
  meta: Meta;
}

export interface CategoriesCountDatum {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name: string;
  slug: string;
  publications: Publications;
}

export interface Publications {
  data: PublicationsDatum[];
}

export interface PublicationsDatum {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
