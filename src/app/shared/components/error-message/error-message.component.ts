import { Component, Input } from '@angular/core';
import { MessageType } from "./error-message.const";
import { NgClass } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [
    NgClass,
    TranslateModule
  ],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {

  @Input()
  textKey: any;

  @Input()
  messageType: MessageType = 'info';

}
