import { CbpElement } from '../cbp_element';
import { CITATIONS } from '../../data/citations';
import type { CitationInfo } from '../../data/citations';
import { siteBase } from '../../scripts/util';

import html from './citations.html';

import './citations.scss';

function citationHref(citation: CitationInfo, base: string): string {
  return citation.url.startsWith('http') ? citation.url : `${base}${citation.url}`;
}

export class CbpCitations extends CbpElement {
  private list!: HTMLOListElement;

  constructor() {
    super();
    this.html_string = html;
    this.configureElement('list');
  }

  protected override parsedCallback(): void {
    const base = siteBase();
    const inline_links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-citation]'));
    const inline_keys = new Set(inline_links.map((link) => link.dataset.citation ?? '').filter(Boolean));
    const extra_keys = (this.getAttribute('extra') ?? '')
      .split(',')
      .map((key) => key.trim())
      .filter(Boolean);
    for (const key of extra_keys) {
      if (inline_keys.has(key)) {
        console.warn(`cbp-citations: "${key}" is both referenced inline and listed in "extra"`);
      }
    }
    for (const link of inline_links) {
      const citation = CITATIONS[link.dataset.citation ?? ''];
      if (citation) {
        link.href = citationHref(citation, base);
      }
    }
    for (const key of new Set([...inline_keys, ...extra_keys])) {
      const citation = CITATIONS[key];
      if (!citation) {
        continue;
      }
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = citationHref(citation, base);
      link.textContent = citation.label;
      item.appendChild(link);
      this.list.appendChild(item);
    }
  }
}

customElements.define('cbp-citations', CbpCitations);

declare global {
  interface HTMLElementTagNameMap {
    'cbp-citations': CbpCitations;
  }
}
