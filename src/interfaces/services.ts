export interface Services {
  data: ServicesDatum[];
  meta: Meta;
}

export interface ServicesDatum {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name: string;
  slug: string;
  projects: Projects;
}

export interface Projects {
  data: ProjectsDatum[];
}

export interface ProjectsDatum {
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
