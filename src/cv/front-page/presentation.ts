import {LitElement, TemplateResult, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import type {ListSectionWording} from '../wordings';
import {resumeStyles} from '../styles/common';
import {WithWordings} from '../wordings/with-wordings.mixin';
import type {Constructor, LitString} from '../../shared/lit-dev';

export interface ResumePresentationWordings {
  name: LitString;
  jobTitle: LitString;
  note: LitString;
  abstract: LitString[];
  langs: ListSectionWording;
  networks?: {
    title: LitString;
    content: {
      icon: TemplateResult;
      alt: string;
      text: LitString;
      url?: string;
    }[];
  };
}

@customElement('nmc-cv-presentation')
export class ResumePresentationElement extends WithWordings<
  Constructor<LitElement>,
  ResumePresentationWordings
>(LitElement) {
  static styles = [
    resumeStyles,
    css`
      :host {
        background-color: var(--primary-color);
        color: var(--neutral-color-0);
        padding: 1.7rem;
        display: block;
      }

      .note {
        margin-top: 0;
        font-style: italic;
      }

      .subtitle {
        margin-bottom: 0;
        padding-bottom: 1rem;
        font-size: 1.1rem;
        font-weight: bold;
      }

      h1 {
        font-size: 2rem;
        margin-top: 0;
      }

      h2 {
        font-size: 19px;
      }

      .presentation-contents {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 1rem;
      }

      .presentation-contents > * {
        flex-grow: 1;
      }

      .presentation-contents h3 {
        margin: 4rem 0 0.5rem 1rem;
      }

      .networks ul,
      .langs ul {
        list-style: none;
        padding-left: 0;
        padding: 0;
      }

      .langs li {
        padding-bottom: 0.5rem;
      }

      .networks__item,
      .networks__item > a {
        display: flex;
        align-items: center;
      }

      .networks__item svg {
        width: 25px;
        height: 25px;
        margin: 0.3rem;
        fill: var(--neutral-color-0);
      }

      .networks__item__content {
        margin-left: 2rem;
      }

      li > a {
        width: 100%;
      }

      li > a:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      @media screen {
        .invisible-link {
          text-decoration: none;
          color: inherit;
        }

        h1 {
          /* already in the app header */
          display: none;
        }
      }
    `,
  ];

  override render() {
    return html`
      <div class="presentation-header">
        <h1>${this.wordings.name}</h1>
        <p class="subtitle">${this.wordings.jobTitle}</p>
        <p class="note">${this.wordings.note}</p>
      </div>
      <div class="presentation-contents">
        <div class="abstract">
          ${this.wordings.abstract.map((content) => html`<p>${content}</p>`)}
        </div>
      </div>
      ${!this.wordings.networks
        ? ''
        : html`<div class="networks">
            <h2>${this.wordings.networks.title}</h2>
            <ul>
              ${this.wordings.networks.content.map((item) =>
                item.url
                  ? html`<li class="networks__item">
                      <a
                        href=${item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        class="invisible-link"
                      >
                        ${item.icon}
                        <span class="networks__item__content">
                          ${item.text}
                        </span>
                      </a>
                    </li>`
                  : html`<li class="networks__item">
                      <img src=${item.icon} alt=${item.alt} />
                      <span class="networks__item__content">
                        ${item.text}
                      </span>
                    </li>`
              )}
            </ul>
          </div>`}
      <div class="langs">
        <h2>${this.wordings.langs.title}</h2>
        <ul>
          ${this.wordings.langs.content.map((lang) => html`<li>${lang}</li>`)}
        </ul>
      </div>
    `;
  }
}
