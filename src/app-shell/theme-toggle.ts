import {localized, msg, str} from '@lit/localize';
import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import type {ColorSchemeChangeEvent} from 'dark-mode-toggle/src/dark-mode-toggle';

import 'dark-mode-toggle';
import {buttonSyles} from '../shared/styles/button';

@customElement('nmc-theme-toggle')
@localized()
export class AppThemeToggle extends LitElement {
  private themeColor: HTMLElement = document.querySelector(
    'meta[name="theme-color"]'
  )!;
  private msTitleColor: HTMLElement = document.querySelector(
    'meta[name="msapplication-TileColor"]'
  )!;

  static override styles = [
    buttonSyles,
    css`
      dark-mode-toggle {
        height: var(--header-content-height);
        background-color: var(--light-on-primary);
        box-shadow: var(--raise-2dp);
        padding-inline: 10px;
        border-radius: 0;
        --dark-mode-toggle-icon-size: 14px;
        --dark-mode-toggle-dark-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 292.299 292.299' xmlns:v='https://vecta.io/nano'%3E%3Cpath d='M153.699 292.138C68.95 292.138 0 223.185 0 138.439 0 79.742 32.675 27.002 85.28.807c2.369-1.174 5.215-.718 7.077 1.144s2.345 4.711 1.183 7.074C83.941 28.527 79.077 49.496 79.077 71.33c0 77.972 63.432 141.407 141.395 141.407 22.08 0 43.247-4.978 62.942-14.777 2.366-1.177 5.213-.721 7.074 1.141 1.873 1.867 2.342 4.714 1.177 7.073-26.055 53.021-78.927 85.964-137.966 85.964z' fill='%23fff' /%3E%3C/svg%3E");
        --dark-mode-toggle-light-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' height='800' width='800' viewBox='0 0 207.628 207.628' xmlns:v='https://vecta.io/nano'%3E%3Ccircle cx='103.814' cy='103.814' r='45.868'/%3E%3Cpath d='M103.814 157.183c-29.427 0-53.368-23.941-53.368-53.368s23.941-53.368 53.368-53.368 53.368 23.941 53.368 53.368-23.941 53.368-53.368 53.368zm0-91.737c-21.156 0-38.368 17.212-38.368 38.368s17.212 38.368 38.368 38.368 38.368-17.212 38.368-38.368-17.212-38.368-38.368-38.368zm0-26.061a7.5 7.5 0 0 1-7.5-7.5V7.5a7.5 7.5 0 1 1 15 0v24.385a7.5 7.5 0 0 1-7.5 7.5zm0 168.243a7.5 7.5 0 0 1-7.5-7.5v-24.385a7.5 7.5 0 1 1 15 0v24.385a7.5 7.5 0 0 1-7.5 7.5zm96.314-96.314h-24.385a7.5 7.5 0 1 1 0-15h24.385a7.5 7.5 0 1 1 0 15zm-168.243 0H7.5a7.5 7.5 0 1 1 0-15h24.385a7.5 7.5 0 1 1 0 15zm122.791-50.862c-1.919 0-3.839-.732-5.303-2.197a7.5 7.5 0 0 1 0-10.606l17.243-17.242a7.5 7.5 0 0 1 10.606 10.606l-17.243 17.242c-1.464 1.465-3.384 2.197-5.303 2.197zM35.709 179.419c-1.919 0-3.839-.732-5.303-2.197a7.5 7.5 0 0 1 0-10.606l17.243-17.243a7.5 7.5 0 0 1 10.606 10.606l-17.243 17.243a7.47 7.47 0 0 1-5.303 2.197zm136.209 0c-1.919 0-3.839-.732-5.303-2.197l-17.243-17.243a7.5 7.5 0 0 1 10.606-10.606l17.243 17.243a7.5 7.5 0 0 1 0 10.606 7.47 7.47 0 0 1-5.303 2.197zM52.952 60.452c-1.919 0-3.839-.732-5.303-2.197L30.406 41.013a7.5 7.5 0 0 1 10.606-10.606l17.243 17.242a7.5 7.5 0 0 1 0 10.606 7.47 7.47 0 0 1-5.303 2.197z'/%3E%3C/svg%3E");
      }
    `,
  ];

  override render() {
    return html`
      <dark-mode-toggle
        .light=${msg(str`Light Theme`)}
        .dark=${msg(str`Dark Theme`)}
        @colorschemechange=${this.toggleTheme}
        class="button"
      ></dark-mode-toggle>
    `;
  }

  toggleTheme(e: ColorSchemeChangeEvent) {
    const darkModeOn = e.detail.colorScheme === 'dark';
    const primaryColor = darkModeOn ? 'hsl(0,0%,20%)' : '#24292e';
    this.themeColor.textContent = primaryColor;
    this.msTitleColor.textContent = primaryColor;
  }
}
