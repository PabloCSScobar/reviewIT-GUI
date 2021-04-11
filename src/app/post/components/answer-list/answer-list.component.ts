import { Component, Input, OnInit } from '@angular/core';
import { Answer } from '../../models/answer';
import { Category } from '../../models/category';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css'],
})
export class AnswerListComponent implements OnInit {
  constructor() {}
  @Input() answers: Answer[];
  @Input() categories: Category[];

  ngOnInit(): void {}
}
