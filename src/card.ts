import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import './optimized-img';

@customElement('link-card')
export class CardComponent extends LitElement {
  @property()
  alt: string = 'Demo';

  @property()
  href: string = '#';

  @property()
  src: string = '/images/question-mark-white.svg';

  @property()
  webp: string = '';

  @property({
    attribute: 'color-scheme'
  })
  colorScheme: string = 'light';

  @property({
    attribute: 'title'
  })
  cardTitle: string =  'Lorem Ispum';

  @property({ attribute: 'subtitle'})
  cardSubTitle: string = 'dolor sit amet';

  @property()
  label: string = 'Demo card';

  static override get styles() {
    return css`
      * {
        font-size: var(--font-size, 14px);
        margin: 0;
        padding: 0;
        font-weight: normal;
        box-sizing: inherit;
      }

      .container {
        width: 150px;
        border-radius: 3px;
        padding: 1rem;
        background-color: var(--link-card-bg-color);
        height: 100%;
        box-shadow: var(--link-card-shadow);
        transition: var(--raise-transition);
      }

      .container:hover {
        background-color: var(--link-card-bg-color-hover);
        box-shadow: var(--link-card-shadow-hover);
      }

      h1 {
        margin-bottom: 0.5rem;
        font-weight: 600;
        padding: 0;
      }

      a {
        color: var(--font-color);
        text-decoration: none;
      }

      img,
      ::slotted(svg) {
        margin-bottom: 1rem;
        border-radius: 3px;
        padding: 1rem;
        height: 110px;
        width: 110px;
      }
    `;
  }

  override render() {
    return html`
      <div class="container">
        <a
          href="${this.href}"
          aria-label="${this.label}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <slot
            ><optimized-img
              src="${this.src}"
              webp="${this.webp}"
              alt="${this.alt}"
            ></optimized-img
          ></slot>
          <h1>${this.cardTitle}</h1>
          <h2>${this.cardSubTitle}</h2>
        </a>
      </div>
    `;
  }
}
