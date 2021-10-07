import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-sidenav-filter',
  templateUrl: './sidenav-filter.component.html',
  styleUrls: ['./sidenav-filter.component.css'],
})
export class SidenavFilterComponent implements OnInit {
  ordering = {
    date: 'date',
    rank: 'rank',
    visits: 'visits',
    answers: 'answers',
    posts_with_no_answer: 'noanswer',
  };

  //set default ordering
  selected_ordering = this.ordering.date;
  isActive = false;

  constructor(private postService: PostService) {}

  setSorting(key) {
    this.selected_ordering = key;
    this.postService.setOrdering(key);
  }

  ngOnInit(): void {
    console.log('test');
  }
}
