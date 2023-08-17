import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Constructor, WithWordings} from './with-wordings.mixin';
import { resumeStyles } from './styles/common';

export interface ResumeAccomplishmentsWordings {
  title: string;
  groups: {
    title: string;
    items: {
      headline: string;
      date?: string;
      links?: {
        text: string;
        href?: string;
      }[];
      context?: string;
      href?: string;
    }[];
  }[];
}

@customElement('nmc-cv-accomplishments')
export class ResumeAccomplishmentsElement extends WithWordings<
  Constructor<LitElement>,
  ResumeAccomplishmentsWordings
>(LitElement) {
  static styles = [
    resumeStyles,
    css`
      h2 {
        margin-bottom: 1rem;
      }

      .accomplishment:first-child h3 {
        margin-top: 0;
      }

      .accomplishment h3 {
        margin-bottom: 0.5rem;
      }

      .accomplishment > ul {
        margin-top: 0.5rem;
      }

      .accomplishment {
        break-inside: avoid;
      }

      li {
        margin: 0.2em 0;
      }

      @media screen and (min-width: 787px) {
        .cv__accomplishments__content {
          columns: 2;
          column-gap: 2rem;
        }
      }
    `,
  ];

  override render() {
    return html`<h2>${this.wordings.title}</h2>
      <div class="cv__accomplishments__content">
        ${this.wordings.groups.map(
          (group) => html`
            <article class="accomplishment">
              <h3>${group.title}</h3>
              <ul>
                ${group.items.map(
                  (item) => html`
                    <li>
                      <em>
                        ${item.href
                          ? html`<a
                              href=${item.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              >${item.headline}</a
                            >`
                          : item.headline}
                      </em>
                      ${item.links
                        ? html` -
                          ${item.links.map(
                            ({text, href}, i) =>
                              html`${href
                                ? html`<a
                                    href=${href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    >${text}</a
                                  >`
                                : text}${item.links && i < item.links.length - 1
                                ? ', '
                                : ''}`
                          )}`
                        : ''}
                      ${item.context ? html` - ${item.context}` : ''}
                      ${item.date ? html` - ${item.date}` : ''}
                    </li>
                  `
                )}
              </ul>
            </article>
          `
        )}
      </div>`;
  }
}
