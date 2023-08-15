import {LitElement, TemplateResult, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {Locale, getLocale, setInitialLocale, setLocaleFromUrl} from './localization';
import {allLocales} from '../generated/locale-codes';
import {localized} from '@lit/localize';
import {until} from 'lit/directives/until.js';

const localeNames: {
  [L in Locale]: string;
} = {
  en: 'English',
  fr: 'Français',
};

@customElement('locale-picker')
@localized()
export class LocalePicker extends LitElement {
  static override styles = css`
    select, option {
      background-color: var(--color-lvl3);
      color: var(--font-color);
    }
    
    select {
      border: none;
      padding: 5px 5px 5px 10px;
      border-radius: 5px;
      border-right: 5px solid transparent;
    }
  `;
  @state()
  private initialSetLocale: Promise<TemplateResult> = setInitialLocale().then(
    () =>
      html`<select @change=${this.localeChanged}>
        ${allLocales.map(
          (locale) =>
            html`<option value=${locale} ?selected=${locale === getLocale()}>
              ${localeNames[locale]}
            </option>`
        )}
      </select>`
  );

  override render() {
    return until(this.initialSetLocale, html`loading...`);
  }

  localeChanged(event: Event) {
    const newLocale = (event.target as HTMLSelectElement).value;
    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set('locale', newLocale);
      window.history.pushState(null, '', url.toString());
      setLocaleFromUrl();
    }
  }
}
