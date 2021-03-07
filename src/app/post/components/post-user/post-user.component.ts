import { Component, Input, OnInit } from '@angular/core';
import { PostUser } from '../../models/post-user';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {

  constructor() { }

  @Input() user: PostUser;


  ngOnInit(): void {
  }

}
