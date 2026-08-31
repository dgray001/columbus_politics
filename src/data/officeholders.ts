export interface OfficeholderPhoto {
  href: string;
  source_url: string;
  retrieved_date: string;
}

export interface OfficeholderEntry {
  name: string;
  start_year: number;
  end_year?: number;
  photo?: OfficeholderPhoto;
}

export type OfficeKey = 'mayor' | 'city_attorney' | 'city_auditor';

export const OFFICEHOLDERS: Record<OfficeKey, OfficeholderEntry[]> = {
  mayor: [
    { name: 'Placeholder Mayor A', start_year: 1990, end_year: 1994 },
    { name: 'Placeholder Mayor B', start_year: 1994, end_year: 1998 },
    { name: 'Placeholder Mayor C', start_year: 1998, end_year: 2002 },
    { name: 'Placeholder Mayor D', start_year: 2002, end_year: 2006 },
    { name: 'Placeholder Mayor E', start_year: 2006, end_year: 2010 },
    { name: 'Placeholder Mayor F', start_year: 2010, end_year: 2014 },
    { name: 'Placeholder Mayor G', start_year: 2014, end_year: 2018 },
    { name: 'Placeholder Mayor H', start_year: 2018, end_year: 2022 },
    { name: 'Placeholder Mayor I', start_year: 2022, end_year: 2026 },
    { name: 'Placeholder Mayor J', start_year: 2026 },
  ],
  city_attorney: [
    { name: 'Placeholder Attorney A', start_year: 1990, end_year: 1994 },
    { name: 'Placeholder Attorney B', start_year: 1994, end_year: 1998 },
    { name: 'Placeholder Attorney C', start_year: 1998, end_year: 2002 },
    { name: 'Placeholder Attorney D', start_year: 2002, end_year: 2006 },
    { name: 'Placeholder Attorney E', start_year: 2006, end_year: 2010 },
    { name: 'Placeholder Attorney F', start_year: 2010, end_year: 2014 },
    { name: 'Placeholder Attorney G', start_year: 2014, end_year: 2018 },
    { name: 'Placeholder Attorney H', start_year: 2018, end_year: 2022 },
    { name: 'Placeholder Attorney I', start_year: 2022, end_year: 2026 },
    { name: 'Placeholder Attorney J', start_year: 2026 },
  ],
  city_auditor: [
    { name: 'Placeholder Auditor A', start_year: 1990, end_year: 1994 },
    { name: 'Placeholder Auditor B', start_year: 1994, end_year: 1998 },
    { name: 'Placeholder Auditor C', start_year: 1998, end_year: 2002 },
    { name: 'Placeholder Auditor D', start_year: 2002, end_year: 2006 },
    { name: 'Placeholder Auditor E', start_year: 2006, end_year: 2010 },
    { name: 'Placeholder Auditor F', start_year: 2010, end_year: 2014 },
    { name: 'Placeholder Auditor G', start_year: 2014, end_year: 2018 },
    { name: 'Placeholder Auditor H', start_year: 2018, end_year: 2022 },
    { name: 'Placeholder Auditor I', start_year: 2022, end_year: 2026 },
    { name: 'Placeholder Auditor J', start_year: 2026 },
  ],
};
