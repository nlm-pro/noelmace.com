import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';

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
  webp?: string;

  @property()
  alt?: string;

  @property({type: Number})
  height?: number;

  @property({type: Number})
  width?: number;

  @property()
  ratio?: string;

  private get ratioStyle() {
    let ratio = this.ratio;
    if (!this.ratio && this.height !== undefined && this.width !== undefined) {
      ratio = `${Math.floor(this.width * 1000 / this.height) / 1000} / 1`
    }
    return ratio && `aspect-ratio: ${ratio}`;
  }

  get srcExtension() {
    return this.src?.split('.').pop() || '';
  }

  get srcType() {
    const match = Object.entries(this.supportedExtensions).find(
      ([ext]) => this.srcExtension === ext
    );
    return match && match[1];
  }

  override createRenderRoot() {
    return this;
  }

  override render() {
    return this.webp &&
      Object.keys(this.supportedExtensions).includes(this.srcExtension)
      ? html`<picture
          height=${ifDefined(this.height)}
          width=${ifDefined(this.width)}
          style=${ifDefined(this.ratioStyle)}
        >
          <source srcset="${this.webp}" type="image/webp" />
          <source srcset="${this.src}" type="${this.srcType!}" />
          <img src="${this.src}" alt="${ifDefined(this.alt)}" />
        </picture>`
      : html`<img
          src=${this.src}
          alt="${ifDefined(this.alt)}"
          aria-label=${ifDefined(this.ariaLabel ?? undefined)}
          height=${ifDefined(this.height)}
          width=${ifDefined(this.width)}
          style=${ifDefined(this.ratioStyle)}
        />`;
  }
}
