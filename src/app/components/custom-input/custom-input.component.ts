import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() type: 'text' | 'textarea' | 'dropdown' = 'text';
  @Input() options: { value: string, text: string }[] = [];
  @Output() valueChange = new EventEmitter<string>();

  value: string = '';

  onValueChange() {
  this.valueChange.emit(this.value);
}
}
