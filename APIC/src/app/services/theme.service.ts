import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private storageKey = 'theme';

  constructor() {
    this.applyStoredTheme();
  }

  toggle(): void {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    const nextTheme = isDark ? 'light' : 'dark';
    html.classList.toggle('dark', nextTheme === 'dark');
    localStorage.setItem(this.storageKey, nextTheme);
  }

  applyStoredTheme(): void {
    const saved = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  useSystem(): void {
    localStorage.removeItem(this.storageKey);
    this.applyStoredTheme();
  }

  getTheme(): 'light' | 'dark' {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }
}
