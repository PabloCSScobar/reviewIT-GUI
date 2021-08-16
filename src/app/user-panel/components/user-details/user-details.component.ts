import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from '@userModels/answer';
import { Post } from '@userModels/post';
import { Profile } from '@userModels/profile';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<Profile>;
  posts$: Observable<Post[]>;
  answers$: Observable<Answer[]>;
  constructor(private userService: UserService) {}

  getUser() {
    this.user$ = this.userService.getUsername();
  }

  getPosts() {
    this.posts$ = this.userService.getPosts();
  }

  getAnswers() {
    this.answers$ = this.userService.getAnswers();
  }

  ngOnInit(): void {
    this.getUser();
    this.getAnswers();
    this.getPosts();
  }
}
