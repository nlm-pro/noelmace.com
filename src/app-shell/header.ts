import {localized, msg, str} from '@lit/localize';
import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import type {
  ColorSchemeChangeEvent,
} from 'dark-mode-toggle/src/dark-mode-toggle';

import 'dark-mode-toggle';
import './locale-picker';

@customElement('nmc-header')
@localized()
export class AppHeaderElement extends LitElement {
  private themeColor: HTMLElement = document.querySelector(
    'meta[name="theme-color"]'
  )!;
  private msTitleColor: HTMLElement = document.querySelector(
    'meta[name="msapplication-TileColor"]'
  )!;

  static override styles = css`
    header {
      background-color: var(--primary-color);
      color: var(--font-on-primary);
      text-align: left;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      flex-direction: row;
      box-shadow: var(--raise-4dp);
      background-color: var(--primary-color);
      color: var(--font-on-primary);
    }

    .spacer {
      flex-grow: 1;
    }

    h1 {
      font-weight: 600;
      font-size: 18px;
      margin: 0;
    }

    locale-picker {
      margin-right: 1rem;
    }
  `;

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

  toggleTheme(e: ColorSchemeChangeEvent) {
    const darkModeOn = e.detail.colorScheme === 'dark';
    const primaryColor = darkModeOn ? 'hsl(0,0%,20%)' : '#24292e';
    this.themeColor.textContent = primaryColor;
    this.msTitleColor.textContent = primaryColor;
  }
}
