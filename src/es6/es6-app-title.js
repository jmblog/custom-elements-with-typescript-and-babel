import { html } from 'lit-html';
import render from './lib/render';

class AppTitle extends HTMLElement {
  static get is() {
    return 'es6-app-title';
  }

  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.version = '0.0.0';
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this[attrName] = newVal;
    render(this.template(), this);
  }

  template() {
    return html`
      <style>
        :host {
          font-size: 20px;
          display: flex;
          flex: 1;
        }

        .version {
          display: inline-block;
          margin-left: 1em;
          font-size: 12px;
          height: 24px;
          line-height: calc(24px + 1em / 2);
        }
      </style>

      <div>
        <slot></slot>
        <span class="version">v${this.version}</span>
      </div>
    `;
  }
}

window.customElements.define(AppTitle.is, AppTitle);
