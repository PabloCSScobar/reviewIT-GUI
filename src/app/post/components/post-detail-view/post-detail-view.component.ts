import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from 'src/app/user-panel/services/user.service';
import { PostDetail } from '../../models/post';
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
    this.postService.getPost(id).subscribe((post) => (this.post = post));
  }

  //params['id]
  getPostId() {
    this.routeSub = this.route.params.subscribe((params) =>
      this.getPost(params['id'])
    );
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  isAnswerProvided() {
    let user = this.userService.user.getValue();
    let answers = this.post.answers.filter(
      (answer) => answer.author.id == user.id
    );
    if (answers.length) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.getPostId();
  }
}
