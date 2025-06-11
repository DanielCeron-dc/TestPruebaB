import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-checkbox.component.html',
})
export class CustomCheckboxComponent {
  @Input() title: string = 'Configuración especial';
  @Input() label: string = 'Implementación obligatoria';

  @Output() checkboxChange = new EventEmitter<boolean>();

  isChecked = false;

  onChange() {
    this.checkboxChange.emit(this.isChecked);
  }
}
