import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {LOCALE_STATUS_EVENT, localized} from '@lit/localize';

import './front-page/presentation';
import './front-page/intro';
import './experience';
import './last-page/accomplishments';
import './last-page/misc';
import './experience';
import './last-page/education';

import {resumeStyles} from './styles/common';
import {ResumeWordings} from './wordings';
import {getLocale, type Locale} from '../shared/localization';

@customElement('nmc-cv')
@localized()
export default class ResumeElement extends LitElement {
  @property({type: Boolean})
  public quiet = false;
  @property({type: Boolean})
  public align = false;
  @property({type: Boolean})
  public anonymous = false;

  // TODO: use WithWordings mixin instead
  // (not routed directly)
  private wordingsCode = 'webdev';

  @state()
  private wordings!: ResumeWordings;

  static override styles = [
    resumeStyles,
    css`
      :host {
        display: block;
        margin: 0 auto;
        --primary-text-color: var(--font-color);
        --primary-text-color-stronger: var(--font-color-stronger);
        --primary-text-color-softer: var(--font-color-softer);
        --primary-bg-color: var(--color-lvl0);
        --primary-color: var(--cv-primary-color, #002d61);
        --primary-color-stronger: var(--cv-primary-stronger, #00152e);
        --primary-color-softer: var(--cv-primary-softer, #004594);
        --mdc-theme-primary: var(--primary-color);
        --neutral-color-900: #212121;
        --neutral-color-800: #424242;
        --neutral-color-700: #616161;
        --neutral-color-600: #757575;
        --neutral-color-500: #9e9e9e;
        --neutral-color-400: #bdbdbd;
        --neutral-color-300: #e0e0e0;
        --neutral-color-200: #eee;
        --neutral-color-100: #f5f5f5;
        --neutral-color-50: #fafafa;
        --neutral-color-0: var(--color-lvl0, #fff);
        --soft-bg-color: var(--neutral-color-100);
        --stronger-bg-color: var(--neutral-color-300);
        --daucus-menu-active-color: var(--primary-color);
        --light-item-inversion: 0;
        --negative-rgb: 0, 0, 0;
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        color: var(--primary-text-color);
        background-color: var(--primary-bg-color);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host > section {
        padding: 1rem;
      }

      .first-page {
        display: grid;
        grid-template-columns: 310px 1fr;
        margin-left: auto;
        margin-right: auto;
      }

      .main-column {
        display: flex;
      }

      nmc-cv-intro {
        padding-bottom: 1rem;
      }

      .last-page {
        padding-bottom: 1rem;
      }

      .last-page > section {
        padding: 0 2rem;
      }

      #cv__misc {
        margin-top: 0;
      }

      @media print {
        @page {
          margin: 100cm !important;
        }

        :host {
          margin: 0;
        }

        .first-page,
        #cv__xp {
          break-after: page;
          width: 100vw;
        }

        .first-page {
          height: 100vh;
          padding-right: 2rem;
        }

        .first-page > *,
        .first-page > * > * {
          height: 100%;
        }

        #cv__xp {
          height: 200vh;
          margin-top: 0;
        }

        #cv__education {
          margin-top: 0;
        }

        .last-page {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 4rem 2rem;
        }
      }

      @media screen {
        #cv__xp,
        .last-page {
          border-top: 1px dashed var(--primary-color-softer);
        }
      }

      @media screen and (max-width: 786px) {
        .first-page {
          display: block;
        }
        :host > section {
          padding: 0;
        }
        .last-page > section {
          padding: 0 1rem;
        }
      }
    `,
  ];

  override connectedCallback(): void {
    super.connectedCallback();
    this.loadWordings(getLocale() as Locale);
    window.addEventListener(LOCALE_STATUS_EVENT, (event) => {
      if (event.detail.status === 'ready') {
        this.loadWordings(event.detail.readyLocale as Locale);
      }
    });
  }

  override render() {
    return html`
      <div class="first-page">
        <section id="cv__presentation" class="main-column">
          <nmc-cv-presentation
            .wordings=${this.wordings?.presentation}
          ></nmc-cv-presentation>
        </section>
        <section id="cv__intro">
          <nmc-cv-intro .wordings=${this.wordings?.intro}></nmc-cv-intro>
        </section>
      </div>
      <section id="cv__xp">
        <nmc-cv-experience
          .wordings=${this.wordings?.experience}
          ?align=${this.align}
        ></nmc-cv-experience>
      </section>
      <div class="last-page">
        <section id="cv__accomplishments">
          <nmc-cv-accomplishments
            .wordings=${this.wordings?.accomplishments}
          ></nmc-cv-accomplishments>
        </section>
        <section id="cv__misc">
          <nmc-cv-misc .wordings=${this.wordings?.misc}></nmc-cv-misc>
        </section>
        <section id="cv__education">
          <nmc-cv-education
            .wordings=${this.wordings?.education}
          ></nmc-cv-education>
        </section>
      </div>
    `;
  }

  override shouldUpdate() {
    return !!this.wordings;
  }

  private async loadWordings(locale: Locale) {
    try {
      const module = await import(
        `./wordings/${this.wordingsCode}.${locale}.js`
      );
      this.wordings = module.default;
    } catch (err) {
      console.error(err);
    }
  }
}
