import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Constructor, WithWordings} from './with-wordings.mixin';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import { resumeStyles } from './styles/common';

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
    css`
      h2 {
        margin-bottom: 1rem;
      }

      li {
        margin: 0.2em 0;
      }

      @media screen and (min-width: 787px) {
        ul {
          columns: 2;
          column-gap: 2rem;
        }
      }
    `,
  ];

  override render() {
    return html`
      <h2>${this.wordings.title}</h2>
      <ul>
        ${this.wordings.content.map((txt) => html`<li>${unsafeHTML(txt)}</li>`)}
      </ul>
    `;
  }
}
