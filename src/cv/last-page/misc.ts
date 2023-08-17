import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Constructor, WithWordings} from '../with-wordings.mixin';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import { resumeStyles } from '../styles/common';
import { lastPageStyles } from '../styles/last-page';

export interface ResumeMiscWordings {
  title: string;
  content: string[];
}

@customElement('nmc-cv-misc')
export class ResumeMiscElement extends WithWordings<
  Constructor<LitElement>,
  ResumeMiscWordings
>(LitElement) {
  static styles = [
    resumeStyles,
    lastPageStyles,
    css`
      h2 {
        margin-bottom: 1rem;
      }

      li {
        margin: 0.2em 0;
      }
    `,
  ];

  override render() {
    return html`
      <h2>${this.wordings.title}</h2>
      <ul class="lg-2-columns">
        ${this.wordings.content.map((txt) => html`<li>${unsafeHTML(txt)}</li>`)}
      </ul>
    `;
  }
}
