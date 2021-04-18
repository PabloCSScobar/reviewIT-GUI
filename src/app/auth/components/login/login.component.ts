import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/shared/services/validation.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  registerMessage = false;
  errorMessage: HttpErrorResponse = null;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        () => {},
        (err) => {
          if (err instanceof HttpErrorResponse) {
            this.errorMessage = err;
          }
        }
      );
    } else {
      this.loginForm.markAsTouched();
    }
  }

  getQueryParams() {
    this.route.queryParams.subscribe((params) => {
      if (params.registered !== undefined && params.registered === true) {
        this.registerMessage = true;
      } else {
        this.registerMessage = false;
      }
    });
  }

  ngOnInit(): void {}
}
