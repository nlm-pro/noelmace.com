import './social';
import './contact-form';
import './book';
import {LitElement, css, html} from 'lit';
import {homeStyles} from './styles';
import {customElement} from 'lit/decorators.js';

@customElement('nmc-home')
export class HomeViewElement extends LitElement {
  static override styles = [
    homeStyles,
    css`
      :host {
        display: grid;
        grid-template-columns: 1fr 2fr;
      }

      section {
        border: 1px solid var(--border-color);
        padding: 2rem;
        text-align: center;
        box-shadow: none;
        background-color: var(--color-lvl1);
      }

      #contact {
        padding: 2rem;
      }

      nmc-contact-form {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      @media (min-width: 1200px) {
        #contact {
          grid-column-start: 2;
          grid-row-end: span 2;
        }
      }

      @media (max-width: 1199px) {
        :host {
          display: flex;
          flex-direction: column;
        }
        section {
          padding: 1rem 0;
        }
        #contact {
          padding: 2rem;
        }
      }
    `,
  ];
  override render() {
    return html`
      <section id="social">
        <nmc-social></nmc-social>
      </section>
      <section id="contact">
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        <nmc-contact-form></nmc-contact-form>
      </section>
      <section id="writings">
        <nmc-book></nmc-book>
      </section>
    `;
  }
}
