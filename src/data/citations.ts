import { RESOURCES } from './resources';

export interface CitationInfo {
  label: string;
  url: string;
}

export const CITATIONS: Record<string, CitationInfo> = {
  franklinton_founding_1797: {
    label: 'City of Columbus Hall of Fame — Lucas Sullivant',
    url: 'https://www.columbus.gov/Government/Mayors-Office/City-of-Columbus-Hall-of-Fame/Lucas-Sullivant',
  },
  columbus_founding_1812: {
    label: 'City of Columbus FY2025 Budget — Community Profile',
    url: RESOURCES.budget_community_profile.href,
  },
  columbus_charter_1834: {
    label: 'City of Columbus Annual Comprehensive Financial Report — The Reporting Entity',
    url: RESOURCES.cafr_reporting_entity.href,
  },
  oh_const_art18_sec3: {
    label: 'Ohio Constitution, Article XVIII, Section 3 (Municipal Powers)',
    url: 'https://codes.ohio.gov/ohio-constitution/section-18.3',
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
  charter_sec45: {
    label: 'Columbus City Charter, Sec. 45 (Charter amendments)',
    url: RESOURCES.charter.href,
  },
  charter_sec236: {
    label: 'Columbus City Charter, Sec. 236 (Charter Review Commission)',
    url: RESOURCES.charter.href,
  },
};
