import { Component, Input, OnInit } from '@angular/core';
import { PostUser } from '../../models/post-user';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-answer-user',
  templateUrl: './answer-user.component.html',
  styleUrls: ['./answer-user.component.css'],
})
export class AnswerUserComponent implements OnInit {
  constructor(private postService: PostService) {}

  @Input() user: PostUser;
  @Input() isTopAnswer: boolean;
  @Input() postAuthor: PostUser;

  isOwnPost() {
    return this.postService.isOwnPost(this.postAuthor.id);
  }

  ngOnInit(): void {}
}
