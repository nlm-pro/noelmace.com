import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {WithWordings} from '../wordings/with-wordings.mixin';
import {resumeStyles} from '../styles/common';
import type {Constructor, litString} from '../../shared/lit-dev';

export interface ResumeIntroWordings {
  callToAction?: {
    text: litString;
    url: string;
    img: {
      src: string;
      alt: string;
    };
  };
  items: {
    title: litString;
    content: litString[];
    icon: {
      src: string;
      caption: litString;
    };
  }[];
}

@customElement('nmc-cv-intro')
export class ResumeIntroElement extends WithWordings<
  Constructor<LitElement>,
  ResumeIntroWordings
>(LitElement) {
  static styles = [
    resumeStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        padding: 1rem 1rem 1rem 0;
        height: 100%;
        justify-content: space-between;
      }

      .cv__intro__item {
        display: flex;
        flex-direction: column;
      }

      .cv__intro__item__header {
        display: flex;
        margin-left: 1rem;
      }

      .cv__intro__item h3 {
        margin: 0;
      }

      .cv__intro__item .title-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .cv__intro__item__content {
        margin-left: 2rem;
      }

      .cv__intro__cta {
        text-align: center;
        font-weight: bold;
        align-self: center;
        padding: 1rem;
      }

      .cv__intro__cta > * {
        margin: 0;
      }

      .icon-container {
        text-align: center;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.2rem;
        margin: 1rem 1rem 0;
      }

      .icon {
        width: 50px;
        margin-bottom: 0.5rem;
      }

      .print-link {
        font-weight: initial;
        font-style: italic;
        text-decoration: underline;
      }

      @media print {
        .cv__intro__cta {
          border: 1px solid var(--neutral-color-400);
          border-radius: 5px;
          padding: .5rem 1rem;
        }

        .cv__intro__cta img {
          margin-block: .5rem;
          height: 20px;
        }
      }

      @media screen {
        .print-only {
          display: none;
        }

        .call-to-action {
          padding: 0.8rem 34px;
          font-weight: 600;
          font-size: 18px;
          line-height: 1.2rem;
          border-radius: 48px;
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
          box-sizing: border-box;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          margin: 0.5rem;
          background-color: var(--soft-bg-color);
          color: var(--primary-text-color-stronger);
          border: none;
        }

        .call-to-action:hover {
          background-color: var(--stronger-bg-color);
        }
      }
    `,
  ];

  override render() {
    return html`${this.wordings.items.map(
      ({title, content, icon}) =>
        html` <div class="cv__intro__item">
          <div class="cv__intro__item__header">
            <div class="icon-container">
              <img class="icon light-icon" src=${icon.src} alt="" />
            </div>
            <div class="title-container">
              <div class="category">${icon.caption}</div>
              <h3>${title}</h3>
            </div>
          </div>
          <ul class="cv__intro__item__content">
            ${content.map((w) => html`<li>${w}</li>`)}
          </ul>
        </div>`
    )}
    ${!this.wordings.callToAction
      ? html`<div></div>`
      : html`<div class="cv__intro__cta">
          <p>${this.wordings.callToAction.text}</p>
          <a
            href="https://${this.wordings.callToAction.url}"
            rel="noreferrer noopener"
            target="_blank"
            class="call-to-action"
          >
            <img
              src=${this.wordings.callToAction.img.src}
              alt=${this.wordings.callToAction.img.alt}
              height="24px"
            />
            <div class="print-only print-link">
              ${this.wordings.callToAction.url}
            </div>
          </a>
        </div>`}`;
  }
}
