import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post, PostDetail } from '../models/post';
import { PostUser } from '../models/post-user';
import { UserRankNode } from '../models/user_rank_node';
import { environment as env } from '../../../environments/environment';
import { PostList } from '../models/post_list';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  pagination = new BehaviorSubject(null);
  posts = new BehaviorSubject([]);
  ordering = 'date';
  constructor(private http: HttpClient) {}

  getPost(id) {
    return this.http.get<PostDetail>(`${env.apiUrl}/posts/${id}`);
  }
  getPosts(page = 1) {
    return this.http
      .get<PostList>(
        `${env.apiUrl}/posts/?page=${page}&ordering=${this.ordering}`
      )
      .pipe(tap((res) => this.pagination.next(res.pagination)))
      .pipe(tap((res) => this.posts.next(res.results)))
      .toPromise();
  }

  getTopUsers() {
    return this.http.get<UserRankNode[]>('./assets/mock_data/top-users.json');
  }

  setOrdering(ordering: string) {
    this.ordering = ordering;
    this.getPosts();
  }
}
