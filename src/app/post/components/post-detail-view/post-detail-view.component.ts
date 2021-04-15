import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
  onAnswerCreated() {
    this.getPost(this.post.id);
  }
  ngOnInit(): void {
    this.getPostId();
  }
}
