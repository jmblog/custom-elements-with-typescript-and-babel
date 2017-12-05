import { render } from 'lit-html/lib/lit-extended';
import { TemplateResult } from 'lit-html';

export default (html: TemplateResult, component: Element) => {
  return render(html, component.shadowRoot || component.attachShadow({ mode: 'open' }));
};
