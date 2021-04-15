import { Category } from './category';

export interface ReviewedCategory {
  id?: number;
  category: Category;
  rank: number;
  category_nodes: CategoryNode[];
}
export interface CategoryNode {
  id?: number;
  description: string;
  answer_type: string;
}
