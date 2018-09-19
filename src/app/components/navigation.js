/**
 * Component Base Elements
 */
import { LitElement, html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin';

/**
 * Redux importings
 */
import { store } from '../app.store';
import { pushState } from '../@redux/routes/actions';

// eslint-disable-next-line
import { HOME, LOGIN, CONTENT } from '../app.location';
/**
 * Component Importings
 */
import '@vaadin/vaadin-button/vaadin-button';

/**
 * Main Element Definition
 */
class navigationComponent extends connect(store)(LitElement) {
  /**
     * Element properties mapping
     */
  static get properties() {
    return {};
  }

  /**
     * First time and re-render funtion
     */
  _render() {
    return html`
      <vaadin-button onclick="${() => this.navigate(LOGIN.toUrl())}">Login</vaadin-button>
      <vaadin-button onclick="${() => this.navigate(HOME.toUrl())}">Home</vaadin-button>
      <vaadin-button onclick="${() => this.navigate(CONTENT.toUrl())}">Content</vaadin-button>
      <slot></slot>
    `;
  }

  /**
     * Called after the element DOM is rendered for the first time.
     * Implement to perform tasks after first rendering like capturing a
     * reference to a static node which must be directly manipulated.
     * This should not be commonly needed. For tasks which should be performed
     * before first render, use the element constructor.
     */
  _firstRendered() {

  }

  navigate(path) {
    store.dispatch(pushState(path));
  }

  _stateChanged() {}
}
customElements.define('navigation-component', navigationComponent);
