import { CategoryObject } from './category.model';

/* Category model*/
export interface Category {
  id: string;
  data: CategoryObject[];
  page: number;
  paging: {};
  per_page: number;
  total: number;
}

export interface CategoryObject {
  name: string;
  link: string;
}
