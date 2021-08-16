import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post, PostDetail, PostNew } from '@postModels/post';
import { PostUser } from '@postModels/post-user';
import { UserRankNode } from '@postModels/user_rank_node';
import { environment as env } from '../../../environments/environment';
import { PostList } from '@postModels/post_list';
import { Category } from '@postModels/category';
import { Pagination } from '@postModels/pagination';
import { Router } from '@angular/router';
import { Answer } from '@postModels/answer';
import { UserService } from 'src/app/user-panel/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  pagination = new BehaviorSubject<Pagination>(null);
  categories = new BehaviorSubject<Category[]>([]);
  posts = new BehaviorSubject<Post[]>([]);
  currentPost = new BehaviorSubject<PostDetail>(null);
  ordering = 'date'; //default order
  categoryFilter = null;
  searchText;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  getPost(id) {
    this.http
      .get<PostDetail>(`${env.apiUrl}/posts/${id}`)
      .pipe(tap((res) => this.currentPost.next(res)))
      .toPromise();
  }

  getPosts(page = 1) {
    return this.http
      .get<PostList>(`${env.apiUrl}/posts/`, {
        params: {
          page: `${page}`,
          ordering: this.ordering,
          ...(this.categoryFilter && { category: this.categoryFilter }), //add category param only if categoryFilter !=null
          ...(this.searchText &&
            this.searchText != '' && { search: this.searchText }), //add searchtext param only if search !=null and not empty
        },
      })
      .pipe(tap((res) => this.pagination.next(res.pagination)))
      .pipe(tap((res) => this.posts.next(res.results)))
      .toPromise();
  }

  addPost(post: PostNew) {
    return this.http
      .post<PostNew>(`${env.apiUrl}/posts/`, post)
      .pipe(tap((res) => this.router.navigate([`post/${res.id}`])))
      .toPromise();
  }

  addAnswer(answer: Answer) {
    return this.http.post<Answer>(`${env.apiUrl}/answers/`, answer);
  }

  getCategories() {
    return this.http
      .get<Category[]>(`${env.apiUrl}/categories/`)
      .pipe(tap((res) => this.categories.next(res)))
      .pipe(tap(console.log))
      .toPromise();
  }

  //todo service auth i pobieranie id z obiektu zalogowanego usera
  getLoggedUserId() {
    return 1;
  }

  getTopUsers() {
    return this.http.get<UserRankNode[]>(`${env.apiUrl}/profile/ranking`);
  }

  setOrdering(ordering: string) {
    this.ordering = ordering;
    this.getPosts();
  }

  setCategoryFilter(category: string) {
    this.categoryFilter = category;
    this.getPosts();
  }

  markAnswerAsTop(answer: Answer) {
    return this.http.put<Answer>(
      `${env.apiUrl}/answers/${answer.id}/mark_as_top/`,
      {
        is_top_answer: true,
      }
    );
  }

  isOwnPost(authorId: number) {
    let loggedUser = this.userService.user.getValue();
    return authorId == loggedUser.id;
  }
}
