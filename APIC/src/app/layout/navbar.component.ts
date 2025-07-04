import {Component, EventEmitter, Output} from '@angular/core';
import {ThemeToggleComponent} from '../components/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
}
