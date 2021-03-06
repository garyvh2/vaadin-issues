/**
 * Component Base Elements
 */
import { LitElement, html } from '@polymer/lit-element';


/**
 * Main Element Definition
 */
class contentView extends LitElement {
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
      <style>
        :host {
          font-family: 'Lato', sans-serif !important;
        }
        h1 {
          display: block;
          width: 100px;
          height: auto;
          position: absolute;
          margin: 0 auto;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
        }
      </style>
      <h1>Content</h1>
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

  /**
     * Called after element DOM has been rendered. Implement to
     * directly control rendered DOM. Typically this is not needed as `lit-html`
     * can be used in the `_render` method to set properties, attributes, and
     * event listeners. However, it is sometimes useful for calling methods on
     * rendered elements, like calling `focus()` on an element to focus it.
     * @param _props Current element properties
     * @param _changedProps Changing element properties
     * @param _prevProps Previous element properties
     */
  _didRender() {
  }
}
customElements.define('content-view', contentView);
