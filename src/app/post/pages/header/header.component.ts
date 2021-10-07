import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isAuthenticated: boolean;
  @Input() sidenav;

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
