import { Pagination } from './pagination';
import { Post } from './post';

export interface PostList {
  results: Post[];
  pagination: Pagination;
}
