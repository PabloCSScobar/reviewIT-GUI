import { PostUser } from "./post-user";
import { ReviewedCategory } from "./reviewed_category";

export interface Answer {
  id: number;
  author: PostUser;
  created_timestamp: number;
  rank: number;
  is_top_answer: boolean;
  description: string;
  reviewed_categories: ReviewedCategory[];
}
