import {localized, msg, str} from '@lit/localize';
import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {buttonSyles} from '../shared/styles/button';

@customElement('nmc-download-button')
@localized()
export default class AppDownloadPdfButton extends LitElement {
  static override styles = [
    buttonSyles,
    css`
      .button {
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        height: calc(var(--header-content-height) - 4px);
        background-color: var(--light-on-primary);
        box-shadow: var(--raise-2dp);
        padding-inline: 10px;
        text-decoration: none;
      }

      .pdf {
        border: 2px solid #e1574c;
      }
    `,
  ];

  override render() {
    return html`<a
      href="./${msg(str`cv-en.pdf`)}"
      class="button pdf"
      download="cv-webdev-noelmace-${new Date().toLocaleDateString('sv-SE')}.pdf"
      >${msg(str`Download PDF`)}</a
    >`;
  }
}
