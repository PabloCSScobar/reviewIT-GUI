import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post, PostDetail, PostNew } from '../models/post';
import { PostUser } from '../models/post-user';
import { UserRankNode } from '../models/user_rank_node';
import { environment as env } from '../../../environments/environment';
import { PostList } from '../models/post_list';
import { Category } from '../models/category';
import { Pagination } from '../models/pagination';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  pagination = new BehaviorSubject<Pagination>(null);
  categories = new BehaviorSubject<Category[]>([]);
  posts = new BehaviorSubject<Post[]>([]);
  ordering = 'date'; //default order
  categoryFilter = null;
  constructor(private http: HttpClient, private router: Router) {}

  getPost(id) {
    return this.http.get<PostDetail>(`${env.apiUrl}/posts/${id}`);
  }

  getPosts(page = 1) {
    return this.http
      .get<PostList>(`${env.apiUrl}/posts/`, {
        params: {
          page: `${page}`,
          ordering: this.ordering,
          ...(this.categoryFilter && { category: this.categoryFilter }), //add category param only if categoryFilter !=null
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
    return this.http.get<UserRankNode[]>('./assets/mock_data/top-users.json');
  }

  setOrdering(ordering: string) {
    this.ordering = ordering;
    this.getPosts();
  }

  setCategoryFilter(category: string) {
    this.categoryFilter = category;
    this.getPosts();
  }
}
