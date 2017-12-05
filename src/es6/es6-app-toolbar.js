import { html } from 'lit-html';
import render from './lib/render';

class AppToolbar extends HTMLElement {
  static get is() {
    return 'es6-app-toolbar';
  }

  constructor() {
    super();
    render(this.template(), this);
  }

  template() {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
          height: 56px;
          padding: 0 24px;
          pointer-events: none;
          background-color: #626e8b;
        }

        :host ::slotted(*) {
          color: #fff;
          font-family: "Helvetica Neue", Helvetica, Arial, MyYuGothicM, YuGothic, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;      
        }
      </style>
      <slot></slot>
    `;
  }
}

window.customElements.define(AppToolbar.is, AppToolbar);
