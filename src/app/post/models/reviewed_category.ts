export interface ReviewedCategory {
  id: number;
  name: string;
  rank: number;
  advantages: ReviewedCategoryNode[];
  disanvantages: ReviewedCategoryNode[];
}
export interface ReviewedCategoryNode {
  id: number;
  description: string;
}
