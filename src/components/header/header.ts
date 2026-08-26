import { CbpElement } from '../cbp_element';
import { PAGES, SITE_NAME } from '../../scripts/pages';
import type { PageInfo } from '../../scripts/pages';

import html from './header.html';

import './header.scss';

export class CbpHeader extends CbpElement {
  private title_el!: HTMLDivElement;
  private nav_links!: HTMLElement;
  private sidebar!: HTMLElement;
  private hamburger!: HTMLButtonElement;
  private overlay!: HTMLDivElement;

  private sidebar_open = false;

  constructor() {
    super();
    this.html_string = html;
    this.configureElement('title_el', 'title');
    this.configureElements('nav_links', 'sidebar', 'hamburger', 'overlay');
  }

  protected override parsedCallback(): void {
    this.title_el.textContent = SITE_NAME;
    const active_page = this.getAttribute('active');
    for (const page of Object.values(PAGES)) {
      this.nav_links.appendChild(this.createNavLink(page, active_page));
      this.sidebar.appendChild(this.createNavLink(page, active_page));
    }
    document.title = this.resolvePageLabel(active_page) ?? SITE_NAME;
    this.hamburger.addEventListener('click', () => {
      this.setSidebarOpen(!this.sidebar_open);
    });
    this.overlay.addEventListener('click', () => {
      this.setSidebarOpen(false);
    });
  }

  private resolvePageLabel(active_page: string | null): string | undefined {
    const page = Object.values(PAGES).find((page) => page.slug === active_page);
    const label = this.getAttribute('page-title') ?? page?.label;
    return label ? `${label} | ${SITE_NAME}` : undefined;
  }

  private createNavLink(page: PageInfo, active_page: string | null): HTMLAnchorElement {
    const link = document.createElement('a');
    link.classList.add('nav-link');
    link.textContent = page.label;
    link.href = `${page.slug}.html`;
    if (page.slug === active_page) {
      link.classList.add('current');
    }
    return link;
  }

  private setSidebarOpen(sidebar_open: boolean): void {
    this.sidebar_open = sidebar_open;
    this.classList.toggle('sidebar-open', this.sidebar_open);
    this.hamburger.setAttribute('aria-expanded', String(this.sidebar_open));
  }
}

customElements.define('cbp-header', CbpHeader);

declare global {
  interface HTMLElementTagNameMap {
    'cbp-header': CbpHeader;
  }
}
