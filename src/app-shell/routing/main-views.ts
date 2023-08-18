import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {RoutingController} from './routing-controller.js';

@customElement('nmc-main-views')
export class AppMainViewsElement extends LitElement {
  static override styles = [
    css`
      @media screen {
        nmc-cv {
          max-width: 936px;
        }
      }
    `,
  ];

  private routing = new RoutingController(this, [
    {
      path: /^\/cv/,
      template: html`<nmc-cv></nmc-cv>`,
      loader: () => import('../../cv/cv.js'),
    },
    {
      // defining a default route is mandatory here as their isn't any navigation
      // fallback in case the current path doesn't match any route
      path: /.*/,
      template: html`<nmc-home></nmc-home>`,
      loader: () => import('../../home/home.js'),
    },
  ]);

  override render() {
    return this.routing.routeTemplate ?? html`<slot></slot>`;
  }
}
