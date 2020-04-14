import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#455363',
  'background-color': '#1C1C28',
  'background-color2': '#555770',
  'text-color': '#88899E',
  'text-shadow': 'none',
  'img-source': 'url(https://i.imgur.com/zpTr8SG.png)',
  'img-darkening': 'brightness(70%)',
};

export const lightTheme = {
  'primary-color': '#fff',
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
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}