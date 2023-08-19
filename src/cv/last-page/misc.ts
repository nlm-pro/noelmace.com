import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {WithWordings} from '../wordings/with-wordings.mixin';
import {resumeStyles} from '../styles/common';
import {lastPageStyles} from '../styles/last-page';
import type {Constructor, LitString} from '../../shared/lit-dev';

export interface ResumeMiscWordings {
  title: LitString;
  content: LitString[];
}

@customElement('nmc-cv-misc')
export class ResumeMiscElement extends WithWordings<
  Constructor<LitElement>,
  ResumeMiscWordings
>(LitElement) {
  static styles = [resumeStyles, lastPageStyles];

  override render() {
    return html`
      <h2>${this.wordings.title}</h2>
      <ul class="lg-2-columns">
        ${this.wordings.content.map((txt) => html`<li>${txt}</li>`)}
      </ul>
    `;
  }
}
