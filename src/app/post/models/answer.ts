import { PostUser } from './post-user';
import { ReviewedCategory } from './reviewed_category';

export interface Answer {
  id?: number;
  author: PostUser;
  created?: string;
  rank: number;
  is_top_answer?: boolean;
  description: string;
  post?: number;
  reviewed_categories: ReviewedCategory[];
}
