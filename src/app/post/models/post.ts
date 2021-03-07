import { PostService } from '../services/post.service';
import { Answer } from './answer';
import { PostUser } from './post-user';
import { PostActivity } from './post_activity';
import { PostCategory } from './post_category';

export interface Post {
  id: number;
  created_timestamp: number;
  title: string;
  page_link: string;
  repo_link: string;
  rank: number;
  number_of_answers: number;
  visits: number;
  has_top_answer: boolean;
  last_activity: PostActivity;
  categories: PostCategory[];
}

export interface PostDetail extends Post{
  description: string;
  answers: Answer[];
  author: PostUser;
}
