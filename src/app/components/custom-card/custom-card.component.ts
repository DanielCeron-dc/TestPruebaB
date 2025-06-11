// src/app/card-custom/custom-card.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { CustomCheckboxComponent } from '../custom-checkbox/custom-checkbox.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-card-custom',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CustomHeaderComponent,
    CustomInputComponent,
    CustomCheckboxComponent,
    CustomButtonComponent,
  ],
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CardCustomComponent {
  @Output() close = new EventEmitter<void>();

  nombre = '';
  descripcion = '';
  estado = '';
  implementacionObligatoria = false;

  estados = [
    { value: '1', text: 'Activo' },
    { value: '2', text: 'Inactivo' },
  ];

  crear() {
    alert(
      `✅ Medición creada:\n\nNombre: ${this.nombre}\nDescripción: ${this.descripcion}\nEstado: ${this.estado}\nImplementación obligatoria: ${this.implementacionObligatoria ? 'Sí' : 'No'}`
    );
  }

  cancelar() {
    this.close.emit();
  }
}