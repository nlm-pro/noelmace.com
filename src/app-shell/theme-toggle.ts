import {localized, msg, str} from '@lit/localize';
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import type {
  ColorSchemeChangeEvent,
} from 'dark-mode-toggle/src/dark-mode-toggle';

import 'dark-mode-toggle';

@customElement('nmc-theme-toggle')
@localized()
export class AppThemeToggle extends LitElement {
  private themeColor: HTMLElement = document.querySelector(
    'meta[name="theme-color"]'
  )!;
  private msTitleColor: HTMLElement = document.querySelector(
    'meta[name="msapplication-TileColor"]'
  )!;

  override render() {
    return html`
        <dark-mode-toggle
          .light=${msg(str`Light Theme`)}
          .dark=${msg(str`Dark Theme`)}
          @colorschemechange=${this.toggleTheme}
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
