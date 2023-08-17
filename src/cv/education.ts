import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Constructor, WithWordings} from './with-wordings.mixin';
import { resumeStyles } from './styles/common';

export interface ResumeEducationWordings {
  title: string;
  items: {
    school?: string;
    diploma: string;
    year?: string;
    title?: string;
  }[];
}

@customElement('nmc-cv-education')
export class ResumeEducationElement extends WithWordings<
  Constructor<LitElement>,
  ResumeEducationWordings
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
        ${this.wordings.items.map(
          (item) =>
            html`<li>
              <span class="cv__education__year">${item.year}</span> :
              <span class="cv__education__diploma">${item.diploma}</span>,
              <span class="cv__education__school">${item.school}</span>
            </li>`
        )}
      </ul>
    `;
  }
}
