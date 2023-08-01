class CardComponent extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');

    style.textContent = /* CSS */ `
      * {
        font-size: var(--font-size, 14px);
        margin: 0;
        padding: 0;
        font-weight: normal;
        box-sizing: inherit;
      }

      .container {
        width: 150px;
        border-radius: 3px;
        padding: 1rem;
        background-color: var(--link-card-bg-color);
        height: 100%;
        box-shadow: var(--link-card-shadow);
        transition: var(--raise-transition);
      }

      .container:hover {
        background-color: var(--link-card-bg-color-hover);
        box-shadow: var(--link-card-shadow-hover);
      }

      h1 {
        margin-bottom: .5rem;
        font-weight: 600;
        padding: 0;
      }

      a {
        color: var(--font-color);
        text-decoration: none;
      }

      img, ::slotted(svg) {
        margin-bottom: 1rem;
        border-radius: 3px;
        padding: 1rem;
        height: 110px;
        width: 110px;
      }
    `;

    shadowRoot.appendChild(style);

    const container = document.createElement('div');
    container.className = 'container';

    container.innerHTML = /* HTML */ `
      <a href="${this.href}" aria-label="${this.label}" target="_blank" rel="noopener noreferrer">
        <slot><optimized-img src="${this.src}" webp="${this.webp}" alt="${this.alt}"></optimized-img></slot>
        <h1>${this.cardTitle}</h1>
        <h2>${this.cardSubTitle}</h2>
      </a>
    `;

    shadowRoot.appendChild(container);
  }

  get alt() {
    return this.getAttribute('alt') || 'Demo';
  }

  get href() {
    return this.getAttribute('href') || '#';
  }

  // see https://github.com/noelmace/noelmace.com/commit/c8c2a33e for theme color
  get src() {
    return this.getAttribute('src') || '/images/question-mark-white.svg';
  }

  get webp() {
    return this.getAttribute('webp');
  }

  get colorScheme() {
    return this.getAttribute('color-scheme') || 'light';
  }

  get cardTitle() {
    return this.getAttribute('title') || 'Lorem Ispum';
  }

  get cardSubTitle() {
    return this.getAttribute('subtitle') || 'dolor sit amet';
  }

  get label() {
    return this.getAttribute('label') || 'Demo card';
  }
}

window.customElements.define('link-card', CardComponent);
