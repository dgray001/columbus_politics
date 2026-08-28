export interface ResourceInfo {
  label: string;
  href: string;
  description?: string;
  source_url: string;
  retrieved_date: string;
}

export const RESOURCES: Record<string, ResourceInfo> = {
  charter: {
    label: 'Columbus City Charter (PDF)',
    href: 'resources/columbus-city-charter.pdf',
    description: 'Extracted from the official Code of Ordinances',
    source_url: 'https://library.municode.com/oh/columbus/codes/code_of_ordinances?nodeId=16219',
    retrieved_date: '2026-08-28',
  },
  ordinances: {
    label: 'Columbus Ordinances (PDF)',
    href: 'resources/columbus-ordinances.pdf',
    description: 'Titles 1-45, extracted from the official Code of Ordinances',
    source_url: 'https://library.municode.com/oh/columbus/codes/code_of_ordinances?nodeId=16219',
    retrieved_date: '2026-08-28',
  },
  code_of_ordinances: {
    label: 'Columbus Code of Ordinances (PDF, full)',
    href: 'resources/columbus-code-of-ordinances.pdf',
    source_url: 'https://library.municode.com/oh/columbus/codes/code_of_ordinances?nodeId=16219',
    retrieved_date: '2026-08-28',
  },
};
