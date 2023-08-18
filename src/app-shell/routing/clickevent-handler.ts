export type PathUpdatedFunction = (path: string, event?: Event | null) => void;

/**
 * Emulate "normal" link behaviors on click.
 *
 * Inspired by the router helper from {@link https://github.com/Polymer/pwa-helpers/blob/v0.9.1/src/router.ts|polymer pwa-helper v0.9.1 - router.ts}
 *
 */
export const clickEventHandler =
  (pathUpdatedCallback: PathUpdatedFunction) =>
  (e: MouseEvent) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }

    // support Shadow DOM
    let anchor: HTMLAnchorElement | null | undefined = e.composedPath()[0] as HTMLAnchorElement | undefined ;

    if (!anchor) return;

    if (anchor.tagName !== "A") {
      anchor = anchor.closest("a");
      if (!anchor) {
        anchor = e.composedPath().find((target) => target instanceof Element && target.tagName === 'A') as HTMLAnchorElement | undefined;
      }
      if (!anchor) return;
    }

    if (
      anchor.hasAttribute("download") ||
      anchor.getAttribute("rel") === "external" ||
      anchor.getAttribute("target") === "_blank"
    ) {
      return;
    }

    const fullHref = anchor.href;

    if (!fullHref || fullHref.includes("mailto:")) {
      return;
    }

    if (!fullHref.startsWith(window.location.origin)) {
      return;
    }

    e.preventDefault();

    const hrefAttr = anchor.getAttribute("href");
    if (!hrefAttr) {
      return;
    }

    if (fullHref !== window.location.href) {
      let path = "";
      const url = new URL(fullHref);
      let href = hrefAttr;
      if (hrefAttr.startsWith("./")) {
        const previousPath = window.location.pathname
          .replace(new RegExp(`^/(.*)`), "$1")
          .replace(/(.*)\/$/, "$1");
        [href] = hrefAttr.split("#");
        path = previousPath + href.slice(1);

        // pathname == "/" for URLs with only an anchor
      } else if (!hrefAttr.startsWith("#")) {
        path = url.pathname;
      }

      pathUpdatedCallback(path + url.search + url.hash, e);
    }
  };
