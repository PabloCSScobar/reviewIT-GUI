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

  getPost(id: number) {
    this.postService.getPost(id);
  }

  updatePostData() {
    this.postService.currentPost.subscribe((post) => (this.post = post));
  }

  getPostId() {
    this.routeSub = this.route.params.subscribe((params) =>
      this.getPost(params['id'])
    );
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  isAnswerProvided() {
    let loggedUser = this.userService.user.getValue();
    let answers = this.post.answers.filter(
      (answer) => answer.author.id == loggedUser.id
    );
    if (answers.length) {
      return true;
    }
    return false;
  }

  isOwnPost() {
    return this.postService.isOwnPost(this.post.author.id);
  }

  newAnswerCreated() {
    this.postService.getPost(this.post.id);
  }

  ngOnInit(): void {
    this.getPostId();
    this.updatePostData();
  }
}
