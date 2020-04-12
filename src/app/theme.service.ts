import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#455363',
  'background-color': '#1C1C28',
  'text-color': '#88899E',
  'text-shadow': 'none',
};

export const lightTheme = {
  'primary-color': '#fff',
  'background-color': '#eeeeee',
  'text-color': '#333',
  'text-shadow': '4px 4px 4px #aaa',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}