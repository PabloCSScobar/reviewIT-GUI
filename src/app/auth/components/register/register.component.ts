import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
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
  constructor() {}

  ngOnInit(): void {}
}
