import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {WithWordings} from '../wordings/with-wordings.mixin';
import {resumeStyles} from '../styles/common';
import {lastPageStyles} from '../styles/last-page';
import type {Constructor, litString} from '../../shared/lit-dev';

export interface ResumeEducationWordings {
  title: litString;
  items: {
    school?: litString;
    diploma: litString;
    year?: litString;
  }[];
}

@customElement('nmc-cv-education')
export class ResumeEducationElement extends WithWordings<
  Constructor<LitElement>,
  ResumeEducationWordings
>(LitElement) {
  static styles = [resumeStyles, lastPageStyles];

  override render() {
    return html`
      <h2>${this.wordings.title}</h2>
      <ul class="lg-2-columns">
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
