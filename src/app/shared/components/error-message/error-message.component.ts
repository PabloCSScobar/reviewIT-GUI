import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent {
  constructor() {}

  @Input() control: FormGroup | FormControl;

  get errorMessage() {
    for (const key in this.control.errors) {
      if (this.control.errors.hasOwnProperty(key) && this.control.touched) {
        return ValidationService.getValidationMessage(
          key,
          this.control.errors[key]
        );
      }
    }

    return null;
  }
}
