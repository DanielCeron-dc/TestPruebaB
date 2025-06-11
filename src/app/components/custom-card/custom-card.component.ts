import { Component } from '@angular/core';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { CustomCheckboxComponent } from '../custom-checkbox/custom-checkbox.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-card-custom',
  standalone: true,
  imports: [
    CustomHeaderComponent,
    CustomInputComponent,
    CustomCheckboxComponent,
    CustomButtonComponent,
  ],
  templateUrl: './custom-card.component.html',
})
export class CardCustomComponent {
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
    alert('❌ Creación cancelada');
  }

}
