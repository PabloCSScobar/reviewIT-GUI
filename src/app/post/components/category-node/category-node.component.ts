import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryNode } from '../../models/reviewed_category';

@Component({
  selector: 'app-category-node',
  templateUrl: './category-node.component.html',
  styleUrls: ['./category-node.component.css'],
})
export class CategoryNodeComponent implements OnInit {
  constructor() {}
  categoryNode: CategoryNode;
  answer_type = true; // true - advantage
  @Input() set value(val: CategoryNode) {
    this.categoryNode = val;
    this.setAnswerType(val.answer_type == 'advantage');
  }
  @Output() valueChange = new EventEmitter<CategoryNode>();

  setAnswerType(bool: boolean) {
    this.answer_type = bool;
    this.categoryNode.answer_type = bool ? 'advantage' : 'disanvantage';
    this.valueChange.emit(this.categoryNode);
  }

  onDescriptionBlur(value: string) {
    console.log('blur');
    this.valueChange.emit(this.categoryNode);
  }

  ngOnInit(): void {}
}
