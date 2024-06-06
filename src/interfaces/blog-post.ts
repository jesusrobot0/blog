export interface BlogPost {
  data: BlogPostDatum[];
  meta: Meta;
}

export interface BlogPostDatum {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  content: Content[];
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  cover: Cover;
  author: Author;
  categories: Categories;
}

export interface Author {
  data: DAT;
}

export interface DAT {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  slug?: string;
}

export interface Categories {
  data: DAT[];
}

export interface Content {
  type: string;
  children: Child[];
}

export interface Child {
  text: string;
  type: string;
}

export interface Cover {
  data: Data;
}

export interface Data {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  small: Small;
  thumbnail: Small;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
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
