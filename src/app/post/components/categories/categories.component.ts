import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  current_filter = null;
  categories = {
    seo: 'SEO',
    accesibility: 'Dostępność',
    rwd: 'Responsywność',
    code: 'Jakość kodu',
    design: 'Wygląd',
    performance: 'Wydajność',
  };
  constructor(private postService: PostService) {}

  setFilter(category: string) {
    if (this.current_filter == category) {
      this.current_filter = null;
    } else {
      this.current_filter = category;
    }
    this.postService.setCategoryFilter(this.current_filter);
  }

  isSelected(category) {
    return category == this.current_filter;
  }

  ngOnInit(): void {
    this.postService.categoryFilter.subscribe(
      (filter) => (this.current_filter = filter)
    );
  }
}
