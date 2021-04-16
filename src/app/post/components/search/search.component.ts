import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs/operators';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  private searchSub$ = new Subject<string>();
  value = '';
  constructor(private postService: PostService) {}

  setFilter(filterValue: string) {
    this.searchSub$.next(filterValue);
  }

  clearSearch() {
    this.value = '';
    this.setFilter('');
  }

  search() {
    this.searchSub$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((string) => (this.postService.searchText = string))
        // filter((string) => string.length > 2)
      )
      .subscribe((filterValue: string) => {
        this.postService.getPosts();
      });
  }

  ngOnInit(): void {
    this.search();
  }
}
