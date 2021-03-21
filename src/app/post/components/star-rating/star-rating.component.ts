import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  full: Array<number>;
  empty: Array<number>;
  constructor() { }

  @Input() img_x: number = 13;
  @Input() img_y: number = 13;
  @Input() set rank(val) {
    val = Math.floor(val);
      this.full = Array(val).fill(0);
      this.empty = Array(5-val).fill(0);
  }


  ngOnInit(): void {
    console.log(this.img_x)
  }

}
