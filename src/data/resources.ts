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
  budget_community_profile: {
    label: 'City of Columbus FY2025 Budget — Community Profile (PDF)',
    href: 'resources/columbus-budget-community-profile.pdf',
    description: 'Sourced from the City of Columbus FY2025 budget document',
    source_url: 'https://www.columbus.gov/files/sharedassets/city/v/1/finance/budget/2025/008-2025.pdf',
    retrieved_date: '2026-08-31',
  },
  cafr_reporting_entity: {
    label: 'City of Columbus Annual Comprehensive Financial Report — The Reporting Entity (PDF)',
    href: 'resources/columbus-cafr-reporting-entity.pdf',
    description: 'Sourced from the City of Columbus Annual Comprehensive Financial Report',
    source_url:
      'https://www.columbus.gov/files/sharedassets/city/v/1/city-auditor/acfr/accessible-acfr/pdfua-compliant-2002_cafr.pdf',
    retrieved_date: '2026-08-31',
  },
};
