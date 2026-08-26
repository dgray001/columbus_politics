export const SITE_NAME = 'Columbus Politics';

export interface PageInfo {
  slug: string;
  label: string;
}

export const PAGES: Record<string, PageInfo> = {
  columbus: { slug: 'columbus', label: 'Columbus City' },
  franklin_county: { slug: 'franklin-county', label: 'Franklin County' },
  metro: { slug: 'metro', label: 'Columbus Metro' },
  ohio: { slug: 'ohio', label: 'Ohio' },
  special_districts: { slug: 'special-districts', label: 'Special Districts' },
};
