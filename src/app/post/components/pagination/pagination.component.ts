import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../models/pagination';
import { PostService } from '../../services/post.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  paginationDetails: Pagination = null;

  constructor(private postService: PostService) {}

  getPaginationInfo() {
    this.postService.pagination.subscribe((p) => (this.paginationDetails = p));
  }

  setPage(e: PageEvent) {
    const page_number = e.pageIndex + 1; // PageEvent.pageIndex is indexed from 0
    this.postService.getPosts(page_number);
  }

  ngOnInit(): void {
    this.getPaginationInfo();
  }
}
