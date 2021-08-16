import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-node',
  templateUrl: './category-node.component.html',
  styleUrls: ['./category-node.component.css'],
})
export class CategoryNodeComponent implements OnInit {
  constructor() {}
  @Input() node: FormGroup;

  ngOnInit(): void {}
}
