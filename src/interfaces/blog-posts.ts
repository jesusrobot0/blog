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
  content: Content[];
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  realeaseDate: Date;
  cover: Cover;
  author: Author;
  categories: Categories;
  mainImage: Cover;
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
  width: number | null;
  height: number | null;
  formats: Formats | null;
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
