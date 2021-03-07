import { Component, OnInit } from '@angular/core';
import { UserRankNode } from '../../models/user_rank_node';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-user-rank',
  templateUrl: './user-rank.component.html',
  styleUrls: ['./user-rank.component.css']
})
export class UserRankComponent implements OnInit {

  constructor(private postService: PostService) { }

  users: UserRankNode[];

  getTopUsers() {
    this.postService.getTopUsers().subscribe(users => this.users = users);
  }


  ngOnInit(): void {
    this.getTopUsers();
  }

}
