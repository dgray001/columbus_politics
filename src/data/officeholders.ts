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

const RETRIEVED_DATE = '2026-08-31';

export const OFFICEHOLDERS: Record<OfficeKey, OfficeholderEntry[]> = {
  mayor: [
    { name: 'Jarvis W. Pike', start_year: 1816, end_year: 1817 },
    {
      name: 'John Kerr',
      start_year: 1818,
      end_year: 1820,
      photo: {
        href: 'images/people/mayors/john-kerr-ohio-politician-1818.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:John_Kerr.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    { name: 'Eli C. King', start_year: 1820, end_year: 1822 },
    { name: 'John Laughrey', start_year: 1823, end_year: 1823 },
    {
      name: 'William T. Martin',
      start_year: 1824,
      end_year: 1826,
      photo: {
        href: 'images/people/mayors/william-t-martin-mayor-1824.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:William_T._Martin.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    { name: 'James Robinson', start_year: 1827, end_year: 1827 },
    {
      name: 'William Long',
      start_year: 1827,
      end_year: 1833,
      photo: {
        href: 'images/people/mayors/william-long-mayor-1827.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:William_Long_(mayor).jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Philo H. Olmsted',
      start_year: 1833,
      end_year: 1833,
      photo: {
        href: 'images/people/mayors/philo-h-olmsted-1833.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Philo_Hopkins_Olmsted.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'John Brooks',
      start_year: 1834,
      end_year: 1835,
      photo: {
        href: 'images/people/mayors/john-brooks-mayor-1834.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:John_Brooks_(mayor).jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    { name: 'John Bailhache', start_year: 1835, end_year: 1835 },
    {
      name: 'Warren Jenkins',
      start_year: 1836,
      end_year: 1837,
      photo: {
        href: 'images/people/mayors/warren-jenkins-1836.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Warren_Jenkins.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Philo H. Olmsted',
      start_year: 1838,
      end_year: 1839,
      photo: {
        href: 'images/people/mayors/philo-h-olmsted-1838.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Philo_Hopkins_Olmsted.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'John G. Miller',
      start_year: 1840,
      end_year: 1841,
      photo: {
        href: 'images/people/mayors/john-guerrant-miller-1840.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:John_Guerrant_Miller.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    { name: 'Thomas Wood', start_year: 1841, end_year: 1841 },
    { name: 'Abram I. McDowell', start_year: 1842, end_year: 1842 },
    { name: 'Smithson E. Wright', start_year: 1843, end_year: 1844 },
    { name: 'Alexander Patton', start_year: 1845, end_year: 1845 },
    { name: 'Augustus S. Decker', start_year: 1846, end_year: 1846 },
    { name: 'Alexander Patton', start_year: 1847, end_year: 1849 },
    {
      name: 'Lorenzo English',
      start_year: 1850,
      end_year: 1861,
      photo: {
        href: 'images/people/mayors/lorenzo-english-1850.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Lorenzo_English.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Wray Thomas',
      start_year: 1861,
      end_year: 1864,
      photo: {
        href: 'images/people/mayors/wray-thomas-1861.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Wray_Thomas.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'James G. Bull',
      start_year: 1865,
      end_year: 1868,
      photo: {
        href: 'images/people/mayors/james-g-bull-1865.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:James_G._Bull.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'George W. Meeker',
      start_year: 1869,
      end_year: 1870,
      photo: {
        href: 'images/people/mayors/george-w-meeker-1869.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:George_W._Meeker.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'James G. Bull',
      start_year: 1871,
      end_year: 1874,
      photo: {
        href: 'images/people/mayors/james-g-bull-1871.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:James_G._Bull.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'John H. Heitmann',
      start_year: 1875,
      end_year: 1878,
      photo: {
        href: 'images/people/mayors/john-h-heitmann-1875.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:John_H._Heitman.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Gilbert G. Collins',
      start_year: 1879,
      end_year: 1880,
      photo: {
        href: 'images/people/mayors/gilbert-g-collins-1879.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Gilbert_G._Collins.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'George S. Peters',
      start_year: 1881,
      end_year: 1882,
      photo: {
        href: 'images/people/mayors/george-silas-peters-1881.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:George_Silas_Peters.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Charles C. Walcutt',
      start_year: 1883,
      end_year: 1886,
      photo: {
        href: 'images/people/mayors/charles-c-walcutt-1883.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Charles_C._Walcutt.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Philip H. Bruck',
      start_year: 1887,
      end_year: 1890,
      photo: {
        href: 'images/people/mayors/philip-h-bruck-1887.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Philip_H._Bruck.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'George J. Karb',
      start_year: 1891,
      end_year: 1894,
      photo: {
        href: 'images/people/mayors/george-j-karb-1891.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:George_J._Kark_002.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Cotton H. Allen',
      start_year: 1895,
      end_year: 1896,
      photo: {
        href: 'images/people/mayors/cotton-hayden-allen-1895.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Cotton_Hayden_Allen.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Samuel L. Black',
      start_year: 1897,
      end_year: 1899,
      photo: {
        href: 'images/people/mayors/samuel-luccock-black-1897.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Samuel_Luccock_Black_002.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Samuel J. Swartz',
      start_year: 1899,
      end_year: 1900,
      photo: {
        href: 'images/people/mayors/samuel-jackson-swartz-1899.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Samuel_Jackson_Swartz.png',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'John N. Hinkle',
      start_year: 1901,
      end_year: 1903,
      photo: {
        href: 'images/people/mayors/john-nelson-hinkle-1901.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:John_Nelson_Hinkle.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Robert H. Jeffrey',
      start_year: 1903,
      end_year: 1906,
      photo: {
        href: 'images/people/mayors/robert-h-jeffrey-1903.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Robert_H._Jeffrey.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'De Witt C. Badger',
      start_year: 1906,
      end_year: 1907,
      photo: {
        href: 'images/people/mayors/de-witt-c-badger-1906.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:De_Witt_Clinton_Badger002.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Charles A. Bond',
      start_year: 1908,
      end_year: 1909,
      photo: {
        href: 'images/people/mayors/charles-anson-bond-1908.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Charles_A._Bond.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'George S. Marshall',
      start_year: 1910,
      end_year: 1912,
      photo: {
        href: 'images/people/mayors/george-sidney-marshall-1910.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:George_S._Marshall.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'George J. Karb',
      start_year: 1912,
      end_year: 1920,
      photo: {
        href: 'images/people/mayors/george-j-karb-1912.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:George_J._Karb_004.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'James J. Thomas',
      start_year: 1920,
      end_year: 1932,
      photo: {
        href: 'images/people/mayors/james-john-thomas-1920.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:James_J._Thomas_002.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Henry W. Worley',
      start_year: 1932,
      end_year: 1935,
      photo: {
        href: 'images/people/mayors/henry-w-worley-1932.jpg',
        source_url: 'https://digital-collections.columbuslibrary.org/digital/collection/ohio/id/5973',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Myron B. Gessaman',
      start_year: 1936,
      end_year: 1939,
      photo: {
        href: 'images/people/mayors/myron-b-gessaman-1936.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Myron_B._Gessaman.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Floyd F. Green',
      start_year: 1940,
      end_year: 1943,
      photo: {
        href: 'images/people/mayors/floyd-f-green-1940.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Floyd_F._Green_002.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Jim Rhodes',
      start_year: 1944,
      end_year: 1952,
      photo: {
        href: 'images/people/mayors/jim-rhodes-1944.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:James_Allen_Rhodes_002.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Robert T. Oestreicher',
      start_year: 1953,
      end_year: 1953,
      photo: {
        href: 'images/people/mayors/robert-t-oestreicher-1953.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Robert_T._Oestreicher.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Jack Sensenbrenner',
      start_year: 1954,
      end_year: 1960,
      photo: {
        href: 'images/people/mayors/jack-sensenbrenner-1954.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Jack_Sensenbrenner.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Ralston Westlake',
      start_year: 1960,
      end_year: 1964,
      photo: {
        href: 'images/people/mayors/ralston-westlake-1960.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:W._Ralston_Westlake.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Jack Sensenbrenner',
      start_year: 1964,
      end_year: 1972,
      photo: {
        href: 'images/people/mayors/jack-sensenbrenner-1964.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Jack_Sensenbrenner.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Tom Moody',
      start_year: 1972,
      end_year: 1984,
      photo: {
        href: 'images/people/mayors/tom-moody-politician-1972.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Tom_Moody_002,_head_shot.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Buck Rinehart',
      start_year: 1984,
      end_year: 1992,
      photo: {
        href: 'images/people/mayors/buck-rinehart-1984.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Buck_Rinehart,_head_shot.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Greg Lashutka',
      start_year: 1992,
      end_year: 2000,
      photo: {
        href: 'images/people/mayors/greg-lashutka-1992.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Greg_Lashutka.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Michael B. Coleman',
      start_year: 2000,
      end_year: 2016,
      photo: {
        href: 'images/people/mayors/michael-b-coleman-2000.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Mbcolumbus.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Andrew Ginther',
      start_year: 2016,
      photo: {
        href: 'images/people/mayors/andrew-ginther-2016.jpg',
        source_url: 'https://commons.wikimedia.org/wiki/File:Columbus_Mayor_Andy_Ginther_31_Dec_2015.jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
  ],
  city_attorney: [
    {
      name: "Ron O'Brien",
      start_year: 1986,
      end_year: 1996,
      photo: {
        href: 'images/people/city-attorneys/ronald-j-obrien-1986.jpg',
        source_url: 'https://www.linkedin.com/in/o-brien-ron-95a1b635',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Janet E. Jackson',
      start_year: 1997,
      end_year: 2003,
      photo: {
        href: 'images/people/city-attorneys/janet-e-jackson-1997.jpg',
        source_url:
          'https://www.columbus.gov/Government/Mayors-Office/City-of-Columbus-Hall-of-Fame/Janet-E.-Jackson',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Richard C. Pfeiffer Jr.',
      start_year: 2003,
      end_year: 2017,
      photo: {
        href: 'images/people/city-attorneys/richard-c-pfeiffer-jr-2003.jpg',
        source_url:
          'https://commons.wikimedia.org/wiki/File:Richard_C._Pfeiffer,_Jr._-_15th_District_-_Ohio_Senate_113th_General_Assembly_1987-1988_-_DPLA_-_6e2895d536d5909d4a4e5cec2e14ff63_(page_15)_(cropped).jpg',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Zachary M. Klein',
      start_year: 2018,
      photo: {
        href: 'images/people/city-attorneys/zachary-m-klein-2018.jpg',
        source_url: 'https://city-attorney.columbus.gov/aboutca.aspx',
        retrieved_date: RETRIEVED_DATE,
      },
    },
  ],
  city_auditor: [
    {
      name: 'Hugh Dorrian',
      start_year: 1969,
      end_year: 2017,
      photo: {
        href: 'images/people/city-auditors/hugh-dorrian-1969.jpg',
        source_url: 'https://www.columbus.gov/Government/Mayors-Office/City-of-Columbus-Hall-of-Fame/Hugh-J.-Dorrian',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Megan Kilgore',
      start_year: 2018,
      end_year: 2026,
      photo: {
        href: 'images/people/city-auditors/megan-kilgore-2018.jpg',
        source_url: 'https://www.gfoa.org/bio/megan-kilgore',
        retrieved_date: RETRIEVED_DATE,
      },
    },
    {
      name: 'Jacquelin Lewis',
      start_year: 2026,
      photo: {
        href: 'images/people/city-auditors/jacquelin-lewis-2026.jpg',
        source_url: 'https://www.geaugagrowthpartnership.com/wp-content/uploads/2024/03/bio-Jacquelin-Lewis-1.pdf',
        retrieved_date: RETRIEVED_DATE,
      },
    },
  ],
};
