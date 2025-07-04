import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './layout/navbar.component';
import {SidebarComponent} from './layout/sidebar.component';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, NgClass, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'APIC';

  sidebarOpen = false;
  isMobileScreen = window.innerWidth < 768;

  @HostListener('window:resize')
  onResize() {
    this.isMobileScreen = window.innerWidth < 768;
    if (!this.isMobileScreen) {
      this.sidebarOpen = false; // sécurité : ferme la sidebar si on repasse en desktop
    }
  }

  isMobile(): boolean {
    return this.isMobileScreen;
  }
}
