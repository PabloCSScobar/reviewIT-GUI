import { Component, Input, OnInit } from '@angular/core';
import { Post } from '@postModels/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input() post: Post;

  ngOnInit(): void {
  }

}
