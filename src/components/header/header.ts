import { CbpElement } from '../cbp_element';
import { PAGES, SITE_NAME } from '../../scripts/pages';
import type { PageInfo, SubpageInfo } from '../../scripts/pages';

import html from './header.html';

import './header.scss';

export class CbpHeader extends CbpElement {
  private title_el!: HTMLDivElement;
  private title_link!: HTMLAnchorElement;
  private nav_links!: HTMLElement;
  private sidebar!: HTMLElement;
  private hamburger!: HTMLButtonElement;
  private overlay!: HTMLDivElement;

  private sidebar_open = false;

  constructor() {
    super();
    this.html_string = html;
    this.configureElement('title_el', 'title');
    this.configureElements('title_link', 'nav_links', 'sidebar', 'hamburger', 'overlay');
  }

  protected override parsedCallback(): void {
    this.title_el.textContent = SITE_NAME;
    const base = this.getAttribute('base') ?? '';
    this.title_link.href = base || '.';
    const active_page = this.getAttribute('active');
    const active_sub = this.getAttribute('active-sub');
    for (const page of Object.values(PAGES)) {
      this.nav_links.appendChild(this.createRowNavItem(page, base, active_page, active_sub));
      this.sidebar.appendChild(this.createSidebarNavItem(page, base, active_page, active_sub));
    }
    const label = this.resolveActiveLabel(active_page, active_sub);
    document.title = label ? `${label} | ${SITE_NAME}` : SITE_NAME;
    const page_heading = document.getElementById('page-heading');
    if (page_heading && label) {
      page_heading.textContent = label;
    }
    this.hamburger.addEventListener('click', () => {
      this.setSidebarOpen(!this.sidebar_open);
    });
    this.overlay.addEventListener('click', () => {
      this.setSidebarOpen(false);
    });
  }

  private resolveActiveLabel(active_page: string | null, active_sub: string | null): string | undefined {
    const page = Object.values(PAGES).find((page) => page.slug === active_page);
    const sub = page?.subpages?.find((sub) => sub.slug === active_sub);
    const combined = page && sub ? `${page.label} ${sub.label}` : undefined;
    return this.getAttribute('page-title') ?? combined ?? page?.label ?? undefined;
  }

  private createLink(label: string, href: string, current: boolean): HTMLAnchorElement {
    const link = document.createElement('a');
    link.classList.add('nav-link');
    link.textContent = label;
    link.href = href;
    if (current) {
      link.classList.add('current');
    }
    return link;
  }

  private createRowNavItem(
    page: PageInfo,
    base: string,
    active_page: string | null,
    active_sub: string | null
  ): HTMLElement {
    const link = this.createLink(page.label, `${base}${page.slug}/`, page.slug === active_page);
    if (!page.subpages) {
      return link;
    }
    const item = document.createElement('div');
    item.classList.add('nav-item');
    link.classList.add('header-el');
    item.appendChild(link);
    const panel = document.createElement('div');
    panel.classList.add('dropdown-panel');
    for (const sub of page.subpages) {
      panel.appendChild(this.createSubLink(page, sub, base, active_sub));
    }
    item.appendChild(panel);
    return item;
  }

  private createSidebarNavItem(
    page: PageInfo,
    base: string,
    active_page: string | null,
    active_sub: string | null
  ): HTMLElement {
    const link = this.createLink(page.label, `${base}${page.slug}/`, page.slug === active_page);
    if (!page.subpages) {
      return link;
    }
    const item = document.createElement('div');
    item.classList.add('sidebar-item');
    item.appendChild(link);
    const sub_list = document.createElement('div');
    sub_list.classList.add('sidebar-sublist');
    for (const sub of page.subpages) {
      const sub_link = this.createSubLink(page, sub, base, active_sub);
      sub_link.classList.add('sub-link');
      sub_list.appendChild(sub_link);
    }
    item.appendChild(sub_list);
    return item;
  }

  private createSubLink(page: PageInfo, sub: SubpageInfo, base: string, active_sub: string | null): HTMLAnchorElement {
    return this.createLink(sub.label, `${base}${page.slug}/${sub.slug}/`, sub.slug === active_sub);
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
