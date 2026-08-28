import { RESOURCES } from './resources';

export interface CitationInfo {
  label: string;
  url: string;
}

export const CITATIONS: Record<string, CitationInfo> = {
  charter_preamble: {
    label: 'Columbus City Charter, Preamble',
    url: RESOURCES.charter.href,
  },
};
