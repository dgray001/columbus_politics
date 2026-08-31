export const SITE_NAME = 'Columbus Politics';

export interface SubpageInfo {
  slug: string;
  label: string;
}

export interface PageInfo {
  slug: string;
  label: string;
  subpages?: SubpageInfo[];
}

export const PAGES: Record<string, PageInfo> = {
  columbus: {
    slug: 'columbus',
    label: 'Columbus City',
    subpages: [
      { slug: 'elected-executives', label: 'Elected Executives' },
      { slug: 'city-council', label: 'City Council' },
      { slug: 'administration', label: 'Administration' },
      { slug: 'elections', label: 'Elections' },
    ],
  },
  franklin_county: { slug: 'franklin-county', label: 'Franklin County' },
  metro: { slug: 'metro', label: 'Columbus Metro' },
  ohio: { slug: 'ohio', label: 'Ohio' },
  special_districts: { slug: 'special-districts', label: 'Special Districts' },
};
