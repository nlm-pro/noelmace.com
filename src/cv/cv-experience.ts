import {LitElement, html} from 'lit';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {classMap} from 'lit/directives/class-map.js';
import type {ExperienceWording} from './wording';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('nmc-cv-experience')
export class CVExperienceElement extends LitElement {
  @state()
  private _flatGroups = true;

  @property({type: Object, attribute: false})
  public wording: ExperienceWording | undefined;
  @property({type: Boolean})
  public align = false;

  _handleBeforePrint = this.__handleBeforePrint.bind(this);
  _handleAfterPrint = this.__handleAfterPrint.bind(this);

  override createRenderRoot() {
    return this;
  }

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('beforeprint', this._handleBeforePrint);
    window.addEventListener('afterprint', this._handleAfterPrint);
  }

  override disconnectedCallback() {
    window.removeEventListener('beforeprint', this._handleBeforePrint);
    window.removeEventListener('afterprint', this._handleAfterPrint);
    super.disconnectedCallback();
  }

  override render() {
    let groups = [...(this.wording?.items || [])];
    if (this._flatGroups) {
      groups = [groups.flat()];
    }
    return groups.map(
      (group, i) => html`
        <div
          class=${classMap({
            timeline: true,
            mirror: !this.align && i % 2 === 1,
          })}
        >
          ${group.map(
            (item) =>
              html`<div class="xp-item timeline__event">
                <div
                  class=${classMap({
                    timeline__event__icon: true,
                    'short-line': !!item.shortLine,
                  })}
                >
                  <img src=${item.icon} alt=${item.company} />
                </div>
                <div class="timeline__event__card">
                  <div class="timeline__event__date">
                    ${item.company
                      ? html`<div class="company">
                          ${item.company.name
                            ? html`<div class="company-name">
                                ${item.company.name}
                              </div>`
                            : ''}
                          ${item.company.details
                            ? html`<div class="company-details">
                                ${item.company.details}
                              </div>`
                            : ''}
                        </div>`
                      : ''}
                    <div class="dates">
                      ${item.endDate
                        ? html`<div class="start-date">
                              ${this.wording?.dateIntervals.start}
                              ${item.startDate}
                            </div>
                            <div class="end-date">
                              ${this.wording?.dateIntervals.end} ${item.endDate}
                            </div>`
                        : html` <div>${this.wording?.dateIntervals.noEnd}</div>
                            <div class="start-date">${item.startDate}</div>`}
                    </div>
                  </div>
                  <div class="timeline__event__content">
                    <div class="header timeline__event__title">
                      ${item.jobTitle
                        ? html`<span class="jobtitle">${item.jobTitle}</span>`
                        : ''}
                    </div>
                    ${(() => {
                      if (!item.details) return '';
                      if (Array.isArray(item.details))
                        return html` <ul class="details">
                          ${item.details.map(
                            (el) => html`<li>${unsafeHTML(el)}</li>`
                          )}
                        </ul>`;
                      return html`<p class="details">
                        ${unsafeHTML(item.details)}
                      </p>`;
                    })()}
                  </div>
                </div>
              </div>`
          )}
        </div>
      `
    );
  }

  __handleBeforePrint() {
    this._flatGroups = false;
  }

  __handleAfterPrint() {
    this._flatGroups = true;
  }
}