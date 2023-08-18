import {LitElement, css, html} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {customElement, property, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';

import '../shared/optimized-img';
import {timelineStyle} from './styles/timeline';
import {resumeStyles} from './styles/common';
import {WithWordings} from './wordings/with-wordings.mixin';
import type {Constructor, LitString} from '../shared/lit-dev';

export interface ResumeExperienceItemWordings {
  jobTitle?: LitString;
  company?: {
    name?: LitString;
    details?: LitString;
  };
  startDate?: LitString;
  endDate?: LitString;
  details?: LitString[] | LitString;
  shortLine?: boolean;
  icon: string;
  webp?: string;
}

export interface ResumeExperienceWordings {
  title: LitString;
  items: ResumeExperienceItemWordings[][];
  dateIntervals: {
    noEnd: string;
    start: string;
    end: string;
  };
}

@customElement('nmc-cv-experience')
export class ResumeExperienceElement extends WithWordings<
  Constructor<LitElement>,
  ResumeExperienceWordings
>(LitElement) {
  @state()
  private _flatGroups = true;

  @property({type: Boolean})
  public align = false;

  _handleBeforePrint = this.__handleBeforePrint.bind(this);
  _handleAfterPrint = this.__handleAfterPrint.bind(this);

  static styles = [
    resumeStyles,
    timelineStyle,
    css`
      .details {
        margin: 0.5rem 0;
      }

      ul.details {
        padding-left: 1.5rem;
      }

      .jobtitle {
        font-weight: bold;
      }

      .dates {
        font-weight: initial;
      }

      @media print { 
        h2 {
          margin-left: 2rem;
          margin-top: 0;
        }
      }
    `,
  ];

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
    let groups = [...(this.wordings.items || [])];
    if (this._flatGroups) {
      groups = [groups.flat()];
    }
    return html` <h2 class="page-title">${this.wordings.title}</h2>
      ${groups.map(
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
                    <optimized-img
                      src=${item.icon}
                      webp=${ifDefined(item.webp)}
                      alt=${ifDefined(item.company?.name)}
                      height="60"
                      width="60"
                    ></optimized-img>
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
                                ${this.wordings.dateIntervals.start}
                                ${item.startDate}
                              </div>
                              <div class="end-date">
                                ${this.wordings.dateIntervals.end}
                                ${item.endDate}
                              </div>`
                          : html` <div>
                                ${this.wordings.dateIntervals.noEnd}
                              </div>
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
                              (el) => html`<li>${el}</li>`
                            )}
                          </ul>`;
                        return html`<p class="details">
                          ${item.details}
                        </p>`;
                      })()}
                    </div>
                  </div>
                </div>`
            )}
          </div>
        `
      )}`;
  }

  __handleBeforePrint() {
    this._flatGroups = false;
  }

  __handleAfterPrint() {
    this._flatGroups = true;
  }
}
