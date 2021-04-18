import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/custom-validators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  errorMessage: HttpErrorResponse = null;

  registerForm = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        CustomValidators.passwordStrength,
      ]),
      confirm_password: new FormControl('', Validators.required),
    },
    {
      validators: [CustomValidators.passwordMatch],
    }
  );

  constructor(private authService: AuthService) {}

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        () => {},
        (err) => {
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            this.errorMessage = err;
          }
        }
      );
    }
  }

  ngOnInit(): void {}
}
