import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {homeStyles} from './styles';
import { localized, msg, str } from '@lit/localize';

@customElement('nmc-contact-form')
@localized()
export class AppContactFormElement extends LitElement {
  static override styles = [
    homeStyles,
    css`
      form {
        text-align: left;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: min-content 1fr min-content min-content;
        column-gap: 1rem;
        row-gap: 1rem;
        margin-top: 2rem;
        flex-grow: 1;
      }

      label {
        font-weight: 600;
      }

      select,
      input,
      textarea {
        color: var(--font-color);
        padding: 0.5em 10px;
        font-size: inherit;
        font-family: inherit;
        border: 1px solid var(--input-color);
        padding: 15px 10px;
        background: var(--input-color);
        box-shadow: none;
        border-radius: 3px;
      }

      .form-row {
        text-align: center;
      }

      textarea,
      .form-row {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      *:required:invalid {
        background-repeat: no-repeat;
        background-size: 10px 10px;
        background-position: center right 12px;
        background-image: url(/images/asterisk.svg);
      }

      textarea:required:invalid {
        background-position: top 14px right 12px;
      }

      button {
        padding: 1rem 2rem;
        font-weight: 600;
        box-shadow: var(--raise-2dp);
        transition: var(--raise-transition);
      }

      @media (max-width: 1199px) {
        form {
          display: flex;
          flex-direction: column;
        }
        form > * {
          margin: 0.5rem 0;
        }
      }
    `,
  ];

  override render() {
    return html`
      <h1>${msg(str`Contact`)}</h1>
      <p>${msg(str`To get in touch fill the form below`)}.</p>
      <form
        name="contact"
        method="post"
        netlifyhoneypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label class="screen-reader-text"
          >Don't fill this out if you're human: <input name="bot-field"
        /></label>
        <input
          type="text"
          name="name"
          placeholder="${msg(str`Name`)}"
          aria-label="${msg(str`Name`)}"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="${msg(str`Email`)}"
          aria-label="${msg(str`Email`)}"
          required
        />
        <textarea
          name="message"
          placeholder="${msg(str`Message...`)}"
          rows="7"
          aria-label="${msg(str`Message...`)}"
          required
        ></textarea>
        <div class="form-row">
          <img src="/images/asterisk.svg" height="10px" width="10px" alt="*" />
          ${msg(str`Required fields`)}
        </div>
        <div class="form-row"><button type="submit">${msg(str`Send Message`)}</button></div>
      </form>
    `;
  }
}
