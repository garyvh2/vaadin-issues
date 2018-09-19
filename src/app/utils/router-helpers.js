import { html } from '@polymer/lit-element';
import { Router } from '@vaadin/router';
import { changeLocation } from '../@redux/routes/actions';

let router;
/**
 * Initializes the router outlet taking as param a DOM node
 * @param {Node} outlet
 */
export function init(outlet) {
  router = new Router(outlet);
  window.router = router;
}
/**
 * Exposed method to include routes from any sector of the application
 * @param {Object[]} routes
 */
export function addRoutes(routes) {
  router.setRoutes(routes);
}
/**
 * Exposed method that allows getting all the registered routes
 */
export function getRoutes() {
  router.getRoutes();
}
/**
 * Method that allows triggerin the popstate event on window, to force the vaadin re-render
 */
export function popState() {
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export class Location {
  constructor(path, config, parent = null, action) {
    this.path = path;
    this.config = config;
    this.parent = parent;
    this.action = action;
  }

  toRoute() {
    const {
      path, config,
    } = this;
    return { path, ...config };
  }

  toUrl() {
    return this.parent ? this.parent.path + this.path : this.path;
  }

  toLink(name = '') {
    return html`
      <a href="${this.path}">${name}</a>
    `;
  }

  toRedirect(path) {
    return { path, redirect: this.toUrl() };
  }
}

window.router = router;


/**
 *
 * @param {*} store
 * @param {*} location
 */
function dispatchChange(store, {
  pathname, search, hash,
}) {
  store.dispatch(changeLocation({
    pathname, search, hash,
  }));
}


/**
 * Start History Listener
 * @param {*} history
 * @param {*} store
 */
export function startRouterListener(history, store) {
  dispatchChange(store, history.location);

  let lastLocation = '';
  history.listen((location) => {
    if (lastLocation !== location.pathname) {
      lastLocation = location.pathname;
      dispatchChange(store, location);
    }
  });
}
