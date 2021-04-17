import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

export class CustomValidators {
  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const repeatPassword = control.get('confirm_password');
    return password.value !== repeatPassword.value &&
      password.pristine === false &&
      repeatPassword.pristine === false
      ? { passwordMatch: true }
      : null;
  }

  static passwordStrength(control: FormControl): ValidationErrors | null {
    const hasNumber = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const lengthRange = /^.{8,30}$/.test(control.value);
    const valid = hasNumber && hasUpper && hasLower && lengthRange;
    if (!valid) {
      return { passwordStrength: true };
    }
    return null;
  }
  static email(control: FormControl): ValidationErrors | null {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(control.value).toLowerCase())) {
      return { email: true };
    }
    return null;
  }
}
