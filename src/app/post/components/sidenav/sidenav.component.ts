import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isAuthenticated: boolean;
  @Input() sidenav;
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
