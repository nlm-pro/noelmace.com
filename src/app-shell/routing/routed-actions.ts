import {LitElement, css, html} from 'lit';
import {RoutingController} from './routing-controller';
import {customElement} from 'lit/decorators.js';

@customElement('nmc-routed-actions')
export class AppRoutedActions extends LitElement {
  static override styles = [
    css`
      :host {
        display: var(--host-display, none);
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
    let hostDisplay = 'none';
    if (this.routing.routeTemplate) {
      hostDisplay = 'block'
    }
    this.style.setProperty('--host-display', hostDisplay);
    return this.routing.routeTemplate;
  }
}
