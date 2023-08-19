import {
  LitElement,
  ReactiveController,
  ReactiveControllerHost,
  TemplateResult,
} from 'lit';
import {LitString} from '../../shared/lit-dev';
import {clickEventHandler} from './clickevent-handler';

export interface Route {
  path: RegExp;
  template: TemplateResult;
  loader?: () => Promise<{default: typeof LitElement}>;
}

export interface NavigationData {
  /**
   * History state object.
   */
  state?: unknown;

  /**
   * Event which triggered the navigation.
   */
  event?: Event | null;
}

export interface NavigationOptions extends NavigationData {
  /**
   * Replace the history state.
   */
  redirection?: boolean;
  /**
   * Don't push state to history.
   */
  skipLocationChange?: boolean;
}

// export type RouterListener = (path: string, options: NavigationOptions) => unknown;

interface RouterListener {
  (path: string, options?: NavigationData): Promise<void>;
}

class Router {
  private static instance: Router;
  private listeners: Set<RouterListener> = new Set();

  private constructor() {
    document.body.addEventListener(
      'click',
      clickEventHandler((path, event) => this.navigate(path, {event}))
    );
    window.addEventListener('popstate', (event) => {
      this.navigate(this.currentPath, {
        event,
        state: event.state,
      });
    });
  }

  public static getInstance(): Router {
    if (!Router.instance) {
      Router.instance = new Router();
    }
    return Router.instance;
  }

  public subscribe(listener: RouterListener) {
    this.listeners.add(listener);
  }

  public unsubscribe(listener: RouterListener) {
    this.listeners.delete(listener);
  }

  get currentPath() {
    return window.location.pathname || '/';
  }

  async navigate(path: string, options: NavigationOptions = {}): Promise<void> {
    const listenersLoading = [...this.listeners].map((listener) =>
      listener(path, {...options})
    );
    await Promise.allSettled(listenersLoading);
    if (options?.redirection) {
      window.history.replaceState(options.state, '', path);
    } else if (!options?.skipLocationChange) {
      window.history.pushState(options?.state, '', path);
    }
  }
}

export class RoutingController implements ReactiveController {
  host: ReactiveControllerHost;

  routeTemplate?: LitString;

  protected routes: Route[];

  get router() {
    return Router.getInstance();
  }

  constructor(host: ReactiveControllerHost, routes: Route[]) {
    (this.host = host).addController(this);
    this.routes = routes;
  }

  hostConnected() {
    this.router.subscribe(this.loadRoute);
    this.loadRoute(this.router.currentPath);
  }

  hostDisconnected() {
    this.router.unsubscribe(this.loadRoute);
  }

  loadRoute: RouterListener = (async (path: string) => {
    this.routeTemplate = undefined;
    // allowing to show a loading message or animation if necessary
    this.host.requestUpdate();
    const route = this.routes.find((route) => path.match(route.path));
    if (route) {
      if (route.loader) {
        await route.loader();
      }
    }
    this.routeTemplate = route?.template || '';
    this.host.requestUpdate();
  }).bind(this);
}
