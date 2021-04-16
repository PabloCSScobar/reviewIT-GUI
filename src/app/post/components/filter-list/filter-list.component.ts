import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css'],
})
export class FilterListComponent implements OnInit {
  ordering = {
    date: 'date',
    rank: 'rank',
    visits: 'visits',
    answers: 'answers',
    posts_with_no_answer: 'noanswer',
  };
  //set default ordering
  selected_ordering = this.ordering.date;

  constructor(private postService: PostService, public router: Router) {}

  setSorting(key) {
    this.selected_ordering = key;
    this.postService.setOrdering(key);
  }

  isActive(key) {
    return this.selected_ordering == key;
  }
  ngOnInit(): void {}
}
