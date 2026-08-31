import { RESOURCES } from './resources';

export interface CitationInfo {
  label: string;
  url: string;
}

export const CITATIONS: Record<string, CitationInfo> = {
  oh_const_art18_sec3: {
    label: 'Ohio Constitution, Article XVIII, Section 3 (Municipal Powers)',
    url: 'https://codes.ohio.gov/ohio-constitution/article-18',
  },
  charter_preamble: {
    label: 'Columbus City Charter, Preamble',
    url: RESOURCES.charter.href,
  },
  charter_adoption: {
    label: "Columbus City Charter, Editor's Note (adopted May 5, 1914)",
    url: RESOURCES.charter.href,
  },
  charter_sec235: {
    label: 'Columbus City Charter, Sec. 235 (When charter takes effect)',
    url: RESOURCES.charter.href,
  },
  charter_sec4: {
    label: 'Columbus City Charter, Sec. 4 (Council members)',
    url: RESOURCES.charter.href,
  },
  charter_sec4_1: {
    label: 'Columbus City Charter, Sec. 4-1 (Transition)',
    url: RESOURCES.charter.href,
  },
};
