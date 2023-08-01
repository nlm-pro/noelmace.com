class OptimizedImgComponent extends HTMLElement {
  constructor() {
    super();

    this._supportedExtensions = {
      png: 'image/png',
      jpeg: 'image/jpeg',
      jpg: 'image/jpeg',
    };
  }

  get src() {
    return this.getAttribute('src');
  }

  get webp() {
    return this.getAttribute('webp');
  }

  get alt() {
    return this.getAttribute('alt');
  }

  get ariaLabel() {
    return this.getAttribute('aria-label');
  }

  get srcExtension() {
    return this.src.split('.').pop();
  }

  get srcType() {
    const match = Object.entries(this._supportedExtensions).find(([ext, type]) => this.srcExtension === ext);
    return match && match[1];
  }

  connectedCallback() {
    this.innerHTML =
      this.webp && Object.keys(this._supportedExtensions).includes(this.srcExtension)
        ? `
      <picture>
        <source srcset="${this.webp}" type="image/webp" />
        <source srcset="${this.src}" type="${this.srcType}" />
        <img src="${this.src}" alt="${this.alt}" />
      </picture>
    `
        : `<img src=${this.src} alt="${this.alt} aria-label="${this.ariaLabel}" />`;
  }
}

window.customElements.define('optimized-img', OptimizedImgComponent);
