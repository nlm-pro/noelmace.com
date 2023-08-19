import {LitElement, css, html} from 'lit';
import {RoutingController} from './routing-controller';
import {customElement} from 'lit/decorators.js';

@customElement('nmc-routed-actions')
export class AppRoutedActions extends LitElement {
  static override styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  private routing = new RoutingController(this, [
    {
      path: /^\/cv/,
      loader: () => import('../download-button.js'),
      template: html`<nmc-download-button></nmc-download-button>`,
    },
  ]);

  override render() {
    return this.routing.routeTemplate ?? ``;
  }
}
