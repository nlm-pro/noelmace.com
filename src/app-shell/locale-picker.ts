import {LitElement, TemplateResult, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {Locale, getLocale, setInitialLocale, setLocaleFromUrl} from '../shared/localization';
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
    .select, select {
      background-color: var(--light-on-primary);
      color: var(--font-on-primary);
      border-radius: 0;
    }
    
    .select {
      box-shadow: var(--raise-2dp);
      position: relative;
    }

    select {
      padding: 5px .5rem;
      appearance: none;
      border: none;
      outline: none;
      border-right: solid 1rem transparent;
      cursor: pointer;
    }

    .select::after {
      content: '\u2B9F';
      font-weight: bold;
      padding-right: .5rem;
      position: absolute;
      right: 0;
      top: 3px;
      pointer-events: none;
      padding-block: 5px;
      vertical-align: sub;
      font-size: .6rem;
    }
  `;
  @state()
  private initialSetLocale: Promise<TemplateResult> = setInitialLocale().then(
    () =>
      html`<div class="select"><select @change=${this.localeChanged}>
        ${allLocales.map(
          (locale) =>
            html`<option value=${locale} ?selected=${locale === getLocale()}>
              ${localeNames[locale]}
            </option>`
        )}
      </select></div>`
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
