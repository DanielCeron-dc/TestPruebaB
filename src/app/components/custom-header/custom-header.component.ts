import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
}
