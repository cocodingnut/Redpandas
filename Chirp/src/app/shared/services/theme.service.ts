// theme.service.ts
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = 'lara-light-indigo'; // Default theme

  constructor(@Inject(DOCUMENT) private document: Document) { }

  setTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme + '.css';
      this.currentTheme = theme;
    }
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}
