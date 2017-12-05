import { html } from 'lit-html';
import render from './lib/render';

class AppTitle extends HTMLElement {
  private version: string;

  static get is() {
    return 'ts-app-title';
  }

  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.version = '0.0.0';
  }

  public attributeChangedCallback(attrName: string, _oldVal: string, newVal: string) {
    this[attrName] = newVal;
    render(this.template(), this);
  }

  private template() {
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
