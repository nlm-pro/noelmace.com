import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('optimized-img')
export class OptimizedImgComponent extends LitElement {
  private readonly supportedExtensions = {
    png: 'image/png',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
  };

  @property()
  src: string = '';

  @property()
  webp: string = '';

  @property()
  alt: string = '';

  get srcExtension() {
    return this.src?.split('.').pop() || '';
  }

  get srcType() {
    const match = Object.entries(this.supportedExtensions).find(
      ([ext]) => this.srcExtension === ext
    );
    return match && match[1];
  }

  override render() {
    return this.webp &&
      Object.keys(this.supportedExtensions).includes(this.srcExtension)
      ? html`<picture>
          <source srcset="${this.webp}" type="image/webp" />
          <source srcset="${this.src}" type="${this.srcType}" />
          <img src="${this.src}" alt="${this.alt}" />
        </picture>`
      : html`<img src=${this.src} alt="${this.alt} aria-label="${this.ariaLabel}" />`;
  }
}
