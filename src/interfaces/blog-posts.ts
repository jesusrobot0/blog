export interface BlogPosts {
  data: BlogPostDatum[];
  meta: Meta;
}

export interface BlogPostDatum {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  realeaseDate: Date;
  content: Content[];
  cover: Cover;
  author: Author;
  categories: Categories;
  mainImage: MainImage;
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
  level?: number;
  children: ContentChild[];
  image?: Image;
  format?: string;
}

export interface ContentChild {
  text?: string;
  type: Type;
  children?: ChildChild[];
}

export interface ChildChild {
  text: string;
  type: Type;
}

export enum Type {
  ListItem = "list-item",
  Text = "text",
}

export interface Image {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number | null;
  height: number | null;
  caption: null;
  formats: ImageFormats | null;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
  previewUrl: null;
  alternativeText: null | string;
  provider_metadata: ProviderMetadata;
}

export interface ImageFormats {
  large: Small;
  small: Small;
  medium: Small;
  thumbnail: Small;
}

export interface Small {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata;
}

export enum EXT {
  Jpg = ".jpg",
}

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = "image",
}

export interface Cover {
  data: CoverData;
}

export interface CoverData {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: PurpleFormats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface PurpleFormats {
  small: Small;
  thumbnail: Small;
}

export interface MainImage {
  data: MainImageData;
}

export interface MainImageData {
  id: number;
  attributes: Image;
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
