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

  markAnswerAsTop() {
    this.postService
      .markAnswerAsTop(this.answer)
      .subscribe(() => this.router.navigate([`post/${this.post.id}`]));
  }
}
