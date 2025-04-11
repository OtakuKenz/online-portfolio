import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme-icons',
  imports: [CommonModule],
  templateUrl: './theme-icons.component.html',
  styleUrl: './theme-icons.component.scss'
})
export class ThemeIconsComponent {
  @Input() includeLabel: boolean = false;
  @Input() theme: 'dark' | 'light' | 'auto' = 'auto';
}
