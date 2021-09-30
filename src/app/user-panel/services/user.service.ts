import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';
import { Answer } from '@userModels/answer.ts';
import { Post } from '@userModels/post.ts';
import { Profile } from '@userModels/profile.ts';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = new BehaviorSubject<Profile>(null);

  constructor(private http: HttpClient) {}

  getUsername() {
    return this.http
      .get<Profile>(`${env.apiUrl}/profile/get_profile_info`)
      .pipe(tap((res) => this.user.next(res)));
  }

  getPosts() {
    return this.http.get<Post[]>(`${env.apiUrl}/profile/posts`);
  }

  getAnswers() {
    return this.http.get<Answer[]>(`${env.apiUrl}/profile/answers`);
  }
}
