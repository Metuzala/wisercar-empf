import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MessageType } from '../../shared/components/error-message/error-message.const';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  userForm: FormGroup & { submitted?: boolean };
  messageType: MessageType | undefined;
  textKey: string | undefined;


  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      workingExperience: new FormControl('', [Validators.required, this.numberValidator(1)]),
    });
  }

  private numberValidator(decimalPlaces: number = 1): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) return null;
      // if 2 places, then regex is /^\d+(\.\d{1,2})?$/
      if (!new RegExp(`^\\d+([\\.,]\\d{1,${decimalPlaces}})?$`).test(value)) return { workingExperience: true };
      return null;
    };
  }

  onSubmit(): void {
    this.userForm.submitted = true;
    if (this.userForm.invalid) {
      this.setErrorMessageType('error')
      return;
    }
    console.log('Form submitted!', this.userForm.value);
    this.setErrorMessageType('success');
    this.userForm.submitted = false;
    this.userForm.reset();
  }

  private setErrorMessageType(type: MessageType) {
    if (type === "info") {
      this.textKey = 'error-message.info';
      this.messageType = "info"
    } else if (type === 'success') {
      this.textKey = 'error-message.success';
      this.messageType = 'success';
    } else if (type === 'error') {
      this.textKey = 'error-message.error';
      this.messageType = 'error';
    } else {
      this.clearErrorMessageType();
    }
    setTimeout(() => this.clearErrorMessageType(), 5000);
  }

  private clearErrorMessageType(): void {
    this.textKey = undefined;
    this.messageType = undefined;
  }

  onReset(): void {
    this.userForm.reset();
    this.setErrorMessageType('info');
    this.userForm.submitted = false;
  }


}
