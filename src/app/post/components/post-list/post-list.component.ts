import { Component, OnInit } from '@angular/core';
import { Post } from '@postModels/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) {}

  getPosts() {
    this.postService.posts.subscribe((posts) => (this.posts = posts));
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
