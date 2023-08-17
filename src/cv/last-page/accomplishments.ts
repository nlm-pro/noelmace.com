import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Constructor, WithWordings} from '../with-wordings.mixin';
import {resumeStyles} from '../styles/common';
import {lastPageStyles} from '../styles/last-page';

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
    lastPageStyles,
    css`
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
    `,
  ];

  override render() {
    return html`<h2>${this.wordings.title}</h2>
      <div class="lg-2-columns">
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
