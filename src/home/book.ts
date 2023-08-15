import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {homeStyles} from './styles';

@customElement('nmc-book')
export class AppBookElement extends LitElement {
  static override styles = [
    homeStyles,
    css`
      .book-link {
        color: var(--font-color);
        text-decoration: none !important;
      }

      .book-container img {
        max-height: 200px;
      }

      @media (min-width: 1200px) {
        .book-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-items: center;
          margin: 1rem 0.5rem;
          gap: 1rem;
        }
      }
    `,
  ];
  override render() {
    return html`
      <h1>Livre (fr)</h1>
      <figure class="book-container">
        <img
          src="./images/eni-dpawm-cover_320.jpg"
          alt="développement et architecture des applications web modernes, éditions ENI"
          height="320"
        />
        <figcaption>
          <h2>
            <a
              href="https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523"
              target="_blank"
              rel="noopener noreferrer"
              >Développement et Architecture des Applications Web Modernes</a
            >
          </h2>
          <p>
            Redécouvrez en sept chapitres les fondamentaux de développement Web
            comme vous ne les aviez jamais abordés auparavant.
          </p>
        </figcaption>
      </figure>
    `;
  }
}
