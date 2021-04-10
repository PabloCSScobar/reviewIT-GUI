import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category';
import { PostNew } from '../../models/post';
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
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    page_link: new FormControl('', [Validators.required]),
    repo_link: new FormControl('', [Validators.required]),
    categories: new FormControl([], [Validators.required]),
  });

  getCategories() {
    this.postService.categories.subscribe((c) => (this.categories = c));
  }

  createPost() {
    console.log(this.newPostForm);
    if (
      this.newPostForm.pristine === false &&
      this.newPostForm.status === 'VALID'
    ) {
      const post: PostNew = this.newPostForm.value;
    }
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
