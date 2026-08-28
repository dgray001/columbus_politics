import { CbpElement } from '../cbp_element';
import { RESOURCES } from '../../data/resources';
import { siteBase } from '../../scripts/util';

import html from './resources.html';

import './resources.scss';

export class CbpResources extends CbpElement {
  private list!: HTMLUListElement;

  constructor() {
    super();
    this.html_string = html;
    this.configureElement('list');
  }

  protected override parsedCallback(): void {
    const base = siteBase();
    const inline_links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-resource]'));
    const inline_keys = new Set(inline_links.map((link) => link.dataset.resource ?? '').filter(Boolean));
    const extra_keys = (this.getAttribute('extra') ?? '')
      .split(',')
      .map((key) => key.trim())
      .filter(Boolean);
    for (const key of extra_keys) {
      if (inline_keys.has(key)) {
        console.warn(`cbp-resources: "${key}" is both referenced inline and listed in "extra"`);
      }
    }
    for (const link of inline_links) {
      const resource = RESOURCES[link.dataset.resource ?? ''];
      if (resource) {
        link.href = `${base}${resource.href}`;
      }
    }
    for (const key of new Set([...inline_keys, ...extra_keys])) {
      const resource = RESOURCES[key];
      if (!resource) {
        continue;
      }
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `${base}${resource.href}`;
      link.textContent = resource.label;
      item.appendChild(link);
      if (resource.description) {
        item.append(` — ${resource.description}`);
      }
      this.list.appendChild(item);
    }
  }
}

customElements.define('cbp-resources', CbpResources);

declare global {
  interface HTMLElementTagNameMap {
    'cbp-resources': CbpResources;
  }
}
