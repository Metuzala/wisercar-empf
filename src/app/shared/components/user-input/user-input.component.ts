import { CommonModule } from '@angular/common';
import { Component, Input, Type, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TranslateModule],
  templateUrl: './user-input.component.html'
})
export class UserInputComponent {

  @Input({ required: true }) name!: string;
  @Input({ required: false }) type: string = 'text'
  @Input({ required: true }) form!: FormGroup & { submitted?: boolean };

}
