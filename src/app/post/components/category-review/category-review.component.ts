import { Component, Input, OnInit } from '@angular/core';
import { ReviewedCategory } from '@postModels/reviewed_category';

@Component({
  selector: 'app-category-review',
  templateUrl: './category-review.component.html',
  styleUrls: ['./category-review.component.css']
})
export class CategoryReviewComponent implements OnInit {

  constructor() { }

  @Input() category: ReviewedCategory;
  ngOnInit(): void {
  }

}
