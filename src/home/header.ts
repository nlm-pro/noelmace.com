import {localized, msg, str} from '@lit/localize';
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import type {
  ColorSchemeChangeEvent,
} from 'dark-mode-toggle/src/dark-mode-toggle';

import 'dark-mode-toggle';
import '../shared/locale-picker';

@customElement('nmc-header')
@localized()
export class AppHeaderElement extends LitElement {
  private themeColor: HTMLElement = document.querySelector(
    'meta[name="theme-color"]'
  )!;
  private msTitleColor: HTMLElement = document.querySelector(
    'meta[name="msapplication-TileColor"]'
  )!;

  override render() {
    return html`
      <header>
        <h1>Noël Macé</h1>
        <div class="spacer"></div>
        <locale-picker></locale-picker>
        <dark-mode-toggle
          .light=${msg(str`Light Theme`)}
          .dark=${msg(str`Dark Theme`)}
          @colorschemechange=${this.toggleTheme}
        ></dark-mode-toggle>
      </header>
    `;
  }

  // disable shadow-dom as dark-mode can't work inside it
  protected override createRenderRoot() {
    return this;
  }

  toggleTheme(e: ColorSchemeChangeEvent) {
    const darkModeOn = e.detail.colorScheme === 'dark';
    const primaryColor = darkModeOn ? 'hsl(0,0%,20%)' : '#24292e';
    this.themeColor.textContent = primaryColor;
    this.msTitleColor.textContent = primaryColor;
  }
}
