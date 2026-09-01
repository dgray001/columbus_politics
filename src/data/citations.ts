import { RESOURCES } from './resources';

export interface CitationInfo {
  label: string;
  url: string;
}

export const CITATIONS: Record<string, CitationInfo> = {
  mayors_egger_1975: {
    label: 'Egger (ed.), Columbus Mayors (1975)',
    url: RESOURCES.mayors_egger_1975.href,
  },
  cml_historic_photographs: {
    label: "Columbus Metropolitan Library — Columbus in Historic Photographs",
    url: 'https://digital-collections.columbuslibrary.org/digital/collection/ohio',
  },
  ballotpedia_klein: {
    label: 'Ballotpedia — Zachary M. Klein',
    url: 'https://ballotpedia.org/Zachary_M._Klein',
  },
  city_attorney_columbus_gov: {
    label: 'City Attorney of Columbus — About',
    url: 'https://city-attorney.columbus.gov/aboutcityattorney.aspx',
  },
  wosu_lewis_auditor: {
    label: 'WOSU — Jacquelin Lewis chosen as city auditor',
    url: 'https://www.wosu.org/politics-government/2026-04-27/jacquelin-lewis-chosen-by-columbus-city-council-as-new-city-auditor',
  },
  bondbuyer_dorrian: {
    label: 'Bond Buyer — Hugh Dorrian retiring after 48 years',
    url: 'https://www.bondbuyer.com/news/columbus-ohio-city-auditor-hugh-dorrian-retiring-after-48-years-in-the-elected-office',
  },
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
  mayor_term_qualifications: {
    label: 'Columbus City Charter, Sec. 58 (Term and qualifications of mayor)',
    url: RESOURCES.charter.href,
  },
  attorney_term_qualifications: {
    label: 'Columbus City Charter, Sec. 66 (Election and qualifications)',
    url: RESOURCES.charter.href,
  },
  auditor_term_qualifications: {
    label: 'Columbus City Charter, Sec. 79 (Election and qualifications)',
    url: RESOURCES.charter.href,
  },
  mayor_council_seat: {
    label: "Columbus City Charter, Sec. 65 (Mayor's right in council)",
    url: RESOURCES.charter.href,
  },
  mayor_executive_powers: {
    label: 'Columbus City Charter, Sec. 57 (Executive and administrative powers)',
    url: RESOURCES.charter.href,
  },
  mayor_appoint_officers: {
    label: "Columbus City Charter, Sec. 60 (Mayor's power to appoint and remove officers)",
    url: RESOURCES.charter.href,
  },
  mayor_appoint_concurrence: {
    label: 'Columbus City Charter, Sec. 61 (Appointment and removal of employees)',
    url: RESOURCES.charter.href,
  },
  mayor_general_powers: {
    label: 'Columbus City Charter, Sec. 62 (General powers and duties of mayor)',
    url: RESOURCES.charter.href,
  },
  mayor_cabinet: {
    label: "Columbus City Charter, Sec. 62-1 (Mayor's cabinet)",
    url: RESOURCES.charter.href,
  },
  mayor_investigation: {
    label: "Columbus City Charter, Sec. 63 (Mayor's investigation)",
    url: RESOURCES.charter.href,
  },
  mayor_acting: {
    label: 'Columbus City Charter, Sec. 64 (Acting mayor)',
    url: RESOURCES.charter.href,
  },
  mayor_temporary_inability: {
    label: 'Columbus City Charter, Sec. 64-1 (Temporary inability)',
    url: RESOURCES.charter.href,
  },
  mayor_permanent_inability: {
    label: 'Columbus City Charter, Sec. 64-2 (Permanent inability)',
    url: RESOURCES.charter.href,
  },
  mayor_successor: {
    label: 'Columbus City Charter, Sec. 64-3 (Successor to mayor)',
    url: RESOURCES.charter.href,
  },
  attorney_powers: {
    label: 'Columbus City Charter, Sec. 67 (Powers and duties)',
    url: RESOURCES.charter.href,
  },
  attorney_prosecuting: {
    label: 'Columbus City Charter, Sec. 68 (Prosecuting attorney)',
    url: RESOURCES.charter.href,
  },
  attorney_representing: {
    label: 'Columbus City Charter, Sec. 69 (Representing city)',
    url: RESOURCES.charter.href,
  },
  attorney_opinions: {
    label: 'Columbus City Charter, Sec. 70 (Rendering opinions)',
    url: RESOURCES.charter.href,
  },
  attorney_temporary_inability: {
    label: 'Columbus City Charter, Sec. 78 (Temporary inability)',
    url: RESOURCES.charter.href,
  },
  attorney_permanent_inability: {
    label: 'Columbus City Charter, Sec. 78-1 (Permanent inability)',
    url: RESOURCES.charter.href,
  },
  attorney_successor: {
    label: 'Columbus City Charter, Sec. 78-2 (Successor to city attorney)',
    url: RESOURCES.charter.href,
  },
  auditor_powers: {
    label: 'Columbus City Charter, Sec. 80 (Powers and duties)',
    url: RESOURCES.charter.href,
  },
  auditor_accounts_forms: {
    label: 'Columbus City Charter, Sec. 81 (Accounts and forms)',
    url: RESOURCES.charter.href,
  },
  auditor_daily_reports: {
    label: 'Columbus City Charter, Sec. 82 (Daily reports; appropriations)',
    url: RESOURCES.charter.href,
  },
  auditor_audit: {
    label: "Columbus City Charter, Sec. 83 (Auditing officer's accounts)",
    url: RESOURCES.charter.href,
  },
  auditor_claims: {
    label: 'Columbus City Charter, Sec. 84 (Payment of claims)',
    url: RESOURCES.charter.href,
  },
  auditor_deputy: {
    label: 'Columbus City Charter, Sec. 86 (Deputy and assistants)',
    url: RESOURCES.charter.href,
  },
  auditor_temporary_inability: {
    label: 'Columbus City Charter, Sec. 87 (Temporary inability)',
    url: RESOURCES.charter.href,
  },
  auditor_permanent_inability: {
    label: 'Columbus City Charter, Sec. 87-1 (Permanent inability)',
    url: RESOURCES.charter.href,
  },
  auditor_successor: {
    label: 'Columbus City Charter, Sec. 87-2 (Successor to auditor)',
    url: RESOURCES.charter.href,
  },
};
