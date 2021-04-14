import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { Category } from '../../models/category';
import { ReviewedCategory } from '../../models/reviewed_category';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css'],
})
export class NewAnswerComponent implements OnInit {
  available_categories: Category[];
  reviewed_categories: ReviewedCategory[] = [];
  _categories: Category[];
  newAnswerForm: FormGroup;

  @Input() set categories(c: Category[]) {
    this._categories = c;
    this.updateAvailableCategories();
  }

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  showForm() {}

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

  removeCategoryNode(category: ReviewedCategory, nodeIndex: number) {
    this.reviewed_categories = this.reviewed_categories.map((c) => {
      if (c.category.id !== category.category.id) {
        return c;
      } else {
        c.category_nodes.splice(nodeIndex, 1);
        return c;
      }
    });
  }

  addCategoryNode(category: ReviewedCategory) {
    console.log(category);
    let categoryNodes = category.category_nodes;
    categoryNodes.push({ answer_type: 'advantage', description: '' });
    this.reviewed_categories = this.reviewed_categories.map((c) =>
      c.category.id === category.id
        ? ({ ...c, category_nodes: categoryNodes } as ReviewedCategory)
        : c
    );
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

  ngOnInit(): void {
    this.newAnswerForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
      reviewed_categories: this.formBuilder.array([]),
    });
  }
}
