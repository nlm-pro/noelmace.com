import {LitElement, TemplateResult, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {until} from 'lit/directives/until.js';

export interface Route {
  path: RegExp;
  template: TemplateResult;
  loader?: () => Promise<{default: typeof LitElement}>;
}

export interface NavigationOptions {
  /**
   * History state object.
   */
  state?: unknown;
  /**
   * Replace the history state.
   */
  redirection?: boolean;
  /**
   * Don't push state to history.
   */
  skipLocationChange?: boolean;
  /**
   * Event which triggered the navigation.
   */
  event?: Event | null;
}

@customElement('router-outlet')
export class RouterOutletElement extends LitElement {
  private routes: Route[] = [
    {
      // defining a default route is mandatory as their isn't any navigation
      // fallback in case the current path doesn't match any route
      path: /.*/,
      template: html`<nmc-home></nmc-home>`,
      loader: () => import('../home/home.js'),
    },
  ];

  get currentPath() {
    return window.location.pathname || '/';
  }

  @state()
  private loadingTemplate: Promise<unknown> = Promise.resolve();

  override connectedCallback(): void {
    super.connectedCallback();
    this.navigate(this.currentPath, {skipLocationChange: true});
    window.addEventListener('popstate', (event) => {
      this.navigate(this.currentPath, {
        skipLocationChange: true,
        event,
        state: event.state,
      });
    });
  }

  override render() {
    return until(this.loadingTemplate, html`<slot></slot>`);
  }

  private navigate(path: string, options?: NavigationOptions): Promise<void> {
    const route = this.routes.find((route) => path.match(route.path));
    if (route) {
      if (route.loader) {
        this.loadingTemplate = route.loader().then(() => route.template);
      } else {
        this.loadingTemplate = Promise.resolve(route.template);
      }
      return this.loadingTemplate.then(() => {
        if (options?.redirection) {
          window.history.replaceState(options.state, '', path);
        } else if (!options?.skipLocationChange) {
          window.history.pushState(options?.state, '', path);
        }
      });
    }
    return Promise.reject();
  }
}
