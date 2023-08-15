import {localized, msg, str} from '@lit/localize';
import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import type {
  ColorSchemeChangeEvent,
  ColorScheme,
} from 'dark-mode-toggle/src/dark-mode-toggle';

import 'dark-mode-toggle';
import '../shared/locale-picker';

@customElement('nmc-header')
@localized()
export class AppHeaderElement extends LitElement {
  @state()
  private themeMode: ColorScheme = 'dark';

  private themeColor!: HTMLElement;
  private msTitleColor!: HTMLElement;

  override render() {
    return html`
      <header>
        <h1>Noël Macé</h1>
        <div class="spacer"></div>
        <locale-picker></locale-picker>
        <dark-mode-toggle
          .light=${msg(str`Light Theme`)}
          .dark=${msg(str`Dark Theme`)}
          .mode=${this.themeMode}
        ></dark-mode-toggle>
      </header>
    `;
  }

  // disable shadow-dom as dark-mode can't work inside it
  protected override createRenderRoot() {
    return this;
  }

  override connectedCallback() {
    super.connectedCallback();

    this.themeColor = document.querySelector('meta[name="theme-color"]')!;
    this.msTitleColor = document.querySelector(
      'meta[name="msapplication-TileColor"]'
    )!;

    let searchParam = new URL(document.location.toString()).searchParams.get(
      'theme'
    );

    if (searchParam === 'dark' || searchParam === 'light') {
      this.themeMode = searchParam;
    } else {
      searchParam = null;
    }

    document.addEventListener('colorschemechange', this.toggleTheme.bind(this));

    this.toggleTheme(
      new CustomEvent('color-scheme-change', {
        detail: {
          colorScheme: searchParam || this.themeMode,
        },
      })
    );
  }

  toggleTheme(e: ColorSchemeChangeEvent) {
    const darkModeOn = e.detail.colorScheme === 'dark';
    const primaryColor = darkModeOn ? 'hsl(0,0%,20%)' : '#24292e';
    this.themeColor.textContent = primaryColor;
    this.msTitleColor.textContent = primaryColor;
  }
}
