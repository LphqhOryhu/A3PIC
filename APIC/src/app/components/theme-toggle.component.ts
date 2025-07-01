import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {
  constructor(public theme: ThemeService) {}

  toggle() {
    this.theme.toggle();
  }

  isDark(): boolean {
    return this.theme.getTheme() === 'dark';
  }
}
