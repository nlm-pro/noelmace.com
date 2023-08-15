import {localized, str, msg} from '@lit/localize';
import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {homeStyles} from './styles';

import '../card';

@customElement('nmc-social')
@localized()
export class AppSocialElement extends LitElement {
  static override styles = [
    homeStyles,
    css`
      .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
      }

      link-card {
        margin: 0.5rem;
        --link-card-shadow: var(--raise-2dp);
        --link-card-shadow-hover: var(--raise-4dp);
      }

      svg:not(.preserve-colors) path {
        fill: var(--link-card-fill-color, #000);
      }
    `,
  ];

  override render() {
    return html`
      <h1>${msg(str`Career`)}</h1>
      <div class="cards-container">
        <link-card
          id="cv"
          href="./cv.html"
          label="CV"
          alt="CV"
          title="CV"
          subtitle=${msg(str`My Resume`)}
        >
          <svg
            width="110"
            clip-rule="evenodd"
            fill-rule="evenodd"
            viewBox="0 0 91.667 110"
          >
            <path
              d="m4.5834 110h87.084v-105.42h-4.5834v100.83h-82.5zm77.917-110h-82.5v100.83h82.5zm-4.5834 4.5834h-73.334v91.667h73.334zm-9.1667 73.334h-55v4.5834h55zm0-13.75h-55v4.5834h55zm0-13.75h-55v4.5834h55zm-33.678-17.705 4.345 1.375c-0.66459 2.4246-1.7738 4.2258-3.3229 5.3992-1.5492 1.1779-3.5154 1.7646-5.8988 1.7646-2.9471 0-5.3671-1.0083-7.2646-3.0204-1.8975-2.0121-2.8463-4.7667-2.8463-8.2592 0-3.6942 0.95334-6.5634 2.86-8.6075 1.9067-2.0442 4.4138-3.0663 7.5259-3.0663 2.7133 0 4.9179 0.80209 6.6138 2.4063 1.0129 0.94875 1.7692 2.3146 2.2733 4.0883l-4.4367 1.0588c-0.26125-1.1504-0.81125-2.0579-1.6408-2.7225-0.83417-0.66917-1.8471-0.99917-3.0388-0.99917-1.6454 0-2.9792 0.59125-4.0058 1.7692-1.0221 1.1825-1.5354 3.0938-1.5354 5.7384 0 2.8096 0.50417 4.8079 1.5171 5.995 1.0083 1.1917 2.3192 1.7875 3.9325 1.7875 1.1917 0 2.2183-0.37583 3.0754-1.1367 0.85709-0.75625 1.4758-1.9479 1.8471-3.5704zm13.855 8.1584-7.9338-22.193h4.8584l5.6192 16.427 5.4359-16.427h4.7529l-7.9475 22.193z"
              stroke-width="4.5834"
            />
          </svg>
        </link-card>
        <link-card
          id="linkedin"
          href="https://linkedin.com/in/noelmdev"
          label="LinkedIn"
          alt="No&euml;l M. | LinkedIn"
          title="LinkedIn"
          subtitle="/in/noelmdev"
        >
          <svg viewBox="0 0 448.1 512" width="110px" height="100px">
            <path
              d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"
            />
          </svg>
        </link-card>
      </div>
    `;
  }
}
