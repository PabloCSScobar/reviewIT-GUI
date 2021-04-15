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
  test: any;
  available_categories: Category[];
  reviewed_categories: ReviewedCategory[] = [];
  // reviewed_categories_arr: FormArray;
  _categories: Category[];
  newAnswerForm: FormGroup;

  @Input() set categories(c: Category[]) {
    this._categories = c;
    this.available_categories = c;
  }

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  addAnswer() {
    console.log(this.newAnswerForm.value);
  }

  addCategory(categoryId: number) {
    let categories = this.getReviewedCategoriesArr();
    categories.push(this.createCategoryItem(categoryId));
    this.updateAvailableCategories('remove', categoryId);
    console.log(this.newAnswerForm);
  }

  createCategoryItem(id): FormGroup {
    return this.formBuilder.group({
      category: this.getCategoryFromId(id),
      rank: new FormControl(null, [Validators.required]),
      category_nodes: this.formBuilder.array([]),
    });
  }

  createCategoryNodeItem(): FormGroup {
    return this.formBuilder.group({
      answer_type: new FormControl('advantage'),
      description: new FormControl('test desc'),
    });
  }

  removeCategory(index: number, categoryId: number) {
    let categories = this.getReviewedCategoriesArr();
    categories.removeAt(index);
    this.updateAvailableCategories('add', categoryId);
  }

  removeCategoryNode(categoryIndex: number, nodeIndex: number) {
    let categories = this.getReviewedCategoriesArr();
    categories['controls'][categoryIndex]['controls'].category_nodes.removeAt(
      nodeIndex
    );
  }

  addCategoryNode(categoryIndex: number) {
    let categories = this.getReviewedCategoriesArr();
    categories['controls'][categoryIndex]['controls'].category_nodes.push(
      this.createCategoryNodeItem()
    );
  }

  getCategoryFromId(id: number) {
    return this._categories.filter((c) => c.id == id)[0];
  }

  getReviewedCategoriesArr(): FormArray {
    return this.newAnswerForm.get('reviewed_categories') as FormArray;
  }

  updateAvailableCategories(method: string, categoryId) {
    if (method == 'add') {
      this.available_categories.push(this.getCategoryFromId(categoryId));
    }
    if (method == 'remove') {
      this.available_categories = this.available_categories.filter(
        (c) => c.id !== categoryId
      );
    }
  }

  ngOnInit(): void {
    this.newAnswerForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
      reviewed_categories: this.formBuilder.array([]),
    });
  }
}
