import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category';
import { ReviewedCategory } from '../../models/reviewed_category';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css'],
})
export class NewAnswerComponent implements OnInit {
  constructor(private postService: PostService) {}

  _categories: Category[];
  @Input() set categories(c: Category[]) {
    this._categories = c;
    this.updateAvailableCategories();
  }

  available_categories: Category[];
  reviewed_categories: ReviewedCategory[] = [];

  newAnswerForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    reviewed_categories: new FormControl([], [Validators.required]),
  });

  showForm() {
    //
  }

  addCategory(categoryId: number) {
    this.reviewed_categories.push({
      category: this.getCategoryFromId(categoryId),
      rank: null,
      category_nodes: [],
    });
    this.updateAvailableCategories();
  }

  removeCategory(category: ReviewedCategory) {
    this.reviewed_categories = this.reviewed_categories.filter(
      (c) => c.category.id !== category.category.id
    );
    this.updateAvailableCategories();
  }
  isCategoryAvailable(id: number) {
    return !this.reviewed_categories.some((c) => c.category.id === id);
  }

  isEveryCategorySelected() {
    return this._categories.length === this.reviewed_categories.length;
  }

  getAvailableCategories() {
    const revieved_categories_id = this.reviewed_categories.map(
      (c) => c.category.id
    );
    return this._categories.filter(
      (c) => !revieved_categories_id.includes(c.id)
    );
  }

  getCategoryFromId(id: number) {
    return this._categories.filter((c) => c.id == id)[0];
  }

  updateAvailableCategories() {
    this.available_categories = this.getAvailableCategories();
  }

  ngOnInit(): void {}
}
