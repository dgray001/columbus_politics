import { CbpElement } from '../cbp_element';
import { OFFICEHOLDERS } from '../../data/officeholders';
import type { OfficeholderEntry, OfficeKey } from '../../data/officeholders';

import html from './officeholder_timeline.html';

import './officeholder_timeline.scss';

export class CbpOfficeholderTimeline extends CbpElement {
  private track!: HTMLDivElement;

  constructor() {
    super();
    this.html_string = html;
    this.configureElement('track');
  }

  protected override parsedCallback(): void {
    const office = this.getAttribute('office') as OfficeKey | null;
    const entries = office ? OFFICEHOLDERS[office] : undefined;
    if (!entries) {
      console.warn(`CbpOfficeholderTimeline: unknown office "${office}"`);
      return;
    }
    for (const entry of [...entries].reverse()) {
      this.track.appendChild(this.createCard(entry));
    }
    this.track.addEventListener('wheel', (event) => {
      if (this.track.scrollWidth <= this.track.clientWidth) {
        return;
      }
      event.preventDefault();
      this.track.scrollLeft += event.deltaY;
    });
  }

  private createCard(entry: OfficeholderEntry): HTMLElement {
    const card = document.createElement('div');
    card.classList.add('officeholder-card');

    const photo = document.createElement('div');
    photo.classList.add('officeholder-photo');
    if (entry.photo) {
      const base = document.querySelector('cbp-header')?.getAttribute('base') ?? '';
      const img = document.createElement('img');
      img.src = base + entry.photo.href;
      img.alt = entry.name;
      photo.appendChild(img);
    } else {
      photo.textContent = entry.name
        .split(' ')
        .map((part) => part[0])
        .join('');
    }
    card.appendChild(photo);

    const name = document.createElement('div');
    name.classList.add('officeholder-name');
    name.textContent = entry.name;
    card.appendChild(name);

    const years = document.createElement('div');
    years.classList.add('officeholder-years');
    years.textContent = `${entry.start_year}–${entry.end_year ?? 'present'}`;
    card.appendChild(years);

    return card;
  }
}

customElements.define('cbp-officeholder-timeline', CbpOfficeholderTimeline);

declare global {
  interface HTMLElementTagNameMap {
    'cbp-officeholder-timeline': CbpOfficeholderTimeline;
  }
}
