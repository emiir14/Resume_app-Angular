import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#bcdddd',
  'secundary-color': '#5dad85',
  'background-color': '#3e4049',
  'background-color2': '#555770',
  'text-color': '#EEEEEE',
  'img-darkening': 'brightness(80%)',
};

export const lightTheme = {
  'primary-color': '#73DFE7',
  'secundary-color': '#67D29D',
  'background-color': '#EBEBF0',
  'background-color2': '#FAFAFC',
  'text-color': '#333',
  'img-darkening': 'brightness(100%)',
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
    Object.keys(theme).forEach((k) =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
