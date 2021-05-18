import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../../models/profile';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {
  username: Observable<string> = null;

  constructor(private userService: UserService) {}

  getUsername() {
    this.username = this.userService
      .getUsername()
      .pipe(map((res) => res.username));
  }
  ngOnInit(): void {
    this.getUsername();
  }
}
