class OptimizedImgComponent extends HTMLElement {
  private supportedExtensions = {
    png: 'image/png',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
  };

  get src() {
    return this.getAttribute('src');
  }

  get webp() {
    return this.getAttribute('webp');
  }

  get alt() {
    return this.getAttribute('alt');
  }

  get srcExtension() {
    return this.src?.split('.').pop() || '';
  }

  get srcType() {
    const match = Object.entries(this.supportedExtensions).find(([ext]) => this.srcExtension === ext);
    return match && match[1];
  }

  connectedCallback() {
    this.innerHTML =
      this.webp && Object.keys(this.supportedExtensions).includes(this.srcExtension)
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
