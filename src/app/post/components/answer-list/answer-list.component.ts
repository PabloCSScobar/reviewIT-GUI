import { Component, Input, OnInit } from '@angular/core';
import { Answer } from '../../models/answer';
import { Category } from '../../models/category';
import { PostDetail } from '../../models/post';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css'],
})
export class AnswerListComponent implements OnInit {
  constructor() {}
  @Input() post: PostDetail;

  ngOnInit(): void {}
}
