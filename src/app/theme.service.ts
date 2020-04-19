import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#E5FFFF',
  'background-color': '#3e4049',
  'background-color2': '#555770',
  'text-color': '#EEEEEE',
  'text-shadow': 'none',
  'img-source': 'url(https://i.imgur.com/zpTr8SG.png)',
  'img-darkening': 'brightness(80%)',
};

export const lightTheme = {
  'primary-color': '#73DFE7',
  'background-color': '#EBEBF0',
  'background-color2': '#FAFAFC',
  'text-color': '#333',
  'text-shadow': '4px 4px 4px #aaa',
  'img-source': 'url(https://i.imgur.com/gEE0Mge.png)',
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
