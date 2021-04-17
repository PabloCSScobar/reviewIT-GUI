import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/shared/services/validation.service';
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

  constructor(private route: ActivatedRoute) {}

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm);
    }
  }

  ngOnInit(): void {}
}
