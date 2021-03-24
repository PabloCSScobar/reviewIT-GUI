import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post, PostDetail } from '../models/post';
import { PostUser } from '../models/post-user';
import { UserRankNode } from '../models/user_rank_node';
import { environment as env}  from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {

  }


  getPost(id) {
    return this.http.get<PostDetail>(`${env.apiUrl}/posts/${id}`);
  }
  getPosts() {
    return this.http.get<any>(`${env.apiUrl}/posts/`).pipe(
      map(res => res.results)
    );
  }
  getTopUsers() {
    return this.http.get<UserRankNode[]>('./assets/mock_data/top-users.json');
  }
}
