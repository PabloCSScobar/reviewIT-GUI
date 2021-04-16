import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  static getValidationMessage(validator: string, validatorValue?: any) {
    const messages = {
      email: 'Enter a valid email address',
      passwordStrength:
        'Password must contain at least 8 characters, including upper/lowercase and numbers',
      passwordMatch: 'Passwords do not match',
      required: 'To pole jest wymagane',
      min: `Minimalna wartość dla tego pola to ${validatorValue.min}`,
      max: `Maksymalna wartość dla tego pola to ${validatorValue.max}`,
      oneRequired: 'At least one field is required',
      minlength: `Wymagane jest podanie minimum ${validatorValue.requiredLength} znaków`,
      maxlength: `Max length is ${validatorValue.requiredLength} characters`,
      startsWith: `This field must start with ${validatorValue}`,
      digits: 'This field must be a digit',
    };

    return messages[validator];
  }
}
