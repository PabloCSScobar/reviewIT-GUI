import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from '@postModels/answer';
import { PostDetail } from '@postModels/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})
export class AnswerComponent implements OnInit {
  constructor(private postService: PostService, private router: Router) {}

  @Input() answer: Answer;
  @Input() post: PostDetail;
  ngOnInit(): void {}

  changeAnswerStatus(status) {
    console.log(status);
    this.postService
      .changeAnswerStatus(status, this.answer.id, this.post.id)
  }

}
