import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from '../../models/category';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  constructor(private postService: PostService) {}

  categories: Category[];

  newPostForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    page_link: new FormControl(''),
    repo_link: new FormControl(''),
    categories: new FormControl([]),
  });

  getCategories() {
    this.postService.categories.subscribe((c) => (this.categories = c));
  }

  createPost() {
    console.log(this.newPostForm);
  }
  ngOnInit(): void {
    this.getCategories();
  }
}
