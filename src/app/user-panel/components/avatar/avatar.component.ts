import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {
  username: Observable<any> = null;

  constructor(private userService: UserService) {}

  getUsername() {
    this.username = this.userService.getUsername();
  }
  ngOnInit(): void {
    this.getUsername();
  }
}
