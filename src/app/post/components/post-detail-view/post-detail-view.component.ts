import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from 'src/app/user-panel/services/user.service';
import { PostDetail } from '@postModels/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail-view',
  templateUrl: './post-detail-view.component.html',
  styleUrls: ['./post-detail-view.component.css'],
})
export class PostDetailViewComponent implements OnInit {
  constructor(
    private postService: PostService,
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  routeSub: Subscription;
  post: PostDetail;
  isAuthenticated = false;
  isOwnPost = false;
  isAnswerProvided = false;

  getPost(id: number) {
    this.postService.getPost(id);
  }

  updatePostData() {
    this.postService.currentPost.subscribe((post) => {
      this.post = post;
      this.checkIfAnswerProvided();
    });
  }

  getPostId() {
    this.routeSub = this.route.params.subscribe((params) =>
      this.getPost(params['id'])
    );
  }

  checkIfAuthenticated() {
    console.debug('User authenticated: ', this.authService.isAuthenticated())
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  checkIfAnswerProvided() {
    let loggedUser = this.userService.user.getValue();
    let answers = this.post.answers.filter(
      (answer) => answer.author.id == loggedUser.id
    );
    this.isAnswerProvided = answers.length > 0;
    console.debug('Is answer provided:', this.isAnswerProvided)
  }

  checkPostAuthor() {
    this.isOwnPost = this.postService.isLoggedUser(this.post.author.id);
    console.debug('Is own post', this.isOwnPost);
  }

  newAnswerCreated() {
    this.postService.getPost(this.post.id);
  }

  ngOnInit(): void {
    this.post = this.route.snapshot.data['post'];
    console.debug('Opening post details...', this.post)
    this.updatePostData();
    this.checkIfAuthenticated();
    this.checkPostAuthor();
  }
}
