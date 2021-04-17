import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  static getValidationMessage(validator: string, validatorValue?: any) {
    const messages = {
      email: 'Wprowadź poprawny adres email',
      passwordStrength:
        'Hasło musi zawierać co najmniej 8 znaków, w tym mała/wielka literę oraz cyfrę',
      passwordMatch: 'Podane hasła się różnią',
      required: 'To pole jest wymagane',
      min: `Minimalna wartość dla tego pola to ${validatorValue.min}`,
      max: `Maksymalna wartość dla tego pola to ${validatorValue.max}`,
      oneRequired: 'At least one field is required',
      minlength: `Wymagane jest podanie minimum ${validatorValue.requiredLength} znaków`,
      maxlength: `Dopuszczelna ilość znaków to:  ${validatorValue.requiredLength}`,
      startsWith: `Pole musi rozpoczynać się od frazy ${validatorValue}`,
      digits: 'Dopuszczalne są tylko cyfry',
    };

    return messages[validator];
  }
}
