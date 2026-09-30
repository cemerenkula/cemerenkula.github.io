// Edit this file to update the CV page.
// `period` is optional; entries without one are shown without dates.

export type CvEntry = {
  title: string;
  org: string;
  period?: string;
  location?: string;
  points?: string[];
  // Link to a project page on this site or an external URL.
  href?: string;
};

export const experience: CvEntry[] = [
  {
    title: 'Full Stack Software Engineer',
    org: 'Exairon',
    period: 'Jul 2025 – Present',
    location: 'Istanbul',
    points: [
      'Develop full stack web applications in JavaScript, with React on the frontend and Next.js for backend services.',
      'Ship fixes directly to client-facing environments to resolve critical production issues under tight timelines.',
    ],
  },
  {
    title: 'QA Engineer Intern',
    org: 'Octet Turkey',
    period: 'Aug 2024 – Jan 2025',
    location: 'Istanbul',
    points: [
      'Designed and ran automated test scripts with Java and Selenium.',
      'Identified and documented bugs in Jira.',
      'Worked with developers, business analysts and product owners to improve the experience of customers using the company’s financial systems.',
      'Took part in grooming meetings to refine the backlog.',
      'Queried the company’s PostgreSQL database to find data irregularities.',
    ],
  },
];

export const education: CvEntry[] = [
  {
    title: 'B.Sc. Computer Engineering',
    org: 'Marmara University',
    // TODO: confirm graduation year
    period: '2020 – 2026',
    location: 'Istanbul',
    points: ['Student clubs: Tango and Swing Club, Dansmar, Macsec'],
  },
  {
    title: 'Erasmus Exchange, Bioinformatics',
    org: 'Université Catholique de Lille',
    period: 'Jan 2024 – Jul 2024',
    location: 'Lille, France',
    points: [
      'Coursework: Applied Bioinformatics, Data Structures, Databases, Object-Oriented Programming',
    ],
  },
];

export const projects: CvEntry[] = [
  {
    title: 'CountryWeatherAPI',
    org: 'C#, .NET, PostgreSQL, Swagger, Postman',
    period: 'Summer 2024',
    href: '/projects/country-weather-api/',
    points: ['REST API that serves temperature and other weather data for given coordinates.'],
  },
  {
    title: 'Othello',
    org: 'Python',
    period: 'Fall 2024',
    href: '/projects/othello/',
    points: ['Othello with a minimax opponent and custom heuristics to improve its play.'],
  },
  {
    title: 'University Course Selection Program',
    org: 'Python, Java',
    period: 'Fall 2023',
    points: [
      'Course selection program with separate logins for students and teachers.',
      'Developed iteratively using Scrum.',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Languages',
    items: ['JavaScript', 'C#', 'C', 'Java', 'Python', 'SQL', 'Assembly (MIPS, ARM)'],
  },
  { group: 'Frameworks', items: ['React', 'Next.js', '.NET', 'Entity Framework Core', 'Unity'] },
  { group: 'Data & APIs', items: ['PostgreSQL', 'REST APIs', 'Swagger / OpenAPI', 'Postman'] },
  { group: 'Testing', items: ['Selenium', 'Jira'] },
  { group: 'Tools', items: ['Git', 'Docker'] },
];

export const interests = [
  'Hardware',
  'Networking',
  'Cyber security',
  'Game development',
  'Dancing',
  'Hiking',
  'Skiing',
  'Kitesurfing',
];

// Put a PDF at public/cv.pdf and set this to '/cv.pdf' to show a download button.
export const cvPdf: string | null = null;
